import { z } from "zod";
import { SignJWT, jwtVerify } from "jose";
import { TRPCError } from "@trpc/server";
import { router, publicProcedure } from "./_core/trpc";
import { ENV } from "./_core/env";
import { getSessionCookieOptions } from "./_core/cookies";
import {
  countAdminAccounts,
  createAdminAccount,
  createPost,
  deleteAdminAccount,
  deletePost,
  getAdminById,
  getAllAdminAccounts,
  getAllPosts,
  getPostById,
  getPostBySlug,
  getPublishedPosts,
  updatePost,
  verifyAdminPassword,
} from "./db";
import type { TrpcContext } from "./_core/context";

const ADMIN_COOKIE_NAME = "ea_admin_session";

const jwtSecret = () => new TextEncoder().encode(ENV.cookieSecret);

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

function cleanAdmin(admin: NonNullable<Awaited<ReturnType<typeof getAdminById>>>) {
  return {
    id: admin.id,
    email: admin.email,
    name: admin.name,
    createdAt: admin.createdAt,
    updatedAt: admin.updatedAt,
  };
}

async function getCurrentAdmin(ctx: TrpcContext) {
  const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];

  if (!token) {
    return null;
  }

  try {
    const verified = await jwtVerify(token, jwtSecret());
    const adminId = Number(verified.payload.adminId);

    if (!adminId || Number.isNaN(adminId)) {
      return null;
    }

    const admin = await getAdminById(adminId);
    return admin ?? null;
  } catch {
    return null;
  }
}

async function requireAdmin(ctx: TrpcContext) {
  const admin = await getCurrentAdmin(ctx);

  if (!admin) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Connexion admin requise.",
    });
  }

  return admin;
}

const blogInput = z.object({
  title: z.string().min(1, "Le titre est obligatoire."),
  content: z.string().min(1, "Le contenu est obligatoire."),
  excerpt: z.string().optional(),
  category: z.string().optional(),
  coverImage: z.string().optional(),
  published: z.boolean().default(false),
});

export const appRouter = router({
  adminAuth: router({
    setup: publicProcedure
      .input(
        z.object({
          email: z.string().email("Adresse email invalide."),
          password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères."),
          name: z.string().min(1, "Le nom est obligatoire."),
          setupKey: z.string().min(1, "La clé de configuration est obligatoire."),
        })
      )
      .mutation(async ({ input }) => {
        const expectedKey = ENV.adminSetupKey.trim();
        const receivedKey = input.setupKey.trim();

        if (!expectedKey) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "ADMIN_SETUP_KEY n'est pas configurée côté serveur.",
          });
        }

        if (receivedKey !== expectedKey) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Clé de configuration incorrecte.",
          });
        }

        const existingAdmins = await countAdminAccounts();

        if (existingAdmins > 0) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Un administrateur existe déjà.",
          });
        }

        const admin = await createAdminAccount({
          email: input.email,
          password: input.password,
          name: input.name,
        });

        if (!admin) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Impossible de créer le compte admin.",
          });
        }

        return cleanAdmin(admin);
      }),

    login: publicProcedure
      .input(
        z.object({
          email: z.string().email("Adresse email invalide."),
          password: z.string().min(1, "Mot de passe obligatoire."),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const admin = await verifyAdminPassword(input.email, input.password);

        if (!admin) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Identifiants admin incorrects.",
          });
        }

        const token = await new SignJWT({ adminId: admin.id })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("7d")
          .sign(jwtSecret());

        ctx.res.cookie(ADMIN_COOKIE_NAME, token, {
          ...getSessionCookieOptions(ctx.req),
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return cleanAdmin(admin);
      }),

    logout: publicProcedure.mutation(async ({ ctx }) => {
      ctx.res.clearCookie(ADMIN_COOKIE_NAME, getSessionCookieOptions(ctx.req));
      return { success: true };
    }),

    me: publicProcedure.query(async ({ ctx }) => {
      const admin = await getCurrentAdmin(ctx);
      return admin ? cleanAdmin(admin) : null;
    }),

    listAdmins: publicProcedure.query(async ({ ctx }) => {
      await requireAdmin(ctx);
      const admins = await getAllAdminAccounts();
      return admins.map(cleanAdmin);
    }),

    createAdmin: publicProcedure
      .input(
        z.object({
          email: z.string().email("Adresse email invalide."),
          password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères."),
          name: z.string().min(1, "Le nom est obligatoire."),
        })
      )
      .mutation(async ({ input, ctx }) => {
        await requireAdmin(ctx);

        const admin = await createAdminAccount({
          email: input.email,
          password: input.password,
          name: input.name,
        });

        if (!admin) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Impossible de créer le compte admin.",
          });
        }

        return cleanAdmin(admin);
      }),

    deleteAdmin: publicProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input, ctx }) => {
        const currentAdmin = await requireAdmin(ctx);

        if (currentAdmin.id === input.id) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Vous ne pouvez pas supprimer votre propre compte.",
          });
        }

        await deleteAdminAccount(input.id);
        return { success: true };
      }),
  }),

  blog: router({
    list: publicProcedure.query(async () => {
      return getPublishedPosts();
    }),

    bySlug: publicProcedure
      .input(z.object({ slug: z.string().min(1) }))
      .query(async ({ input }) => {
        const post = await getPostBySlug(input.slug);

        if (!post) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Article introuvable.",
          });
        }

        return post;
      }),

    adminList: publicProcedure.query(async ({ ctx }) => {
      await requireAdmin(ctx);
      return getAllPosts();
    }),

    adminById: publicProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .query(async ({ input, ctx }) => {
        await requireAdmin(ctx);

        const post = await getPostById(input.id);

        if (!post) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Article introuvable.",
          });
        }

        return post;
      }),

    create: publicProcedure.input(blogInput).mutation(async ({ input, ctx }) => {
      const admin = await requireAdmin(ctx);
      const slug = slugify(input.title);

      if (!slug) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Le titre ne permet pas de générer une URL valide.",
        });
      }

      const post = await createPost({
        title: input.title,
        slug,
        content: input.content,
        excerpt: input.excerpt || null,
        category: input.category || null,
        coverImage: input.coverImage || null,
        published: input.published,
        publishedAt: input.published ? new Date() : null,
        authorId: admin.id,
      });

      return post;
    }),

    update: publicProcedure
      .input(
        blogInput.extend({
          id: z.number().int().positive(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        await requireAdmin(ctx);

        const existingPost = await getPostById(input.id);

        if (!existingPost) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Article introuvable.",
          });
        }

        const nextSlug = slugify(input.title);

        if (!nextSlug) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Le titre ne permet pas de générer une URL valide.",
          });
        }

        const publishedAt =
          input.published && !existingPost.publishedAt
            ? new Date()
            : input.published
              ? existingPost.publishedAt
              : null;

        const post = await updatePost(input.id, {
          title: input.title,
          slug: nextSlug,
          content: input.content,
          excerpt: input.excerpt || null,
          category: input.category || null,
          coverImage: input.coverImage || null,
          published: input.published,
          publishedAt,
        });

        return post;
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input, ctx }) => {
        await requireAdmin(ctx);
        await deletePost(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;