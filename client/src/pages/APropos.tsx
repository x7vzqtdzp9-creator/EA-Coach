import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Award,
  Compass,
  Users,
  ShieldCheck,
  Network,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Exigence professionnelle",
    text: "Une pratique structurée, supervisée et fondée sur une éthique claire, pour garantir un cadre d’accompagnement sérieux et sécurisé.",
  },
  {
    icon: Compass,
    title: "Approche transdisciplinaire",
    text: "Une vision du coaching nourrie par l’expérience, le vivant, la complexité des organisations et les réalités concrètes du terrain.",
  },
  {
    icon: Users,
    title: "Réseau de coachs",
    text: "Des profils variés pour proposer l’accompagnement le plus adapté à chaque contexte : dirigeant, manager, équipe ou personne en transition.",
  },
];

const commitments = [
  "Un cadre de travail clair dès le début de l’accompagnement",
  "Une posture d’écoute, de questionnement et de confrontation constructive",
  "Une attention portée aux enjeux humains, relationnels et organisationnels",
  "Une démarche respectueuse de la confidentialité et de la responsabilité de chacun",
];

export default function APropos() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.14_0.045_250)] shadow-sm">
        <Navbar variant="dark" />
      </div>

      <section className="pt-36 pb-20">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">À propos</div>
            <span className="gold-line mb-6" />
            <h1
              className="font-display text-[oklch(0.18_0.04_250)] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 500 }}
            >
              Un réseau de coachs professionnels au service des transitions humaines et collectives
            </h1>
            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-6"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              EA Coach réunit des coachs partenaires engagés dans une pratique exigeante,
              supervisée et respectueuse du cadre déontologique de la Fédération Internationale
              de Coaching.
            </p>
            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Notre rôle est d’accompagner les dirigeants, managers, équipes et personnes en
              transition lorsqu’une situation professionnelle demande de la clarté, du recul
              et une mise en mouvement concrète.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {pillars.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 120}>
                <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-[oklch(0.22_0.06_250)] flex items-center justify-center mb-6">
                    <item.icon className="text-[oklch(0.72_0.10_78)]" size={22} />
                  </div>
                  <h2
                    className="font-display text-[oklch(0.18_0.04_250)] mb-4"
                    style={{ fontSize: "1.3rem", fontWeight: 600 }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="font-body text-[oklch(0.45_0.04_250)]"
                    style={{ fontSize: "0.98rem", lineHeight: 1.75 }}
                  >
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <AnimatedSection>
              <div>
                <div className="section-label mb-4">Notre vision</div>
                <span className="gold-line mb-6" />
                <h2
                  className="font-display text-[oklch(0.18_0.04_250)] mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
                >
                  Accompagner sans imposer de modèle préfabriqué
                </h2>
                <p
                  className="font-body text-[oklch(0.40_0.04_250)] mb-5"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Nous ne considérons pas le coaching comme une méthode standardisée applicable
                  à toutes les situations. Chaque accompagnement part du contexte réel : histoire
                  de l’organisation, dynamique d’équipe, niveau de responsabilité, tensions
                  existantes et objectifs recherchés.
                </p>
                <p
                  className="font-body text-[oklch(0.40_0.04_250)]"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Cette approche permet de travailler les sujets au bon niveau : posture,
                  coopération, décision, transition, leadership ou clarification d’un projet
                  professionnel.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="bg-[oklch(0.97_0.005_85)] border border-[oklch(0.88_0.01_250)] p-8">
                <ShieldCheck className="text-[oklch(0.72_0.10_78)] mb-5" size={30} />
                <h2
                  className="font-display text-[oklch(0.18_0.04_250)] mb-5"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 500 }}
                >
                  Un cadre éthique et confidentiel
                </h2>
                <p
                  className="font-body text-[oklch(0.45_0.04_250)]"
                  style={{ fontSize: "1rem", lineHeight: 1.8 }}
                >
                  L’accompagnement repose sur la confidentialité, la clarté du cadre, la
                  responsabilité du coaché et la qualité de la relation de travail. Ce cadre
                  protège la parole, tout en maintenant une exigence de progression concrète.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Nos engagements</div>
            <span className="gold-line mb-6" />
            <h2
              className="font-display text-[oklch(0.18_0.04_250)] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
            >
              Une pratique du coaching professionnelle, responsable et adaptée à chaque situation
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((item, index) => (
              <AnimatedSection key={item} delay={index * 80}>
                <div className="flex gap-4 items-start bg-white border border-[oklch(0.88_0.01_250)] p-6">
                  <Network
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

      <section className="py-20 bg-[oklch(0.18_0.04_250)]">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="section-label mb-4">Travailler avec EA Coach</div>
              <span className="gold-line mb-6" />
              <h2
                className="font-display text-white mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
              >
                Choisir un accompagnement ajusté à votre contexte
              </h2>
              <p
                className="font-body text-white/80 mb-8"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Le premier échange permet de comprendre votre situation, d’identifier vos enjeux
                et de déterminer le type d’accompagnement le plus pertinent.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] px-8 py-4"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  fontWeight: 700,
                }}
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
