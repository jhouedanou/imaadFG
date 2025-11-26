<template>
  <div class="page-actualite-detail">
    <article v-if="article" class="article-detail">
      <!-- Header -->
      <header class="article-header">
        <div class="container">
          <NuxtLink to="/actualites" class="back-link">
            <Icon name="mdi:arrow-left" />
            Retour aux actualités
          </NuxtLink>
          
          <h1 class="article-title">{{ article.title }}</h1>
          
          <div class="article-meta">
            <span class="article-date">
              <Icon name="mdi:calendar" />
              {{ formatDate(article.date) }}
            </span>
            <span v-if="article.category" class="article-category-badge">
              {{ article.category }}
            </span>
            <span v-if="article.author" class="article-author">
              <Icon name="mdi:account" />
              {{ article.author }}
            </span>
          </div>
        </div>
      </header>

      <!-- Featured Image -->
      <div v-if="article.image" class="article-featured-image">
        <NuxtImg 
          :src="article.image" 
          :alt="article.title"
          width="1200"
          height="600"
        />
      </div>

      <!-- Content -->
      <div class="article-content-wrapper">
        <div class="container">
          <div class="article-body">
            <ContentRenderer :value="article" class="prose" />
          </div>

          <!-- Share -->
          <div class="article-share">
            <h4>Partager cet article</h4>
            <div class="share-buttons">
              <a :href="shareLinks.twitter" target="_blank" class="share-btn twitter">
                <Icon name="mdi:twitter" />
              </a>
              <a :href="shareLinks.facebook" target="_blank" class="share-btn facebook">
                <Icon name="mdi:facebook" />
              </a>
              <a :href="shareLinks.linkedin" target="_blank" class="share-btn linkedin">
                <Icon name="mdi:linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Not Found -->
    <div v-else class="article-not-found">
      <Icon name="mdi:alert-circle" size="64" />
      <h2>Article non trouvé</h2>
      <NuxtLink to="/actualites" class="btn btn-primary">
        Retour aux actualités
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const { data: article } = await useAsyncData('article', () =>
  queryContent('actualites', route.params.slug as string).findOne()
)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const shareLinks = computed(() => {
  const url = encodeURIComponent(`${config.public.siteUrl}${route.path}`)
  const title = encodeURIComponent(article.value?.title || '')
  
  return {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  }
})

useHead({
  title: article.value?.title || 'Article',
  meta: [
    { 
      name: 'description', 
      content: article.value?.description || '' 
    },
    {
      property: 'og:title',
      content: article.value?.title || ''
    },
    {
      property: 'og:description',
      content: article.value?.description || ''
    },
    {
      property: 'og:image',
      content: article.value?.image || ''
    }
  ]
})
</script>

<style scoped>
.article-header {
  padding: 4rem 0 2rem;
  background: var(--bg-light);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 600;
  transition: all 0.3s;
}

.back-link:hover {
  gap: 1rem;
  color: var(--accent-color);
}

.article-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  color: var(--text-light);
}

.article-meta span {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.article-category-badge {
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
}

.article-featured-image {
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.article-featured-image img {
  width: 100%;
  height: auto;
  display: block;
}

.article-content-wrapper {
  padding: 4rem 0;
}

.article-body {
  max-width: 800px;
  margin: 0 auto;
}

.prose {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-dark);
}

.prose :deep(h2) {
  color: var(--primary-color);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.prose :deep(h3) {
  color: var(--primary-color);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin: 1.5rem 0;
  padding-left: 2rem;
}

.prose :deep(blockquote) {
  border-left: 4px solid var(--accent-color);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--text-light);
}

.article-share {
  max-width: 800px;
  margin: 3rem auto 0;
  padding-top: 3rem;
  border-top: 2px solid var(--border-color);
}

.article-share h4 {
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.share-buttons {
  display: flex;
  gap: 1rem;
}

.share-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s;
}

.share-btn.twitter {
  background: #1DA1F2;
}

.share-btn.facebook {
  background: #4267B2;
}

.share-btn.linkedin {
  background: #0077B5;
}

.share-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.article-not-found {
  text-align: center;
  padding: 6rem 2rem;
  color: var(--text-light);
}

.article-not-found h2 {
  margin: 1rem 0 2rem;
  color: var(--text-dark);
}

@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }

  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .prose {
    font-size: 1rem;
  }
}
</style>
