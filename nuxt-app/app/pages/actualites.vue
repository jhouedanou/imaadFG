<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

useHead({
  title: 'Actualités - IMAAD Financial Group',
  meta: [
    { name: 'description', content: 'Découvrez les dernières actualités et analyses.' },
    { property: 'og:title', content: 'Actualités - IMAAD Financial Group' },
    { name: 'theme-color', content: '#0A192F' }
  ]
})

const articles = ref([
  {
    id: 1,
    title: 'Une De Beers du chocolat plutôt qu une Opep du cacao',
    subtitle: 'Tribune',
    excerpt: 'Certains voudraient créer une Opep du cacao regroupant les pays africains.',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80',
    category: 'Économie',
    link: '/blog/tribune-cacao'
  },
  {
    id: 2,
    title: 'Mécanisme d appui au logement de la Diaspora Africaine',
    subtitle: 'Analyse',
    excerpt: 'L accès à un logement est un rêve caressé par nombre d Africains.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    category: 'Immobilier',
    link: '/blog/logement-diaspora'
  },
  {
    id: 3,
    title: 'Politique cacaoyère en Côte d Ivoire',
    subtitle: 'Interview',
    excerpt: 'Vision pour une transformation durable de la filière cacao.',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80',
    category: 'Interview',
    link: '/blog/politique-cacao'
  }
])

const categories = ['Tous', 'Économie', 'Immobilier', 'Interview']
const activeCategory = ref('Tous')

const filteredArticles = computed(() => {
  if (activeCategory.value === 'Tous') return articles.value
  return articles.value.filter(a => a.category === activeCategory.value)
})

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    gsap.from('.hero-title', { y: 60, opacity: 0, duration: 1, ease: 'power3.out' })
    gsap.from('.bento-item', { y: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' })
  }
})
</script>

<template>
  <div class="page-actualites bg-petrol min-h-screen">
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-petrol/80 to-petrol"></div>
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        <h1 class="hero-title font-michroma text-display text-white uppercase">
          Nos <span class="text-or">Actualités</span>
        </h1>
        <p class="text-silver mt-6 max-w-2xl mx-auto">
          Retrouvez nos dernières analyses et tribunes sur le financement souverain.
        </p>
      </div>
    </section>

    <section class="py-8 border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            class="font-michroma text-xs uppercase tracking-wider px-6 py-3 transition-all duration-300"
            :class="activeCategory === cat ? 'bg-or text-petrol' : 'bg-transparent text-silver border border-white/20 hover:border-or hover:text-or'"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article 
            v-for="article in filteredArticles"
            :key="article.id"
            class="bento-item group relative overflow-hidden rounded-lg min-h-[300px]"
            :class="article.id === 1 ? 'lg:col-span-2 lg:row-span-2 min-h-[500px]' : ''"
          >
            <div class="absolute inset-0">
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40" />
              <div class="absolute inset-0 bg-gradient-to-t from-petrol via-petrol/60 to-transparent"></div>
            </div>
            <div class="relative h-full flex flex-col justify-end p-6 lg:p-8">
              <span class="inline-block font-michroma text-xs uppercase tracking-wider text-or border border-or/50 px-3 py-1 mb-4 w-fit">
                {{ article.category }}
              </span>
              <span class="font-michroma text-xs uppercase tracking-wider text-or/80 mb-2">{{ article.subtitle }}</span>
              <h2 class="font-michroma text-lg lg:text-xl text-white uppercase leading-tight mb-4 group-hover:text-or transition-colors">
                {{ article.title }}
              </h2>
              <p class="text-silver/80 mb-6">{{ article.excerpt }}</p>
              <NuxtLink :to="article.link" class="inline-flex items-center gap-2 font-michroma text-xs uppercase tracking-wider text-or hover:text-or-light transition-colors">
                Lire l article
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bento-item {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.bento-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
</style>
