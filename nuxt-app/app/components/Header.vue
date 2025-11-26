<template>
  <header class="site-header">
    <div class="header-container">
      <NuxtLink to="/" class="logo">
        <NuxtImg 
          :src="site.logo" 
          :alt="site.name" 
          width="150" 
          height="60"
        />
      </NuxtLink>

      <nav class="main-nav">
        <ul>
          <li v-for="item in navigation" :key="item.id">
            <NuxtLink 
              :to="localePath(item.path)" 
              :class="{ active: item.isActive }"
            >
              {{ $t(`nav.${item.id}`) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <div class="language-switcher">
          <button 
            v-for="locale in availableLocales" 
            :key="locale.code"
            @click="setLocale(locale.code)"
            :class="{ active: locale.code === $i18n.locale }"
            class="lang-btn"
          >
            {{ locale.code.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { site, navigation } = useSiteData()
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const availableLocales = computed(() => locales.value)
</script>

<style scoped>
.site-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo img {
  height: 60px;
  width: auto;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
}

.main-nav a:hover,
.main-nav a.active {
  color: #2c5282;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-switcher {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  background: transparent;
  border: 2px solid #2c5282;
  color: #2c5282;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s;
}

.lang-btn:hover,
.lang-btn.active {
  background: #2c5282;
  color: white;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    padding: 1rem;
  }

  .main-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style>
