import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { Link, useLocation } from "wouter";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  ArrowLeft,
  Save,
  X,
  BookOpen,
  CheckCircle,
  Clock,
  LogOut,
  Users,
} from "lucide-react";
import { toast } from "sonner";

function formatDate(date: Date | string | null) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

interface PostFormProps {
  initial?: {
    id?: number;
    title?: string;
    content?: string;
    excerpt?: string;
    category?: string;
    coverImage?: string;
    published?: boolean;
  };
  onSave: () => void;
  onCancel: () => void;
}

function PostForm({ initial, onSave, onCancel }: PostFormProps) {
  const [form, setForm] = useState({
    title: initial?.title ?? "",
    content: initial?.content ?? "",
    excerpt: initial?.excerpt ?? "",
    category: initial?.category ?? "",
    coverImage: initial?.coverImage ?? "",
    published: initial?.published ?? false,
  });

  const utils = trpc.useUtils();

  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => {
      toast.success("Article créé.");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
      onSave();
    },
    onError: (e) => toast.error(e.message),
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      toast.success("Article mis à jour.");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
      onSave();
    },
    onError: (e) => toast.error(e.message),
  });

  const isLoading = createMutation.isPending || updateMutation.isPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (initial?.id) {
      updateMutation.mutate({ id: initial.id, ...form });
    } else {
      createMutation.mutate(form);
    }
  };

  const inputClass =
    "w-full bg-white border border-[oklch(0.88_0.01_250)] text-[oklch(0.22_0.06_250)] px-4 py-3 font-body focus:outline-none focus:border-[oklch(0.72_0.10_78)] transition-colors duration-200";

  const labelClass = "block font-nav text-[oklch(0.40_0.04_250)] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClass} style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
          TITRE *
        </label>
        <input
          type="text"
          required
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className={inputClass}
          placeholder="Titre de l'article"
        />
      </div>

      <div>
        <label className={labelClass} style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
          CATÉGORIE
        </label>
        <input
          type="text"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className={inputClass}
          placeholder="ex. Leadership, Coaching, Transition..."
        />
      </div>

      <div>
        <label className={labelClass} style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
          IMAGE DE COUVERTURE URL
        </label>
        <input
          type="url"
          value={form.coverImage}
          onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
          className={inputClass}
          placeholder="https://..."
        />
      </div>

      <div>
        <label className={labelClass} style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
          RÉSUMÉ
        </label>
        <textarea
          rows={3}
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Courte description affichée dans la liste des articles..."
        />
      </div>

      <div>
        <label className={labelClass} style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
          CONTENU * — MARKDOWN ACCEPTÉ
        </label>
        <textarea
          required
          rows={18}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className={`${inputClass} resize-y font-mono`}
          style={{ fontSize: "0.88rem" }}
          placeholder="## Titre de section&#10;&#10;Votre contenu ici..."
        />
      </div>

      <div className="flex items-center gap-4 p-4 bg-[oklch(0.95_0.005_85)] border border-[oklch(0.88_0.01_250)]">
        <button
          type="button"
          onClick={() => setForm({ ...form, published: !form.published })}
          className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
            form.published ? "bg-[oklch(0.72_0.10_78)]" : "bg-[oklch(0.80_0.02_250)]"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
              form.published ? "translate-x-6" : ""
            }`}
          />
        </button>

        <div>
          <div
            className="font-nav text-[oklch(0.22_0.06_250)]"
            style={{ fontSize: "0.75rem", letterSpacing: "0.08em", fontWeight: 600 }}
          >
            {form.published ? "PUBLIÉ" : "BROUILLON"}
          </div>
          <div className="font-body text-[oklch(0.55_0.04_250)]" style={{ fontSize: "0.8rem" }}>
            {form.published
              ? "L’article sera visible sur le blog public."
              : "L’article ne sera pas visible par les visiteurs."}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-3 font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] disabled:opacity-50 px-8 py-4 transition-all duration-300"
          style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
        >
          <Save size={14} />
          {isLoading ? "ENREGISTREMENT..." : "ENREGISTRER"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-2 font-nav text-[oklch(0.55_0.04_250)] hover:text-[oklch(0.22_0.06_250)] transition-colors"
          style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
        >
          <X size={14} /> ANNULER
        </button>
      </div>
    </form>
  );
}

export default function AdminBlog() {
  const [, navigate] = useLocation();

  const [view, setView] = useState<"list" | "create" | "edit">("list");
  const [editingId, setEditingId] = useState<number | null>(null);

  const { data: adminUser, isLoading: authLoading } = trpc.adminAuth.me.useQuery();

  const { data: posts, isLoading: postsLoading } = trpc.blog.adminList.useQuery(undefined, {
    enabled: !!adminUser,
  });

  const { data: editPost } = trpc.blog.adminById.useQuery(
    { id: editingId ?? 0 },
    { enabled: editingId !== null }
  );

  const utils = trpc.useUtils();

  const logoutMutation = trpc.adminAuth.logout.useMutation({
    onSuccess: () => {
      utils.adminAuth.me.invalidate();
      navigate("/admin/login");
    },
  });

  const togglePublish = trpc.blog.update.useMutation({
    onSuccess: () => {
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  const deletePost = trpc.blog.delete.useMutation({
    onSuccess: () => {
      toast.success("Article supprimé.");
      utils.blog.adminList.invalidate();
      utils.blog.list.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  useEffect(() => {
    if (!authLoading && !adminUser) {
      navigate("/admin/login");
    }
  }, [authLoading, adminUser, navigate]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[oklch(0.97_0.005_85)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[oklch(0.72_0.10_78)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!adminUser) return null;

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <header
        className="sticky top-0 z-50 border-b border-white/10"
        style={{ background: "oklch(0.22 0.06 250)" }}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-nav text-white/60 hover:text-white transition-colors"
              style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
            >
              <ArrowLeft size={13} /> RETOUR AU SITE
            </Link>

            <div className="h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-[oklch(0.72_0.10_78)]" />
              <span className="font-display text-white" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                Administration Blog
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin/users"
              className="flex items-center gap-2 font-nav text-white/60 hover:text-white transition-colors"
              style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              <Users size={14} /> ADMINS
            </Link>

            <Link
              href="/blog"
              className="font-nav text-white/60 hover:text-white transition-colors"
              style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              VOIR LE BLOG
            </Link>

            <span className="font-body text-white/40" style={{ fontSize: "0.8rem" }}>
              {adminUser.name}
            </span>

            <button
              onClick={() => logoutMutation.mutate()}
              className="flex items-center gap-2 font-nav text-white/60 hover:text-white transition-colors"
              style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              <LogOut size={14} /> DÉCONNEXION
            </button>
          </div>
        </div>
      </header>

      <main className="container py-12">
        {view === "list" && (
          <>
            <div className="flex items-center justify-between mb-10">
              <div>
                <h1
                  className="font-display text-[oklch(0.18_0.04_250)]"
                  style={{ fontSize: "2rem", fontWeight: 500 }}
                >
                  Articles
                </h1>
                <p className="font-body text-[oklch(0.55_0.04_250)] mt-1" style={{ fontSize: "0.9rem" }}>
                  {posts?.length ?? 0} article{(posts?.length ?? 0) !== 1 ? "s" : ""} au total
                </p>
              </div>

              <button
                onClick={() => setView("create")}
                className="flex items-center gap-3 font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] px-6 py-3 transition-all duration-300"
                style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
              >
                <Plus size={14} /> NOUVEL ARTICLE
              </button>
            </div>

            {postsLoading ? (
              <div className="text-center py-20">
                <div className="w-8 h-8 border-2 border-[oklch(0.72_0.10_78)] border-t-transparent rounded-full animate-spin mx-auto" />
              </div>
            ) : !posts || posts.length === 0 ? (
              <div className="text-center py-24 bg-white border border-[oklch(0.88_0.01_250)]">
                <BookOpen size={32} className="text-[oklch(0.75_0.02_250)] mx-auto mb-4" />
                <p className="font-body text-[oklch(0.55_0.04_250)]">
                  Aucun article. Créez votre premier article.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-[oklch(0.88_0.01_250)] overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[oklch(0.92_0.01_250)]">
                      <th className="text-left p-5 font-nav text-[oklch(0.55_0.04_250)]" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                        TITRE
                      </th>
                      <th className="text-left p-5 font-nav text-[oklch(0.55_0.04_250)] hidden md:table-cell" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                        CATÉGORIE
                      </th>
                      <th className="text-left p-5 font-nav text-[oklch(0.55_0.04_250)]" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                        STATUT
                      </th>
                      <th className="text-left p-5 font-nav text-[oklch(0.55_0.04_250)] hidden lg:table-cell" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                        DATE
                      </th>
                      <th className="text-right p-5 font-nav text-[oklch(0.55_0.04_250)]" style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}>
                        ACTIONS
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {posts.map((post) => (
                      <tr
                        key={post.id}
                        className="border-b border-[oklch(0.95_0.005_85)] hover:bg-[oklch(0.98_0.003_85)] transition-colors"
                      >
                        <td className="p-5">
                          <div className="font-body text-[oklch(0.22_0.06_250)] font-medium" style={{ fontSize: "0.95rem" }}>
                            {post.title}
                          </div>
                          {post.excerpt && (
                            <div className="font-body text-[oklch(0.65_0.04_250)] mt-1 line-clamp-1" style={{ fontSize: "0.8rem" }}>
                              {post.excerpt}
                            </div>
                          )}
                        </td>

                        <td className="p-5 hidden md:table-cell">
                          {post.category ? (
                            <span
                              className="font-nav text-[oklch(0.72_0.10_78)] bg-[oklch(0.72_0.10_78)]/10 px-2 py-1"
                              style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                            >
                              {post.category.toUpperCase()}
                            </span>
                          ) : (
                            <span className="text-[oklch(0.75_0.02_250)]">—</span>
                          )}
                        </td>

                        <td className="p-5">
                          <button
                            onClick={() => togglePublish.mutate({ id: post.id, published: !post.published })}
                            className="flex items-center gap-2 transition-colors hover:opacity-70"
                          >
                            {post.published ? (
                              <>
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="font-nav text-green-600" style={{ fontSize: "0.65rem", letterSpacing: "0.08em" }}>
                                  PUBLIÉ
                                </span>
                              </>
                            ) : (
                              <>
                                <Clock size={14} className="text-[oklch(0.65_0.04_250)]" />
                                <span className="font-nav text-[oklch(0.65_0.04_250)]" style={{ fontSize: "0.65rem", letterSpacing: "0.08em" }}>
                                  BROUILLON
                                </span>
                              </>
                            )}
                          </button>
                        </td>

                        <td className="p-5 hidden lg:table-cell">
                          <span className="font-body text-[oklch(0.60_0.04_250)]" style={{ fontSize: "0.82rem" }}>
                            {formatDate(post.createdAt)}
                          </span>
                        </td>

                        <td className="p-5">
                          <div className="flex items-center justify-end gap-2">
                            {post.published && (
                              <Link
                                href={`/blog/${post.slug}`}
                                className="p-2 text-[oklch(0.65_0.04_250)] hover:text-[oklch(0.55_0.12_235)] transition-colors"
                                title="Voir l’article"
                              >
                                <Eye size={15} />
                              </Link>
                            )}

                            <button
                              onClick={() => {
                                setEditingId(post.id);
                                setView("edit");
                              }}
                              className="p-2 text-[oklch(0.65_0.04_250)] hover:text-[oklch(0.22_0.06_250)] transition-colors"
                              title="Modifier"
                            >
                              <Edit2 size={15} />
                            </button>

                            <button
                              onClick={() => {
                                if (confirm(`Supprimer "${post.title}" ?`)) {
                                  deletePost.mutate({ id: post.id });
                                }
                              }}
                              className="p-2 text-[oklch(0.65_0.04_250)] hover:text-red-500 transition-colors"
                              title="Supprimer"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {view === "create" && (
          <>
            <div className="flex items-center gap-4 mb-10">
              <button
                onClick={() => setView("list")}
                className="flex items-center gap-2 font-nav text-[oklch(0.55_0.04_250)] hover:text-[oklch(0.22_0.06_250)] transition-colors"
                style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
              >
                <ArrowLeft size={13} /> RETOUR
              </button>

              <div className="h-4 w-px bg-[oklch(0.85_0.01_250)]" />

              <h1 className="font-display text-[oklch(0.18_0.04_250)]" style={{ fontSize: "1.8rem", fontWeight: 500 }}>
                Nouvel article
              </h1>
            </div>

            <div className="max-w-3xl">
              <PostForm onSave={() => setView("list")} onCancel={() => setView("list")} />
            </div>
          </>
        )}

        {view === "edit" && editPost && (
          <>
            <div className="flex items-center gap-4 mb-10">
              <button
                onClick={() => {
                  setView("list");
                  setEditingId(null);
                }}
                className="flex items-center gap-2 font-nav text-[oklch(0.55_0.04_250)] hover:text-[oklch(0.22_0.06_250)] transition-colors"
                style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
              >
                <ArrowLeft size={13} /> RETOUR
              </button>

              <div className="h-4 w-px bg-[oklch(0.85_0.01_250)]" />

              <h1 className="font-display text-[oklch(0.18_0.04_250)]" style={{ fontSize: "1.8rem", fontWeight: 500 }}>
                Modifier l’article
              </h1>
            </div>

            <div className="max-w-3xl">
              <PostForm
                initial={{
                  id: editPost.id,
                  title: editPost.title,
                  content: editPost.content,
                  excerpt: editPost.excerpt ?? undefined,
                  category: editPost.category ?? undefined,
                  coverImage: editPost.coverImage ?? undefined,
                  published: editPost.published,
                }}
                onSave={() => {
                  setView("list");
                  setEditingId(null);
                }}
                onCancel={() => {
                  setView("list");
                  setEditingId(null);
                }}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}