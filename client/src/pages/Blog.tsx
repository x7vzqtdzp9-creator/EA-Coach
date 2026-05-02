import { trpc } from "@/lib/trpc";
import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { Calendar, Tag, ArrowRight, BookOpen } from "lucide-react";

function formatDate(date: Date | string | null) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  const { data: posts, isLoading } = trpc.blog.list.useQuery();

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "oklch(0.22 0.06 250)" }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/ocean-horizon-oPcZ7FkMhHakYajMpcQfV3.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div
              className="font-nav text-[oklch(0.72_0.10_78)] mb-4"
              style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
            >
              RESSOURCES & RÉFLEXIONS
            </div>
            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 500, lineHeight: 1.15 }}
            >
              Le Blog <span className="italic text-[oklch(0.72_0.10_78)]">EA Coach</span>
            </h1>
            <p
              className="font-body text-white/65"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Réflexions sur le coaching, le leadership, les transitions professionnelles
              et les pratiques qui transforment.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="container">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white border border-[oklch(0.88_0.01_250)] p-8 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded mb-4 w-1/3" />
                  <div className="h-6 bg-gray-200 rounded mb-3" />
                  <div className="h-4 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : !posts || posts.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-[oklch(0.93_0.01_85)] flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-[oklch(0.55_0.04_250)]" size={28} />
              </div>
              <h2
                className="font-display text-[oklch(0.22_0.06_250)] mb-3"
                style={{ fontSize: "1.6rem", fontWeight: 500 }}
              >
                Bientôt disponible
              </h2>
              <p className="font-body text-[oklch(0.55_0.04_250)]" style={{ fontSize: "1rem" }}>
                Les premiers articles seront publiés prochainement.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group bg-white border border-[oklch(0.88_0.01_250)] hover:border-[oklch(0.72_0.10_78)] transition-all duration-300 hover:shadow-xl cursor-pointer h-full flex flex-col">
                    {post.coverImage && (
                      <div className="overflow-hidden" style={{ height: "200px" }}>
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-1">
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
                      <h2
                        className="font-display text-[oklch(0.18_0.04_250)] mb-3 group-hover:text-[oklch(0.55_0.12_235)] transition-colors duration-200"
                        style={{ fontSize: "1.2rem", fontWeight: 600, lineHeight: 1.35 }}
                      >
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p
                          className="font-body text-[oklch(0.50_0.04_250)] flex-1 mb-6"
                          style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
                        >
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[oklch(0.92_0.01_250)]">
                        <div className="flex items-center gap-2 text-[oklch(0.65_0.04_250)]">
                          <Calendar size={13} />
                          <span className="font-body" style={{ fontSize: "0.8rem" }}>
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>
                        <span
                          className="font-nav text-[oklch(0.55_0.12_235)] group-hover:text-[oklch(0.72_0.10_78)] flex items-center gap-1 transition-colors duration-200"
                          style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                        >
                          LIRE <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                    {/* Bottom hover line */}
                    <div className="h-0.5 bg-[oklch(0.72_0.10_78)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className="py-16"
        style={{ background: "oklch(0.14 0.045 250)" }}
      >
        <div className="container text-center">
          <p className="font-body text-white/50 mb-4" style={{ fontSize: "0.9rem" }}>
            Vous souhaitez être accompagné ?
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
