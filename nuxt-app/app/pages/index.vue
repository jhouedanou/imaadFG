<script setup lang="ts">
import { ref, onMounted } from 'vue'

// SEO
useHead({
  title: 'IMAAD Financial Group - Catalyseur de la Souveraineté et de la Croissance Durable',
  meta: [
    { name: 'description', content: 'IMAAD Financial Group accompagne les États et entreprises africaines dans leurs besoins de financement souverain, corporate finance et partenariats public-privé.' },
    { property: 'og:title', content: 'IMAAD Financial Group' },
    { property: 'og:description', content: 'Catalyseur de la Souveraineté et de la Croissance Durable' },
    { property: 'og:type', content: 'website' },
    { name: 'theme-color', content: '#0B1E3B' }
  ]
})

// Verticaux data
const verticaux = [
  {
    title: 'Financement Souverain',
    description: 'Accompagnement des États dans la mobilisation de financements concessionnels, semi-concessionnels et commerciaux. Appuis budgétaires et restructuration de dette publique.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    link: '/nos-activites#financement-souverain'
  },
  {
    title: 'Corporate & Trade Finance',
    description: 'Mobilisation de fonds CAPEX & OPEX pour les entreprises. Financement structuré et accompagnement des projets industriels et logistiques.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    link: '/nos-activites#corporate-finance'
  },
  {
    title: 'Partenariats Public-Privé',
    description: 'Conseil et développement de projets PPP. Structuration financière de grands projets d\'infrastructures urbaines et régionales.',
    image: 'https://images.unsplash.com/photo-1590674899484-13da0f721f26?w=1200&q=80',
    link: '/nos-activites#ppp'
  }
]

// Stats
const stats = [
  { value: '+1 Md €', label: 'mobilisés depuis 2020' },
  { value: '+20', label: 'projets finalisés' },
  { value: '15', label: 'pays couverts' },
  { value: '3 Mds €', label: 'portefeuille projets' }
]

// Hero animation
const heroRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    
    // Hero animations
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.from(titleRef.value, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    })
    .from(subtitleRef.value, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.6')
    
    // Parallax effect on hero
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    
    // Stats animation
    gsap.from('.stat-item', {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%'
      }
    })
  }
})
</script>

