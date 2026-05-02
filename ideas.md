# EA Coach — Idées de Design

## Contexte
Site de coaching professionnel pour dirigeants, managers, chefs de projet et particuliers.
Identité visuelle actuelle : bleu marine, phares bretons, mer, "It's in the life".
Slogan : "Ralentir pour accélérer vos transitions"

---

<response>
<text>

## Approche 1 — Minimalisme Éditorial Haut de Gamme

**Design Movement**: Swiss International Style meets Contemporary Editorial
**Core Principles**:
- Typographie comme architecture visuelle principale
- Espaces blancs généreux, respiration maximale
- Hiérarchie visuelle stricte et intentionnelle
- Sobriété chromatique avec un seul accent fort

**Color Philosophy**: Fond blanc cassé (ivoire chaud), texte anthracite profond, accent unique bleu marine ICF (#1A2E5A). La couleur est utilisée avec parcimonie pour créer un impact maximal — un seul élément coloré par section.

**Layout Paradigm**: Grille asymétrique à 12 colonnes. Les titres débordent volontairement sur les images. Les sections alternent entre pleine largeur et contenu centré étroit (max 720px). Pas de centrage systématique.

**Signature Elements**:
- Lignes fines horizontales comme séparateurs de sections
- Numérotation des sections en petites capitales (01, 02, 03...)
- Citations en très grand corps typographique (display 80px+)

**Interaction Philosophy**: Transitions lentes et élégantes (600ms ease). Hover sur les liens : soulignement animé de gauche à droite. Scroll reveal discret.

**Animation**: Fade-in au scroll avec légère translation verticale (+20px → 0). Pas d'animations spectaculaires. Curseur personnalisé optionnel.

**Typography System**:
- Display/Titres : Cormorant Garamond (serif élégant, poids 300-700)
- Corps : DM Sans (sans-serif moderne, lisible)
- Accents : Cormorant Garamond Italic pour les citations

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Approche 2 — Modernité Maritime Sophistiquée ✓ CHOISIE

**Design Movement**: Contemporary Coastal Luxury — inspiré des cabinets de conseil haut de gamme avec une identité maritime bretonne assumée
**Core Principles**:
- Profondeur et texture : superposition de couches visuelles (images, overlays, typographie)
- Ancrage identitaire fort : la mer comme métaphore du coaching (navigation, horizon, phare)
- Contraste dramatique entre sections sombres (hero) et sections claires (contenu)
- Mouvement subtil qui évoque la fluidité de l'eau

**Color Philosophy**: Palette tricolore précise :
- Bleu nuit profond : oklch(0.22 0.06 250) — ancrage, profondeur
- Blanc nacré : oklch(0.98 0.005 85) — clarté, espace
- Or champagne : oklch(0.78 0.08 85) — excellence, distinction
Accent : bleu ciel lumineux oklch(0.65 0.12 235) pour les CTA

**Layout Paradigm**: Sections en pleine largeur alternant dark/light. Hero immersif avec image plein écran et texte ancré en bas à gauche (pas centré). Navigation latérale fixe sur desktop. Cards en disposition décalée (offset grid).

**Signature Elements**:
- Ligne dorée fine comme séparateur de prestige
- Texte en surimpression sur images avec overlay gradient directionnel
- Icônes minimalistes style "trait de crayon" pour les services

**Interaction Philosophy**: Parallax subtil sur le hero. Hover sur les cards : légère élévation avec ombre portée. CTA avec effet de remplissage de gauche à droite.

**Animation**: Framer Motion pour les entrées en scroll. Hero : texte qui monte depuis le bas (translateY 40px → 0, opacity 0 → 1, 800ms). Cards : stagger d'apparition (délai 100ms entre chaque).

**Typography System**:
- Titres : Playfair Display (serif dramatique, poids 400-700)
- Corps : Source Sans 3 (lisible, professionnel)
- Navigation : Montserrat (géométrique, autorité)

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Approche 3 — Brutalisme Doux & Organique

**Design Movement**: Soft Brutalism meets Organic Modernism
**Core Principles**:
- Formes organiques et asymétriques (blobs, courbes)
- Typographie expressive et surdimensionnée
- Couleurs terreuses et naturelles évoquant la croissance
- Structure visible mais humanisée

**Color Philosophy**: Palette naturelle et chaleureuse :
- Vert sauge profond : oklch(0.45 0.08 155)
- Crème chaud : oklch(0.95 0.02 85)
- Terracotta doux : oklch(0.65 0.12 40)
Évoque la croissance, la nature, la transformation organique.

**Layout Paradigm**: Sections avec formes SVG en arrière-plan. Texte qui contourne les formes. Grille intentionnellement brisée. Éléments qui "sortent" de leurs conteneurs.

**Signature Elements**:
- Formes blob en arrière-plan des sections
- Texte en très grand corps qui déborde sur les images
- Bordures irrégulières entre sections (vagues SVG)

**Interaction Philosophy**: Hover sur les éléments : transformation des formes blob (morphing). Curseur personnalisé. Micro-animations sur les icônes.

**Animation**: Morphing des formes SVG au scroll. Texte qui se révèle lettre par lettre sur les titres principaux.

**Typography System**:
- Titres : Fraunces (serif expressif, variable)
- Corps : Plus Jakarta Sans
- Accents : Fraunces Italic

</text>
<probability>0.06</probability>
</response>

---

## Décision finale : Approche 2 — Modernité Maritime Sophistiquée

Cette approche est la plus cohérente avec l'identité existante d'EA Coach (mer, phares, Bretagne) tout en apportant un niveau de sophistication et de professionnalisme nettement supérieur au site actuel. Elle permet de conserver l'ADN de la marque tout en la projetant dans une dimension premium.
