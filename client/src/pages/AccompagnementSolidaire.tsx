import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle, Compass, Target, Users } from "lucide-react";

const situations = [
  "Recherche d’emploi ou période de chômage",
  "Reconversion professionnelle",
  "Situation de fragilité professionnelle",
  "Difficulté à retrouver une dynamique",
  "Manque de confiance ou isolement",
  "Transition de vie impactant le travail",
];

const steps = [
  {
    title: "Retrouver de la clarté",
    text: "Identifier la situation réelle, les freins, les ressources disponibles et les priorités.",
  },
  {
    title: "Reconstruire une dynamique",
    text: "Sortir de l’isolement, reprendre confiance et remettre du mouvement dans le parcours.",
  },
  {
    title: "Préparer les prochaines étapes",
    text: "Construire des actions simples, concrètes et adaptées à la situation professionnelle.",
  },
];

export default function AccompagnementSolidaire() {
  document.title = "Accompagnement solidaire professionnel | EA Coach";

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.14_0.045_250)] shadow-sm">
        <Navbar variant="dark" />
      </div>

      <section className="pt-40 pb-28 bg-[oklch(0.18_0.04_250)] text-white">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Accompagnement solidaire</div>
            <span className="gold-line mb-6" />

            <h1
              className="font-display text-white mb-6 max-w-5xl"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500 }}
            >
              Accompagnement solidaire : retrouver une direction professionnelle
            </h1>

            <p
              className="font-body text-white/90 max-w-3xl mb-6"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              L’accompagnement solidaire permet aux personnes en transition professionnelle
              de bénéficier d’un espace structuré pour retrouver clarté, confiance et capacité
              d’action.
            </p>

            <p
              className="font-body text-white/80 max-w-3xl"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Il s’adresse aux personnes confrontées à une période de fragilité, de recherche
              d’emploi, de reconversion ou de repositionnement professionnel.
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
              Un accompagnement accessible dans les périodes professionnelles difficiles
            </h2>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-12"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Certaines situations nécessitent un accompagnement, mais ne permettent pas toujours
              d’accéder facilement au coaching professionnel classique. L’accompagnement solidaire
              répond à ce besoin d’appui, de recul et de remise en mouvement.
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
              Comment se déroule un accompagnement solidaire ?
            </h2>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-12"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              L’accompagnement permet de clarifier les priorités, d’identifier les ressources
              disponibles et de sortir progressivement d’un état de blocage. Il s’agit d’un appui
              structuré, concret et respectueux du rythme de la personne.
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
              Retrouver une dynamique professionnelle
            </h2>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-6"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              L’objectif n’est pas seulement de parler d’une difficulté, mais de reconstruire
              une capacité d’action progressive et adaptée à la situation.
            </p>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Selon les situations, cet accompagnement peut ouvrir vers un{" "}
              <a
                href="/coaching-individuel"
                className="text-[oklch(0.72_0.10_78)] underline underline-offset-4"
              >
                coaching individuel professionnel
              </a>{" "}
              ou vers un travail plus large sur le repositionnement professionnel.
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

            <a href="/coaching-professionnel" className="block bg-white border border-[oklch(0.88_0.01_250)] p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="font-display text-[oklch(0.18_0.04_250)] mb-3" style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                Coaching professionnel
              </h3>
              <p className="font-body text-[oklch(0.45_0.04_250)]" style={{ lineHeight: 1.7 }}>
                Accompagner les dirigeants, managers et équipes dans les situations complexes.
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
                Vous souhaitez bénéficier d’un accompagnement solidaire ?
              </h2>

              <p
                className="font-body text-white/80 mb-8"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Un premier contact permet de comprendre votre situation, de clarifier votre besoin
                et de déterminer si cet accompagnement est adapté.
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
