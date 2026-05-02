import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { KeyRound, User, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
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
  const [done, setDone] = useState(false);

  const setupMutation = trpc.adminAuth.setup.useMutation({
    onSuccess: (data) => {
      setDone(true);
      toast.success(`Compte admin créé pour ${data.email}`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setupMutation.mutate(form);
  };

  if (done) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.18 0.055 250)" }}
      >
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 border border-[oklch(0.72_0.10_78)] flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-[oklch(0.72_0.10_78)]" size={28} />
          </div>
          <h2 className="font-display text-white text-2xl mb-3">Compte créé avec succès</h2>
          <p className="font-body text-white/60 mb-8" style={{ fontSize: "0.95rem" }}>
            Vous pouvez maintenant vous connecter à l'espace admin avec vos identifiants.
          </p>
          <button
            onClick={() => navigate("/admin/login")}
            className="font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] px-8 py-4 transition-all duration-300"
            style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
          >
            SE CONNECTER
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "oklch(0.18 0.055 250)" }}
    >
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex flex-col items-center gap-1">
            <span
              className="font-display text-white font-bold"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.02em", lineHeight: 1 }}
            >
              EA
            </span>
            <span
              className="font-nav text-[oklch(0.72_0.10_78)] font-semibold"
              style={{ fontSize: "0.65rem", letterSpacing: "0.35em" }}
            >
              COACH
            </span>
          </Link>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/20" />
            <span className="font-nav text-white/50" style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}>
              CONFIGURATION INITIALE
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </div>

        {/* Card */}
        <div
          className="p-8 border border-white/10"
          style={{ background: "oklch(0.22 0.06 250 / 0.8)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border border-[oklch(0.72_0.10_78)]/40 flex items-center justify-center">
              <KeyRound className="text-[oklch(0.72_0.10_78)]" size={16} />
            </div>
            <div>
              <h1 className="font-display text-white" style={{ fontSize: "1.3rem", fontWeight: 500 }}>
                Créer le compte admin
              </h1>
              <p className="font-body text-white/40" style={{ fontSize: "0.8rem" }}>
                Configuration unique — disponible une seule fois
              </p>
            </div>
          </div>

          <div className="bg-[oklch(0.72_0.10_78)]/10 border border-[oklch(0.72_0.10_78)]/30 p-4 mb-6">
            <p className="font-body text-white/70" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>
              La <strong className="text-white">clé de configuration</strong> est la valeur du secret <code className="text-[oklch(0.72_0.10_78)]">ADMIN_SETUP_KEY</code> que vous avez défini dans les Secrets du projet (panneau Settings).
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-nav text-white/60 mb-2" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                NOM COMPLET
              </label>
              <div className="relative">
                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="Prénom Nom"
                />
              </div>
            </div>

            <div>
              <label className="block font-nav text-white/60 mb-2" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                ADRESSE EMAIL
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="votre@email.fr"
                />
              </div>
            </div>

            <div>
              <label className="block font-nav text-white/60 mb-2" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                MOT DE PASSE (min. 8 caractères)
              </label>
              <div className="relative">
                <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-12 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block font-nav text-white/60 mb-2" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                CLÉ DE CONFIGURATION
              </label>
              <div className="relative">
                <KeyRound size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="password"
                  required
                  value={form.setupKey}
                  onChange={(e) => setForm({ ...form, setupKey: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="ADMIN_SETUP_KEY"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={setupMutation.isPending}
              className="w-full font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] disabled:opacity-50 px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 mt-2"
              style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
            >
              {setupMutation.isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  CRÉATION EN COURS...
                </>
              ) : (
                <>
                  <ShieldCheck size={14} />
                  CRÉER LE COMPTE ADMIN
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center font-body text-white/20 mt-6" style={{ fontSize: "0.75rem" }}>
          <Link href="/admin/login" className="hover:text-white/50 transition-colors">
            Déjà un compte ? Se connecter →
          </Link>
        </p>
      </div>
    </div>
  );
}
