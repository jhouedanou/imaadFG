<script setup lang="ts">
import { onMounted, computed } from 'vue'

const { pages, site } = useSiteData()

const teamData = computed(() => pages['notre-equipe'])
const direction = computed(() => teamData.value?.direction || [])
const equipe = computed(() => teamData.value?.equipe || [])

const getInitials = (name: string) => {
  return name.split(' ')
    .filter(word => word.length > 1 && word[0] === word[0].toUpperCase())
    .map(word => word[0])
    .join('')
    .substring(0, 3)
}

useHead({
  title: 'Notre Équipe - IMAAD Financial Group',
  meta: [
    {
      name: 'description',
      content: 'Rencontrez notre équipe d\'experts en financement.'
    }
  ]
})

onMounted(async () => {
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.from('.team-card', {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.team-grid',
      start: 'top 85%'
    }
  })
})
</script>

<template>
  <div class="min-h-screen bg-[#050b16]">
    <section class="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: repeating-linear-gradient(90deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 80px);"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
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
              {{ teamData?.hero?.title || 'Notre Gouvernance' }}
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {{ teamData?.hero?.subtitle || 'Leadership, Intégrité et Influence Continentale' }}
            </p>
          </div>
          
          <div class="flex gap-8">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-michroma font-bold text-[#C9A227] mb-2">30+</div>
              <div class="text-sm text-gray-400 uppercase tracking-wider">Années d'expérience</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-michroma font-bold text-[#C9A227] mb-2">{{ direction.length + equipe.length }}</div>
              <div class="text-sm text-gray-400 uppercase tracking-wider">Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <h2 class="text-3xl font-michroma font-bold text-white mb-4">Direction</h2>
          <div class="w-20 h-[2px] bg-[#C9A227]"></div>
        </div>
        
        <div class="team-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in direction" :key="member.nom" class="group team-card">
            <div class="relative bg-[#0A192F] border border-gray-800 rounded-lg overflow-hidden hover:border-[#C9A227]/50 transition-all duration-500">
              <div class="relative h-80 bg-gradient-to-br from-[#0A192F] to-[#1a2f4a] flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 20px);"></div>
                </div>
                <div class="w-36 h-36 rounded-full bg-gradient-to-br from-[#C9A227] to-[#a8861f] flex items-center justify-center text-[#0A192F] text-4xl font-michroma font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  {{ getInitials(member.nom) }}
                </div>
                <div class="absolute inset-0 bg-[#C9A227]/0 group-hover:bg-[#C9A227]/10 transition-all duration-500"></div>
              </div>
              <div class="p-6">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-[2px] bg-[#C9A227]"></div>
                  <span class="text-[#C9A227] text-xs font-semibold uppercase tracking-wider">{{ member.poste }}</span>
                </div>
                <h3 class="text-2xl font-michroma font-bold text-white mb-4">{{ member.nom }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="equipe.length > 0" class="py-20 px-4 md:px-8 bg-[#0A192F]/30">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12">
          <h2 class="text-3xl font-michroma font-bold text-white mb-4">Notre Équipe</h2>
          <div class="w-20 h-[2px] bg-[#C9A227]"></div>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="member in equipe" :key="member.nom" class="group">
            <div class="bg-[#0A192F] border border-gray-800 rounded-lg p-6 hover:border-[#C9A227]/50 transition-all duration-500">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A227]/30 to-[#C9A227]/10 flex items-center justify-center text-[#C9A227] text-lg font-michroma font-bold group-hover:from-[#C9A227] group-hover:to-[#a8861f] group-hover:text-[#0A192F] transition-all duration-500">
                  {{ getInitials(member.nom) }}
                </div>
                <div>
                  <h3 class="text-lg font-michroma font-bold text-white">{{ member.nom }}</h3>
                  <p class="text-[#C9A227] text-sm">{{ member.poste }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 md:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-gradient-to-r from-[#0A192F] to-[#0d2240] border border-gray-800 rounded-2xl p-12 text-center relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/5 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-[#C9A227]/5 rounded-full blur-3xl"></div>
          <div class="relative z-10">
            <h2 class="text-3xl md:text-4xl font-michroma font-bold text-white mb-6">
              Travaillons <span class="text-[#C9A227]">Ensemble</span>
            </h2>
            <p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Notre équipe est prête à vous accompagner dans vos projets de financement.
            </p>
            <NuxtLink to="/contact" class="inline-flex items-center gap-3 bg-[#C9A227] text-[#0A192F] px-8 py-4 font-michroma font-bold text-sm uppercase tracking-wider hover:bg-[#d4af37] transition-all duration-300 group">
              Contactez-nous
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
