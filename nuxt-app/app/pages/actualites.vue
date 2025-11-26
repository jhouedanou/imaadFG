<template>
  <div class="page-actualites">
    <!-- Hero Section -->
    <Hero 
      :title="pageData.hero.title"
      :subtitle="pageData.hero.subtitle"
    />

    <!-- Articles Section -->
    <section class="section articles-section">
      <div class="container">
        <div v-if="!articles || articles.length === 0" class="empty-state">
          <Icon name="mdi:newspaper-variant-outline" size="64" />
          <h3>Aucune actualité pour le moment</h3>
          <p>Revenez bientôt pour découvrir nos dernières nouvelles</p>
        </div>

        <div v-else class="grid grid-3">
          <article 
            v-for="article in articles" 
            :key="article._path"
            class="article-card card"
          >
            <div class="article-image">
              <NuxtImg 
                v-if="article.image" 
                :src="article.image" 
                :alt="article.title"
                width="400"
                height="250"
              />
              <div v-else class="article-placeholder">
                <Icon name="mdi:newspaper" size="48" />
              </div>
            </div>
            <div class="article-content">
              <span v-if="article.category" class="article-category">{{ article.category }}</span>
              <h3>{{ article.title }}</h3>
              <p class="article-date">{{ formatDate(article.date) }}</p>
              <p class="article-excerpt">{{ article.description }}</p>
              <NuxtLink :to="article._path" class="read-more">
                {{ $t('common.read_more') }}
                <Icon name="mdi:arrow-right" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { pages } = useSiteData()
const pageData = pages.actualites

// Récupérer les actualités depuis Nuxt Content
const { data: articles } = await useAsyncData('actualites', () => 
  queryContent('actualites')
    .sort({ date: -1 })
    .find()
)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useHead({
  title: `Actualités - IMAAD Financial Group`,
  meta: [
    { 
      name: 'description', 
      content: pageData.hero.subtitle 
    }
  ]
})
</script>

<style scoped>
.articles-section {
  background: var(--bg-light);
  min-height: 400px;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-light);
}

.empty-state h3 {
  margin: 1rem 0;
  color: var(--text-dark);
}

.article-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.article-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px 8px 0 0;
  margin: -2rem -2rem 1.5rem -2rem;
}

.article-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.article-content h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.article-date {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.article-excerpt {
  flex: 1;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 600;
  transition: all 0.3s;
}

.read-more:hover {
  color: var(--accent-color);
  gap: 1rem;
}
</style>
