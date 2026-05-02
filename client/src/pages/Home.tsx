/*
 * Home — EA Coach
 * Design: Modernité Maritime Sophistiquée
 * Sections: Hero, À propos, Accompagnement, Ils nous inspirent, Contact, Footer
 */
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Anchor,
  Users,
  Target,
  Compass,
  ChevronDown,
  Mail,
  ExternalLink,
  Award,
  Heart,
  Briefcase,
  Star,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

// ─── Image URLs ────────────────────────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/hero-lighthouse-2zpPnYCqXuNGHKvhGCZ7B6.webp";
const COACHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/photo3-quisommesnous_904a729c.webp";
const OCEAN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/ocean-horizon-oPcZ7FkMhHakYajMpcQfV3.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/team-coaching-MbotKYaVjDSEk6tmwaGRXo.webp";
const ACCOMPAGNEMENT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/photo1-accompagnement_a2520f47.webp";
const INSPIRENT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663472225823/ULKbiWFKnnCsha4Yi56dYZ/photo2-inspirent_ff60ab9e.webp";

// ─── Data ──────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Briefcase,
    title: "Coaching d'entreprise",
    subtitle: "Dirigeants & Comités de Direction",
    description:
      "Nous accompagnons les directions générales, DRH, membres de comités de direction, managers et chefs de projet dans leurs enjeux de transformation. Notre réseau de coachs partenaires expérimentés vous propose des prestations adaptées quelle que soit la taille de votre organisation.",
    tag: "Entreprises",
  },
  {
    icon: Target,
    title: "Coaching individuel",
    subtitle: "Particuliers & Indépendants",
    description:
      "Vous cherchez à réussir un projet professionnel ambitieux ? Nous vous proposons un premier échange pour préciser votre demande, puis vous mettons en relation avec 3 coachs de notre réseau. C'est vous qui choisissez celui ou celle qui vous convient le mieux.",
    tag: "Particuliers",
  },
  {
    icon: Heart,
    title: "Accompagnement solidaire",
    subtitle: "Situations éloignées de l'emploi",
    description:
      "Nous croyons que le coaching doit être accessible à tous. Si vous êtes dans une situation éloignée de l'emploi, vous pouvez potentiellement bénéficier d'un accompagnement bénévole avec des associations partenaires.",
    tag: "Solidarité",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence & Déontologie",
    description:
      "Nos coachs sont formés dans les meilleures écoles françaises et internationales et respectent la déontologie de la Fédération Internationale de Coaching (ICF).",
  },
  {
    icon: Compass,
    title: "Approche transdisciplinaire",
    description:
      "Notre philosophie s'ancre dans le monde du vivant — l'Excellence du leadership du vivant® — pour faire émerger des idées nouvelles et se renouveler sans cesse.",
  },
  {
    icon: Users,
    title: "Réseau d'experts",
    description:
      "Un réseau de coachs partenaires intervenant sur toute la France Métropolitaine et d'outre-mer, pour vous proposer le profil le plus adapté à vos besoins.",
  },
  {
    icon: Anchor,
    title: "Engagement durable",
    description:
      "Les séances sont espacées de 3 à 6 semaines pour vous permettre de tester de nouvelles solutions entre chaque rencontre et ancrer durablement les changements.",
  },
];

const inspirations = [
  {
    name: "International Mozaïk",
    description:
      "Ecole de référence pour l'excellence du leadership du vivant®. Une philosophie qui nourrit notre approche du coaching et de la transformation.",
    url: "http://mozaik.fr/",
    icon: Star,
  },
  {
    name: "Un Coach à la Une",
    description:
      "Podcast dédié au coaching professionnel, où des coachs partagent leur vision, leurs méthodes et leurs expériences de terrain.",
    url: "https://www.podcastics.com/podcast/un-coach-a-la-une/",
    icon: Anchor,
  },
  {
    name: "Fabrice Thomas — Peinture",
    description:
      "L'art comme source d'inspiration transdisciplinaire. La créativité picturale nourrit notre capacité à voir autrement et à innover.",
    url: "https://fabricethomas.tumblr.com",
    icon: Heart,
  },
];