<template>
  <div class="page-home">
    <!-- Hero Section -->
    <section 
      ref="heroRef"
      class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <!-- Background -->
      <div 
        class="hero-bg absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')"
      />
      
      <!-- Overlay -->
      <div class="absolute inset-0 bg-bleu-nuit/70" />
      
      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          ref="titleRef"
          class="font-playfair text-hero text-white mb-8"
        >
          Catalyseur de la <span class="text-or">Souveraineté</span><br />
          et de la Croissance Durable
        </h1>
        
        <p 
          ref="subtitleRef"
          class="font-montserrat text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          IMAAD Financial Group accompagne les États et entreprises dans leurs projets 
          d'infrastructures et de développement à fort impact économique et social.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/nos-activites"
            class="font-montserrat text-sm uppercase tracking-widest px-8 py-4 bg-or text-bleu-nuit hover:bg-or-light transition-all duration-300"
          >
            Découvrir nos services
          </NuxtLink>
          <NuxtLink 
            to="/contact"
            class="font-montserrat text-sm uppercase tracking-widest px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-bleu-nuit transition-all duration-300"
          >
            Nous contacter
          </NuxtLink>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 40">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke-width="2" />
          <circle cx="12" cy="12" r="3" fill="currentColor" class="animate-pulse" />
        </svg>
      </div>
    </section>

    <!-- Verticaux Section (Style Teyliom) -->
    <section class="verticaux-section">
      <div class="py-20 lg:py-0">
        <!-- Section Header (Mobile) -->
        <div class="lg:hidden px-6 mb-12">
          <h2 class="font-playfair text-display text-bleu-nuit mb-4">
            Nos Domaines d'Excellence
          </h2>
          <p class="font-montserrat text-gray-600">
            Trois piliers pour accompagner votre croissance
          </p>
        </div>
        
        <!-- Desktop: Full height columns -->
        <div class="hidden lg:flex">
          <VerticalCard 
            v-for="(vertical, index) in verticaux"
            :key="vertical.title"
            :title="vertical.title"
            :description="vertical.description"
            :image="vertical.image"
            :link="vertical.link"
            :index="index"
            class="flex-1"
          />
        </div>
        
        <!-- Mobile: Stacked cards -->
        <div class="lg:hidden px-6 space-y-6">
          <div 
            v-for="(vertical, index) in verticaux"
            :key="vertical.title"
            class="relative h-[400px] rounded-xl overflow-hidden"
          >
            <div 
              class="absolute inset-0 bg-cover bg-center"
              :style="{ backgroundImage: `url(${vertical.image})` }"
            />
            <div class="absolute inset-0 bg-bleu-nuit/60" />
            <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <span class="text-or font-playfair text-4xl font-light mb-2 opacity-50">
                0{{ index + 1 }}
              </span>
              <h3 class="font-playfair text-2xl mb-3">{{ vertical.title }}</h3>
              <p class="font-montserrat text-sm text-gray-200 mb-4">{{ vertical.description }}</p>
              <NuxtLink 
                :to="vertical.link"
                class="inline-flex items-center gap-2 text-or font-montserrat text-sm uppercase tracking-wider"
              >
                Découvrir
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section bg-ivory py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-playfair text-display text-bleu-nuit mb-4">
            Notre Impact
          </h2>
          <p class="font-montserrat text-gray-600 max-w-2xl mx-auto">
            Des résultats mesurables au service de la croissance africaine
          </p>
        </div>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="stat-item text-center"
          >
            <div class="font-playfair text-4xl lg:text-6xl text-or mb-2">
              {{ stat.value }}
            </div>
            <div class="font-montserrat text-sm text-gray-600 uppercase tracking-wider">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="bg-bleu-nuit py-20 lg:py-32 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">
              À propos
            </span>
            <h2 class="font-playfair text-display text-white mb-6">
              Une vision panafricaine au service de l'excellence
            </h2>
            <p class="font-montserrat text-gray-400 leading-relaxed mb-6">
              IMAAD Financial Group est une banque d'affaires panafricaine indépendante, 
              spécialisée dans la structuration, le financement et la réalisation de projets 
              structurants en Afrique, au Moyen-Orient et en Amérique Latine.
            </p>
            <p class="font-montserrat text-gray-400 leading-relaxed mb-8">
              Notre mission : accélérer la souveraineté financière des États, renforcer 
              les capacités d'investissement des entreprises et créer des ponts entre 
              capitaux internationaux et projets à fort impact.
            </p>
            <NuxtLink 
              to="/notre-equipe"
              class="inline-flex items-center gap-3 font-montserrat text-or text-sm uppercase tracking-widest hover:gap-5 transition-all duration-300"
            >
              Découvrir notre équipe
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
          
          <div class="relative">
            <div class="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" 
                alt="IMAAD Financial Group" 
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Decorative element -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-or rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Highlight -->
    <section class="py-20 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">
            Projets phares
          </span>
          <h2 class="font-playfair text-display text-bleu-nuit mb-4">
            Des réalisations concrètes
          </h2>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div class="group bg-ivory rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
            <div class="aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80" 
                alt="Route Abidjan - San Pedro"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-6">
              <span class="font-montserrat text-xs text-or uppercase tracking-wider">Côte d'Ivoire</span>
              <h3 class="font-playfair text-xl text-bleu-nuit mt-2 mb-3">Route Abidjan - San Pedro</h3>
              <p class="font-montserrat text-sm text-gray-600 mb-4">Financement de 150 M€ pour l'infrastructure routière majeure.</p>
              <div class="flex justify-between items-center">
                <span class="font-playfair text-2xl text-or">150 M€</span>
                <span class="font-montserrat text-xs text-gray-500">Closé 2023</span>
              </div>
            </div>
          </div>
          
          <!-- Project Card 2 -->
          <div class="group bg-ivory rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
            <div class="aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" 
                alt="Adduction eau potable Grand-Abidjan"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-6">
              <span class="font-montserrat text-xs text-or uppercase tracking-wider">Côte d'Ivoire</span>
              <h3 class="font-playfair text-xl text-bleu-nuit mt-2 mb-3">Adduction Eau Potable Grand-Abidjan</h3>
              <p class="font-montserrat text-sm text-gray-600 mb-4">Programme d'accès à l'eau potable pour la métropole.</p>
              <div class="flex justify-between items-center">
                <span class="font-playfair text-2xl text-or">278 M€</span>
                <span class="font-montserrat text-xs text-gray-500">Closing 2026</span>
              </div>
            </div>
          </div>
          
          <!-- Project Card 3 -->
          <div class="group bg-ivory rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
            <div class="aspect-video overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" 
                alt="Construction collèges"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div class="p-6">
              <span class="font-montserrat text-xs text-or uppercase tracking-wider">Côte d'Ivoire</span>
              <h3 class="font-playfair text-xl text-bleu-nuit mt-2 mb-3">56 Collèges de Base 4</h3>
              <p class="font-montserrat text-sm text-gray-600 mb-4">Programme éducatif national d'infrastructures scolaires.</p>
              <div class="flex justify-between items-center">
                <span class="font-playfair text-2xl text-or">137 M€</span>
                <span class="font-montserrat text-xs text-gray-500">Closé 2025</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink 
            to="/nos-activites"
            class="inline-flex items-center gap-3 font-montserrat text-bleu-nuit text-sm uppercase tracking-widest border-2 border-bleu-nuit px-8 py-4 hover:bg-bleu-nuit hover:text-white transition-all duration-300"
          >
            Voir tous nos projets
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-fixed"
        style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')"
      />
      <div class="absolute inset-0 bg-bleu-nuit/85" />
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-playfair text-display text-white mb-6">
          Prêt à concrétiser vos ambitions ?
        </h2>
        <p class="font-montserrat text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Discutons de vos projets et découvrez comment IMAAD Financial Group 
          peut vous accompagner vers le succès.
        </p>
        <NuxtLink 
          to="/contact"
          class="inline-flex items-center gap-3 font-montserrat text-sm uppercase tracking-widest px-10 py-5 bg-or text-bleu-nuit hover:bg-or-light transition-all duration-300"
        >
          Contactez-nous
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-home {
  overflow-x: hidden;
}

.hero-bg {
  will-change: transform;
}
</style>
