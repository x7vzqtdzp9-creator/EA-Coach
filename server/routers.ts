import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt";

export const adminRouter = router({
  setup: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string().min(1),
        setupKey: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // 🔐 Récupération et nettoyage des clés
      const expectedKey = process.env.ADMIN_SETUP_KEY?.trim() ?? "";
      const receivedKey = input.setupKey.trim();

      // ❌ Vérification clé
      if (!expectedKey || receivedKey !== expectedKey) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Clé de configuration incorrecte.",
        });
      }

      // 🔍 Vérifie si un admin existe déjà
      const existingAdmin = await ctx.db.user.findFirst({
        where: { role: "ADMIN" },
      });

      if (existingAdmin) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Un administrateur existe déjà.",
        });
      }

      // 🔐 Hash du mot de passe
      const hashedPassword = await bcrypt.hash(input.password, 10);

      // 👤 Création admin
      const admin = await ctx.db.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
          name: input.name,
          role: "ADMIN",
        },
      });

      return {
        success: true,
        adminId: admin.id,
      };
    }),
});