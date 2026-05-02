import Navbar from "@/components/Navbar";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function MentionsLegales() {
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
          <div className="section-label mb-4">Informations légales</div>
          <h1
            className="font-display text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 500, lineHeight: 1.2 }}
          >
            Mentions légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-12 font-body text-[oklch(0.35_0.04_250)]" style={{ fontSize: "1rem", lineHeight: 1.85 }}>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                1. Éditeur du site
              </h2>
              <p>
                Le présent site <strong>eacoach.fr</strong> est édité par <strong>DA Connexions</strong>.
              </p>
              <div className="mt-4 pl-4 border-l-2 border-[oklch(0.72_0.10_78)] space-y-1">
                <p><strong>Raison sociale :</strong> DA Connexions</p>
                <p><strong>Adresse :</strong> 38 rue Denis Rivière, 44610 Indre</p>
                <p><strong>Téléphone :</strong> <a href="tel:0683744687" className="text-[oklch(0.55_0.12_235)] hover:text-[oklch(0.72_0.10_78)] transition-colors">06 83 74 46 87</a></p>
                <p><strong>Email :</strong> <a href="mailto:contact@da-connexions.fr" className="text-[oklch(0.55_0.12_235)] hover:text-[oklch(0.72_0.10_78)] transition-colors">contact@da-connexions.fr</a></p>
                <p><strong>SIRET :</strong> 980 786 172 00018</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                2. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication est le représentant d'EA Coach, responsable du contenu éditorial du présent site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                3. Hébergement
              </h2>
              <p>
                Ce site est hébergé par <strong>Railway Corporation</strong>, plateforme d'hébergement et de déploiement d'applications web.
              </p>
              <p className="mt-2">
                Railway Corporation<br />
                548 Market St PMB 68956<br />
                San Francisco, CA 94104<br />
                États-Unis
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                4. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, icônes) est protégé par le droit d'auteur et constitue la propriété exclusive d'EA Coach, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation préalable et écrite d'EA Coach.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                5. Responsabilité
              </h2>
              <p>
                EA Coach s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, EA Coach ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, EA Coach décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                6. Liens hypertextes
              </h2>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites internet. EA Coach n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[oklch(0.18_0.04_250)] mb-4" style={{ fontSize: "1.4rem", fontWeight: 600 }}>
                7. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
