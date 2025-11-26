# Guide de Déploiement Netlify - IMAAD Financial Group

Ce guide vous explique comment déployer le site IMAAD Financial Group sur Netlify.

## Prérequis

- Compte GitHub avec le repository du projet
- Compte Netlify (gratuit) : https://app.netlify.com/signup
- Node.js 20 ou supérieur installé localement

## Configuration du Projet

### 1. Fichiers de Configuration

Le projet est déjà configuré pour Netlify avec :

- ✅ **netlify.toml** : Configuration de build et redirections
- ✅ **nuxt.config.ts** : `preset: 'netlify'` configuré
- ✅ **package.json** : Scripts de build configurés

### 2. Structure de Déploiement

```
nuxt-app/
├── netlify.toml           # Configuration Netlify
├── nuxt.config.ts         # Configuration Nuxt avec preset Netlify
├── .output/              # Dossier de build (généré automatiquement)
│   ├── public/           # Assets statiques
│   └── server/           # Fonctions serverless
└── package.json
```

## Déploiement sur Netlify

### Option 1 : Déploiement via GitHub (Recommandé)

#### Étape 1 : Préparer le Repository GitHub

1. Assurez-vous que votre code est poussé sur GitHub
2. Vérifiez que tous les fichiers nécessaires sont commités

```bash
git add .
git commit -m "Prêt pour déploiement Netlify"
git push origin main
```

#### Étape 2 : Créer un Site Netlify

1. Connectez-vous à https://app.netlify.com
2. Cliquez sur **"Add new site"** > **"Import an existing project"**
3. Choisissez **GitHub** comme provider
4. Autorisez Netlify à accéder à votre compte GitHub
5. Sélectionnez le repository **nuxt-app**

#### Étape 3 : Configurer le Build

Netlify détectera automatiquement la configuration depuis `netlify.toml`, mais vérifiez :

- **Base directory** : `nuxt-app` (ou laissez vide si le repo est déjà dans nuxt-app)
- **Build command** : `npm run build` (auto-détecté)
- **Publish directory** : `.output/public` (auto-détecté)
- **Functions directory** : `.output/server` (auto-détecté)

#### Étape 4 : Variables d'Environnement (Optionnel)

Si vous avez des variables d'environnement :

1. Allez dans **Site settings** > **Environment variables**
2. Ajoutez vos variables :
   - `NODE_VERSION` : `20` (déjà dans netlify.toml)
   - `NODE_OPTIONS` : `--max-old-space-size=4096` (déjà dans netlify.toml)

#### Étape 5 : Déployer

1. Cliquez sur **"Deploy site"**
2. Attendez que le build se termine (3-5 minutes)
3. Une fois terminé, votre site sera disponible sur une URL type : `https://random-name-123456.netlify.app`

### Option 2 : Déploiement via Netlify CLI

#### Installation de la CLI

```bash
npm install -g netlify-cli
```

#### Login Netlify

```bash
netlify login
```

#### Build et Déploiement

```bash
# Build le projet
npm run build

# Déployer en preview
netlify deploy

# Déployer en production
netlify deploy --prod
```

## Configuration du Domaine Personnalisé

### 1. Ajouter un Domaine

1. Dans Netlify, allez dans **Site settings** > **Domain management**
2. Cliquez sur **"Add custom domain"**
3. Entrez votre domaine : `www.imaadcapitalpartners.com`

### 2. Configurer les DNS

Chez votre registrar de domaine, configurez :

**Option A : CNAME (Recommandé)**
```
www.imaadcapitalpartners.com  →  CNAME  →  votre-site.netlify.app
```

**Option B : A Record + ALIAS**
```
imaadcapitalpartners.com  →  A  →  75.2.60.5
www                        →  CNAME  →  votre-site.netlify.app
```

### 3. Activer HTTPS

1. Dans **Domain settings** > **HTTPS**
2. Cliquez sur **"Verify DNS configuration"**
3. Une fois vérifié, cliquez sur **"Provision certificate"**
4. Le certificat SSL sera automatiquement généré (quelques minutes)

## Fonctionnalités Configurées

### ✅ SSR (Server-Side Rendering)

- Le site utilise SSR pour de meilleures performances SEO
- Les pages sont générées côté serveur puis hydratées côté client

### ✅ Internationalisation (i18n)

- Support de 3 langues : Français (défaut), Anglais, Portugais
- URLs localisées :
  - Français : `https://votre-site.com/`
  - Anglais : `https://votre-site.com/en/`
  - Portugais : `https://votre-site.com/pt/`

### ✅ Redirections Automatiques

- Les redirections i18n sont gérées automatiquement
- Détection de la langue du navigateur
- Fallback vers la langue par défaut (français)

