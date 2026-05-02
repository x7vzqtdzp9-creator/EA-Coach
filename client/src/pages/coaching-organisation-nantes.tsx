import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  CheckCircle,
  Building2,
  RefreshCw,
  Compass,
  ArrowRight,
} from "lucide-react";

export default function CoachingOrganisationNantes() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <SEOHead
        title="Coaching d’organisation à Nantes – Transformation et changement | EA Coach"
        description="Coaching d’organisation à Nantes : accompagnement des transformations, réorganisations, changements internes et dynamiques collectives."
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

            <div className="section-label mb-4">Coaching d’organisation</div>
            <span className="gold-line mb-6" />

            <h1
              className="font-display mb-6 max-w-5xl"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontWeight: 500 }}
            >
              Coaching d’organisation à Nantes
            </h1>

            <p
              className="font-body text-white/80 max-w-3xl mb-8"
              style={{ fontSize: "1.15rem", lineHeight: 1.8 }}
            >
              EA Coach accompagne les organisations confrontées au changement, aux transformations
              internes, aux tensions collectives ou aux difficultés de coordination entre équipes.
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
                <Building2 className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Organisation
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Clarifier les rôles, les responsabilités et les modes de fonctionnement
                  collectifs.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
                <RefreshCw className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Changement
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Accompagner les transformations sans perdre l’engagement des équipes.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
                <Compass className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Cap commun
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Aligner les acteurs autour d’une direction claire et d’objectifs partagés.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container max-w-4xl">
            <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-6 text-4xl">
              Accompagner les transformations internes
            </h2>

            <p className="font-body text-[oklch(0.40_0.04_250)] mb-6 leading-8">
              Les organisations évoluent souvent sous contrainte : changement de stratégie,
              réorganisation, tensions entre services, évolution des métiers ou perte de cohérence
              collective. Ces situations créent de l’incertitude et fragilisent les équipes.
            </p>

            <p className="font-body text-[oklch(0.40_0.04_250)] leading-8">
              Le coaching d’organisation permet d’analyser les fonctionnements existants,
              d’identifier les points de blocage et d’aider les acteurs à construire des modes de
              coopération plus adaptés.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-8 text-4xl">
              Dans quels cas faire appel à un coaching d’organisation ?
            </h2>

            <ul className="space-y-5">
              {[
                "Réorganisation interne ou évolution des responsabilités",
                "Difficultés de coordination entre équipes ou services",
                "Perte de sens ou manque d’alignement collectif",
                "Accompagnement du changement",
                "Besoin de clarifier les rôles, les décisions et les priorités",
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
              Coaching d’organisation à Nantes et partout en France
            </h2>

            <p className="font-body text-white/80 mb-8 leading-8">
              EA Coach intervient auprès des organisations à Nantes, en Loire-Atlantique et en Pays
              de la Loire. L’accompagnement peut également être mené à distance auprès de structures
              situées partout en France.
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