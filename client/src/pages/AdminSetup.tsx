import { useState } from "react";
import { useLocation, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import {
  KeyRound,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

export default function AdminSetup() {
  const [, navigate] = useLocation();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    setupKey: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const setupMutation = trpc.admin.setup.useMutation({
    onSuccess: () => {
      toast.success("Compte administrateur créé");
      navigate("/admin/blog");
    },
    onError: (error) => {
      toast.error(error.message || "Erreur lors de la création");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.email.trim() ||
      !form.password.trim() ||
      !form.name.trim() ||
      !form.setupKey.trim()
    ) {
      toast.error("Tous les champs sont obligatoires.");
      return;
    }

    setupMutation.mutate({
      email: form.email.trim(),
      password: form.password,
      name: form.name.trim(),
      setupKey: form.setupKey.trim(),
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-16">
      <section className="w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="h-14 w-14 rounded-2xl bg-blue-500/20 border border-blue-300/20 flex items-center justify-center">
              <ShieldCheck className="h-7 w-7 text-blue-300" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold tracking-tight">
              Création admin
            </h1>
            <p className="mt-3 text-sm text-slate-300">
              Configurez votre premier compte administrateur.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nom */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Nom
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/10 pl-12 pr-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-blue-300/60 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/10 pl-12 pr-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-blue-300/60 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="admin@email.com"
                />
              </div>
            </div>

            {/* Mot de passe avec visibilité */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Mot de passe
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/10 pl-12 pr-12 py-3 text-white placeholder:text-slate-400 outline-none focus:border-blue-300/60 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Mot de passe"
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Setup key */}
            <div>
              <label className="block text-sm font-medium text-slate-200 mb-2">
                Clé de configuration
              </label>
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={form.setupKey}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      setupKey: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/10 pl-12 pr-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-blue-300/60 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="ADMIN_SETUP_KEY"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={setupMutation.isPending}
              className="w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {setupMutation.isPending ? "Création..." : "Créer le compte"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/admin/login"
              className="text-sm text-slate-300 hover:text-white transition"
            >
              Déjà un compte ? Se connecter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}