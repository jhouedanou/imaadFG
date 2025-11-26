# 📦 Installation et démarrage rapide du CMS

## 🚀 Démarrage rapide (5 minutes)

### 1. Vérifier les fichiers créés

```bash
# Vérifier que tous les fichiers existent
ls -la public/config/site-content.json
ls -la app/pages/admin/cms.vue
ls -la app/pages/demo-dynamic.vue
ls -la app/composables/useSiteContent.ts
ls -la app/composables/useCMS.ts
ls -la app/components/DynamicHero.vue
ls -la app/components/DynamicSection.vue
```

### 2. Démarrer le serveur

```bash
cd /Users/houedanou/Documents/imaadFG/nuxt-app
npm install
npm run dev
```

### 3. Accéder au CMS

Ouvrez votre navigateur et visitez:
- **Interface CMS**: http://localhost:3000/admin/cms
- **Page de démo**: http://localhost:3000/demo-dynamic
- **Site principal**: http://localhost:3000

## 📋 Structure des fichiers créés

### Configuration
```
public/config/site-content.json
├── Contenu central du site
├── Tous les paramètres
└── Structures prêtes pour FR, EN, PT
```

### Composants réutilisables
```
app/components/
├── DynamicHero.vue (section d'en-tête)
└── DynamicSection.vue (sections de contenu)
```

### Pages
```
app/pages/
├── admin/cms.vue (interface d'administration)
└── demo-dynamic.vue (page de démonstration)
```

### Composables
```
app/composables/
├── useSiteContent.ts (gestion du contenu)
└── useCMS.ts (gestion de l'interface CMS)
```

### APIs
```
server/api/cms/
├── content.get.ts (récupérer le contenu)
├── pages.put.ts (mettre à jour les pages)
└── site-info.put.ts (mettre à jour les paramètres)
```

### Documentation
```
├── CMS_README.md (aperçu général)
├── CMS_GUIDE.md (guide complet d'utilisation)
├── INTEGRATION_GUIDE.md (intégration aux pages)
├── EXAMPLES.md (exemples de code)
└── CMS_INSTALLATION.md (ce fichier)
```

## 🎯 Premiers pas

### Étape 1: Explorer l'interface CMS

1. Allez à http://localhost:3000/admin/cms
2. Vous verrez une liste de pages éditables dans le menu latéral
3. Cliquez sur "Accueil" pour voir les sections éditables

### Étape 2: Modifier du contenu

1. Remplissez les formulaires avec nouveau contenu
2. Cliquez sur "Sauvegarder les modifications"
3. Attendez la confirmation "Page sauvegardée avec succès"

### Étape 3: Voir les modifications

1. Allez à http://localhost:3000/demo-dynamic
2. Le contenu s'affichera en temps réel
3. Apportez des modifications dans le CMS et voyez-les mises à jour sur la page

### Étape 4: Accéder aux paramètres du site

1. Dans le CMS, cliquez sur "Paramètres du site"
2. Modifiez le nom, logo, tagline, contact
3. Cliquez sur "Sauvegarder les paramètres"

## 🔧 Configuration

### Changer le port du serveur

```bash
npm run dev -- --port 3001
```

### Construire pour la production

```bash
npm run build
npm run preview
```

### Déployer sur Netlify

```bash
# Le projet est déjà configuré pour Netlify
# Voir: netlify.toml
npm run build
# Puis déployer le dossier .output
```

## 📝 Utiliser le contenu dans vos pages

### Exemple simple

```vue
<script setup>
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent, getPageContent } = useSiteContent()
const content = ref(null)

onMounted(async () => {
  const siteContent = await loadContent()
  content.value = getPageContent.value('accueil')
})
</script>

<template>
  <DynamicHero v-if="content?.hero" :hero="content.hero" />
  <DynamicSection
    v-if="content?.presentation"
    :title="content.presentation.title"
    :description="content.presentation.description"
  />
</template>
```

## 🧪 Test du système

### Vérifier que le contenu se charge

1. Ouvrez la console du navigateur (F12)
2. Allez sur `/demo-dynamic`
3. Vérifiez qu'il n'y a pas d'erreurs dans la console

### Tester la sauvegarde

1. Ouvrez le CMS
2. Changez un titre
3. Cliquez sur "Sauvegarder"
4. Vérifiez le fichier `public/config/site-content.json` - il doit être mis à jour

## ⚠️ Points importants

### Permissions des fichiers

Assurez-vous que le serveur peut écrire dans `public/config/`:

```bash
chmod 755 public/config
chmod 644 public/config/site-content.json
```

### Structure du JSON

Ne modifiez pas manuellement `site-content.json` sans valider le JSON:

```bash
# Valider le JSON
jq . public/config/site-content.json > /dev/null && echo "Valid JSON" || echo "Invalid JSON"
```

### Sauvegardes

Faites des sauvegardes régulières du fichier:

```bash
cp public/config/site-content.json public/config/site-content.backup.json
```

## 🚨 Dépannage

### "Page not found" pour `/admin/cms`

- Vérifiez que `app/pages/admin/cms.vue` existe
- Redémarrez le serveur

### Les modifications ne sont pas sauvegardées

1. Vérifiez les permissions du fichier:
   ```bash
   ls -la public/config/site-content.json
   ```

2. Vérifiez les erreurs serveur dans le terminal

3. Vérifiez les erreurs navigateur (F12)

### Le contenu ne se charge pas

1. Vérifiez que le serveur est en cours d'exécution
2. Vérifiez que `public/config/site-content.json` existe
3. Vérifiez le format du fichier JSON

## 📚 Documentation

- **Vue d'ensemble**: [CMS_README.md](./CMS_README.md)
- **Guide complet**: [CMS_GUIDE.md](./CMS_GUIDE.md)
- **Guide d'intégration**: [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)
- **Exemples de code**: [EXAMPLES.md](./EXAMPLES.md)

## 🎓 Prochaines étapes

1. **Comprendre le système**
   - Lire [CMS_GUIDE.md](./CMS_GUIDE.md)

2. **Intégrer aux pages existantes**
   - Suivre [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)

3. **Voir des exemples**
   - Consulter [EXAMPLES.md](./EXAMPLES.md)

4. **Sécuriser l'accès**
   - Ajouter l'authentification (voir CMS_GUIDE.md)

5. **Configurer pour production**
   - Mettre en place les sauvegardes
   - Configurer les logs
   - Tester sur staging

## 📞 Support

- Consultez la documentation dans les fichiers `.md`
- Vérifiez les erreurs dans la console (F12)
- Regardez les logs serveur pour les erreurs d'API

## ✅ Checklist d'installation

- [ ] Tous les fichiers créés existent
- [ ] Le serveur démarre sans erreurs
- [ ] L'interface CMS est accessible
- [ ] Le contenu se charge correctement
- [ ] Les modifications se sauvegardent
- [ ] La page de démo fonctionne
- [ ] Les composants s'affichent correctement
- [ ] Aucune erreur dans la console

---

**Installation réussie?** 🎉

Vous êtes prêt à:
- Éditer le contenu via l'interface CMS
- Intégrer le contenu dans vos pages
- Personnaliser les sections
- Ajouter de nouvelles fonctionnalités

Amusez-vous! 🚀
