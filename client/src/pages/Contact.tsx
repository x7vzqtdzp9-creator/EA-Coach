import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle, Compass, ShieldCheck } from "lucide-react";

const OCEAN_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/ocean-horizon-oPcZ7FkMhHakYajMpcQfV3.webp";

const steps = [
  {
    icon: MessageCircle,
    title: "Premier échange",
    text: "Nous prenons le temps de comprendre votre situation, votre contexte professionnel et les raisons de votre demande.",
  },
  {
    icon: Compass,
    title: "Clarification du besoin",
    text: "Nous identifions les enjeux réels : décision à prendre, transition, posture managériale, coopération ou transformation collective.",
  },
  {
    icon: ShieldCheck,
    title: "Cadre d’accompagnement",
    text: "Si le besoin est confirmé, nous définissons un cadre clair, confidentiel et adapté à votre situation.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[oklch(0.18_0.055_250)]">
      <Navbar variant="dark" />

      <section
        className="pt-40 pb-28 relative overflow-hidden"
        style={{ background: "oklch(0.18 0.055 250)" }}
      >
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `url(${OCEAN_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <div>
                <div className="section-label mb-4">Contact</div>
                <span className="gold-line mb-6" />
                <h1
                  className="font-display text-white mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 500,
                  }}
                >
                  Parlons de votre{" "}
                  <span className="italic text-[oklch(0.72_0.10_78)]">
                    situation professionnelle
                  </span>
                </h1>

                <p
                  className="font-body text-white/70 mb-6 max-w-xl"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Vous souhaitez accompagner une transformation, clarifier une
                  décision, travailler une posture managériale ou ouvrir un
                  espace de recul pour une équipe ?
                </p>

                <p
                  className="font-body text-white/65 mb-10 max-w-xl"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Le premier échange permet de comprendre votre contexte,
                  d’identifier les enjeux prioritaires et de déterminer si un
                  accompagnement par EA Coach est pertinent.
                </p>

                <div className="space-y-5">
                  <a
                    href="mailto:contact@eacoach.fr"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[oklch(0.72_0.10_78)]/40 group-hover:border-[oklch(0.72_0.10_78)] flex items-center justify-center transition-colors duration-200">
                      <Mail
                        className="text-[oklch(0.72_0.10_78)]"
                        size={16}
                      />
                    </div>
                    <div>
                      <div
                        className="font-nav text-white/40"
                        style={{
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                        }}
                      >
                        EMAIL
                      </div>
                      <div
                        className="font-body text-white group-hover:text-[oklch(0.72_0.10_78)] transition-colors duration-200"
                        style={{ fontSize: "1rem" }}
                      >
                        contact@eacoach.fr
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={150}>
              <div
                className="p-8 border border-white/10"
                style={{ background: "oklch(0.22 0.06 250 / 0.6)" }}
              >
                <h2
                  className="font-display text-white mb-4"
                  style={{ fontSize: "1.5rem", fontWeight: 500 }}
                >
                  Envoyez-nous un message
                </h2>
                <p
                  className="font-body text-white/60 mb-6"
                  style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                >
                  Présentez brièvement votre besoin. Nous reviendrons vers vous
                  pour organiser un premier échange.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[oklch(0.97_0.005_85)]">
        <div className="container">
          <AnimatedSection>
            <div className="section-label mb-4">Déroulé</div>
            <span className="gold-line mb-6" />
            <h2
              className="font-display text-[oklch(0.18_0.04_250)] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500 }}
            >
              Un premier contact simple, confidentiel et orienté vers votre contexte réel
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 120}>
                <div className="bg-white border border-[oklch(0.88_0.01_250)] p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-[oklch(0.22_0.06_250)] flex items-center justify-center mb-6">
                    <step.icon className="text-[oklch(0.72_0.10_78)]" size={22} />
                  </div>
                  <h2
                    className="font-display text-[oklch(0.18_0.04_250)] mb-4"
                    style={{ fontSize: "1.3rem", fontWeight: 600 }}
                  >
                    {step.title}
                  </h2>
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
    </div>
  );
}
