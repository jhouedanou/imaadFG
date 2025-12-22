<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// Import site data from JSON
const { pages } = useSiteData()

// Get activities data from JSON
const activitesData = computed(() => pages['nos-activites'])

useHead({
  title: 'Nos Activités - IMAAD Financial Group',
  meta: [
    { name: 'description', content: 'Découvrez les trois piliers d\'expertise d\'IMAAD Financial Group : Financement Souverain, Corporate & Trade Finance, Partenariats Public-Privé.' },
    { property: 'og:title', content: 'Nos Activités - IMAAD Financial Group' },
    { property: 'og:type', content: 'website' }
  ]
})

// Services from JSON
const services = computed(() => {
  const servicesList = activitesData.value?.services || []
  return servicesList.map((service: any, index: number) => ({
    id: service.id,
    number: String(index + 1).padStart(2, '0'),
    title: service.title,
    subtitle: service.description,
    description: service.description,
    image: index === 0 
      ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'
      : index === 1 
        ? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80'
        : 'https://images.unsplash.com/photo-1590674899484-13da0f721f26?w=1200&q=80',
    offerings: service.prestations || [],
    projects: service.projets || []
  }))
})

const activeService = ref('')

onMounted(async () => {
  if (services.value.length > 0) {
    activeService.value = services.value[0].id
  }
  
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from('.service-section', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-container',
        start: 'top 80%'
      }
    })
    
    gsap.from('.project-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 85%'
      }
    })
  }
})
</script>

<template>
  <div class="page-activites">
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')"
      />
      <div class="absolute inset-0 bg-bleu-nuit/75" />
      
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">
          Expertise
        </span>
        <h1 class="font-playfair text-hero text-white mb-6">
          {{ activitesData?.hero?.title || 'Nos Activités' }}
        </h1>
        <p class="font-montserrat text-lg text-gray-300 max-w-2xl mx-auto">
          {{ activitesData?.hero?.subtitle || 'Trois domaines d\'excellence pour accompagner la croissance durable des États et entreprises africaines.' }}
        </p>
      </div>
    </section>

    <!-- Services Quick Nav -->
    <section class="bg-white py-8 border-b border-gray-100 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-center gap-4 lg:gap-8">
          <a 
            v-for="service in services"
            :key="service.id"
            :href="`#${service.id}`"
            class="font-montserrat text-sm uppercase tracking-wider text-gray-500 hover:text-or transition-colors duration-300 py-2 border-b-2 border-transparent hover:border-or"
            :class="{ 'text-or border-or': activeService === service.id }"
            @click="activeService = service.id"
          >
            {{ service.title }}
          </a>
        </div>
      </div>
    </section>

    <!-- Services Sections -->
    <div class="services-container">
      <section 
        v-for="(service, index) in services"
        :key="service.id"
        :id="service.id"
        class="service-section py-20 lg:py-32"
        :class="index % 2 === 0 ? 'bg-white' : 'bg-ivory'"
      >
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Content -->
            <div>
              <span class="font-playfair text-6xl lg:text-8xl text-or/20 font-light block mb-4">
                {{ service.number }}
              </span>
              <h2 class="font-playfair text-display text-bleu-nuit mb-2">
                {{ service.title }}
              </h2>
              <p class="font-montserrat text-gray-600 leading-relaxed mb-8">
                {{ service.description }}
              </p>
              
              <!-- Offerings -->
              <div v-if="service.offerings.length > 0" class="mb-8">
                <h3 class="font-montserrat text-sm uppercase tracking-wider text-bleu-nuit mb-4">
                  Nos expertises
                </h3>
                <ul class="space-y-3">
                  <li 
                    v-for="offering in service.offerings" 
                    :key="offering"
                    class="flex items-start gap-3 font-montserrat text-gray-600"
                  >
                    <Icon name="mdi:check-circle" class="w-5 h-5 text-or flex-shrink-0 mt-0.5" />
                    <span>{{ offering }}</span>
                  </li>
                </ul>
              </div>

              <!-- Projects for this service -->
              <div v-if="service.projects.length > 0" class="mt-8">
                <h3 class="font-montserrat text-sm uppercase tracking-wider text-bleu-nuit mb-4">
                  Projets de référence
                </h3>
                <div class="grid gap-4">
                  <div 
                    v-for="project in service.projects.slice(0, 3)" 
                    :key="project.nom"
                    class="bg-gray-50 rounded-lg p-4 border border-gray-100"
                  >
                    <div class="flex justify-between items-start mb-2">
                      <h4 class="font-montserrat font-semibold text-bleu-nuit">{{ project.nom }}</h4>
                      <span class="font-montserrat text-sm text-or font-semibold">{{ project.montant }}</span>
                    </div>
                    <div class="flex items-center gap-4 text-sm text-gray-500">
                      <span>{{ project.pays }}</span>
                      <span class="px-2 py-0.5 rounded-full text-xs" :class="project.statut?.includes('Closé') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'">
                        {{ project.statut }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Image -->
            <div class="relative">
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  :src="service.image" 
                  :alt="service.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -z-10 w-32 h-32 border-2 border-or rounded-xl -bottom-6 -right-6" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Process Section -->
    <section class="py-20 lg:py-32 bg-bleu-nuit">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">
            Méthodologie
          </span>
          <h2 class="font-playfair text-display text-white">
            {{ activitesData?.modele?.title || 'Notre Modèle' }}
          </h2>
          <p class="font-montserrat text-gray-400 max-w-2xl mx-auto mt-4">
            {{ activitesData?.modele?.description || '' }}
          </p>
        </div>
        
        <!-- Approach items from JSON -->
        <div v-if="activitesData?.approche?.items" class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="item in activitesData.approche.items" 
            :key="item.title"
            class="text-center bg-white/5 backdrop-blur rounded-xl p-8"
          >
            <div class="w-20 h-20 bg-or/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <img :src="item.image" :alt="item.title" class="w-12 h-12 object-contain" />
            </div>
            <h3 class="font-playfair text-xl text-white mb-2">{{ item.title }}</h3>
            <p class="font-montserrat text-sm text-or">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 lg:py-32 overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center bg-fixed"
        style="background-image: url('https://images.unsplash.com/photo-1590674899484-13da0f721f26?w=1920&q=80')"
      />
      <div class="absolute inset-0 bg-bleu-nuit/85" />
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 class="font-playfair text-display text-white mb-6">
          Un projet à financer ?
        </h2>
        <p class="font-montserrat text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Discutons de vos ambitions et découvrez comment IMAAD Financial Group 
          peut vous accompagner dans leur réalisation.
        </p>
        <NuxtLink 
          to="/contact"
          class="inline-flex items-center gap-3 font-montserrat text-sm uppercase tracking-widest px-10 py-5 bg-or text-bleu-nuit hover:bg-or-light transition-all duration-300"
        >
          Nous contacter
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-activites {
  overflow-x: hidden;
}

.bg-bleu-nuit-light {
  background-color: #132D54;
}
</style>
