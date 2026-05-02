import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, ArrowRight, Compass, Users, Target } from "lucide-react";

const situations = [
  "Prise de poste ou évolution de responsabilités",
  "Besoin de clarifier une décision importante",
  "Blocage professionnel ou perte de repères",
  "Transformation d’équipe ou d’organisation",
  "Difficulté à exercer son rôle de manager",
  "Transition ou repositionnement professionnel",
];

const steps = [
  {
    title: "Clarifier la situation",
    text: "Identifier les faits, les tensions, les enjeux et les objectifs réels de l’accompagnement.",
  },
  {
    title: "Prendre du recul",
    text: "Analyser la situation avec un regard extérieur, structuré et confidentiel.",
  },
  {
    title: "Mettre en action",
    text: "Construire des décisions, des ajustements de posture et des actions concrètes.",
  },
];

export default function Coaching() {
  document.title = "Coaching professionnel pour dirigeants et managers | EA Coach";

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.14_0.045_250)] shadow-sm">
        <Navbar variant="dark" />
      </div>

      <section className="pt-40 pb-28 bg-[oklch(0.18_0.04_250)] text-white">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Coaching professionnel</div>
            <span className="gold-line mb-6" />

            <h1
              className="font-display text-white mb-6 max-w-5xl"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500 }}
            >
              Coaching professionnel : clarifier, décider et agir dans les situations complexes
            </h1>

            <p
              className="font-body text-white/90 max-w-3xl mb-6"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Le coaching professionnel est un accompagnement structuré qui permet aux dirigeants,
              managers et équipes de prendre du recul, d’analyser une situation et de construire
              des réponses adaptées aux enjeux réels du terrain.
            </p>

            <p
              className="font-body text-white/80 max-w-3xl"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              EA Coach accompagne les professionnels confrontés à des décisions importantes,
              des transitions, des tensions managériales ou des transformations collectives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Situations accompagnées</div>
            <span className="gold-line mb-6" />
            <h2
              className="font-display text-[oklch(0.18_0.04_250)] mb-6 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
            >
              Dans quels cas faire appel à un coaching professionnel ?
            </h2>
            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-12"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Le coaching professionnel intervient lorsque les repères habituels ne suffisent plus.
              Il ne remplace pas la décision : il crée les conditions pour la prendre avec plus de
              lucidité, de responsabilité et de cohérence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {situations.map((item, index) => (
              <AnimatedSection key={item} delay={index * 80}>
                <div className="flex gap-4 items-start bg-[oklch(0.97_0.005_85)] border border-[oklch(0.88_0.01_250)] p-6">
                  <CheckCircle
                    className="text-[oklch(0.72_0.10_78)] flex-shrink-0 mt-1"
                    size={22}
                  />
                  <p
                    className="font-body text-[oklch(0.40_0.04_250)]"
                    style={{ fontSize: "1rem", lineHeight: 1.7 }}
                  >
                    {item}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Méthode</div>
            <span className="gold-line mb-6" />
            <h2
              className="font-display text-[oklch(0.18_0.04_250)] mb-6 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
            >
              Comment se déroule un coaching professionnel ?
            </h2>
            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-12"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              L’accompagnement s’organise autour d’un cadre clair : objectifs définis,
              confidentialité, modalités d’échange et progression dans le temps.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 120}>
                <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-[oklch(0.22_0.06_250)] flex items-center justify-center mb-6">
                    {index === 0 && <Compass className="text-[oklch(0.72_0.10_78)]" size={22} />}
                    {index === 1 && <Users className="text-[oklch(0.72_0.10_78)]" size={22} />}
                    {index === 2 && <Target className="text-[oklch(0.72_0.10_78)]" size={22} />}
                  </div>

                  <h3
                    className="font-display text-[oklch(0.18_0.04_250)] mb-4"
                    style={{ fontSize: "1.3rem", fontWeight: 600 }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="font-body text-[oklch(0.45_0.04_250)]"
                    style={{ fontSize: "0.98rem", lineHeight: 1.75 }}
                  >
                    {step.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Objectif</div>
            <span className="gold-line mb-6" />
            <h2
              className="font-display text-[oklch(0.18_0.04_250)] mb-6 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
            >
              Un accompagnement orienté vers des effets concrets
            </h2>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-6"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Le coaching professionnel ne consiste pas à appliquer une méthode toute faite.
              Il permet de travailler une situation réelle, avec ses contraintes, ses tensions
              et ses marges de manœuvre.
            </p>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              L’objectif est de faire émerger des décisions clarifiées, une posture renforcée,
              une meilleure coopération et une capacité d’action plus solide dans le contexte
              professionnel concerné.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Nos accompagnements</div>
            <span className="gold-line mb-6" />
            <h2
              className="font-display text-[oklch(0.18_0.04_250)] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
            >
              Découvrir les autres formes d’accompagnement
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/services" className="block bg-white border border-[oklch(0.88_0.01_250)] p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="font-display text-[oklch(0.18_0.04_250)] mb-3" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                Tous nos accompagnements
              </h3>
              <p className="font-body text-[oklch(0.45_0.04_250)]" style={{ lineHeight: 1.7 }}>
                Voir l’ensemble des accompagnements proposés par EA Coach.
              </p>
            </a>

            <a href="/coaching-individuel" className="block bg-white border border-[oklch(0.88_0.01_250)] p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="font-display text-[oklch(0.18_0.04_250)] mb-3" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                Coaching individuel
              </h3>
              <p className="font-body text-[oklch(0.45_0.04_250)]" style={{ lineHeight: 1.7 }}>
                Clarifier une situation professionnelle, prendre du recul et avancer.
              </p>
            </a>

            <a href="/accompagnement-solidaire" className="block bg-white border border-[oklch(0.88_0.01_250)] p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="font-display text-[oklch(0.18_0.04_250)] mb-3" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                Accompagnement solidaire
              </h3>
              <p className="font-body text-[oklch(0.45_0.04_250)]" style={{ lineHeight: 1.7 }}>
                Un accompagnement accessible pour les périodes professionnelles sensibles.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.18_0.04_250)]">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="section-label mb-4">Premier échange</div>
              <span className="gold-line mb-6" />

              <h2
                className="font-display text-white mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
              >
                Vous souhaitez engager un coaching professionnel ?
              </h2>

              <p
                className="font-body text-white/80 mb-8"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Un premier contact permet de clarifier votre situation, d’identifier vos enjeux
                et de déterminer si un accompagnement est pertinent.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] px-8 py-4"
                style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
              >
                PRENDRE CONTACT
                <ArrowRight size={14} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
