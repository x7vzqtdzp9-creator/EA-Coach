import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, Edit3, FileText, LogOut, Plus, Save, Trash2, Users } from "lucide-react";
import { toast } from "sonner";

type BlogForm = {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  published: boolean;
};

const emptyForm: BlogForm = {
  title: "",
  excerpt: "",
  content: "",
  category: "",
  coverImage: "",
  published: false,
};

export default function AdminBlog() {
  const [, navigate] = useLocation();
  const utils = trpc.useUtils();

  const [form, setForm] = useState<BlogForm>(emptyForm);

  const { data: adminUser, isLoading: authLoading } = trpc.adminAuth.me.useQuery();

  const { data: posts, isLoading: postsLoading } = trpc.blog.adminList.useQuery(undefined, {
    enabled: !!adminUser,
  });

  useEffect(() => {
    if (!authLoading && !adminUser) {
      navigate("/admin/login");
    }
  }, [authLoading, adminUser, navigate]);

  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => {
      toast.success("Article créé.");
      setForm(emptyForm);
      utils.blog.adminList.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      toast.success("Article mis à jour.");
      setForm(emptyForm);
      utils.blog.adminList.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => {
      toast.success("Article supprimé.");
      utils.blog.adminList.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  const logoutMutation = trpc.adminAuth.logout.useMutation({
    onSuccess: () => {
      utils.adminAuth.me.invalidate();
      navigate("/admin/login");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      excerpt: form.excerpt || undefined,
      content: form.content,
      category: form.category || undefined,
      coverImage: form.coverImage || undefined,
      published: form.published,
    };

    if (form.id) {
      updateMutation.mutate({
        id: form.id,
        ...payload,
      });
    } else {
      createMutation.mutate(payload);
    }
  };

  const handleEdit = (post: NonNullable<typeof posts>[number]) => {
    setForm({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt ?? "",
      content: post.content,
      category: post.category ?? "",
      coverImage: post.coverImage ?? "",
      published: post.published,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTogglePublish = (post: NonNullable<typeof posts>[number]) => {
    updateMutation.mutate({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt ?? undefined,
      category: post.category ?? undefined,
      coverImage: post.coverImage ?? undefined,
      published: !post.published,
    });
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
            href="/"
            className="flex items-center gap-3 font-nav text-white/70 hover:text-white transition-colors"
            style={{ fontSize: "0.75rem", letterSpacing: "0.12em" }}
          >
            <ArrowLeft size={15} />
            RETOUR AU SITE
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/admin/users"
              className="flex items-center gap-2 font-nav text-white/70 hover:text-white transition-colors"
              style={{ fontSize: "0.75rem", letterSpacing: "0.12em" }}
            >
              <Users size={15} />
              ADMINS
            </Link>

            <button
              onClick={() => logoutMutation.mutate()}
              className="flex items-center gap-2 font-nav text-white/70 hover:text-white transition-colors"
              style={{ fontSize: "0.75rem", letterSpacing: "0.12em" }}
            >
              <LogOut size={15} />
              DÉCONNEXION
            </button>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="mb-10">
          <p
            className="font-nav text-[oklch(0.72_0.10_78)] mb-3"
            style={{ fontSize: "0.75rem", letterSpacing: "0.18em" }}
          >
            ESPACE ADMIN
          </p>

          <h1
            className="font-display text-[oklch(0.18_0.04_250)]"
            style={{ fontSize: "2.2rem", fontWeight: 500 }}
          >
            Gestion du blog
          </h1>

          <p className="font-body text-[oklch(0.55_0.04_250)] mt-2" style={{ fontSize: "0.95rem" }}>
            Connecté : {adminUser.name}
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-8">
          <section className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
            <div className="flex items-center gap-3 mb-6">
              {form.id ? (
                <Edit3 className="text-[oklch(0.72_0.10_78)]" size={20} />
              ) : (
                <Plus className="text-[oklch(0.72_0.10_78)]" size={20} />
              )}

              <h2
                className="font-display text-[oklch(0.18_0.04_250)]"
                style={{ fontSize: "1.4rem", fontWeight: 500 }}
              >
                {form.id ? "Modifier l’article" : "Créer un article"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  TITRE
                </label>
                <input
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)]"
                />
              </div>

              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  EXTRAIT
                </label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={3}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] resize-none"
                />
              </div>

              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  CATÉGORIE
                </label>
                <input
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)]"
                />
              </div>

              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  IMAGE DE COUVERTURE — URL
                </label>
                <input
                  value={form.coverImage}
                  onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)]"
                />
              </div>

              <div>
                <label
                  className="block font-nav text-[oklch(0.40_0.04_250)] mb-2"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
                >
                  CONTENU
                </label>
                <textarea
                  required
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={12}
                  className="w-full bg-white border border-[oklch(0.88_0.01_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] resize-none"
                />
              </div>

              <label className="flex items-center gap-3 font-body text-[oklch(0.30_0.04_250)]">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={(e) => setForm({ ...form, published: e.target.checked })}
                />
                Publier l’article
              </label>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={createMutation.isPending || updateMutation.isPending}
                  className="flex-1 flex items-center justify-center gap-3 font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] disabled:opacity-50 px-6 py-4 transition-all"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
                >
                  <Save size={14} />
                  {form.id ? "ENREGISTRER" : "CRÉER"}
                </button>

                {form.id && (
                  <button
                    type="button"
                    onClick={() => setForm(emptyForm)}
                    className="px-6 py-4 font-nav border border-[oklch(0.85_0.01_250)] text-[oklch(0.35_0.04_250)] hover:bg-[oklch(0.95_0.005_85)] transition-colors"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.12em", fontWeight: 700 }}
                  >
                    ANNULER
                  </button>
                )}
              </div>
            </form>
          </section>

          <section className="bg-white border border-[oklch(0.88_0.01_250)]">
            <div className="p-6 border-b border-[oklch(0.92_0.01_250)] flex items-center gap-3">
              <FileText className="text-[oklch(0.72_0.10_78)]" size={20} />
              <h2
                className="font-display text-[oklch(0.18_0.04_250)]"
                style={{ fontSize: "1.4rem", fontWeight: 500 }}
              >
                Articles
              </h2>
            </div>

            {postsLoading ? (
              <div className="py-16 flex justify-center">
                <div className="w-8 h-8 border-2 border-[oklch(0.72_0.10_78)] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : posts && posts.length > 0 ? (
              <div>
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="p-6 border-b border-[oklch(0.95_0.005_85)]"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`font-nav px-3 py-1 ${
                              post.published
                                ? "bg-green-50 text-green-700"
                                : "bg-[oklch(0.95_0.005_85)] text-[oklch(0.45_0.04_250)]"
                            }`}
                            style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                          >
                            {post.published ? "PUBLIÉ" : "BROUILLON"}
                          </span>

                          {post.category && (
                            <span
                              className="font-nav text-[oklch(0.55_0.04_250)]"
                              style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                            >
                              {post.category}
                            </span>
                          )}
                        </div>

                        <h3
                          className="font-display text-[oklch(0.18_0.04_250)]"
                          style={{ fontSize: "1.2rem", fontWeight: 500 }}
                        >
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p className="font-body text-[oklch(0.50_0.04_250)] mt-2" style={{ fontSize: "0.9rem" }}>
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleTogglePublish(post)}
                          disabled={updateMutation.isPending}
                          className="px-4 py-2 font-nav border border-[oklch(0.85_0.01_250)] hover:bg-[oklch(0.95_0.005_85)] transition-colors"
                          style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                        >
                          {post.published ? "DÉPUBLIER" : "PUBLIER"}
                        </button>

                        <button
                          onClick={() => handleEdit(post)}
                          className="p-3 text-[oklch(0.30_0.04_250)] hover:bg-[oklch(0.95_0.005_85)] transition-colors"
                          title="Modifier"
                        >
                          <Edit3 size={16} />
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Supprimer l’article "${post.title}" ?`)) {
                              deleteMutation.mutate({ id: post.id });
                            }
                          }}
                          disabled={deleteMutation.isPending}
                          className="p-3 text-red-500 hover:bg-red-50 disabled:opacity-50 transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="p-10 text-center">
                <p className="font-body text-[oklch(0.50_0.04_250)]">
                  Aucun article pour le moment. Crée ton premier article à gauche.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
