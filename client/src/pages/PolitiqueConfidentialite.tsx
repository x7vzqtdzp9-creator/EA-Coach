import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.005_85)]">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "oklch(0.22 0.06 250)" }}
      >
        <div className="container relative z-10 max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-nav text-white/50 hover:text-white mb-8 transition-colors"
            style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
          >
            <ArrowLeft size={13} /> RETOUR À L'ACCUEIL
          </Link>
          <div className="section-label mb-4">Protection des données</div>
          <h1
            className="font-display text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, lineHeight: 1.2 }}
          >
            Politique de confidentialité
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-12 font-body text-[oklch(0.35_0.04_250)]" style={{ fontSize: "1rem", lineHeight: 1.85 }}>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                1. Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement des données personnelles collectées via ce site est <strong>EA Coach</strong>, joignable à l'adresse : <a href="mailto:contact@eacoach.fr" className="text-[oklch(0.55_0.12_235)] hover:text-[oklch(0.72_0.10_78)] transition-colors">contact@eacoach.fr</a>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                2. Données collectées
              </h2>
              <p className="mb-4">
                Dans le cadre de l'utilisation de ce site, EA Coach est susceptible de collecter les données personnelles suivantes :
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "Nom et prénom (via le formulaire de contact)",
                  "Adresse email (via le formulaire de contact)",
                  "Objet de la demande et message libre",
                  "Données de navigation (cookies techniques)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.10_78)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                3. Finalités du traitement
              </h2>
              <p>
                Les données collectées sont utilisées exclusivement pour répondre aux demandes de contact, établir un premier échange et, le cas échéant, proposer un accompagnement de coaching. Elles ne sont en aucun cas cédées, vendues ou transmises à des tiers à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                4. Base légale
              </h2>
              <p>
                Le traitement des données est fondé sur votre consentement explicite, exprimé lors de l'envoi du formulaire de contact, conformément à l'article 6(1)(a) du Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                5. Durée de conservation
              </h2>
              <p>
                Les données collectées via le formulaire de contact sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, sauf obligation légale contraire ou demande de suppression de votre part.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                6. Vos droits
              </h2>
              <p className="mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "Droit d'accès à vos données",
                  "Droit de rectification en cas d'inexactitude",
                  "Droit à l'effacement (droit à l'oubli)",
                  "Droit à la limitation du traitement",
                  "Droit à la portabilité de vos données",
                  "Droit d'opposition au traitement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.10_78)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@eacoach.fr" className="text-[oklch(0.55_0.12_235)] hover:text-[oklch(0.72_0.10_78)] transition-colors">contact@eacoach.fr</a>. Vous disposez également du droit d'introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.12_235)] hover:text-[oklch(0.72_0.10_78)] transition-colors">www.cnil.fr</a>).
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                7. Cookies
              </h2>
              <p>
                Ce site utilise uniquement des cookies techniques strictement nécessaires au bon fonctionnement du site (gestion de session). Aucun cookie publicitaire ou de suivi tiers n'est déposé sans votre consentement préalable.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                8. Sécurité
              </h2>
              <p>
                EA Coach met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, divulgation, altération ou destruction.
              </p>
            </div>

            <div className="pt-4 border-t border-[oklch(0.88_0.01_250)]">
              <p className="text-[oklch(0.60_0.04_250)]" style={{ fontSize: "0.85rem" }}>
                Dernière mise à jour : avril 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
