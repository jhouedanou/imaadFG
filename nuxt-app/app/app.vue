<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
const isGateActive = ref(true)

const handleLoadingComplete = () => {
  isLoading.value = false
}

const handleEnter = () => {
  isGateActive.value = false
}

onMounted(() => {
  if (import.meta.client && sessionStorage.getItem('imaad_entered') === 'true') {
    isGateActive.value = false
  }
})
</script>

<template>
  <div class="bg-[#050b16] min-h-screen">
    <!-- Loading Screen - Premier ecran au chargement -->
    <LoadingScreen />
    
    <!-- Welcome Gate - Apres le loading -->
    <WelcomeGate @enter="handleEnter" />
    
    <!-- Page Transition - Pour les changements de page -->
    <PageTransition />
    
    <!-- Contenu principal -->
    <div 
      :class="[
        'transition-all duration-1000 ease-in-out',
        isGateActive ? 'opacity-0 scale-95 blur-xl pointer-events-none' : 'opacity-100 scale-100 blur-0'
      ]"
    >
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
