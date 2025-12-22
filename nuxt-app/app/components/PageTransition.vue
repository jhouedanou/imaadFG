<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'

const isTransitioning = ref(false)
const router = useRouter()

provide('isPageTransitioning', isTransitioning)

onMounted(() => {
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
      isTransitioning.value = true
      document.body.classList.add('page-transitioning')
      setTimeout(() => {
        next()
      }, 400)
    } else {
      next()
    }
  })

  router.afterEach(() => {
    setTimeout(() => {
      isTransitioning.value = false
      document.body.classList.remove('page-transitioning')
    }, 600)
  })
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isTransitioning"
        class="page-transition-overlay"
      >
        <div class="logo-container">
          <img 
            src="/images/logo-removebg-preview.png" 
            alt="IMAAD" 
            class="transition-logo"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.page-transition-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: linear-gradient(135deg, #020C1B 0%, #0A192F 50%, #112240 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.transition-logo {
  width: 120px;
  height: auto;
  filter: brightness(0) invert(1);
  animation: logoPulse 0.8s ease-in-out;
}

@keyframes logoPulse {
  0% {
    opacity: 0;
    transform: scale(0.8);
    filter: brightness(0) invert(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
    filter: brightness(0) invert(1) drop-shadow(0 0 20px rgba(201, 162, 39, 0.5));
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(201, 162, 39, 0.3));
  }
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
