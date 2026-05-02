import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  CheckCircle,
  Users,
  Target,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function CoachingManagerNantes() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <SEOHead
        title="Coaching manager à Nantes – Difficultés hiérarchiques et équipe | EA Coach"
        description="Coaching manager à Nantes : accompagnement des managers et chefs de projet confrontés à des tensions avec leur hiérarchie, leur équipe ou leur posture professionnelle."
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

            <div className="section-label mb-4">Coaching manager</div>
            <span className="gold-line mb-6" />

            <h1
              className="font-display mb-6 max-w-5xl"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", fontWeight: 500 }}
            >
              Coaching manager à Nantes
            </h1>

            <p
              className="font-body text-white/80 max-w-3xl mb-8"
              style={{ fontSize: "1.15rem", lineHeight: 1.8 }}
            >
              EA Coach accompagne les managers et chefs de projet confrontés à des difficultés
              avec leur hiérarchie, leur équipe ou leur posture professionnelle. L’accompagnement
              est proposé à Nantes, en Loire-Atlantique, et à distance partout en France.
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
                  Difficultés avec l’équipe
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Communication tendue, perte d’adhésion, conflits internes ou difficulté à poser
                  un cadre clair.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
                <Target className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Pression hiérarchique
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Objectifs exigeants, injonctions contradictoires, manque de reconnaissance ou
                  difficulté à s’affirmer face à sa direction.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8">
                <MessageCircle className="text-[oklch(0.72_0.10_78)] mb-5" size={32} />
                <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4 text-2xl">
                  Posture managériale
                </h2>
                <p className="font-body text-[oklch(0.45_0.04_250)] leading-7">
                  Clarifier son rôle, renforcer sa communication et retrouver une position juste
                  auprès de ses interlocuteurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container max-w-4xl">
            <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-6 text-4xl">
              Managers : surmonter les difficultés avec votre hiérarchie
            </h2>

            <p className="font-body text-[oklch(0.40_0.04_250)] mb-6 leading-8">
              Être manager ou chef de projet implique souvent d’occuper une position inconfortable :
              porter les attentes de la direction tout en maintenant l’engagement de son équipe.
              Lorsque les tensions s’accumulent, le manager peut se retrouver isolé, sous pression
              ou en difficulté pour faire entendre ses besoins.
            </p>

            <p className="font-body text-[oklch(0.40_0.04_250)] leading-8">
              Le coaching permet de prendre du recul, d’analyser les situations avec lucidité et de
              construire une manière d’agir plus claire, plus stable et plus efficace.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-8 text-4xl">
              Ce que le coaching manager permet de travailler
            </h2>

            <ul className="space-y-5">
              {[
                "Mieux comprendre les causes des tensions avec l’équipe ou la hiérarchie",
                "Clarifier sa posture managériale",
                "Retrouver une autorité juste sans rigidité excessive",
                "Gérer les échanges difficiles avec plus de recul",
                "Renforcer la confiance et l’engagement de l’équipe",
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
                href="/coaching-individuel"
                className="inline-flex items-center gap-2 font-nav text-[oklch(0.72_0.10_78)]"
              >
                En savoir plus sur notre approche du coaching individuel
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[oklch(0.18_0.04_250)] text-white">
          <div className="container max-w-4xl">
            <h2 className="font-display mb-6 text-4xl">
              Coaching à Nantes et à distance partout en France
            </h2>

            <p className="font-body text-white/80 mb-8 leading-8">
              EA Coach accompagne les managers à Nantes, en Loire-Atlantique et en Pays de la Loire.
              Les séances peuvent également être réalisées à distance pour les managers situés
              partout en France.
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