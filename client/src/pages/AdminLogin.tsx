import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { Lock, Mail, Eye, EyeOff, Anchor } from "lucide-react";
import { toast } from "sonner";

export default function AdminLogin() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const utils = trpc.useUtils();

  const loginMutation = trpc.adminAuth.login.useMutation({
    onSuccess: (admin) => {
      toast.success(`Bienvenue, ${admin.name} !`);
      utils.adminAuth.me.invalidate();
      navigate("/admin/blog");
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(form);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "oklch(0.18 0.055 250)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/ocean-horizon-oPcZ7FkMhHakYajMpcQfV3.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

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
              ESPACE ADMINISTRATION
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </div>

        {/* Card */}
        <div
          className="p-8 border border-white/10"
          style={{ background: "oklch(0.22 0.06 250 / 0.8)" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 border border-[oklch(0.72_0.10_78)]/40 flex items-center justify-center">
              <Lock className="text-[oklch(0.72_0.10_78)]" size={16} />
            </div>
            <div>
              <h1
                className="font-display text-white"
                style={{ fontSize: "1.3rem", fontWeight: 500 }}
              >
                Connexion admin
              </h1>
              <p className="font-body text-white/40" style={{ fontSize: "0.8rem" }}>
                Accès réservé aux gestionnaires du blog
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block font-nav text-white/60 mb-2"
                style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
              >
                ADRESSE EMAIL
              </label>
              <div className="relative">
                <Mail
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors duration-200"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="votre@email.fr"
                />
              </div>
            </div>

            <div>
              <label
                className="block font-nav text-white/60 mb-2"
                style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
              >
                MOT DE PASSE
              </label>
              <div className="relative">
                <Lock
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-12 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors duration-200"
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

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] disabled:opacity-50 px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 mt-2"
              style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
            >
              {loginMutation.isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  CONNEXION EN COURS...
                </>
              ) : (
                <>
                  <Anchor size={14} />
                  SE CONNECTER
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center font-body text-white/20 mt-6" style={{ fontSize: "0.75rem" }}>
          <Link href="/" className="hover:text-white/50 transition-colors">
            ← Retour au site EA Coach
          </Link>
        </p>
      </div>
    </div>
  );
}
