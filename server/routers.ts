import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { ADMIN_COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { publicProcedure, router } from "./_core/trpc";
import {
  countAdminAccounts,
  createAdminAccount,
  createPost,
  deletePost,
  getAllPosts,
  getAdminById,
  getPostById,
  getPostBySlug,
  getPublishedPosts,
  updatePost,
  verifyAdminPassword,
} from "./db";
import { SignJWT, jwtVerify } from "jose";

// ─── JWT helpers for admin session ─────────────────────────────────────────────
const ADMIN_JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ? `admin_${process.env.JWT_SECRET}` : "admin_fallback_secret_change_me"
);

async function signAdminToken(adminId: number): Promise<string> {
  return new SignJWT({ adminId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(ADMIN_JWT_SECRET);
}

async function verifyAdminToken(token: string): Promise<{ adminId: number } | null> {
  try {
    const { payload } = await jwtVerify(token, ADMIN_JWT_SECRET);
    return { adminId: payload.adminId as number };
  } catch {
    return null;
  }
}

// Blog admin guard using our own admin cookie (independent of Manus OAuth)
const blogAdminProcedure = publicProcedure.use(async ({ ctx, next }) => {
  const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
  if (!token) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Connexion admin requise." });
  }
  const payload = await verifyAdminToken(token);
  if (!payload) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Session expirée. Reconnectez-vous." });
  }
  const admin = await getAdminById(payload.adminId);
  if (!admin) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Compte admin introuvable." });
  }
  return next({ ctx: { ...ctx, adminUser: admin } });
});

// Slug generator
function toSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 100);
}

export const appRouter = router({
  // ─── Admin auth (email + password) ───────────────
  adminAuth: router({
    // Check current admin session
    me: publicProcedure.query(async ({ ctx }) => {
      const token = ctx.req.cookies?.[ADMIN_COOKIE_NAME];
      if (!token) return null;
      const payload = await verifyAdminToken(token);
      if (!payload) return null;
      const admin = await getAdminById(payload.adminId);
      if (!admin) return null;
      return { id: admin.id, email: admin.email, name: admin.name };
    }),

    // Login with email + password
    login: publicProcedure
      .input(z.object({ email: z.string().email(), password: z.string().min(1) }))
      .mutation(async ({ input, ctx }) => {
        const admin = await verifyAdminPassword(input.email, input.password);
        if (!admin) {
          throw new TRPCError({ code: "UNAUTHORIZED", message: "Email ou mot de passe incorrect." });
        }
        const token = await signAdminToken(admin.id);
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(ADMIN_COOKIE_NAME, token, {
          ...cookieOptions,
          maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        });
        return { id: admin.id, email: admin.email, name: admin.name };
      }),

    // Logout
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(ADMIN_COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    }),

    // Setup first admin account (only works when no admin account exists)
    setup: publicProcedure
      .input(z.object({
        email: z.string().email(),
        password: z.string().min(8, "Le mot de passe doit faire au moins 8 caractères"),
        name: z.string().min(2),
        setupKey: z.string(),
      }))
      .mutation(async ({ input }) => {
        // Prevent setup if accounts already exist
        const count = await countAdminAccounts();
        if (count > 0) {
          throw new TRPCError({ code: "FORBIDDEN", message: "Un compte admin existe déjà." });
        }
        // Verify setup key against ADMIN_SETUP_KEY env variable
        const expectedKey = process.env.ADMIN_SETUP_KEY ?? "";
        if (!expectedKey || input.setupKey !== expectedKey) {
          throw new TRPCError({ code: "UNAUTHORIZED", message: "Clé de configuration incorrecte." });
        }
        const admin = await createAdminAccount({
          email: input.email,
          password: input.password,
          name: input.name,
        });
        return { success: true, email: admin?.email };
      }),
  }),

  blog: router({
    // Public: list published posts
    list: publicProcedure.query(async () => {
      return getPublishedPosts();
    }),

    // Public: get single post by slug
    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const post = await getPostBySlug(input.slug);
        if (!post) throw new TRPCError({ code: "NOT_FOUND", message: "Article introuvable." });
        return post;
      }),

    // Admin: list all posts (published + drafts)
    adminList: blogAdminProcedure.query(async () => {
      return getAllPosts();
    }),

    // Admin: get post by id (for editing)
    adminById: blogAdminProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const post = await getPostById(input.id);
        if (!post) throw new TRPCError({ code: "NOT_FOUND", message: "Article introuvable." });
        return post;
      }),

    // Admin: create post
    create: blogAdminProcedure
      .input(
        z.object({
          title: z.string().min(3).max(255),
          content: z.string().min(10),
          excerpt: z.string().optional(),
          category: z.string().optional(),
          coverImage: z.string().optional(),
          published: z.boolean().default(false),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const slug = toSlug(input.title);
        const post = await createPost({
          title: input.title,
          slug,
          content: input.content,
          excerpt: input.excerpt ?? null,
          category: input.category ?? null,
          coverImage: input.coverImage ?? null,
          published: input.published,
          authorId: ctx.adminUser.id,
          publishedAt: input.published ? new Date() : null,
        });
        return post;
      }),

    // Admin: update post
    update: blogAdminProcedure
      .input(
        z.object({
          id: z.number(),
          title: z.string().min(3).max(255).optional(),
          content: z.string().min(10).optional(),
          excerpt: z.string().optional(),
          category: z.string().optional(),
          coverImage: z.string().optional(),
          published: z.boolean().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        const existing = await getPostById(id);
        if (!existing) throw new TRPCError({ code: "NOT_FOUND" });

        const updateData: Record<string, unknown> = { ...data };
        if (data.title) updateData.slug = toSlug(data.title);
        if (data.published && !existing.published) {
          updateData.publishedAt = new Date();
        }

        return updatePost(id, updateData as Parameters<typeof updatePost>[1]);
      }),

    // Admin: delete post
    delete: blogAdminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deletePost(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
