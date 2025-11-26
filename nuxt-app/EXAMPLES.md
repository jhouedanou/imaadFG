# 📚 Exemples d'utilisation du CMS

## 1. Page Accueil simple

```vue
<template>
  <div class="home-page">
    <DynamicHero v-if="content?.hero" :hero="content.hero" />

    <DynamicSection
      v-if="content?.presentation"
      :title="content.presentation.title"
      :description="content.presentation.description"
    />

    <DynamicSection
      v-if="content?.valeurs"
      :title="content.valeurs.title"
      :intro="content.valeurs.intro"
      :items="content.valeurs.items"
    />

    <DynamicSection
      v-if="content?.impact"
      :title="content.impact.title"
      :stats="content.impact.stats"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent, getPageContent } = useSiteContent()
const content = ref<any>(null)

onMounted(async () => {
  const siteContent = await loadContent()
  content.value = siteContent?.pages.accueil
})
</script>
```

## 2. Page Contact avec formulaire

```vue
<template>
  <div class="contact-page">
    <DynamicHero v-if="contactContent?.hero" :hero="contactContent.hero" />

    <section class="contact-info">
      <div class="info-grid">
        <div class="info-item">
          <h3>Email</h3>
          <p>{{ siteInfo?.contact?.email }}</p>
          <a :href="`mailto:${siteInfo?.contact?.email}`" class="btn-link">
            Envoyer un email
          </a>
        </div>

        <div class="info-item">
          <h3>Téléphone</h3>
          <p>{{ siteInfo?.contact?.phone }}</p>
          <a :href="`tel:${siteInfo?.contact?.phone}`" class="btn-link">
            Appeler
          </a>
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="contact-form">
        <div class="form-group">
          <label for="name">Nom</label>
          <input v-model="form.name" type="text" id="name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" id="email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" rows="5" required></textarea>
        </div>

        <button type="submit" class="btn-submit">Envoyer</button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent, getSiteInfo } = useSiteContent()

const contactContent = ref<any>(null)
const siteInfo = ref<any>(null)
const form = ref({
  name: '',
  email: '',
  message: ''
})

onMounted(async () => {
  const content = await loadContent()
  contactContent.value = content?.pages.contact
  siteInfo.value = content?.site
})

const sendMessage = async () => {
  // Envoyer le message (à implémenter)
  console.log('Message envoyé:', form.value)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.info-item {
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

.contact-form {
  max-width: 500px;
  margin: 2rem auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
```

## 3. Composant réutilisable avec contenu CMS

```vue
<template>
  <section class="team-grid">
    <div v-for="member in teamMembers" :key="member.nom" class="team-card">
      <img :src="member.photo" :alt="member.nom" class="member-photo" />
      <h3>{{ member.nom }}</h3>
      <p class="role">{{ member.poste }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent } = useSiteContent()
const teamMembers = ref<any[]>([])

onMounted(async () => {
  const content = await loadContent()
  const teamContent = content?.pages['notre-equipe']
  teamMembers.value = [
    ...teamContent?.direction || [],
    ...teamContent?.equipe || []
  ]
})
</script>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.team-card {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.team-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.member-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.team-card h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.role {
  color: #667eea;
  font-weight: 500;
  margin: 0;
}
</style>
```

## 4. Utiliser les statistiques d'impact

```vue
<template>
  <section class="impact-section">
    <h2>Notre Impact</h2>

    <div class="stats-container">
      <transition-group name="fade">
        <div
          v-for="stat in impact?.stats"
          :key="stat.value"
          class="stat-item"
          @mouseenter="animateStat"
        >
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-description">{{ stat.label }}</div>
        </div>
      </transition-group>
    </div>

    <div class="sectors">
      <h3>Secteurs d'activité</h3>
      <div class="sector-tags">
        <span
          v-for="sector in impact?.secteurs"
          :key="sector"
          class="sector-tag"
        >
          {{ sector }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent } = useSiteContent()
const impact = ref<any>(null)

onMounted(async () => {
  const content = await loadContent()
  impact.value = content?.pages.accueil?.impact
})

const animateStat = () => {
  // Animation au survol
}
</script>

<style scoped>
.impact-section {
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.stat-item {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-description {
  font-size: 0.95rem;
  opacity: 0.9;
}

.sectors {
  margin-top: 2rem;
}

.sectors h3 {
  margin: 1rem 0;
}

.sector-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.sector-tag {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.9rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```

## 5. Éditer le contenu directement (sans interface CMS)

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { updatePageContent, loadContent } = useSiteContent()

const editMode = ref(false)
const formData = ref({
  title: '',
  subtitle: ''
})

const startEdit = async () => {
  const content = await loadContent()
  formData.value = content?.pages.accueil?.hero || {}
  editMode.value = true
}

