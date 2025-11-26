<template>
  <section class="dynamic-section">
    <div class="section-header">
      <h2 class="section-title" v-if="title">{{ title }}</h2>
      <p class="section-intro" v-if="intro">{{ intro }}</p>
      <p class="section-subtitle" v-if="subtitle">{{ subtitle }}</p>
    </div>

    <!-- Items List -->
    <div v-if="items && items.length" class="items-grid">
      <div v-for="(item, index) in items" :key="index" class="item">
        <div class="item-content">
          <h4 v-if="typeof item === 'object' && item.title" class="item-title">
            {{ item.title }}
          </h4>
          <p v-if="typeof item === 'object' && item.subtitle" class="item-subtitle">
            {{ item.subtitle }}
          </p>
          <p v-if="typeof item === 'object' && item.description" class="item-description">
            {{ item.description }}
          </p>
          <p v-if="typeof item === 'string'" class="item-text">
            {{ item }}
          </p>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div v-if="stats && stats.length" class="stats-grid">
      <div v-for="(stat, index) in stats" :key="index" class="stat-card">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>

    <!-- Description -->
    <div v-if="description" class="section-description">
      {{ description }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Stat {
  value: string
  label: string
}

interface Item {
  title?: string
  subtitle?: string
  description?: string
}

const props = defineProps<{
  title?: string
  subtitle?: string
  intro?: string
  description?: string
  items?: Array<string | Item>
  stats?: Stat[]
}>()
</script>

<style scoped>
.dynamic-section {
  padding: 3rem 2rem;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin: 0.5rem 0;
  font-weight: 500;
}

.section-intro {
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.item {
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #f9f9f9;
}

.item:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
  transform: translateY(-4px);
}

.item-title {
  margin: 0 0 0.5rem 0;
  color: #667eea;
  font-size: 1.1rem;
}

.item-subtitle {
  margin: 0 0 0.5rem 0;
  color: #666;
  font-size: 0.95rem;
  font-weight: 500;
}

.item-description,
.item-text {
  margin: 0;
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.stat-card {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  text-align: center;
  color: white;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.9;
}

.section-description {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f9f9f9;
  border-left: 4px solid #667eea;
  border-radius: 4px;
  color: #666;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .dynamic-section {
    padding: 2rem 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .items-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
