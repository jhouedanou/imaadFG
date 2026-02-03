<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// Import site data from JSON
const { site, pages, images, footer } = useSiteData()
const homeData = computed(() => pages.accueil)
const activitesData = computed(() => pages['nos-activites'])

// SEO - use data from JSON
useHead({
  title: `${site.name} - ${site.tagline}`,
  meta: [
    { name: 'description', content: homeData.value?.presentation?.description || 'IMAAD Financial Group structure et finance des projets souverains, PPP et corporate en Afrique.' },
    { property: 'og:title', content: site.name },
    { property: 'og:description', content: site.tagline },
    { property: 'og:type', content: 'website' },
    { name: 'theme-color', content: '#0b1f3a' }
  ]
})

// Domaines (services) from JSON
const domaines = computed(() => {
  const leviers = activitesData.value?.modele?.leviers
  if (leviers && leviers.length > 0) {
    return leviers.map((levier: any) => ({
      title: levier.title,
      description: levier.description
    }))
  }
  return [
    { title: 'Financement Souverain', description: 'Mobilisation de financements concessionnels, restructuration de dette publique et appuis budgétaires.' },
    { title: 'Partenariats Public‑Privé (PPP)', description: 'Conseil, structuration et développement d\'infrastructures en partenariat étatique et privé.' },
    { title: 'Corporate & Trade Finance', description: 'Financement CAPEX & OPEX pour entreprises: industrie, logistique, immobilier.' }
  ]
})

// Projets from JSON
const projets = computed(() => {
  const projetsData = activitesData.value?.projets?.items
  if (projetsData && projetsData.length > 0) {
    return projetsData
  }
  return [
    { nom: 'Route Abidjan – San Pedro', pays: 'Côte d\'Ivoire', montant: '150 M€', statut: 'Closé en 2023' },
    { nom: 'Adduction eau Grand‑Abidjan', pays: 'Côte d\'Ivoire', montant: '278 M€', statut: 'Closing 2026' },
    { nom: 'Renforcement réseau gaz', pays: 'Nigéria', montant: '500 M€', statut: 'Closing 2026' }
  ]
})

// Stats from JSON
const stats = computed(() => {
  const impactStats = homeData.value?.impact?.stats
  if (impactStats && impactStats.length > 0) {
    return impactStats.slice(0, 3)
  }
  return [
    { value: '+1 Md €', label: 'mobilisés depuis 2020' },
    { value: '15', label: 'pays couverts' },
    { value: '20+', label: 'projets PPP' }
  ]
})

// Valeurs from JSON
const valeurs = computed(() => {
  const valeursData = homeData.value?.valeurs?.items
  if (valeursData && valeursData.length > 0) {
    return valeursData
  }
  return [
    { title: 'Souveraineté', description: 'Renforcer l\'autonomie financière des États.' },
    { title: 'Impact', description: 'Projets durables, création d\'emplois et valeur sociale.' }
  ]
})

// Équipe from JSON
const equipe = computed(() => {
  const direction = pages['notre-equipe']?.direction
  if (direction && direction.length >= 3) {
    return direction.slice(0, 3)
  }
  return [
    { nom: 'Issa Mehmet N\'Diaye', poste: 'Co-fondateur & Directeur Général' },
    { nom: 'Rym Moulaye‑Idriss', poste: 'Co-fondatrice & Directrice Générale Adjointe' },
    { nom: 'Pierre Wolf', poste: 'Président du Conseil de Gestion' }
  ]
})

// Header scroll state
const isScrolled = ref(false)

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', () => {
      isScrolled.value = window.scrollY > 20
    })
  }
})
</script>

