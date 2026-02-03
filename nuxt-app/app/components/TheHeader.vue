<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Import site data
const { site, navigation } = useSiteData()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Use navigation from JSON data, filter out external links for main nav
const navItems = computed(() => 
  navigation
    .filter((item: any) => !item.external)
    .map((item: any) => ({
      label: item.label,
      to: item.path
    }))
)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
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
    class="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-200"
    :class="[
      isScrolled
        ? 'bg-white text-[#0b1f3a] shadow-[0_4px_18px_rgba(11,31,58,0.08)]'
        : 'bg-transparent text-white'
    ]"
  >
    <div class="container mx-auto flex items-center justify-between" style="max-width: 1100px;">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3" @click="closeMobileMenu">
        <!-- SVG Logo matching wireframe -->
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="h-9 w-9">
          <rect width="100" height="100" rx="12" fill="#c7a14a"/>
          <path d="M18 72 L50 28 L82 72 Z" fill="#0b1f3a"/>
        </svg>
        <div class="font-bold text-sm font-poppins">IMAAD FINANCIAL GROUP</div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-5">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.to"
          :to="item.to"
          class="font-semibold text-sm hover:text-[#c7a14a] transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink 
          to="/contact"
          class="bg-[#c7a14a] text-[#0b1f3a] px-4 py-2.5 rounded-md font-bold text-sm hover:bg-[#d4b366] transition-colors"
        >
          Contact
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden p-2"
        @click="toggleMobileMenu"
        aria-label="Menu"
      >
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
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
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg text-[#0b1f3a]"
      >
        <nav class="py-4 px-6 space-y-2">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            class="block font-semibold text-base py-3 border-b border-gray-100 hover:text-[#c7a14a] transition-colors"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink 
            to="/contact"
            class="block w-full text-center bg-[#c7a14a] text-[#0b1f3a] px-4 py-3 rounded-md font-bold text-sm mt-4 hover:bg-[#d4b366] transition-colors"
            @click="closeMobileMenu"
          >
            Contact
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
header {
  will-change: background-color, color, box-shadow;
}
</style>
