import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import {
  Briefcase,
  Target,
  Heart,
  ArrowRight,
  CheckCircle,
  Users,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Coaching manager",
    href: "/coaching-manager-nantes",
    cta: "Découvrir le coaching manager",
    text: "Accompagnement des managers et chefs de projet confrontés à des difficultés avec leur hiérarchie, leur équipe ou leur posture professionnelle.",
  },
  {
    icon: Users,
    title: "Coaching d’équipe",
    href: "/coaching-equipe-nantes",
    cta: "Découvrir le coaching d’équipe",
    text: "Un accompagnement pour les équipes confrontées à des tensions, des problèmes de communication, une perte de cohésion ou des difficultés de coopération.",
  },
  {
    icon: Briefcase,
    title: "Coaching d’organisation",
    href: "/coaching-organisation-nantes",
    cta: "Découvrir le coaching d’organisation",
    text: "Accompagnement des organisations dans leurs enjeux de transformation, d’alignement collectif, de clarification des rôles et de conduite du changement.",
  },
  {
    icon: Heart,
    title: "Accompagnement solidaire",
    href: "/accompagnement-solidaire",
    cta: "Découvrir l’accompagnement solidaire",
    text: "Des accompagnements accessibles pour les personnes en transition, en recherche d’emploi ou confrontées à des situations professionnelles sensibles.",
  },
];

const contexts = [
  "Difficulté avec sa hiérarchie ou sa direction",
  "Tensions ou conflits dans une équipe",
  "Prise de poste ou évolution de responsabilités",
  "Transformation d’organisation ou changement stratégique",
  "Besoin de recul dans une décision professionnelle importante",
  "Repositionnement professionnel ou transition de carrière",
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <SEOHead
        title="Coaching manager, équipe et organisation à Nantes | EA Coach"
        description="EA Coach accompagne les managers, équipes et organisations à Nantes et à distance partout en France : difficultés hiérarchiques, tensions d’équipe, transformation et posture professionnelle."
      />

      <div className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.14_0.045_250)] shadow-sm">
        <Navbar variant="dark" />
      </div>

      <section className="pt-36 pb-20">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Notre accompagnement</div>
            <span className="gold-line mb-6" />

            <h1
              className="font-display text-[oklch(0.18_0.04_250)] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 500 }}
            >
              Coaching professionnel à Nantes pour managers, équipes et organisations
            </h1>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-6"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              EA Coach accompagne les managers, chefs de projet, équipes et organisations
              confrontés à des situations professionnelles complexes : pression hiérarchique,
              tensions collectives, changement d’organisation ou perte de repères.
            </p>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Les accompagnements sont proposés à Nantes et à distance partout en France.
              L’objectif est de clarifier les situations, renforcer la posture professionnelle
              et construire des actions concrètes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 120}>
                <a href={service.href} className="block h-full no-underline">
                  <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8 h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-[oklch(0.72_0.10_78)] transition-all duration-300">
                    <div className="w-12 h-12 bg-[oklch(0.22_0.06_250)] flex items-center justify-center mb-6">
                      <service.icon className="text-[oklch(0.72_0.10_78)]" size={22} />
                    </div>

                    <h2
                      className="font-display text-[oklch(0.18_0.04_250)] mb-4"
                      style={{ fontSize: "1.4rem", fontWeight: 600 }}
                    >
                      {service.title}
                    </h2>

                    <p
                      className="font-body text-[oklch(0.45_0.04_250)]"
                      style={{ fontSize: "0.98rem", lineHeight: 1.75 }}
                    >
                      {service.text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 font-nav text-[oklch(0.72_0.10_78)]">
                      <span
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "0.12em",
                          fontWeight: 700,
                        }}
                      >
                        {service.cta}
                      </span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Quand faire appel à nous</div>
            <span className="gold-line mb-6" />

            <h2
              className="font-display text-[oklch(0.18_0.04_250)] mb-6 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
            >
              Le coaching professionnel intervient lorsque les repères habituels ne suffisent plus
            </h2>

            <p
              className="font-body text-[oklch(0.40_0.04_250)] max-w-3xl mb-12"
              style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
            >
              Il permet de prendre du recul, de clarifier les enjeux, d’identifier les leviers
              d’action et de retrouver une capacité à décider, coopérer et avancer dans un cadre
              professionnel exigeant.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contexts.map((item, index) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8 h-full">
                <Users className="text-[oklch(0.72_0.10_78)] mb-5" size={30} />

                <h2
                  className="font-display text-[oklch(0.18_0.04_250)] mb-5"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500 }}
                >
                  Accompagner les dynamiques collectives
                </h2>

                <p
                  className="font-body text-[oklch(0.45_0.04_250)] mb-5"
                  style={{ fontSize: "1rem", lineHeight: 1.8 }}
                >
                  EA Coach intervient auprès des organisations confrontées à des enjeux de
                  leadership, de coopération, de transformation ou d’alignement collectif.
                </p>

                <p
                  className="font-body text-[oklch(0.45_0.04_250)]"
                  style={{ fontSize: "1rem", lineHeight: 1.8 }}
                >
                  L’accompagnement permet de clarifier les rôles, d’améliorer les modes de
                  fonctionnement et de renforcer la capacité des équipes à agir ensemble.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8 h-full">
                <Compass className="text-[oklch(0.72_0.10_78)] mb-5" size={30} />

                <h2
                  className="font-display text-[oklch(0.18_0.04_250)] mb-5"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500 }}
                >
                  Travailler une situation en profondeur
                </h2>

                <p
                  className="font-body text-[oklch(0.45_0.04_250)] mb-5"
                  style={{ fontSize: "1rem", lineHeight: 1.8 }}
                >
                  Le coaching manager permet d’analyser une situation professionnelle précise :
                  difficulté avec la hiérarchie, tension avec l’équipe, pression dans le rôle ou
                  besoin de repositionnement.
                </p>

                <p
                  className="font-body text-[oklch(0.45_0.04_250)]"
                  style={{ fontSize: "1rem", lineHeight: 1.8 }}
                >
                  Il peut s’agir d’une décision à prendre, d’un blocage récurrent, d’une évolution
                  de posture managériale ou d’un projet professionnel à clarifier.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.18_0.04_250)]">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="section-label mb-4">Notre exigence</div>
              <span className="gold-line mb-6" />

              <h2
                className="font-display text-white mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
              >
                Une approche orientée vers des résultats concrets
              </h2>

              <p
                className="font-body text-white/80 mb-6"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Le coaching n’est pas un simple espace de discussion. Il vise des effets observables :
                décisions clarifiées, posture renforcée, relations professionnelles apaisées,
                meilleure coopération et capacité d’action accrue.
              </p>

              <p
                className="font-body text-white/80"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                Chaque accompagnement est construit à partir du contexte réel de la personne,
                de l’équipe ou de l’organisation concernée.
              </p>

              <div className="mt-10">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}