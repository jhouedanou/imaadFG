<template>
  <div class="page-blog-post">
    <!-- Article Hero -->
    <section class="article-hero">
      <div class="container">
        <NuxtLink to="/blog" class="back-link">
          <Icon name="mdi:arrow-left" />
          Retour au blog
        </NuxtLink>
        
        <div class="article-header">
          <div class="article-meta">
            <span class="article-category">{{ article?.category }}</span>
            <span class="article-date">{{ formatDate(article?.date) }}</span>
          </div>
          
          <h1 class="article-title">{{ article?.title }}</h1>
          
          <p v-if="article?.author" class="article-author">
            <Icon name="mdi:account-edit" />
            Par {{ article.author }}
          </p>

          <div v-if="article?.tags && article.tags.length" class="article-tags">
            <span v-for="tag in article.tags" :key="tag" class="article-tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <div v-if="article?.image" class="article-image">
          <NuxtImg 
            :src="article.image" 
            :alt="article.title"
            width="1200"
            height="600"
          />
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="article-content">
      <div class="container">
        <div class="article-body">
          <ContentRenderer v-if="article" :value="article" />
        </div>

        <!-- Share Buttons -->
        <div class="article-share">
          <h4>Partager cet article</h4>
          <div class="share-buttons">
            <a 
              :href="getShareUrl('twitter')" 
              target="_blank"
              rel="noopener noreferrer"
              class="share-btn twitter"
              aria-label="Partager sur Twitter"
            >
              <Icon name="mdi:twitter" size="24" />
            </a>
            <a 
              :href="getShareUrl('linkedin')" 
              target="_blank"
              rel="noopener noreferrer"
              class="share-btn linkedin"
              aria-label="Partager sur LinkedIn"
            >
              <Icon name="mdi:linkedin" size="24" />
            </a>
            <a 
              :href="getShareUrl('facebook')" 
              target="_blank"
              rel="noopener noreferrer"
              class="share-btn facebook"
              aria-label="Partager sur Facebook"
            >
              <Icon name="mdi:facebook" size="24" />
            </a>
          </div>
        </div>

        <!-- Related Articles -->
        <div v-if="relatedPosts && relatedPosts.length" class="related-posts">
          <h3>Articles similaires</h3>
          <div class="grid grid-3">
            <article 
              v-for="post in relatedPosts" 
              :key="post._path"
              class="related-card"
            >
              <NuxtLink :to="post._path">
                <h4>{{ post.title }}</h4>
                <p class="post-meta">
                  <span>{{ formatDate(post.date) }}</span>
                  <span>{{ post.category }}</span>
                </p>
              </NuxtLink>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// Récupérer l'article
const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryContent('blog', slug).findOne()
)

// Récupérer les articles similaires (même catégorie)
const { data: relatedPosts } = await useAsyncData(`blog-related-${slug}`, () =>
  queryContent('blog')
    .where({ 
      _path: { $ne: `/blog/${slug}` },
      category: article.value?.category 
    })
    .limit(3)
    .find()
)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getShareUrl = (platform: string) => {
  const url = encodeURIComponent(`https://www.imaadcapitalpartners.com${route.path}`)
  const title = encodeURIComponent(article.value?.title || '')
  
  const urls = {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
  }
  
  return urls[platform as keyof typeof urls] || '#'
}

// SEO Meta tags
useHead({
  title: `${article.value?.title} - IMAAD Financial Group Blog`,
  meta: [
    { name: 'description', content: article.value?.description },
    { property: 'og:title', content: article.value?.title },
    { property: 'og:description', content: article.value?.description },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: article.value?.date },
    { property: 'article:author', content: article.value?.author },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<style scoped>
.page-blog-post {
  padding-top: 0;
}

.article-hero {
  background: linear-gradient(135deg, #003d82 0%, #00509e 100%);
  color: white;
  padding: 3rem 0 4rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: opacity 0.3s ease;
}

.back-link:hover {
  opacity: 0.8;
}

.article-header {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.article-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.article-category {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
}

.article-date {
  opacity: 0.9;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.article-tag {
  background: rgba(255, 255, 255, 0.15);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
}

.article-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.article-image img {
  width: 100%;
  height: auto;
  display: block;
}

.article-content {
  padding: 4rem 0;
}

.article-body {
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.article-body :deep(h2) {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #003d82;
}

.article-body :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #00509e;
}

.article-body :deep(p) {
  margin-bottom: 1.5rem;
}

.article-body :deep(ul),
.article-body :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.article-body :deep(li) {
  margin-bottom: 0.5rem;
}

.article-body :deep(blockquote) {
  border-left: 4px solid #c9a961;
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #666;
}

.article-body :deep(code) {
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}

.article-body :deep(pre) {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 2rem 0;
}

.article-share {
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.article-share h4 {
  margin-bottom: 1rem;
  color: #003d82;
}

.share-buttons {
  display: flex;
  gap: 1rem;
}

.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.share-btn:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

.share-btn.twitter {
  background: #1DA1F2;
}

.share-btn.linkedin {
  background: #0077B5;
}

.share-btn.facebook {
  background: #1877F2;
}

.related-posts {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
  border-top: 2px solid #e0e0e0;
}

.related-posts h3 {
  font-size: 2rem;
  color: #003d82;
  margin-bottom: 2rem;
  text-align: center;
}

.related-card {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.related-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.related-card a {
  text-decoration: none;
  color: inherit;
}

.related-card h4 {
  color: #003d82;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.4;
}

.post-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #666;
}

@media (max-width: 768px) {
  .article-title {
    font-size: 1.8rem;
  }

  .article-body {
    font-size: 1rem;
  }

  .related-posts .grid {
    grid-template-columns: 1fr;
  }
}
</style>
