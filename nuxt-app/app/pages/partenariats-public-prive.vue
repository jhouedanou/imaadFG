<script setup lang="ts">
const { pages } = useSiteData()
const data = pages.partenariatsPublicPrive

useHead({
  title: `${data.hero.title} - IMAAD Financial Group`,
  meta: [
    { name: 'description', content: data.presentation.description },
    { property: 'og:title', content: `${data.hero.title} - IMAAD Financial Group` },
    { property: 'og:image', content: data.hero.backgroundImage }
  ]
})

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate table
    gsap.from('.project-table-container', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.project-table-container',
        start: 'top 85%'
      }
    })
  }
})
</script>

<template>
  <div class="page-ppp pt-20">
    <DynamicHero 
      :title="data.hero.title" 
      :subtitle="data.hero.subtitle" 
      :backgroundImage="data.hero.backgroundImage"
    />

    <DynamicSection 
      :title="data.presentation.title" 
      :description="data.presentation.description"
    />

    <!-- Table des Projets -->
    <section class="py-24 bg-ivory overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">Développement & Conseil</span>
          <h2 class="font-playfair text-display text-bleu-nuit mb-4">PROJETS EN COURS</h2>
        </div>
        
        <div class="project-table-container overflow-x-auto rounded-2xl shadow-2xl bg-white">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-bleu-nuit text-white">
                <th class="p-6 font-montserrat uppercase text-sm tracking-widest border-r border-white/10">Intitulé du Projet</th>
                <th class="p-6 font-montserrat uppercase text-sm tracking-widest border-r border-white/10">Pays d'Intervention</th>
                <th class="p-6 font-montserrat uppercase text-sm tracking-widest border-r border-white/10 text-center">Montant Global</th>
                <th class="p-6 font-montserrat uppercase text-sm tracking-widest text-center">État d'Avancement</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(project, index) in data.projets" :key="index" class="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                <td class="p-6 font-montserrat text-gray-900 font-semibold group-hover:text-bleu-nuit transition-colors">{{ project.intitule }}</td>
                <td class="p-6 font-montserrat text-gray-600 italic">{{ project.pays }}</td>
                <td class="p-6 font-montserrat text-bleu-nuit font-bold text-center text-lg">{{ project.montant }}</td>
                <td class="p-6 text-center">
                  <span class="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    :class="project.statut.includes('Closé') ? 'bg-green-100 text-green-700' : 'bg-or/20 text-or border border-or/30'">
                    {{ project.statut }}
                  </span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-bleu-nuit text-white font-playfair">
                <td colspan="2" class="p-8 text-right text-2xl font-light text-white">Total Valeur Projets PPP</td>
                <td class="p-8 text-center text-3xl font-bold text-or">{{ data.total }}</td>
                <td class="p-8"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-ppp :deep(.dynamic-section) {
  padding: 6rem 2rem;
  background: transparent;
}

.page-ppp :deep(.dynamic-section .section-title) {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #1a237e;
  margin-bottom: 2rem;
}

.page-ppp :deep(.dynamic-section .section-description) {
  background: white;
  border-left: 4px solid #c5a059;
  padding: 2.5rem;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
</style>