const saveChanges = async () => {
  await updatePageContent('accueil', {
    hero: formData.value
  })
  editMode.value = false
}
</script>

<template>
  <div>
    <button v-if="!editMode" @click="startEdit" class="btn-edit">
      Éditer le contenu
    </button>

    <form v-if="editMode" @submit.prevent="saveChanges">
      <input v-model="formData.title" type="text" placeholder="Titre" />
      <input v-model="formData.subtitle" type="text" placeholder="Sous-titre" />
      <button type="submit">Sauvegarder</button>
      <button type="button" @click="editMode = false">Annuler</button>
    </form>
  </div>
</template>
```

## 6. Navigation dynamique

```vue
<template>
  <nav class="navbar">
    <div class="logo">{{ siteInfo?.name }}</div>

    <ul class="nav-menu">
      <li v-for="item in navigation" :key="item.id">
        <NuxtLink :to="item.path">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>

    <div class="admin-link">
      <NuxtLink to="/admin/cms" class="btn-admin">CMS</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSiteContent } from '~/composables/useSiteContent'

const { loadContent, getSiteInfo, getNavigation } = useSiteContent()

const siteInfo = ref<any>(null)
const navigation = ref<any[]>([])

onMounted(async () => {
  const content = await loadContent()
  siteInfo.value = content?.site
  navigation.value = content?.navigation || []
})
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
  color: #333;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #667eea;
}

.btn-admin {
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-admin:hover {
  background: #764ba2;
}
</style>
```

## 7. Utiliser le contenu dans un composable personnalisé

```typescript
// composables/usePageContent.ts
import { ref, computed } from 'vue'
import { useSiteContent } from './useSiteContent'

export const usePageContent = (pageName: string) => {
  const { loadContent, getPageContent } = useSiteContent()
  const pageData = ref<any>(null)

  const load = async () => {
    await loadContent()
    pageData.value = getPageContent.value(pageName)
  }

  const hero = computed(() => pageData.value?.hero)
  const sections = computed(() => {
    return Object.keys(pageData.value || {})
      .filter(key => key !== 'hero')
      .map(key => ({
        name: key,
        data: pageData.value[key]
      }))
  })

  return {
    pageData,
    hero,
    sections,
    load
  }
}
```

Utilisation:
```vue
<script setup>
import { usePageContent } from '~/composables/usePageContent'

const { load, hero, sections } = usePageContent('accueil')
onMounted(() => load())
</script>
```

## 8. Valider et sanitizer le contenu

```typescript
import { z } from 'zod'

// Schéma de validation
const heroSchema = z.object({
  title: z.string().min(1).max(100),
  subtitle: z.string().min(1).max(200),
  backgroundImage: z.string().url().optional()
})

const validateHero = (data: unknown) => {
  try {
    return heroSchema.parse(data)
  } catch (error) {
    console.error('Validation failed:', error)
    return null
  }
}

// Utilisation
const updateHero = async (heroData: any) => {
  const validated = validateHero(heroData)
  if (validated) {
    await updatePageContent('accueil', { hero: validated })
  }
}
```

## 9. Cacher/Afficher des sections conditionnelles

```vue
<template>
  <div>
    <DynamicHero v-if="showHero && content?.hero" :hero="content.hero" />

    <DynamicSection
      v-if="showPresentation && content?.presentation"
      :title="content.presentation.title"
      :description="content.presentation.description"
    />

    <button @click="toggleVisibility('hero')">
      {{ showHero ? 'Masquer' : 'Afficher' }} la section Héro
    </button>
  </div>
</template>

<script setup>
const visibility = ref({
  hero: true,
  presentation: true,
  valeurs: true,
  impact: true
})

const toggleVisibility = (section: string) => {
  visibility.value[section] = !visibility.value[section]
}

const showHero = computed(() => visibility.value.hero)
const showPresentation = computed(() => visibility.value.presentation)
</script>
```

## 10. Export/Import du contenu

```typescript
// Exporter le contenu
const exportContent = async () => {
  const { siteContent } = useSiteContent()
  const dataStr = JSON.stringify(siteContent.value, null, 2)
  const blob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `site-content-${new Date().getTime()}.json`
  link.click()
}

// Importer le contenu
const importContent = async (file: File) => {
  const text = await file.text()
  const data = JSON.parse(text)
  // Valider et importer
  console.log('Imported:', data)
}
```

---

Pour plus d'exemples et de documentation, consultez:
- [CMS_GUIDE.md](./CMS_GUIDE.md)
- [INTEGRATION_GUIDE.md](./INTEGRATION_GUIDE.md)
- [/admin/cms](/admin/cms) - Interface d'administration
- [/demo-dynamic](/demo-dynamic) - Page de démonstration
