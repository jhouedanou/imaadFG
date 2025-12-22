<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(async () => {
  if (import.meta.client) {
    // Attendre que la page soit chargée
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const { gsap } = await import('gsap')
    
    // Animation du logo
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          isLoading.value = false
        }, 300)
      }
    })
    
    // Pulse et glow du logo
    tl.fromTo('.loading-logo', 
      { 
        opacity: 0, 
        scale: 0.8,
        filter: 'brightness(0.5)'
      },
      { 
        opacity: 1, 
        scale: 1,
        filter: 'brightness(1)',
        duration: 0.8, 
        ease: 'power2.out' 
      }
    )
    .to('.loading-logo', {
      filter: 'brightness(1.3) drop-shadow(0 0 30px rgba(201, 162, 39, 0.6))',
      scale: 1.05,
      duration: 0.4,
      ease: 'power2.inOut'
    })
    .to('.loading-logo', {
      filter: 'brightness(1) drop-shadow(0 0 20px rgba(201, 162, 39, 0.3))',
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
    .to('.loading-text', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.loading-screen', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      delay: 0.3
    })
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade-out">
      <div 
        v-if="isLoading"
        class="loading-screen"
      >
        <div class="loading-content">
          <!-- Logo IMAAD -->
          <img 
            src="/images/logo-removebg-preview.png" 
            alt="IMAAD Financial Group" 
            class="loading-logo"
          />
          
          <!-- Texte Financial Group -->
          <span class="loading-text">Financial Group</span>
          
          <!-- Barre de chargement subtile -->
          <div class="loading-bar">
            <div class="loading-bar-fill"></div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: linear-gradient(135deg, #020C1B 0%, #0A192F 50%, #112240 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.loading-logo {
  width: 150px;
  height: auto;
  opacity: 0;
  filter: brightness(0) invert(1);
}

.loading-text {
  font-family: var(--font-body, 'Inter', sans-serif);
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--accent-gold, #C9A227);
  opacity: 0;
  transform: translateY(10px);
}

.loading-bar {
  width: 120px;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
  margin-top: 1rem;
}

.loading-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--accent-gold, #C9A227), transparent);
  animation: loadingSlide 1.5s ease-in-out infinite;
}

@keyframes loadingSlide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

/* Fade out transition */
.fade-out-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-out-leave-to {
  opacity: 0;
}
</style>
