<template>
  <div class="page-blog">
    <!-- Hero Section -->
    <Hero 
      :title="pageData.hero.title"
      :subtitle="pageData.hero.subtitle"
    />

    <!-- Blog Posts Section -->
    <section class="section blog-section">
      <div class="container">
        <div v-if="!posts || posts.length === 0" class="empty-state">
          <Icon name="mdi:post-outline" size="64" />
          <h3>Aucun article pour le moment</h3>
          <p>Revenez bientôt pour lire nos analyses et perspectives</p>
        </div>

        <div v-else class="grid grid-2">
          <article 
            v-for="post in posts" 
            :key="post._path"
            class="blog-card card"
          >
            <div class="blog-image">
              <NuxtImg 
                v-if="post.image" 
                :src="post.image" 
                :alt="post.title"
                width="600"
                height="400"
              />
              <div v-else class="blog-placeholder">
                <Icon name="mdi:book-open-page-variant" size="48" />
              </div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ formatDate(post.date) }}</span>
                <span class="blog-category">{{ post.category }}</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p v-if="post.author" class="blog-author">
                <Icon name="mdi:account-edit" />
                Par {{ post.author }}
              </p>
              <p class="blog-excerpt">{{ post.description }}</p>
              <div v-if="post.tags && post.tags.length" class="blog-tags">
                <span v-for="tag in post.tags" :key="tag" class="blog-tag">
                  {{ tag }}
                </span>
              </div>
              <NuxtLink :to="post._path" class="read-more">
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
const pageData = pages.blog

// Récupérer les articles de blog depuis Nuxt Content
const { data: posts } = await useAsyncData('blog-posts', () => 
  queryContent('blog')
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
  title: `Blog - IMAAD Financial Group`,
  meta: [
    { 
      name: 'description', 
      content: pageData.hero.subtitle 
    }
  ]
})
</script>

<style scoped>
.blog-section {
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

.blog-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-image {
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #1a365d, #2c5282);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 8px 8px 0 0;
  margin: -2rem -2rem 1.5rem -2rem;
}

.blog-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.blog-date {
  color: var(--text-light);
  font-size: 0.9rem;
}

.blog-category {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.blog-content h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.blog-excerpt {
  flex: 1;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
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