const quotes = [
  {
    text: "Le coaching, c'est l'art d'accompagner quelqu'un à trouver ses propres réponses.",
    author: "Philosophie EA Coach",
  },
  {
    text: "Ralentir pour accélérer vos transitions.",
    author: "Slogan EA Coach",
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-end overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.12 0.05 250) 0%, oklch(0.18 0.06 250 / 0.7) 40%, oklch(0.22 0.06 250 / 0.3) 100%)",
          }}
        />

        {/* Content — anchored bottom-left */}
        <div className="container relative z-10 pb-24 pt-32">
          <div className="max-w-3xl">
            <div className="section-label mb-6">Réseau de coachs professionnels</div>
            <h1
              className="font-display text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1, fontWeight: 500 }}
            >
              Ralentir pour{" "}
              <span className="italic text-[oklch(0.72_0.10_78)]">accélérer</span>
              <br />
              vos transitions
            </h1>
            <p
              className="font-body text-white/75 mb-10 max-w-xl"
              style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
            >
              EA Coach est un réseau de coachs expérimentés qui vous accompagnent
              pour réussir à agir différemment et améliorer vos résultats — dirigeants,
              managers, chefs de projet, équipes et particuliers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#accompagnement"
                className="font-nav text-[oklch(0.18_0.04_250)] bg-[oklch(0.72_0.10_78)] hover:bg-[oklch(0.78_0.08_85)] px-8 py-4 transition-all duration-300 flex items-center gap-3"
                style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 700 }}
              >
                NOTRE ACCOMPAGNEMENT
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="font-nav text-white border border-white/40 hover:border-white px-8 py-4 transition-all duration-300"
                style={{ fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 600 }}
              >
                NOUS CONTACTER
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#qui-sommes-nous"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 z-10"
        >
          <span className="font-nav" style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}>
            DÉCOUVRIR
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ── QUI SOMMES-NOUS ───────────────────────────────────────────────────── */}
      <section id="qui-sommes-nous" className="py-28 bg-[oklch(0.97_0.005_85)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={COACHING_IMG}
                  alt="Phares bretons — EA Coach"
                  className="w-full object-cover"
                  style={{ height: "520px", objectPosition: "center center" }}
                />
                {/* Decorative frame */}
                <div
                  className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-[oklch(0.72_0.10_78)] -z-10"
                />
                {/* Stats badge */}
                <div
                  className="absolute -top-6 -left-6 bg-[oklch(0.22_0.06_250)] text-white p-6"
                  style={{ minWidth: "140px" }}
                >
                  <div
                    className="font-display text-[oklch(0.72_0.10_78)]"
                    style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}
                  >
                    ICF
                  </div>
                  <div
                    className="font-nav text-white/70 mt-1"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.1em" }}
                  >
                    CERTIFIÉS
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection direction="right" delay={150}>
              <div>
                <div className="section-label mb-4">Qui sommes-nous ?</div>
                <span className="gold-line mb-6" />
                <h2
                  className="font-display text-[oklch(0.18_0.04_250)] mb-6"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 500 }}
                >
                  Un réseau de coachs{" "}
                  <span className="italic">expérimentés</span>
                </h2>
                <p
                  className="font-body text-[oklch(0.40_0.04_250)] mb-6"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8, textAlign: 'justify' }}
                >
                  EA Coach accompagne des dirigeants, des managers, des chefs de
                  projet, des équipes, des entreprises, des indépendants et des
                  particuliers qui font face à des défis nécessitant des changements
                  profonds.
                </p>
                <p
                  className="font-body text-[oklch(0.40_0.04_250)] mb-5"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8, textAlign: 'justify' }}
                >
                  Nos carrières professionnelles en tant qu'indépendants et en entreprises sont extrêmement variées ce qui nous permet de proposer des accompagnements qui s'adaptent à vos enjeux et vos défis.
                </p>
                <p
                  className="font-body text-[oklch(0.40_0.04_250)] mb-5"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8, textAlign: 'justify' }}
                >
                  Nous nous engageons à inscrire notre pratique de coach dans le cadre déontologique de la fédération internationale de coaching (ICF).
                </p>
                <p
                  className="font-body text-[oklch(0.40_0.04_250)] mb-8"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8, textAlign: 'justify' }}
                >
                  Nous sommes supervisés par des experts reconnus du coaching (coordonnées et références des superviseurs disponibles sur demandes).
                </p>

                {/* Values grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Coachs certifiés ICF", value: "Réseau" },
                    { label: "France entière + DOM-TOM", value: "Présence" },
                    { label: "Dirigeants, managers, particuliers", value: "Publics" },

                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-[oklch(0.72_0.10_78)] pl-4">
                      <div
                        className="font-nav text-[oklch(0.22_0.06_250)] font-semibold"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {item.value}
                      </div>
                      <div
                        className="font-body text-[oklch(0.55_0.04_250)]"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#accompagnement"
                  className="inline-flex items-center gap-3 font-nav text-[oklch(0.22_0.06_250)] border-b-2 border-[oklch(0.72_0.10_78)] pb-1 hover:text-[oklch(0.72_0.10_78)] transition-colors duration-200"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.12em", fontWeight: 600 }}
                >
                  NOTRE ACCOMPAGNEMENT
                  <ArrowRight size={13} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── VALEURS ───────────────────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "oklch(0.22 0.06 250)" }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${OCEAN_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Notre philosophie</div>
              <span className="gold-line mx-auto mb-6" />
              <h2
                className="font-display text-white"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500 }}
              >
                Ce qui nous distingue
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="group text-center">
                  <div className="w-14 h-14 border border-[oklch(0.72_0.10_78)]/40 group-hover:border-[oklch(0.72_0.10_78)] flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                    <value.icon
                      className="text-[oklch(0.72_0.10_78)]"
                      size={22}
                    />
                  </div>
                  <h3
                    className="font-display text-white mb-3"
                    style={{ fontSize: "1.1rem", fontWeight: 500 }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="font-body text-white/60"
                    style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
                  >
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCOMPAGNEMENT ────────────────────────────────────────────────────── */}
      <section id="accompagnement" className="py-28 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${ACCOMPAGNEMENT_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Overlay to keep text readable */}
        <div
          className="absolute inset-0"
          style={{
            background: "oklch(0.97 0.005 85 / 0.82)",
          }}
        />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mb-16">
              <div className="section-label mb-4">Notre accompagnement professionnel</div>
              <span className="gold-line mb-6" />
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <h2
                  className="font-display text-[oklch(0.18_0.04_250)] max-w-xl"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500 }}
                >
                  Faites appel à un{" "}
                  <span className="italic text-[oklch(0.55_0.12_235)]">coach</span>
                </h2>
                <p
                  className="font-body text-[oklch(0.50_0.04_250)] max-w-sm"
                  style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                >
                  Chaque accompagnement est unique, adapté à votre situation et à vos
                  enjeux de transformation.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 120}>
                <div
                  className="group bg-white border border-[oklch(0.88_0.01_250)] hover:border-[oklch(0.72_0.10_78)] p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                  style={{ height: '389px' }}
                >
                  {/* Tag */}
                  <div
                    className="absolute top-0 right-0 bg-[oklch(0.22_0.06_250)] text-[oklch(0.72_0.10_78)] px-4 py-1.5 font-nav"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
                  >
                    {service.tag.toUpperCase()}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[oklch(0.93_0.01_85)] group-hover:bg-[oklch(0.72_0.10_78)]/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <service.icon
                      className="text-[oklch(0.22_0.06_250)] group-hover:text-[oklch(0.72_0.10_78)] transition-colors duration-300"
                      size={20}
                    />
                  </div>

                  <h3
                    className="font-display text-[oklch(0.18_0.04_250)] mb-1"
                    style={{ fontSize: "1.3rem", fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <div
                    className="font-nav text-[oklch(0.72_0.10_78)] mb-4"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}
                  >
                    {service.subtitle}
                  </div>
                  <p
                    className="font-body text-[oklch(0.45_0.04_250)]"
                    style={{ fontSize: "0.95rem", lineHeight: 1.75, textAlign: 'justify' }}
                  >
                    {service.description}
                  </p>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[oklch(0.72_0.10_78)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ── CITATION + ILS NOUS INSPIRENT ─────────────────────────────────── */}
      <section id="inspirent" className="relative overflow-hidden">
        {/* Shared background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${INSPIRENT_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.10 0.04 250 / 0.75)" }}
        />

        {/* ── Citation block ── */}
        <div className="relative z-10 py-32" style={{height: '480px', display: 'flex', alignItems: 'center'}}>
          <div className="container">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div
                  className="font-display text-[oklch(0.72_0.10_78)] italic mb-6"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.3, fontWeight: 400 }}
                >
                  "Le coaching, c'est l'art d'accompagner quelqu'un à trouver ses
                  propres réponses."
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Ils nous inspirent block ── */}
        <div className="relative z-10 pb-28">
          <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="section-label mb-4">Ils nous inspirent</div>
              <span className="gold-line mx-auto mb-6" />
              <h2
                className="font-display text-white max-w-xl mx-auto"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500 }}
              >
                Une approche{" "}
                <span className="italic text-[oklch(0.72_0.10_78)]">transdisciplinaire</span>
              </h2>
              <p
                className="font-body text-[oklch(0.85_0.02_250)] max-w-2xl mx-auto mt-4"
                style={{ fontSize: "1rem", lineHeight: 1.8 }}
              >
                L'approche transdisciplinaire du coaching par EA Coach n'aurait pu être
                ce qu'elle est sans des rencontres et des échanges féconds permettant de
                faire émerger des idées et sans cesse se renouveler.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inspirations.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 120}>
                <div className="group bg-white border border-[oklch(0.88_0.01_250)] hover:border-[oklch(0.72_0.10_78)] p-8 transition-all duration-300 hover:shadow-lg flex flex-col" style={{height: '330px'}}>
                  <div className="w-12 h-12 bg-[oklch(0.22_0.06_250)] flex items-center justify-center mb-6 shrink-0">
                    <item.icon className="text-[oklch(0.72_0.10_78)]" size={20} />
                  </div>
                  <h3
                    className="font-display text-[oklch(0.18_0.04_250)] mb-3 shrink-0"
                    style={{ fontSize: "1.2rem", fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="font-body text-[oklch(0.50_0.04_250)] flex-1"
                    style={{ fontSize: "0.95rem", lineHeight: 1.75, textAlign: 'justify' }}
                  >
                    {item.description}
                  </p>
                  <div className="mt-4 shrink-0">
                    {item.url !== "#" ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-nav text-[oklch(0.55_0.12_235)] hover:text-[oklch(0.72_0.10_78)] transition-colors duration-200"
                        style={{ fontSize: "0.7rem", letterSpacing: "0.1em", fontWeight: 600 }}
                      >
                        VISITER LE SITE
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span style={{ display: "block", height: "1rem" }} />
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 relative overflow-hidden"
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
            {/* Left — Info */}
            <AnimatedSection direction="left">
              <div>
                <div className="section-label mb-4">Contact</div>
                <span className="gold-line mb-6" />
                <h2
                  className="font-display text-white mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500 }}
                >
                  Commençons par{" "}
                  <span className="italic text-[oklch(0.72_0.10_78)]">un échange</span>
                </h2>
                <p
                  className="font-body text-white/65 mb-10"
                  style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
                >
                  Prenez contact avec nous pour identifier vos sujets de
                  préoccupation et vos enjeux de transformation. Nous vous
                  proposerons un premier échange qui permettra de préciser votre
                  demande.
                </p>

                {/* Contact details */}
                <div className="space-y-5">
                  <a
                    href="mailto:contact@eacoach.fr"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[oklch(0.72_0.10_78)]/40 group-hover:border-[oklch(0.72_0.10_78)] flex items-center justify-center transition-colors duration-200">
                      <Mail className="text-[oklch(0.72_0.10_78)]" size={16} />
                    </div>
                    <div>
                      <div
                        className="font-nav text-white/40"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
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

            {/* Right — Form */}
            <AnimatedSection direction="right" delay={150}>
              <div
                className="p-8 border border-white/10"
                style={{ background: "oklch(0.22 0.06 250 / 0.6)" }}
              >
                <h3
                  className="font-display text-white mb-6"
                  style={{ fontSize: "1.4rem", fontWeight: 500 }}
                >
                  Envoyez-nous un message
                </h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer
        style={{ background: "oklch(0.14 0.045 250)" }}
        className="py-12"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span
                  className="font-display text-white font-bold leading-none"
                  style={{ fontSize: "1.8rem" }}
                >
                  EA
                </span>
                <span
                  className="font-nav text-[oklch(0.72_0.10_78)] font-semibold leading-none"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.3em" }}
                >
                  COACH
                </span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <span
                className="font-body text-white/40 italic"
                style={{ fontSize: "0.8rem" }}
              >
                It's in the life
              </span>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Qui sommes-nous ?", href: "#qui-sommes-nous" },
                { label: "Accompagnement", href: "#accompagnement" },
                { label: "Ils nous inspirent", href: "#inspirent" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-nav text-white/50 hover:text-white transition-colors duration-200"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p
              className="font-body text-white/30 text-center md:text-left"
              style={{ fontSize: "0.8rem" }}
            >
              Réseau de coachs pour le coaching des dirigeants, managers et chefs de projet.
              <br />
              Nos coachs partenaires interviennent sur toute la France Métropolitaine et d'outre-mer.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/mentions-legales"
                className="font-nav text-white/30 hover:text-white/60 transition-colors duration-200"
                style={{ fontSize: "0.72rem" }}
              >
                Mentions légales
              </a>
              <a
                href="/politique-de-confidentialite"
                className="font-nav text-white/30 hover:text-white/60 transition-colors duration-200"
                style={{ fontSize: "0.72rem" }}
              >
                Politique de confidentialité
              </a>
              <p
                className="font-nav text-white/20"
                style={{ fontSize: "0.72rem" }}
              >
                © 2024-2026 EA Coach
              </p>
              <a
                href="https://da-connexions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nav text-white/20 hover:text-white/50 transition-colors duration-200"
                style={{ fontSize: "0.72rem" }}
              >
                Designed by DA Connexions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
