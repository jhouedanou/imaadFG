# IMAAD CMS - Guide d'utilisation

## 🎯 Vue d'ensemble

Le système de gestion de contenu (CMS) permet aux administrateurs de mettre à jour le contenu du site IMAAD Financial Group sans modifier le code. Tout le contenu est stocké dans un fichier JSON centralisé et peut être édité via une interface web conviviale.

## 📁 Architecture du système

### Structure des fichiers

```
├── public/
│   └── config/
│       └── site-content.json          # Fichier de contenu central
├── app/
│   ├── components/
│   │   ├── DynamicHero.vue            # Composant hero dynamique
│   │   └── DynamicSection.vue         # Composant section dynamique
│   ├── pages/
│   │   ├── admin/
│   │   │   └── cms.vue                # Interface CMS
│   │   └── demo-dynamic.vue           # Page de démonstration
│   └── composables/
│       ├── useSiteContent.ts          # Composable pour charger le contenu
│       └── useCMS.ts                  # Composable pour le CMS
└── server/
    └── api/
        └── cms/
            ├── content.get.ts         # API pour récupérer le contenu
            ├── pages.put.ts           # API pour mettre à jour les pages
            └── site-info.put.ts       # API pour mettre à jour les paramètres
```

## 🚀 Accès au CMS

1. Accédez à l'URL: `http://localhost:3000/admin/cms`
2. L'interface d'administration s'affiche avec un menu latéral listant les pages éditables

## 📝 Fonctionnalités principales

### 1. Édition des pages

Le CMS permet d'éditer les sections suivantes pour chaque page:

#### Page Accueil (accueil)
- **Section Héro**: Titre, sous-titre, image de fond
- **Présentation**: Titre, description, objectif
- **Valeurs**: Titre, introduction, liste des valeurs
- **Impact**: Titre, sous-titre, statistiques, secteurs

#### Page Nos Activités (nos-activites)
- Contenu spécifique aux services et domaines d'excellence

#### Page Notre Équipe (notre-equipe)
- Informations sur l'équipe et la gouvernance

#### Page Contact (contact)
- Coordonnées et informations de contact

### 2. Paramètres du site

Accédez aux paramètres du site via le bouton "Paramètres du site" pour éditer:
- Nom du site
- Logo (chemin)
- Slogan/Tagline
- Site web
- Email de contact
- Numéro de téléphone

## 💾 Sauvegarde des modifications

Toutes les modifications sont sauvegardées dans le fichier `public/config/site-content.json` via les API suivantes:

### API Endpoints

#### GET `/api/cms/content`
Récupère tout le contenu du site

```bash
curl http://localhost:3000/api/cms/content
```

#### PUT `/api/cms/pages`
Met à jour le contenu d'une page

```bash
curl -X PUT http://localhost:3000/api/cms/pages \
  -H "Content-Type: application/json" \
  -d '{
    "pageName": "accueil",
    "data": {
      "hero": {
        "title": "Nouveau titre",
        "subtitle": "Nouveau sous-titre",
        "backgroundImage": "/assets/images/..."
      }
    }
  }'
```

#### PUT `/api/cms/site-info`
Met à jour les paramètres du site

```bash
curl -X PUT http://localhost:3000/api/cms/site-info \
  -H "Content-Type: application/json" \
  -d '{
    "name": "IMAAD Financial Group",
    "tagline": "Catalyseur de la Souveraineté et de la Croissance Durable",
    "contact": {
      "email": "info@imaadfg.com",
      "phone": "(+221) 772457987"
    }
  }'
```

## 🎨 Utilisation des composants dynamiques

### DynamicHero

Affiche une section héro avec titre, sous-titre et image de fond.

```vue
<template>
  <DynamicHero :hero="pageContent.hero" />
</template>

<script setup>
const pageContent = ref({
  hero: {
    title: "Titre",
    subtitle: "Sous-titre",
    backgroundImage: "/assets/images/..."
  }
})
</script>
```

### DynamicSection

Affiche une section avec titre, description, items et statistiques.

```vue
<template>
  <DynamicSection
    :title="section.title"
    :intro="section.intro"
    :items="section.items"
    :stats="section.stats"
  />
</template>
```

## 🔄 Flux de travail

### 1. Charger le contenu

```typescript
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent, getPageContent } = useSiteContent()

// Charger le contenu
const content = await loadContent()

// Accéder au contenu d'une page
const homeContent = getPageContent.value('accueil')
```

### 2. Mettre à jour le contenu

```typescript
// Mettre à jour une page
const success = await updatePageContent('accueil', {
  hero: {
    title: 'Nouveau titre',
    subtitle: 'Nouveau sous-titre'
  }
})

// Mettre à jour les informations du site
const success = await updateSiteInfo({
  name: 'Nouveau nom',
  tagline: 'Nouveau slogan'
})
```

## 📊 Structure du fichier site-content.json

```json
{
  "site": {
    "name": "IMAAD Financial Group",
    "logo": "/assets/images/logo-imaad.png",
    "tagline": "Catalyseur de la Souveraineté et de la Croissance Durable",
    "website": "www.imaadfg.com",
    "contact": {
      "email": "info@imaadfg.com",
      "phone": "(+221) 772457987"
    }
  },
  "navigation": [...],
  "languages": ["FR", "EN", "PT"],
  "pages": {
    "accueil": {
      "hero": {...},
      "presentation": {...},
      "valeurs": {...},
      "impact": {...}
    },
    "nos-activites": {...},
    "notre-equipe": {...},
    "contact": {...}
  }
}
```

## 🌐 Langues supportées

Le système supporte actuellement:
- 🇫🇷 Français (FR)
- 🇬🇧 Anglais (EN)
- 🇵🇹 Portugais (PT)

Les traductions sont gérées via les fichiers JSON d'i18n dans le dossier `/locales`.

## 🔒 Sécurité

- L'accès au CMS doit être protégé par authentification (à implémenter)
- Les fichiers de configuration doivent être gitignored en production
- Utilisez des variables d'environnement pour les chemins sensibles

## 🐛 Dépannage

### Le CMS ne charge pas
1. Vérifiez que le serveur Nuxt est en cours d'exécution
2. Vérifiez que `public/config/site-content.json` existe
3. Vérifiez la console du navigateur pour les erreurs

### Les modifications ne sont pas sauvegardées
1. Vérifiez les droits d'accès au fichier `site-content.json`
2. Vérifiez les erreurs dans la console serveur
3. Assurez-vous que l'API respond correctement

## 📚 Exemple d'intégration complet

Voir `/app/pages/demo-dynamic.vue` pour un exemple complet d'utilisation du système CMS avec les composants dynamiques.

## 🔧 Extensions futures

- [ ] Authentification et contrôle d'accès
- [ ] Historique des modifications
- [ ] Sauvegarde et restauration
- [ ] Gestion des médias/images
- [ ] Aperçu en direct des modifications
- [ ] Gestion multilingue intégrée
- [ ] Validation des champs

## 📞 Support

Pour toute question ou problème, consultez la documentation Nuxt:
- [Nuxt Documentation](https://nuxt.com)
- [Nuxt Content Documentation](https://content.nuxt.com)
