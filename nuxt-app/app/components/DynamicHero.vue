<template>
  <section class="dynamic-hero" :style="{ backgroundImage: `url('${hero?.backgroundImage}')` }">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title" v-if="hero?.title">{{ hero.title }}</h1>
      <p class="hero-subtitle" v-if="hero?.subtitle">{{ hero.subtitle }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface HeroProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
}

const props = defineProps<{
  hero?: HeroProps
}>()

const hero = computed(() => props.hero || {})
</script>

<style scoped>
.dynamic-hero {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(51, 61, 130, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .dynamic-hero {
    min-height: 300px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style>
