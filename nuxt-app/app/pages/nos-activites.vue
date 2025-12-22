<script setup lang="ts">
import { ref, onMounted } from 'vue'

useHead({
  title: 'Nos Activités - IMAAD Financial Group',
  meta: [
    { name: 'description', content: 'Découvrez les trois piliers d\'expertise d\'IMAAD Financial Group : Financement Souverain, Corporate & Trade Finance, Partenariats Public-Privé.' },
    { property: 'og:title', content: 'Nos Activités - IMAAD Financial Group' },
    { property: 'og:type', content: 'website' }
  ]
})

// Services/Verticaux
const services = [
  {
    id: 'financement-souverain',
    number: '01',
    title: 'Financement Souverain',
    subtitle: 'Accompagner les États dans leurs ambitions',
    description: 'Nous accompagnons les États africains dans la mobilisation de financements stratégiques pour leurs projets de développement. Notre expertise couvre l\'ensemble du spectre des instruments financiers disponibles : prêts concessionnels, semi-concessionnels, commerciaux, émissions obligataires et appuis budgétaires.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    offerings: [
      'Mobilisation de financements bilatéraux et multilatéraux',
      'Structuration de prêts souverains',
      'Conseil en émission obligataire',
      'Appuis budgétaires et gestion de la dette',
      'Relations avec les institutions financières internationales'
    ],
    stats: { value: '+800M €', label: 'mobilisés depuis 2020' }
  },
  {
    id: 'corporate-finance',
    number: '02',
    title: 'Corporate & Trade Finance',
    subtitle: 'Accélérer la croissance des entreprises',
    description: 'Nous accompagnons les entreprises africaines dans leurs besoins de financement structuré. Du CAPEX à l\'OPEX, nous développons des solutions sur mesure pour soutenir les projets d\'investissement et le cycle d\'exploitation des acteurs économiques du continent.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    offerings: [
      'Financement de projets industriels',
      'Trade finance et garanties',
      'Levée de fonds CAPEX & OPEX',
      'Financement export',
      'Solutions de trésorerie structurées'
    ],
    stats: { value: '+250M €', label: 'de financements corporate' }
  },
  {
    id: 'ppp',
    number: '03',
    title: 'Partenariats Public-Privé',
    subtitle: 'Construire les infrastructures de demain',
    description: 'Nous conseillons et accompagnons la structuration de projets PPP pour la réalisation d\'infrastructures essentielles. Notre expertise couvre l\'ensemble du cycle de vie des projets : de l\'étude de faisabilité à la mise en œuvre opérationnelle.',
    image: 'https://images.unsplash.com/photo-1590674899484-13da0f721f26?w=1200&q=80',
    offerings: [
      'Conseil en structuration PPP',
      'Études de faisabilité financière',
      'Négociation des contrats de concession',
      'Accompagnement des porteurs de projets',
      'Coordination des parties prenantes'
    ],
    stats: { value: '3 Mds €', label: 'portefeuille de projets' }
  }
]

// Projets référence
const projects = [
  {
    title: 'Route Abidjan - San Pedro',
    location: 'Côte d\'Ivoire',
    amount: '150 M€',
    type: 'Infrastructure routière',
    status: 'Closé 2023',
    category: 'financement-souverain'
  },
  {
    title: 'Adduction Eau Potable Grand-Abidjan',
    location: 'Côte d\'Ivoire',
    amount: '278 M€',
    type: 'Eau et assainissement',
    status: 'Closing 2026',
    category: 'financement-souverain'
  },
  {
    title: '56 Collèges de Base 4',
    location: 'Côte d\'Ivoire',
    amount: '137 M€',
    type: 'Infrastructures éducatives',
    status: 'Closé 2025',
    category: 'ppp'
  },
  {
    title: 'Centres de santé Nord',
    location: 'Côte d\'Ivoire',
    amount: '89 M€',
    type: 'Infrastructures de santé',
    status: 'En cours',
    category: 'ppp'
  },
  {
    title: 'Financement agroindustriel',
    location: 'Sénégal',
    amount: '45 M€',
    type: 'Agro-industrie',
    status: 'Closé 2024',
    category: 'corporate-finance'
  },
  {
    title: 'Terminal portuaire',
    location: 'Guinée',
    amount: '120 M€',
    type: 'Infrastructure portuaire',
    status: 'En développement',
    category: 'ppp'
  }
]

