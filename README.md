# EA Coach — Guide de déploiement

Site vitrine + blog dynamique avec back-office admin pour EA Coach, développé par DA Connexions.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Frontend | React 19 + Vite + Tailwind CSS 4 |
| Backend | Node.js + Express + tRPC |
| Base de données | MySQL (compatible PlanetScale, Railway MySQL, Render MySQL) |
| ORM | Drizzle ORM |
| Auth admin | JWT (email + mot de passe, indépendant de tout service tiers) |
| Formulaire contact | Web3Forms |

---

## Prérequis

- **Node.js v20+** (vérifier avec `node --version`)
- **pnpm v10+** (installer avec `npm install -g pnpm`)
- Une base de données **MySQL** accessible (voir options ci-dessous)

---

## Installation locale

### 1. Cloner et installer les dépendances

```bash
git clone <votre-repo>
cd eacoach-pro
pnpm install
```

### 2. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Éditez `.env` et renseignez les valeurs (voir section Variables d'environnement).

### 3. Initialiser la base de données

```bash
pnpm db:push
```

Cette commande génère et applique les migrations Drizzle sur votre base MySQL.

### 4. Lancer en développement

```bash
pnpm dev
```

Le site est accessible sur `http://localhost:3000`.

### 5. Build de production

```bash
pnpm build
```

### 6. Démarrer en production

```bash
NODE_ENV=production node dist/index.js
```

---

## Variables d'environnement

| Variable | Obligatoire | Description |
|---|---|---|
| `DATABASE_URL` | Oui | URL MySQL : `mysql://user:pass@host:3306/db` |
| `JWT_SECRET` | Oui | Clé secrète pour les cookies JWT admin (min. 32 caractères) |
| `ADMIN_SETUP_KEY` | Oui | Clé pour créer le premier compte admin via `/admin/setup` |
| `NODE_ENV` | Oui | `production` en déploiement |
| `PORT` | Non | Port d'écoute (Railway/Render l'injectent automatiquement) |

---

## Créer le premier compte administrateur

Après le premier déploiement :

1. Rendez-vous sur `https://votre-domaine.com/admin/setup`
2. Remplissez le formulaire avec votre nom, email, mot de passe et la valeur de `ADMIN_SETUP_KEY`
3. Une fois le compte créé, connectez-vous sur `/admin/login`
4. La page `/admin/setup` est automatiquement désactivée après la création du premier compte

---

## Routes disponibles

| Route | Description |
|---|---|
| `/` | Page d'accueil (vitrine) |
| `/blog` | Liste des articles publiés |
| `/blog/:slug` | Article individuel |
| `/mentions-legales` | Mentions légales |
| `/politique-de-confidentialite` | Politique de confidentialité |
| `/admin/login` | Connexion back-office admin |
| `/admin/setup` | Création du premier compte admin (désactivé après) |
| `/admin/blog` | Back-office : gestion des articles (protégé) |

---

## Déploiement sur Railway

Railway est la plateforme recommandée pour ce projet (MySQL + Node.js en un seul service).

### Étapes

1. Créez un compte sur [railway.app](https://railway.app)
2. Créez un nouveau projet et ajoutez un service **MySQL** depuis le catalogue
3. Ajoutez un service **Node.js** et connectez votre dépôt GitHub
4. Dans les variables d'environnement du service Node.js, ajoutez :
   - `DATABASE_URL` : copiez la valeur depuis le service MySQL Railway
   - `JWT_SECRET` : générez avec `openssl rand -hex 32`
   - `ADMIN_SETUP_KEY` : choisissez une valeur secrète
   - `NODE_ENV` : `production`
5. Railway détecte automatiquement `pnpm build` et `node dist/index.js` via `package.json`
6. Cliquez sur **Deploy**

### Commandes Railway détectées automatiquement

```
Build : pnpm build
Start : node dist/index.js
```

---

## Déploiement sur Render

1. Créez un compte sur [render.com](https://render.com)
2. Créez une base de données **MySQL** (ou utilisez PlanetScale)
3. Créez un **Web Service** et connectez votre dépôt GitHub
4. Configurez :
   - **Build Command** : `pnpm install && pnpm build`
   - **Start Command** : `node dist/index.js`
   - **Environment** : `Node`
5. Ajoutez les variables d'environnement dans le panneau Render
6. Cliquez sur **Deploy**

---

## Base de données MySQL recommandée

| Service | Gratuit | Notes |
|---|---|---|
| Railway MySQL | Oui (limité) | Intégré à Railway, le plus simple |
| PlanetScale | Oui (hobby) | MySQL serverless, très fiable |
| Render MySQL | Oui (limité) | Intégré à Render |
| Aiven MySQL | Oui (trial) | Option robuste pour production |

**Format de l'URL de connexion :**
```
mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME
```

---

## Formulaire de contact (Web3Forms)

Le formulaire de contact utilise [Web3Forms](https://web3forms.com) pour envoyer les emails.

1. Créez un compte gratuit sur [web3forms.com](https://web3forms.com)
2. Obtenez votre clé API (Access Key)
3. Dans le code, la clé est lue depuis `import.meta.env.VITE_WEB3FORMS_KEY`
4. Ajoutez `VITE_WEB3FORMS_KEY=votre_cle` dans votre `.env`

> **Note :** Les variables préfixées `VITE_` sont exposées au frontend. Ne mettez jamais de secrets sensibles dans une variable `VITE_`.

---

## Structure du projet

```
client/          ← Frontend React/Vite
  src/
    pages/       ← Pages (Home, Blog, AdminBlog, AdminLogin, etc.)
    components/  ← Composants réutilisables
    lib/         ← Configuration tRPC
server/          ← Backend Express/tRPC
  _core/         ← Infrastructure (context, cookies, env, vite)
  db.ts          ← Helpers base de données
  routers.ts     ← Procédures tRPC (blog, adminAuth)
drizzle/         ← Schéma et migrations MySQL
shared/          ← Types et constantes partagés
```

---

## Développé par

**DA Connexions**
38 rue Denis Rivière, 44610 Indre
Tél : 06 83 74 46 87
Email : contact@da-connexions.fr
Site : [da-connexions.com](https://da-connexions.com)
SIRET : 980 786 172 00018
