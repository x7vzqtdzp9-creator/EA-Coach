import { trpc } from "@/lib/trpc";
import Navbar from "@/components/Navbar";
import { Link, useParams } from "wouter";
import { Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function formatDate(date: Date | string | null) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = trpc.blog.bySlug.useQuery({ slug: slug ?? "" });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
        <Navbar />
        <div className="container py-40 text-center">
          <div className="w-8 h-8 border-2 border-[oklch(0.72_0.10_78)] border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
        <Navbar />
        <div className="container py-40 text-center">
          <h1 className="font-display text-[oklch(0.22_0.06_250)] text-3xl mb-4">Article introuvable</h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-nav text-[oklch(0.55_0.12_235)] hover:text-[oklch(0.72_0.10_78)] transition-colors"
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
          >
            <ArrowLeft size={13} /> RETOUR AU BLOG
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "oklch(0.22 0.06 250)" }}
      >
        {post.coverImage && (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${post.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        <div className="container relative z-10 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-nav text-white/50 hover:text-white mb-8 transition-colors"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            <ArrowLeft size={13} /> RETOUR AU BLOG
          </Link>

          {post.category && (
            <div className="flex items-center gap-2 mb-4">
              <Tag size={12} className="text-[oklch(0.72_0.10_78)]" />
              <span
                className="font-nav text-[oklch(0.72_0.10_78)]"
                style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}
              >
                {post.category.toUpperCase()}
              </span>
            </div>
          )}

          <h1
            className="font-display text-white mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 500, lineHeight: 1.2 }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p
              className="font-body text-white/65 mb-6"
              style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-2 text-white/40">
            <Calendar size={13} />
            <span className="font-body" style={{ fontSize: "0.85rem" }}>
              Publié le {formatDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <div
            className="font-body text-[oklch(0.30_0.04_250)] prose prose-lg max-w-none"
            style={{ lineHeight: 1.85 }}
          >
            <div className="prose prose-invert max-w-none"><ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown></div>
          </div>

          {/* Back to blog */}
          <div className="mt-16 pt-8 border-t border-[oklch(0.88_0.01_250)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 font-nav text-[oklch(0.22_0.06_250)] border-b-2 border-[oklch(0.72_0.10_78)] pb-1 hover:text-[oklch(0.72_0.10_78)] transition-colors duration-200"
              style={{ fontSize: "0.75rem", letterSpacing: "0.12em", fontWeight: 600 }}
            >
              <ArrowLeft size={13} /> RETOUR AU BLOG
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "oklch(0.14 0.045 250)" }}
      >
        <div className="container text-center">
          <p className="font-body text-white/50 mb-4" style={{ fontSize: "0.9rem" }}>
            Cet article vous a inspiré ? Parlons de votre situation.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] px-8 py-4 transition-all duration-300"
            style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
          >
            NOUS CONTACTER
            <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
