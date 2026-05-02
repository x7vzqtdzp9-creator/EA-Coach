import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Plus, Trash2, UserPlus } from "lucide-react";
import { toast } from "sonner";

export default function AdminUsers() {
  const [, navigate] = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { data: adminUser, isLoading: authLoading } = trpc.adminAuth.me.useQuery();
  const utils = trpc.useUtils();

  const { data: admins, isLoading: adminsLoading } = trpc.adminAuth.listAdmins.useQuery(
    undefined,
    {
      enabled: !!adminUser,
    }
  );

  useEffect(() => {
    if (!authLoading && !adminUser) {
      navigate("/admin/login");
    }
  }, [authLoading, adminUser, navigate]);

  const createMutation = trpc.adminAuth.createAdmin.useMutation({
    onSuccess: () => {
      toast.success("Compte admin créé.");
      setForm({ name: "", email: "", password: "" });
      utils.adminAuth.listAdmins.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  const deleteMutation = trpc.adminAuth.deleteAdmin.useMutation({
    onSuccess: () => {
      toast.success("Compte admin supprimé.");
      utils.adminAuth.listAdmins.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(form);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.97_0.005_85)]">
        <div className="w-8 h-8 border-2 border-[oklch(0.72_0.10_78)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!adminUser) return null;

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <header className="bg-[oklch(0.18_0.055_250)] border-b border-white/10">
        <div className="container py-5 flex items-center justify-between">
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 font-nav text-white/70 hover:text-white transition-colors"
            style={{ fontSize: "0.75rem", letterSpacing: "0.12em" }}
          >
            <ArrowLeft size={15} />
            RETOUR AU BLOG
          </Link>

          <span className="font-body text-white/50" style={{ fontSize: "0.85rem" }}>
            Connecté : {adminUser.name}
          </span>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-10">
          <h1
            className="font-display text-[oklch(0.18_0.04_250)]"
            style={{ fontSize: "2rem", fontWeight: 500 }}
          >
            Comptes administrateurs
          </h1>
          <p className="font-body text-[oklch(0.55_0.04_250)] mt-2" style={{ fontSize: "0.95rem" }}>
            Gérez les accès à l’espace d’administration du blog.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
          <section className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <UserPlus className="text-[oklch(0.72_0.10_78)]" size={20} />
              <h2
                className="font-display text-[oklch(0.18_0.04_250)]"
                style={{ fontSize: "1.3rem", fontWeight: 500 }}
              >
                Ajouter un admin
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  NOM
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)]"
                />
              </div>

              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)]"
                />
              </div>

              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  MOT DE PASSE
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)]"
                />
              </div>

              <button
                type="submit"
                disabled={createMutation.isPending}
                className="w-full flex items-center justify-center gap-3 font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] disabled:opacity-50 px-6 py-4 transition-all"
                style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
              >
                <Plus size={14} />
                {createMutation.isPending ? "CRÉATION..." : "CRÉER LE COMPTE"}
              </button>
            </form>
          </section>

          <section className="bg-white border border-[oklch(0.88_0.01_250)]">
            <div className="p-6 border-b border-[oklch(0.92_0.01_250)]">
              <h2
                className="font-display text-[oklch(0.18_0.04_250)]"
                style={{ fontSize: "1.3rem", fontWeight: 500 }}
              >
                Liste des admins
              </h2>
            </div>

            {adminsLoading ? (
              <div className="py-16 flex justify-center">
                <div className="w-8 h-8 border-2 border-[oklch(0.72_0.10_78)] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div>
                {admins?.map((admin) => (
                  <div
                    key={admin.id}
                    className="p-6 border-b border-[oklch(0.95_0.005_85)] flex items-center justify-between"
                  >
                    <div>
                      <p className="font-body text-[oklch(0.22_0.06_250)] font-medium">
                        {admin.name}
                      </p>
                      <p className="font-body text-[oklch(0.55_0.04_250)]" style={{ fontSize: "0.85rem" }}>
                        {admin.email}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm(`Supprimer le compte admin ${admin.email} ?`)) {
                          deleteMutation.mutate({ id: admin.id });
                        }
                      }}
                      disabled={admin.id === adminUser.id || deleteMutation.isPending}
                      className="p-3 text-red-500 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      title={
                        admin.id === adminUser.id
                          ? "Vous ne pouvez pas supprimer votre propre compte"
                          : "Supprimer"
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}