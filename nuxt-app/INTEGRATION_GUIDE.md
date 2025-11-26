# Guide d'intégration du CMS aux pages existantes

## 🎯 Objectif

Ce guide montre comment intégrer progressivement le système CMS aux pages existantes du site IMAAD Financial Group.

## 📋 Étapes d'intégration

### Étape 1: Activer le composable useSiteContent

Dans chaque page Vue, importez et utilisez le composable:

```typescript
import { useSiteContent } from '~/composables/useSiteContent'

const { siteContent, loadContent, getPageContent } = useSiteContent()

onMounted(async () => {
  const content = await loadContent()
  if (content) {
    // Utilisez le contenu
    const pageContent = getPageContent.value('accueil')
  }
})
```

### Étape 2: Remplacer les contenus statiques

**Avant (contenu en dur):**
```html
<h1>IMAAD FINANCIAL GROUP</h1>
<p>Catalyseur de la Souveraineté et de la Croissance Durable</p>
```

**Après (contenu dynamique):**
```html
<DynamicHero :hero="homeContent?.hero" />
```

### Étape 3: Utiliser les composants dynamiques

```vue
<template>
  <div>
    <!-- Section Héro -->
    <DynamicHero v-if="homeContent?.hero" :hero="homeContent.hero" />

    <!-- Section Présentation -->
    <DynamicSection
      v-if="homeContent?.presentation"
      :title="homeContent.presentation.title"
      :description="homeContent.presentation.description"
    />

    <!-- Section Valeurs -->
    <DynamicSection
      v-if="homeContent?.valeurs"
      :title="homeContent.valeurs.title"
      :intro="homeContent.valeurs.intro"
      :items="homeContent.valeurs.items"
    />
  </div>
</template>
```

## 🔄 Migration progressive

### Phase 1: Pages prioritaires (Semaine 1)
1. **Page Accueil** (`/`)
   - Remplacer le section héro
   - Remplacer la présentation
   - Remplacer les valeurs et impact

2. **Page Contact** (`/contact`)
   - Dynamiser les informations de contact
   - Utiliser les données du fichier site-content.json

### Phase 2: Pages secondaires (Semaine 2)
1. **Page Nos Activités** (`/nos-activites`)
   - Dynamiser les fiches services
   - Ajouter les projets depuis le CMS

2. **Page Notre Équipe** (`/notre-equipe`)
   - Remplacer la liste d'équipe statique
   - Utiliser les données du CMS

### Phase 3: Optimisations (Semaine 3)
1. Optimiser les performances
2. Ajouter la gestion des images
3. Implémenter le cache du contenu

## 📝 Exemple: Migration de la page Accueil

### Avant

```vue
<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Accueil'
})
</script>

<template>
  <section class="hero">
    <h1>IMAAD FINANCIAL GROUP</h1>
    <p>Catalyseur de la Souveraineté et de la Croissance Durable</p>
  </section>

  <section class="presentation">
    <h2>Notre Essence</h2>
    <p>Imaad Financial Group (IFG) est une banque d'affaires...</p>
  </section>

  <section class="valeurs">
    <h2>Nos valeurs</h2>
    <ul>
      <li>Souveraineté et leadership économique</li>
      <li>Excellence, discipline et innovation</li>
      <li>Intégrité et confidentialité absolue</li>
      <li>Résilience et vision long terme</li>
    </ul>
  </section>
</template>
```

### Après

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent, getPageContent } = useSiteContent()

const homeContent = ref<any>(null)

onMounted(async () => {
  const content = await loadContent()
  if (content) {
    homeContent.value = content.pages.accueil
  }
})

useHead({
  title: homeContent.value?.hero?.title || 'Accueil'
})
</script>

<template>
  <!-- Utiliser les composants dynamiques -->
  <DynamicHero v-if="homeContent?.hero" :hero="homeContent.hero" />

  <DynamicSection
    v-if="homeContent?.presentation"
    :title="homeContent.presentation.title"
    :description="homeContent.presentation.description"
  />

  <DynamicSection
    v-if="homeContent?.valeurs"
    :title="homeContent.valeurs.title"
    :intro="homeContent.valeurs.intro"
    :items="homeContent.valeurs.items"
  />

  <DynamicSection
    v-if="homeContent?.impact"
    :title="homeContent.impact.title"
    :subtitle="homeContent.impact.subtitle"
    :stats="homeContent.impact.stats"
    :items="homeContent.impact.secteurs?.map((s: string) => ({ title: s }))"
  />
</template>
```

## 🛠️ Checklist d'intégration

- [ ] Créer la structure de contenu JSON
- [ ] Créer le composable useSiteContent
- [ ] Créer les composants dynamiques
- [ ] Créer l'interface CMS
- [ ] Créer les APIs de gestion du contenu
- [ ] Intégrer sur la page Accueil
- [ ] Intégrer sur la page Contact
- [ ] Intégrer sur la page Nos Activités
- [ ] Intégrer sur la page Notre Équipe
- [ ] Tester toutes les fonctionnalités
- [ ] Ajouter l'authentification au CMS
- [ ] Documenter pour les administrateurs

## 🚀 Déploiement

1. **Environnement local**
   ```bash
   npm run dev
   # Accédez à http://localhost:3000/admin/cms
   ```

2. **Production (Netlify)**
   ```bash
   npm run build
   npm run preview
   ```

## 📊 Performance

- Utilisez `computed` pour les valeurs réactives
- Mettez en cache le contenu avec `useFetch`
- Optimisez les images avec `NuxtImage`

## 🔐 Sécurité à implémenter

1. **Authentification**
   ```typescript
   // Protéger la route CMS
   export default definePageMeta({
     middleware: 'auth'
   })
   ```

2. **Validation des données**
   ```typescript
   // Valider avant la sauvegarde
   const schema = z.object({
     title: z.string().min(1),
     subtitle: z.string()
   })
   ```

3. **Limitation d'accès**
   - Restreindre `/admin/cms` aux utilisateurs autorisés
   - Utiliser des tokens JWT
   - Logger les modifications

## 📚 Ressources

- [Demo Page](/demo-dynamic)
- [CMS Admin](/admin/cms)
- [CMS Guide](./CMS_GUIDE.md)

## 💡 Tips & Tricks

1. **Développement rapide**
   ```bash
   # Ouvrir le CMS dans un nouvel onglet
   # Apporter des modifications
   # Vérifier en temps réel sur le site
   ```

2. **Tests**
   ```typescript
   // Tester le chargement du contenu
   const content = await loadContent()
   expect(content.pages.accueil).toBeDefined()
   ```

3. **Debugging**
   ```typescript
   // Afficher le contenu complet
   console.log(JSON.stringify(siteContent.value, null, 2))
   ```

## ✅ Prochaines étapes

1. Intégrer le CMS aux pages existantes
2. Ajouter l'authentification
3. Implémenter le versioning des modifications
4. Ajouter un aperçu en direct
5. Configurer les sauvegardes automatiques
