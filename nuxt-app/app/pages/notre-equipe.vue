<template>
  <div class="min-h-screen bg-[#050b16]">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(90deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 80px);"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm mb-8">
          <NuxtLink to="/" class="text-gray-400 hover:text-[#C9A227] transition-colors">Accueil</NuxtLink>
          <span class="text-gray-600">/</span>
          <span class="text-[#C9A227]">Notre Équipe</span>
        </div>

        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div class="inline-flex items-center gap-3 mb-6">
              <div class="w-12 h-[2px] bg-[#C9A227]"></div>
              <span class="text-[#C9A227] font-michroma text-sm tracking-[0.3em] uppercase">L'équipe</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-michroma font-bold text-white mb-6 leading-tight">
              Notre <span class="text-[#C9A227]">Équipe</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Des experts reconnus en financement souverain, structuration de projets et partenariats stratégiques.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="flex gap-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-michroma font-bold text-[#C9A227] mb-2">30+</div>
              <div class="text-sm text-gray-400 uppercase tracking-wider">Années d'expérience</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-michroma font-bold text-[#C9A227] mb-2">3</div>
              <div class="text-sm text-gray-400 uppercase tracking-wider">Continents</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Members Grid -->
    <section class="py-20 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Member 1: Pierre WOLF -->
          <div class="group team-card" ref="teamCard1">
            <div class="relative bg-[#0A192F] border border-gray-800 rounded-lg overflow-hidden hover:border-[#C9A227]/50 transition-all duration-500">
              <!-- Photo placeholder avec initiales -->
              <div class="relative h-80 bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 20px);"></div>
                </div>
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-[#C9A227] to-[#a8861f] flex items-center justify-center text-[#0A192F] text-5xl font-michroma font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  PW
                </div>
                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/10 transition-all duration-500"></div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-[2px] bg-[#C9A227]"></div>
                  <span class="text-[#C9A227] text-xs font-semibold uppercase tracking-wider">Président</span>
                </div>
                <h3 class="text-2xl font-michroma font-bold text-white mb-4">Pierre WOLF</h3>
                <p class="text-gray-300 leading-relaxed mb-6">
                  Expert reconnu en financement souverain et partenariats public-privé avec plus de 30 ans d'expérience en finance internationale.
                </p>
                <div class="flex items-center gap-4">
                  <a href="#" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] hover:bg-[#C9A227]/10 transition-all">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="mailto:contact@imaadcapitalpartners.com" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] hover:bg-[#C9A227]/10 transition-all">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Member 2: Issa Mehmet N'DIAYE -->
          <div class="group team-card" ref="teamCard2">
            <div class="relative bg-[#0A192F] border border-gray-800 rounded-lg overflow-hidden hover:border-[#C9A227]/50 transition-all duration-500">
              <!-- Photo placeholder avec initiales -->
              <div class="relative h-80 bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 20px);"></div>
                </div>
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-[#C9A227] to-[#a8861f] flex items-center justify-center text-[#0A192F] text-4xl font-michroma font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  IMN
                </div>
                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/10 transition-all duration-500"></div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-[2px] bg-[#C9A227]"></div>
                  <span class="text-[#C9A227] text-xs font-semibold uppercase tracking-wider">Directeur Général</span>
                </div>
                <h3 class="text-2xl font-michroma font-bold text-white mb-4">Issa Mehmet N'DIAYE</h3>
                <p class="text-gray-300 leading-relaxed mb-6">
                  Spécialiste du financement de projets et des structures de transaction complexes en Afrique de l'Ouest.
                </p>
                <div class="flex items-center gap-4">
                  <a href="#" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] hover:bg-[#C9A227]/10 transition-all">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="mailto:contact@imaadcapitalpartners.com" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] hover:bg-[#C9A227]/10 transition-all">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Member 3: Rym MOULAYE-IDRISS -->
          <div class="group team-card" ref="teamCard3">
            <div class="relative bg-[#0A192F] border border-gray-800 rounded-lg overflow-hidden hover:border-[#C9A227]/50 transition-all duration-500">
              <!-- Photo placeholder avec initiales -->
              <div class="relative h-80 bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 20px);"></div>
                </div>
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-[#C9A227] to-[#a8861f] flex items-center justify-center text-[#0A192F] text-5xl font-michroma font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  RM
                </div>
                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/10 transition-all duration-500"></div>
              </div>
              
              <!-- Content -->
              <div class="p-6">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-[2px] bg-[#C9A227]"></div>
                  <span class="text-[#C9A227] text-xs font-semibold uppercase tracking-wider">Directrice des Partenariats</span>
                </div>
                <h3 class="text-2xl font-michroma font-bold text-white mb-4">Rym MOULAYE-IDRISS</h3>
                <p class="text-gray-300 leading-relaxed mb-6">
                  Experte en partenariats public-privé et en structuration des projets d'infrastructure à grande échelle.
                </p>
                <div class="flex items-center gap-4">
                  <a href="#" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] hover:bg-[#C9A227]/10 transition-all">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="mailto:contact@imaadcapitalpartners.com" class="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C9A227] hover:text-[#C9A227] hover:bg-[#C9A227]/10 transition-all">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="py-24 px-4 md:px-8 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#050b16] via-[#0A192F] to-[#050b16]"></div>
      
      <div class="max-w-5xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 mb-6">
            <div class="w-12 h-[2px] bg-[#C9A227]"></div>
            <span class="text-[#C9A227] font-michroma text-sm tracking-[0.3em] uppercase">Nos Valeurs</span>
            <div class="w-12 h-[2px] bg-[#C9A227]"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-michroma font-bold text-white mb-8">Notre Philosophie</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            IMAAD Financial Group est fondée sur les principes d'excellence, d'intégrité et d'impact durable.
          </p>
        </div>
        
        <!-- Values Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-[#0A192F]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center hover:border-[#C9A227]/30 transition-all duration-500">
            <div class="w-16 h-16 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-michroma font-bold text-white mb-4">Excellence</h3>
            <p class="text-gray-400 leading-relaxed">
              Nous visons l'excellence dans chaque projet, chaque transaction et chaque relation client.
            </p>
          </div>
          
          <div class="bg-[#0A192F]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center hover:border-[#C9A227]/30 transition-all duration-500">
            <div class="w-16 h-16 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-michroma font-bold text-white mb-4">Intégrité</h3>
            <p class="text-gray-400 leading-relaxed">
              La transparence et l'éthique guident toutes nos actions et décisions stratégiques.
            </p>
          </div>
          
          <div class="bg-[#0A192F]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center hover:border-[#C9A227]/30 transition-all duration-500">
            <div class="w-16 h-16 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-michroma font-bold text-white mb-4">Impact Durable</h3>
            <p class="text-gray-400 leading-relaxed">
              Créer des solutions qui catalysent la croissance économique durable en Afrique.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 md:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-[#0A192F] to-[#0d2240] border border-gray-800 rounded-2xl p-12 text-center relative overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/5 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A227]/5 rounded-full blur-3xl"></div>
          
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-michroma font-bold text-white mb-6">
              Travaillons <span class="text-[#C9A227]">Ensemble</span>
            </h2>
            <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Notre équipe est prête à vous accompagner dans vos projets de financement et de développement stratégique.
            </p>
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center gap-3 bg-[#C9A227] text-[#0A192F] px-8 py-4 font-michroma font-bold text-sm uppercase tracking-wider hover:bg-[#d4af37] transition-all duration-300 group"
            >
              Contactez-nous
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const teamCard1 = ref<HTMLElement | null>(null)
const teamCard2 = ref<HTMLElement | null>(null)
const teamCard3 = ref<HTMLElement | null>(null)

useHead({
  title: 'Notre Équipe - IMAAD Financial Group',
  meta: [
    {
      name: 'description',
      content: 'Rencontrez notre équipe d\'experts en financement, partenariats publics-privés et développement économique.'
    }
  ]
})

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  
  // Animate team cards on scroll
  const cards = [teamCard1.value, teamCard2.value, teamCard3.value].filter(Boolean)
  
  cards.forEach((card, index) => {
    gsap.fromTo(card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
})
</script>

<style scoped>
.team-card {
  opacity: 0;
}
</style>
