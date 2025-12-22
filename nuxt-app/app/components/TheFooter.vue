<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  services: [
    { label: 'Financement Souverain', to: '/nos-activites#financement-souverain' },
    { label: 'Corporate & Trade Finance', to: '/nos-activites#corporate-finance' },
    { label: 'Partenariats Public-Privé', to: '/nos-activites#ppp' },
  ],
  company: [
    { label: 'Notre Équipe', to: '/notre-equipe' },
    { label: 'Actualités', to: '/actualites' },
    { label: 'Contact', to: '/contact' },
  ],
}

const socialLinks = [
  { icon: 'linkedin', url: 'https://linkedin.com/company/imaad-financial-group' },
  { icon: 'twitter', url: 'https://twitter.com/imaadfinancial' },
]
</script>

<template>
  <footer class="bg-bleu-nuit text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="inline-block mb-6">
            <img 
              src="/images/logo-removebg-preview.png" 
              alt="IMAAD Financial Group" 
              class="h-16 w-auto brightness-0 invert"
            />
          </NuxtLink>
          <p class="font-montserrat text-sm text-gray-400 leading-relaxed mb-6">
            Catalyseur de la Souveraineté et de la Croissance Durable en Afrique et au-delà.
          </p>
          <!-- Social Links -->
          <div class="flex gap-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.icon"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-or hover:border-or transition-all duration-300"
            >
              <Icon :name="`mdi:${social.icon}`" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Services Column -->
        <div>
          <h4 class="font-playfair text-lg text-or mb-6">Nos Services</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.services" :key="link.to">
              <NuxtLink 
                :to="link.to"
                class="font-montserrat text-sm text-gray-400 hover:text-or transition-colors duration-300"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h4 class="font-playfair text-lg text-or mb-6">L'Entreprise</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company" :key="link.to">
              <NuxtLink 
                :to="link.to"
                class="font-montserrat text-sm text-gray-400 hover:text-or transition-colors duration-300"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h4 class="font-playfair text-lg text-or mb-6">Contact</h4>
          <address class="font-montserrat text-sm text-gray-400 not-italic space-y-3">
            <p>
              Abidjan, Côte d'Ivoire<br />
              Cocody Riviera Palmeraie
            </p>
            <p>
              <a href="mailto:contact@imaadfg.com" class="hover:text-or transition-colors duration-300">
                contact@imaadfg.com
              </a>
            </p>
            <p>
              <a href="tel:+22507881221" class="hover:text-or transition-colors duration-300">
                +225 07 88 12 21 21
              </a>
            </p>
          </address>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="font-montserrat text-xs text-gray-500">
            © {{ currentYear }} IMAAD Financial Group. Tous droits réservés.
          </p>
          <p class="font-montserrat text-xs text-gray-500">
            Développé par <a href="http://timelinegroupmedia.com/" target="_blank" rel="noopener noreferrer" class="text-or hover:text-or-light transition-colors">Timeline Agency</a>
          </p>
          <p class="font-montserrat text-xs text-gray-500">
            Société Anonyme au capital de 200.000.000 FCFA - RCCM: CI-ABJ-03-2021-B17-00048
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
