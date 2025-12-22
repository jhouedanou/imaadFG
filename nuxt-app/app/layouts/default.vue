<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})
</script>

<template>
  <div class="layout-default min-h-screen flex flex-col">
    <!-- Header -->
    <TheHeader />
    
    <!-- Main Content -->
    <main 
      class="flex-1 transition-opacity duration-500"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
    >
      <slot />
    </main>
    
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style scoped>
.layout-default {
  font-family: 'Montserrat', system-ui, sans-serif;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
