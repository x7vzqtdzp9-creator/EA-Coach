import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  CheckCircle,
  Users,
  MessageCircle,
  Handshake,
  ArrowRight,
} from "lucide-react";

export default function CoachingEquipeNantes() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <SEOHead
        title="Coaching d’équipe à Nantes – Cohésion, communication et conflits | EA Coach"
        description="Coaching d’équipe à Nantes : accompagnez vos équipes dans les tensions, les problèmes de communication, la cohésion et la coopération collective."
      />

      <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.14_0.045_250)] shadow-sm">
        <Navbar variant="dark" />
      </div>

      <main>
        <section className="pt-36 pb-20 bg-[oklch(0.18_0.04_250)] text-white">
          <div className="container">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8"
            >
              <ArrowLeft size={18} />
              Retour aux services
            </Link>

            <div className="section-label mb-4">Coaching d’équipe</div>
            <span className="gold-line mb-6" />

            <h1
              className="font-display mb-6 max-w-5xl"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontWeight: 500 }}
            >
              Coaching d’équipe à Nantes
            </h1>

            <p
              className="font-body text-white/80 max-w-3xl mb-8"
              style={{ fontSize: "1.15rem", lineHeight: 1.8 }}
            >
              EA Coach accompagne les équipes confrontées à des tensions, des problèmes de
              communication, une perte de cohésion ou des difficultés de coopération.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-nav bg-[oklch(0.72_0.10_78)] text-[oklch(0.18_0.04_250)] px-8 py-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
            >
              PRENDRE CONTACT
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
                <Users className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Cohésion d’équipe
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Restaurer la confiance, clarifier les rôles et renforcer le fonctionnement
                  collectif.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
                <MessageCircle className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Communication
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Améliorer les échanges, réduire les non-dits et mieux traiter les désaccords.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
                <Handshake className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Coopération
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Développer des méthodes de travail plus fluides et une responsabilité partagée.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container max-w-4xl">
            <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-6 text-4xl">
              Accompagner les équipes en difficulté
            </h2>

            <p className="font-body text-[oklch(0.40_0.04_250)] mb-6 leading-8">
              Une équipe peut perdre en efficacité lorsque les rôles sont flous, que les tensions
              s’installent ou que la communication devient indirecte. Le coaching d’équipe permet
              de mettre à plat les fonctionnements collectifs et de reconstruire un cadre de
              coopération plus sain.
            </p>

            <p className="font-body text-[oklch(0.40_0.04_250)] leading-8">
              L’objectif n’est pas de produire un discours théorique, mais d’aider l’équipe à mieux
              comprendre ses blocages et à retrouver une dynamique de travail concrète.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-8 text-4xl">
              Quand faire appel à un coaching d’équipe ?
            </h2>

            <ul className="space-y-5">
              {[
                "Conflits ou tensions récurrentes dans l’équipe",
                "Difficultés de communication entre membres",
                "Manque de confiance ou de coopération",
                "Perte d’engagement collectif",
                "Changement d’organisation ou nouveau projet structurant",
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <CheckCircle className="text-[oklch(0.72_0.10_78)] mt-1" size={22} />
                  <span className="font-body text-[oklch(0.40_0.04_250)] leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link
                href="/coaching-professionnel"
                className="inline-flex items-center gap-2 font-nav text-[oklch(0.72_0.10_78)]"
              >
                En savoir plus sur notre approche du coaching professionnel
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[oklch(0.18_0.04_250)] text-white">
          <div className="container max-w-4xl">
            <h2 className="font-display mb-6 text-4xl">
              Coaching d’équipe à Nantes et à distance
            </h2>

            <p className="font-body text-white/80 mb-8 leading-8">
              EA Coach accompagne les équipes à Nantes, en Loire-Atlantique et en Pays de la Loire.
              L’accompagnement peut également être organisé à distance selon le contexte de
              l’organisation.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-nav bg-[oklch(0.72_0.10_78)] text-[oklch(0.18_0.04_250)] px-8 py-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
            >
              DEMANDER UN ÉCHANGE
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}