const activeService = ref(services[0].id)

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    
    // Service sections animation
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
    
    // Project cards animation
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
          Nos Activités
        </h1>
        <p class="font-montserrat text-lg text-gray-300 max-w-2xl mx-auto">
          Trois domaines d'excellence pour accompagner la croissance 
          durable des États et entreprises africaines.
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
          <div 
            class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
          >
            <!-- Content -->
            <div :class="{ 'lg:col-start-2': index % 2 === 1 }">
              <span class="font-playfair text-6xl lg:text-8xl text-or/20 font-light block mb-4">
                {{ service.number }}
              </span>
              <h2 class="font-playfair text-display text-bleu-nuit mb-2">
                {{ service.title }}
              </h2>
              <p class="font-montserrat text-or text-sm uppercase tracking-wider mb-6">
                {{ service.subtitle }}
              </p>
              <p class="font-montserrat text-gray-600 leading-relaxed mb-8">
                {{ service.description }}
              </p>
              
              <!-- Offerings -->
              <div class="mb-8">
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
              
              <!-- Stat -->
              <div class="flex items-center gap-4 p-6 bg-bleu-nuit rounded-xl">
                <div class="font-playfair text-3xl lg:text-4xl text-or">
                  {{ service.stats.value }}
                </div>
                <div class="font-montserrat text-sm text-gray-300 uppercase tracking-wider">
                  {{ service.stats.label }}
                </div>
              </div>
            </div>
            
            <!-- Image -->
            <div 
              class="relative"
              :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }"
            >
              <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  :src="service.image" 
                  :alt="service.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Decorative elements -->
              <div 
                class="absolute -z-10 w-32 h-32 border-2 border-or rounded-xl"
                :class="index % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Projects Section -->
    <section class="py-20 lg:py-32 bg-bleu-nuit">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">
            Références
          </span>
          <h2 class="font-playfair text-display text-white mb-4">
            Nos Projets
          </h2>
          <p class="font-montserrat text-gray-400 max-w-2xl mx-auto">
            Une sélection de projets structurants que nous avons accompagnés
          </p>
        </div>
        
        <div class="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="project in projects" 
            :key="project.title"
            class="project-card bg-bleu-nuit-light rounded-xl p-6 border border-white/10 hover:border-or/50 transition-all duration-300 group"
          >
            <div class="flex justify-between items-start mb-4">
              <span class="font-montserrat text-xs text-or uppercase tracking-wider">
                {{ project.type }}
              </span>
              <span 
                class="font-montserrat text-xs px-3 py-1 rounded-full"
                :class="project.status.includes('Closé') ? 'bg-green-500/20 text-green-400' : 'bg-or/20 text-or'"
              >
                {{ project.status }}
              </span>
            </div>
            
            <h3 class="font-playfair text-xl text-white mb-2 group-hover:text-or transition-colors duration-300">
              {{ project.title }}
            </h3>
            
            <div class="flex items-center gap-2 mb-4">
              <Icon name="mdi:map-marker" class="w-4 h-4 text-gray-400" />
              <span class="font-montserrat text-sm text-gray-400">{{ project.location }}</span>
            </div>
            
            <div class="font-playfair text-2xl text-or">
              {{ project.amount }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">
            Méthodologie
          </span>
          <h2 class="font-playfair text-display text-bleu-nuit">
            Notre Approche
          </h2>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-or/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-playfair text-2xl text-or">1</span>
            </div>
            <h3 class="font-playfair text-lg text-bleu-nuit mb-2">Diagnostic</h3>
            <p class="font-montserrat text-sm text-gray-600">Analyse approfondie des besoins et du contexte du projet</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-or/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-playfair text-2xl text-or">2</span>
            </div>
            <h3 class="font-playfair text-lg text-bleu-nuit mb-2">Structuration</h3>
            <p class="font-montserrat text-sm text-gray-600">Conception de la solution financière optimale</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-or/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-playfair text-2xl text-or">3</span>
            </div>
            <h3 class="font-playfair text-lg text-bleu-nuit mb-2">Mobilisation</h3>
            <p class="font-montserrat text-sm text-gray-600">Négociation et closing avec les partenaires financiers</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-or/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-playfair text-2xl text-or">4</span>
            </div>
            <h3 class="font-playfair text-lg text-bleu-nuit mb-2">Suivi</h3>
            <p class="font-montserrat text-sm text-gray-600">Accompagnement jusqu'à la réalisation du projet</p>
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