### ✅ Headers de Sécurité

Headers configurés dans `netlify.toml` :
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `Permissions-Policy` pour limiter les permissions

### ✅ Cache Optimisé

Configuration de cache pour performance :
- **Assets statiques** (`/_nuxt/*`, `/assets/*`) : 1 an, immutable
- **Images** (`/images/*`) : 1 jour
- **JS/CSS** (`*.js`, `*.css`) : 1 an, immutable

## Déploiement Automatique (CI/CD)

Une fois configuré avec GitHub, Netlify déploie automatiquement :

- ✅ **Branch principale** (`main`) → Production
- ✅ **Pull Requests** → Preview deployments
- ✅ **Autres branches** → Preview deployments

Chaque commit déclenche un nouveau build automatique.

## Monitoring et Logs

### Vérifier les Builds

1. Dans Netlify Dashboard, allez dans **Deploys**
2. Cliquez sur un deploy pour voir les logs détaillés
3. Vérifiez les étapes :
   - ✅ Build command
   - ✅ Functions build
   - ✅ Deploy summary

### Analytics (Optionnel)

Activez **Netlify Analytics** dans **Site settings** > **Analytics** pour :
- Statistiques de trafic
- Performance metrics
- Bande passante utilisée

## Rollback

Pour revenir à une version précédente :

1. Allez dans **Deploys**
2. Trouvez le deploy précédent
3. Cliquez sur **"Publish deploy"**
4. Le site reviendra instantanément à cette version

## Tests Avant Production

### Build Local

```bash
# Installer les dépendances
npm install

# Build production
npm run build

# Tester le build localement
npm run preview
```

### Preview Deployments

1. Créez une branche de test
2. Poussez vos changements
3. Netlify créera automatiquement un preview deployment
4. Testez sur l'URL de preview avant de merger dans main

## Troubleshooting

### Build Failed

**Problème** : Le build échoue sur Netlify

**Solutions** :
1. Vérifiez que `NODE_VERSION=20` est configuré
2. Vérifiez les logs de build dans Netlify
3. Testez le build localement : `npm run build`
4. Vérifiez que toutes les dépendances sont dans `package.json`

### 404 sur les Routes

**Problème** : 404 sur les routes après refresh

**Solution** : Vérifiez que `netlify.toml` contient :
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### i18n Ne Fonctionne Pas

**Problème** : Les URLs localisées ne fonctionnent pas

**Solution** : Vérifiez les redirections i18n dans `netlify.toml` :
```toml
[[redirects]]
  from = "/pt/*"
  to = "/pt/:splat"
  status = 200

[[redirects]]
  from = "/en/*"
  to = "/en/:splat"
  status = 200
```

### Images Ne Se Chargent Pas

**Problème** : Les images ne s'affichent pas en production

**Solutions** :
1. Vérifiez que les images sont dans `public/`
2. Utilisez des chemins absolus : `/images/photo.jpg`
3. Ou utilisez `@nuxt/image` avec `<NuxtImg>`

## Performance

### Lighthouse Score Attendu

Avec cette configuration, vous devriez obtenir :
- 🟢 Performance : 90-100
- 🟢 Accessibility : 90-100
- 🟢 Best Practices : 90-100
- 🟢 SEO : 90-100

### Optimisations Incluses

- ✅ Code splitting automatique
- ✅ Lazy loading des composants
- ✅ Images optimisées avec @nuxt/image
- ✅ CSS minifié
- ✅ Tree-shaking
- ✅ Preload/Prefetch des ressources critiques
- ✅ Cache agressif des assets statiques

## Support

### Documentation

- [Nuxt Deployment](https://nuxt.com/docs/getting-started/deployment)
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify + Nuxt](https://docs.netlify.com/integrations/frameworks/nuxt/)

### Resources

- Dashboard Netlify : https://app.netlify.com
- Status Netlify : https://www.netlifystatus.com/
- Community Support : https://answers.netlify.com/

---

## Checklist de Déploiement

Avant de déployer en production :

- [ ] Testez le build localement : `npm run build && npm run preview`
- [ ] Vérifiez que toutes les images sont présentes dans `public/`
- [ ] Testez les 3 langues (fr, en, pt)
- [ ] Vérifiez que le blog externe fonctionne
- [ ] Testez sur mobile (responsive)
- [ ] Vérifiez les meta tags SEO
- [ ] Testez les performances avec Lighthouse
- [ ] Configurez le domaine personnalisé
- [ ] Activez HTTPS
- [ ] Configurez les redirections www → non-www (ou inverse)

---

**Date de dernière mise à jour** : 26 Novembre 2025
**Version** : 1.0.0