<template>
  <div class="page-home bg-[#f7f7f8]">
    <!-- Hero Section -->
    <section class="hero relative text-white" style="padding-top: 88px; background: linear-gradient(180deg, rgba(11,31,58,0.9), rgba(11,31,58,0.75)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80') center/cover no-repeat;">
      <div class="container mx-auto px-6 py-16">
        <div class="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
          <!-- Left content -->
          <div>
            <h1 class="text-3xl lg:text-4xl font-bold mb-4 leading-tight font-poppins">
              {{ homeData?.hero?.title || 'Catalyseur de la souveraineté et de la croissance durable' }}
            </h1>
            <p class="text-white/85 text-lg mb-5 font-opensans">
              {{ homeData?.hero?.subtitle || 'Imaad Financial Group structure et finance des projets souverains, PPP et corporate en Afrique, au Moyen‑Orient et en Amérique Latine.' }}
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex gap-3 flex-wrap mb-6">
              <NuxtLink 
                to="/nos-activites"
                class="bg-[#c7a14a] text-[#0b1f3a] px-4 py-3 rounded-md font-bold text-sm hover:bg-[#d4b366] transition-colors"
              >
                Découvrir nos solutions
              </NuxtLink>
              <NuxtLink 
                to="/nos-activites#projets"
                class="bg-transparent border border-white/20 text-white/95 px-4 py-3 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Voir nos réalisations
              </NuxtLink>
            </div>

            <!-- Stats -->
            <div class="flex gap-4 flex-wrap mt-6">
              <div v-for="stat in stats" :key="stat.label" class="flex gap-3 items-center">
                <strong class="text-xl text-[#c7a14a] min-w-[110px] font-poppins">{{ stat.value }}</strong>
                <span class="text-[#6b7280] text-sm">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Contact Box -->
          <aside class="bg-white/5 p-5 rounded-lg border border-white/10">
            <h3 class="text-lg font-semibold mb-2 font-poppins">Contact rapide</h3>
            <p class="text-white/90 text-sm mb-4">Envoyez une demande ou téléchargez notre brochure institutionnelle.</p>
            <input 
              type="text" 
              placeholder="Nom / Organisation"
              class="w-full p-3 rounded-md border border-white/10 bg-transparent text-white placeholder-white/50 mb-3 text-sm"
            />
            <NuxtLink 
              to="/contact"
              class="inline-block bg-[#c7a14a] text-[#0b1f3a] px-4 py-3 rounded-md font-bold text-sm hover:bg-[#d4b366] transition-colors"
            >
              Contacter nos experts
            </NuxtLink>
          </aside>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-12 px-6">
      <div class="container mx-auto">
        <div class="flex gap-5 flex-wrap lg:flex-nowrap items-stretch">
          <!-- Left Content -->
          <div class="flex-1">
            <h2 class="text-2xl font-bold text-[#0b1f3a] mb-4 font-poppins mt-0">
              {{ homeData?.presentation?.title || 'Notre modèle et nos valeurs' }}
            </h2>
            <p class="text-[#6b7280] mb-6">
              {{ homeData?.presentation?.description || 'Imaad Financial Group est une banque d\'affaires panafricaine qui place la finance au service du développement, de la compétitivité et de la durabilité. Nous combinons vision internationale et exécution locale.' }}
            </p>

            <!-- Service Cards -->
            <div class="grid md:grid-cols-3 gap-4 mt-5">
              <div 
                v-for="domaine in domaines" 
                :key="domaine.title"
                class="bg-white rounded-lg p-5 shadow-[0_8px_30px_rgba(2,6,23,0.06)]"
              >
                <h3 class="text-[#0b1f3a] font-semibold mb-2 text-base font-poppins">{{ domaine.title }}</h3>
                <p class="text-[#6b7280] text-sm">{{ domaine.description }}</p>
              </div>
            </div>
          </div>

          <!-- Right: Values -->
          <div class="w-full lg:w-80">
            <div class="flex gap-3 h-full">
              <div 
                v-for="valeur in valeurs" 
                :key="valeur.title"
                class="flex-1 bg-white p-5 rounded-lg shadow-[0_6px_18px_rgba(2,6,23,0.04)] text-center"
              >
                <h4 class="text-[#0b1f3a] font-semibold mb-1 text-sm font-poppins">{{ valeur.title }}</h4>
                <p class="text-[#6b7280] text-xs">{{ valeur.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services/Domaines Section -->
    <section id="services" class="py-6 px-6">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-[#0b1f3a] mb-2 font-poppins">Domaines d'excellence</h2>
        <p class="text-[#6b7280] mb-5">Solutions sur-mesure pour États, entreprises et investisseurs.</p>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-3 gap-4 mt-4">
          <div 
            v-for="projet in projets" 
            :key="projet.nom"
            class="bg-gradient-to-b from-white to-[#fbfbfc] p-4 rounded-lg border border-gray-200"
          >
            <h4 class="text-[#0b1f3a] font-semibold mb-1 text-base font-poppins">{{ projet.nom }}</h4>
            <p class="text-[#6b7280] text-sm">{{ projet.montant }} — {{ projet.pays }} — {{ projet.statut }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section id="projects" class="py-6 px-6">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-[#0b1f3a] mb-2 font-poppins">{{ homeData?.impact?.title || 'Projets & Impact' }}</h2>
        <p class="text-[#6b7280] mb-5">{{ homeData?.impact?.subtitle || 'Des résultats mesurables, une vision durable.' }}</p>

        <div class="flex gap-5 flex-wrap mt-4">
          <!-- KPI -->
          <div class="flex-1">
            <div class="bg-white p-4 rounded-lg min-w-[180px] inline-block">
              <div class="text-xl font-bold text-[#c7a14a] font-poppins">+1 Md €</div>
              <div class="text-[#6b7280] text-sm">Mobilisés depuis 2020</div>
            </div>
          </div>
          
          <!-- Map Placeholder -->
          <div class="flex-[2] min-w-[240px]">
            <div class="bg-white rounded-lg p-3 border border-gray-200">
              <h4 class="text-[#0b1f3a] font-semibold text-sm mb-2 font-poppins">Présence</h4>
              <div class="h-44 bg-gradient-to-r from-[#eef2ff] to-white rounded-md flex items-center justify-center text-[#6b7280]">
                Carte interactive — {{ footer?.bureaux?.length || 8 }} bureaux
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-6 px-6">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold text-[#0b1f3a] mb-2 font-poppins">Équipe & Gouvernance</h2>
        <p class="text-[#6b7280] mb-5">Leadership, intégrité et influence intercontinentale.</p>

        <div class="grid md:grid-cols-3 gap-4 mt-4">
          <div 
            v-for="membre in equipe" 
            :key="membre.nom"
            class="bg-white p-4 rounded-lg text-center"
          >
            <div class="w-full h-40 bg-gray-200 rounded-md mb-3 overflow-hidden">
              <img 
                v-if="membre.photo" 
                :src="membre.photo" 
                :alt="membre.nom"
                class="w-full h-full object-cover grayscale-[70%]"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-500">Photo</div>
            </div>
            <h4 class="text-[#0b1f3a] font-semibold text-sm mb-1 font-poppins">{{ membre.nom }}</h4>
            <div class="text-[#6b7280] text-xs">{{ membre.poste }}</div>
          </div>
        </div>

        <div class="text-center mt-6">
          <NuxtLink 
            to="/notre-equipe"
            class="inline-block bg-[#0b1f3a] text-white px-5 py-3 rounded-md font-semibold text-sm hover:bg-[#1a3358] transition-colors"
          >
            Voir toute l'équipe
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-8 px-6 pb-16">
      <div class="container mx-auto max-w-[900px]">
        <h2 class="text-2xl font-bold text-[#0b1f3a] mb-2 font-poppins">Contact</h2>
        <p class="text-[#6b7280] mb-5">Pour toute demande institutionnelle, utilisez le formulaire ci‑dessous ou écrivez à {{ site.contact?.email || 'info@imaadfg.com' }}</p>

        <form class="grid md:grid-cols-2 gap-3 mt-4">
          <input 
            placeholder="Nom complet" 
            class="p-3 rounded-lg border border-gray-300 text-sm"
            required
          />
          <input 
            placeholder="Email" 
            type="email"
            class="p-3 rounded-lg border border-gray-300 text-sm"
            required
          />
          <input 
            placeholder="Organisation" 
            class="p-3 rounded-lg border border-gray-300 text-sm"
          />
          <select class="p-3 rounded-lg border border-gray-300 text-sm text-gray-600">
            <option>Objet de la demande</option>
            <option>Financement Souverain</option>
            <option>PPP</option>
            <option>Corporate Finance</option>
          </select>
          <textarea 
            placeholder="Message" 
            class="col-span-full p-3 rounded-lg border border-gray-300 h-32 text-sm resize-none"
          ></textarea>
          <button 
            type="submit"
            class="col-span-full p-3 rounded-lg bg-[#0b1f3a] text-white font-semibold hover:bg-[#1a3358] transition-colors"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 1100px;
}

.hero {
  min-height: auto;
}

@media (max-width: 900px) {
  .hero .grid {
    grid-template-columns: 1fr;
  }
}
</style>
