<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isVisible = ref(true)
const isMobileMenuOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)
const lastScrollY = ref(0)

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos Activités', to: '/nos-activites' },
  { label: 'Notre Équipe', to: '/notre-equipe' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contact', to: '/contact' },
]

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Détermine si on a scrollé
  isScrolled.value = currentScrollY > 50

  // Détermine la direction du scroll
  if (currentScrollY < lastScrollY.value || currentScrollY < 100) {
    // Scrolling vers le haut ou en haut de la page
    isVisible.value = true
  } else if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    // Scrolling vers le bas et pas en haut de la page
    isVisible.value = false
    // Ferme le menu mobile si ouvert
    isMobileMenuOpen.value = false
  }

  lastScrollY.value = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header
    ref="headerRef"
    class="fixed left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-petrol backdrop-blur-md shadow-lg py-3 border-b border-or/30'
        : 'bg-transparent py-6',
      isVisible ? 'top-0' : '-top-32'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3" @click="closeMobileMenu">
          <img 
            src="/images/logo-removebg-preview.png" 
            alt="IMAAD Financial Group" 
            class="h-12 lg:h-16 w-auto transition-all duration-300 brightness-0 invert"
          />
          <div class="hidden sm:block">
            <span 
              class="font-playfair text-lg lg:text-xl font-semibold transition-colors duration-300 text-white"
            >
              IMAAD
            </span>
            <span 
              class="block text-xs font-montserrat tracking-widest transition-colors duration-300 text-or"
            >
              FINANCIAL GROUP
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex items-center gap-8">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink 
              :to="item.to"
              class="font-montserrat text-sm uppercase tracking-wider transition-all duration-300 relative group text-white hover:text-or"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-or transition-all duration-300 group-hover:w-full" />
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <NuxtLink 
            to="/contact"
            class="font-montserrat text-sm uppercase tracking-wider px-6 py-3 border-2 transition-all duration-300 border-or text-or hover:bg-or hover:text-bleu-nuit"
          >
            Nous Contacter
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="lg:hidden p-2 transition-colors duration-300 text-white"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden absolute top-full left-0 right-0 bg-bleu-nuit shadow-2xl"
      >
        <ul class="py-6 px-6 space-y-4">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink 
              :to="item.to"
              class="block font-montserrat text-white text-lg py-3 border-b border-white/10 hover:text-or transition-colors duration-300"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="pt-4">
            <NuxtLink 
              to="/contact"
              class="block w-full text-center font-montserrat text-sm uppercase tracking-wider px-6 py-4 bg-or text-bleu-nuit hover:bg-or-light transition-all duration-300"
              @click="closeMobileMenu"
            >
              Nous Contacter
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
header {
  will-change: background-color, padding;
}
</style>
