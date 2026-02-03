<script setup lang="ts">
import { computed } from 'vue'

// Import site data
const { site, navigation, footer } = useSiteData()

const currentYear = new Date().getFullYear()

// Ressources from JSON
const ressources = computed(() => footer?.ressources || [
  { label: 'Télécharger la brochure', link: '#' },
  { label: 'Actualités & Insights', link: '/actualites' },
  { label: 'Carrières', link: '/contact' }
])

// Bureaux from JSON
const bureaux = computed(() => footer?.bureaux || ['Dubaï', 'Londres', 'Abidjan', 'Kigali', 'Conakry', 'Dakar', 'Lagos', 'Yaoundé'])
</script>

<template>
  <footer class="bg-[#0b1f3a] text-white py-9 mt-9">
    <div class="container mx-auto px-6" style="max-width: 1100px;">
      <div class="grid lg:grid-cols-[1fr_280px] gap-6 items-start">
        <!-- Left: Company Info -->
        <div>
          <h3 class="text-xl font-bold font-poppins mb-1">IMAAD FINANCIAL GROUP</h3>
          <p class="text-white/90 mb-4">{{ footer?.tagline || site?.tagline || 'Catalyseur de la souveraineté et de la croissance durable.' }}</p>
          
          <div class="mt-3">
            <div class="text-white/80 text-sm">
              {{ site?.contact?.email || 'info@imaadfg.com' }} — {{ site?.contact?.phone || '(+221) 77 245 7987' }}
            </div>
            <div class="text-white/60 text-xs mt-2">
              Bureaux : {{ bureaux.join(' · ') }}
            </div>
          </div>
        </div>

        <!-- Right: Resources -->
        <div>
          <h4 class="font-semibold font-poppins mb-2">Ressources</h4>
          <ul class="space-y-1">
            <li v-for="ressource in ressources" :key="ressource.label">
              <NuxtLink 
                v-if="ressource.link.startsWith('/')"
                :to="ressource.link"
                class="text-white/90 text-sm hover:text-[#c7a14a] transition-colors"
              >
                {{ ressource.label }}
              </NuxtLink>
              <a 
                v-else
                :href="ressource.link"
                class="text-white/90 text-sm hover:text-[#c7a14a] transition-colors"
              >
                {{ ressource.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-6 border-t border-white/10 text-center text-white/50 text-xs">
        © {{ currentYear }} IMAAD Financial Group. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
