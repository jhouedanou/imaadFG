<template>
  <div class="demo-page">
    <!-- Hero Section using DynamicHero component -->
    <DynamicHero v-if="homeContent?.hero" :hero="homeContent.hero" />

    <!-- Presentation Section -->
    <DynamicSection
      v-if="homeContent?.presentation"
      :title="homeContent.presentation.title"
      :description="homeContent.presentation.description"
    >
      <template v-if="homeContent.presentation.objectif">
        <p class="section-objectif">{{ homeContent.presentation.objectif }}</p>
      </template>
    </DynamicSection>

    <!-- Valeurs Section -->
    <DynamicSection
      v-if="homeContent?.valeurs"
      :title="homeContent.valeurs.title"
      :intro="homeContent.valeurs.intro"
      :items="homeContent.valeurs.items"
    />

    <!-- Impact Section -->
    <DynamicSection
      v-if="homeContent?.impact"
      :title="homeContent.impact.title"
      :subtitle="homeContent.impact.subtitle"
      :stats="homeContent.impact.stats"
      :items="homeContent.impact.secteurs?.map((s: string) => ({ title: s }))"
    />

    <!-- Admin Link -->
    <section class="admin-section">
      <div class="admin-container">
        <h2>Gestion du contenu</h2>
        <p>Accédez au panneau d'administration pour éditer le contenu du site</p>
        <NuxtLink to="/admin/cms" class="btn-admin">
          Accès CMS
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

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
  title: 'IMAAD Financial Group - Demo'
})
</script>

<style scoped>
.demo-page {
  min-height: 100vh;
  background: white;
}

.section-objectif {
  margin: 1rem 0;
  line-height: 1.8;
  color: #666;
  font-size: 1.05rem;
}

.admin-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.admin-container {
  max-width: 600px;
  margin: 0 auto;
}

.admin-section h2 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
}

.admin-section p {
  margin: 0 0 2rem 0;
  opacity: 0.9;
  font-size: 1.1rem;
}

.btn-admin {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-admin:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}
</style>
