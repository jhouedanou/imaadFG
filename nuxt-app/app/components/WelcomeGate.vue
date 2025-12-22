<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['enter'])
const isVisible = ref(true)
const gateRef = ref<HTMLElement | null>(null)
const dots = Array.from({ length: 81 }, (_, i) => i) // 9x9 grid

// Sectors for IMAAD
const sectors = [
  { icon: 'solar:dollar-linear', label: 'Finance', color: '#c9a961' },
  { icon: 'solar:buildings-2-linear', label: 'Infrastructures', color: '#00509e' },
  { icon: 'solar:bolt-linear', label: 'Energie', color: '#c9a961' },
  { icon: 'solar:globus-linear', label: 'Souveraineté', color: '#003d82' },
  { icon: 'solar:square-academic-cap-linear', label: 'Education', color: '#c9a961' },
  { icon: 'solar:hand-stars-linear', label: 'Impact', color: '#00509e' },
  { icon: 'solar:case-minimalistic-linear', label: 'Corporate', color: '#c9a961' },
  { icon: 'solar:users-group-rounded-linear', label: 'PPP', color: '#003d82' }
]

const enterApp = () => {
  if (import.meta.client) {
    const { gsap } = useNuxtApp().$gsap || {}
    if (gsap) {
      const tl = gsap.timeline({
        onComplete: () => {
          isVisible.value = false
          emit('enter')
          sessionStorage.setItem('imaad_entered', 'true')
        }
      })

      tl.to('.gate-content', {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.inOut'
      })
      .to(gateRef.value, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      }, '-=0.3')
    } else {
      isVisible.value = false
      emit('enter')
    }
  }
}

onMounted(async () => {
  if (import.meta.client) {
    // Check if already entered in this session
    if (sessionStorage.getItem('imaad_entered') === 'true') {
      isVisible.value = false
      emit('enter')
      return
    }

    const { gsap } = await import('gsap')
    
    // Initial entrance animation
    gsap.from('.gate-content', {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: 'power3.out'
    })

    // Orbiting animation for icons
    const icons = document.querySelectorAll('.orbit-icon')
    icons.forEach((icon, index) => {
      const angle = (index / sectors.length) * Math.PI * 2
      const radius = 180 + (index % 2) * 40 // Modulated radius for depth
      
      gsap.set(icon, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      })

      // Continuous rotation
      gsap.to(icon, {
        duration: 20 + index * 2,
        repeat: -1,
        ease: 'none',
        modifiers: {
          x: (x) => {
            const time = Date.now() * 0.0005 + index
            const currentRadius = radius + Math.sin(time * 0.5) * 10
            return Math.cos(time) * currentRadius
          },
          y: (y) => {
            const time = Date.now() * 0.0005 + index
            const currentRadius = radius + Math.sin(time * 0.5) * 10
            return Math.sin(time) * currentRadius
          }
        }
      })
      
      // Gentle floating
      gsap.to(icon, {
        y: '+=15',
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })

    // Dot grid animation
    gsap.from('.dot', {
      opacity: 0,
      scale: 0,
      stagger: {
        grid: [9, 9],
        from: 'center',
        amount: 1.5
      },
      duration: 1,
      ease: 'back.out(2)'
    })
  }
})
</script>

<template>
  <div 
    v-if="isVisible"
    ref="gateRef"
    class="fixed inset-0 z-[9999] bg-[#050b16] flex items-center justify-center overflow-hidden"
  >
    <!-- Background Dot Grid -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
      <div class="grid grid-cols-9 gap-8">
        <div 
          v-for="i in dots" 
          :key="i"
          class="dot w-1 h-1 bg-or rounded-full"
        />
      </div>
    </div>

    <!-- Ambient Glow -->
    <div class="absolute w-[600px] h-[600px] bg-bleu-nuit/30 rounded-full blur-[120px] pointer-events-none" />

    <div class="gate-content relative flex items-center justify-center w-full h-full">
      <!-- Orbiting Icons -->
      <div 
        v-for="(sector, index) in sectors" 
        :key="index"
        class="orbit-icon absolute flex flex-col items-center gap-2 group cursor-default"
      >
        <div 
          class="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-or/50 transition-colors duration-500"
          :style="{ color: sector.color }"
        >
          <Icon :name="sector.icon" class="w-8 h-8" />
        </div>
        <span class="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-or transition-colors duration-500 font-montserrat font-medium">
          {{ sector.label }}
        </span>
      </div>

      <!-- Central Button -->
      <button 
        @click="enterApp"
        class="relative p-12 group transition-transform duration-500 hover:scale-105"
      >
        <!-- Frame Corners -->
        <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-or/30 group-hover:border-or transition-colors duration-500" />
        <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-or/30 group-hover:border-or transition-colors duration-500" />
        <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-or/30 group-hover:border-or transition-colors duration-500" />
        <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-or/30 group-hover:border-or transition-colors duration-500" />

        <!-- Label -->
        <div class="flex flex-col items-center gap-2">
          <span class="text-white font-montserrat text-2xl tracking-[0.5em] font-light">
            E<span class="opacity-50">N</span>TRER
          </span>
          <div class="w-12 h-[1px] bg-or/30 group-hover:w-24 group-hover:bg-or transition-all duration-700" />
        </div>
      </button>

      <!-- Branding Elements -->
      <div class="absolute bottom-12 left-12 flex flex-col gap-1">
        <span class="text-or font-playfair text-xl tracking-wider">IMAAD</span>
        <span class="text-white/20 text-[10px] uppercase tracking-[0.3em]">Financial Group</span>
      </div>

      <div class="absolute top-12 right-12">
        <span class="text-white/30 font-montserrat text-xs tracking-[0.4em] uppercase">
          L'avenir, c'est maintenant.
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dot {
  will-change: transform, opacity;
}
.orbit-icon {
  will-change: transform;
}
</style>
