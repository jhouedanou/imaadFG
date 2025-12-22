<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  title: string
  description: string
  image: string
  link?: string
  index?: number
}

const props = withDefaults(defineProps<Props>(), {
  link: '#',
  index: 0
})

const cardRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const overlayRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    
    const card = cardRef.value
    const image = imageRef.value
    const overlay = overlayRef.value
    const content = contentRef.value
    
    if (card && image && overlay && content) {
      // Initial state
      gsap.set(content, { y: 30, opacity: 0.7 })
      gsap.set(overlay, { opacity: 0.4 })
      gsap.set(image, { scale: 1 })
      
      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(image, { 
          scale: 1.08, 
          duration: 0.8, 
          ease: 'power2.out' 
        })
        gsap.to(overlay, { 
          opacity: 0.75, 
          duration: 0.5, 
          ease: 'power2.out' 
        })
        gsap.to(content, { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'power3.out' 
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(image, { 
          scale: 1, 
          duration: 0.8, 
          ease: 'power2.out' 
        })
        gsap.to(overlay, { 
          opacity: 0.4, 
          duration: 0.5, 
          ease: 'power2.out' 
        })
        gsap.to(content, { 
          y: 30, 
          opacity: 0.7, 
          duration: 0.6, 
          ease: 'power3.out' 
        })
      })
    }
  }
})
</script>

<template>
  <div 
    ref="cardRef"
    class="vertical-card group relative h-[80vh] min-h-[600px] overflow-hidden cursor-pointer"
  >
    <!-- Background Image -->
    <div 
      ref="imageRef"
      class="absolute inset-0 bg-cover bg-center will-change-transform"
      :style="{ backgroundImage: `url(${image})` }"
    />
    
    <!-- Overlay -->
    <div 
      ref="overlayRef"
      class="absolute inset-0 bg-bleu-nuit will-change-[opacity]"
    />
    
    <!-- Content -->
    <div 
      ref="contentRef"
      class="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-white will-change-transform"
    >
      <!-- Index Number -->
      <span class="text-or font-playfair text-6xl lg:text-8xl font-light mb-4 opacity-50">
        0{{ index + 1 }}
      </span>
      
      <!-- Title -->
      <h3 class="font-playfair text-2xl lg:text-4xl font-medium mb-4 leading-tight">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="font-montserrat text-sm lg:text-base text-gray-200 mb-6 max-w-md leading-relaxed">
        {{ description }}
      </p>
      
      <!-- CTA Link -->
      <NuxtLink 
        :to="link"
        class="inline-flex items-center gap-2 text-or font-montserrat text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
      >
        <span>Découvrir</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>
    </div>
    
    <!-- Bottom Border Accent -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-or transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  </div>
</template>

<style scoped>
.vertical-card {
  transition: flex 0.5s ease;
}

@media (min-width: 1024px) {
  .vertical-card:hover {
    flex: 1.2;
  }
}
</style>
