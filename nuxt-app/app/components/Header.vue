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
            <a
              v-if="item.external"
              :href="item.path"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ $t(`nav.${item.id}`) }}
            </a>
            <NuxtLink
              v-else
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
            <span v-if="locale.code === 'fr'" class="flag-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15">
                <rect y="16" fill="#EDEDED" width="112" height="80"/>
                <rect y="16" fill="#323E95" width="37.3" height="80"/>
                <rect x="74.7" y="16" fill="#D80031" width="37.3" height="80"/>
              </svg>
            </span>
            <span v-else-if="locale.code === 'en'" class="flag-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15">
                <path fill="#EDEDED" d="M51.3,63.9V96h-3.5V70.7L11,96H7.1l39.8-27.3h-7.8L0,95.5v-7.8l27.5-19H0v-4.8C0,63.9,51.3,63.9,51.3,63.9z M61.7,96h3.4V70.7l37,25.3h9.9v-0.8L73.2,68.7H81l31,21.2v-3.1L85.4,68.7H112v-4.8H61.7V96z M51.3,16h-3.5v26.9L8.8,16H0v0.8 l40.9,28.1h-7.7L0,22.1v3.8l27.5,19H0v4.8h51.3V16z M67.3,44.9L109.4,16h-5.1L65.1,42.9V16h-3.4v33.7H112v-4.8H85.4L112,26.6v-7 L75,44.9H67.3z"/>
                <path fill="#1A237B" d="M65.1,42.9V16h39.2L65.1,42.9z M47.8,16h-39l39,26.9V16z M112,44.9V26.6L85.4,44.9H112z M112,86.8V68.7H85.4 L112,86.8z M11,96h36.8V70.7L11,96z M65.1,96h37l-37-25.3V96z M0,68.7v19l27.5-19H0z M0,25.9v19h27.5L0,25.9z"/>
                <path fill="#BD0034" d="M112,16v3.6L75,44.9h-7.7L109.4,16H112z M73.2,68.7L112,95.2v-5.3L81,68.7H73.2z M40.9,44.9L0,16.8v5.3 l33.2,22.8C33.2,44.9,40.9,44.9,40.9,44.9z M39.1,68.7L0,95.5V96h7.1l39.8-27.3H39.1z M61.7,16H51.3v33.7H0v14.2h51.3V96h10.4V63.9 H112V49.7H61.7V16z"/>
              </svg>
            </span>
            <span v-else-if="locale.code === 'pt'" class="flag-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15">
                <rect x="39.2" y="16" fill="#EA0020" width="72.8" height="80"/>
                <rect y="16" fill="#2A680B" width="39.2" height="80"/>
                <path fill="#FFD652" d="M39,36c-9.9,0-18,8.3-18,18.5C21,64.7,29.1,73,39,73c9.9,0,18-8.3,18-18.5C57,44.3,48.9,36,39,36z"/>
                <path fill="#FFFFFF" d="M31.6,57.3c0,2.1,0.8,4,2.2,5.4C35.1,64.1,37,65,39,65c2,0,3.9-0.9,5.2-2.3c1.3-1.4,2.2-3.3,2.2-5.5l0,0V47 l-14.8,0V57.3L31.6,57.3z"/>
                <path fill="#EA0020" d="M28.2,58L28.2,58c0,3.1,1.2,5.9,3.2,7.9c2,2,4.7,3.3,7.6,3.3c3,0,5.6-1.3,7.6-3.3c2-2,3.2-4.8,3.2-7.9l0,0 V42.8H28.2L28.2,58L28.2,58z M45.4,47.3V57l0,1l0,0c0,0.3,0,0.6,0,0.8c-0.2,1.5-0.8,2.9-1.8,3.9c-1.2,1.2-2.8,2-4.5,2 c-1.8,0-3.3-0.8-4.5-2c-1.2-1.2-1.9-3-1.9-4.7V47.3L45.4,47.3L45.4,47.3z"/>
                <path fill="#1A0095" d="M37.6,55.4l0-2.1l2.8,0v2.1c0,0.4-0.2,0.8-0.4,1.1c-0.3,0.3-0.6,0.5-1,0.5c-0.4,0-0.7-0.2-1-0.5 C37.7,56.3,37.6,55.9,37.6,55.4L37.6,55.4L37.6,55.4z M37.6,60.6L37.6,60.6c0,0.4,0.2,0.8,0.4,1.1c0.2,0.3,0.6,0.5,1,0.5 c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1l-2.8,0V60.6L37.6,60.6z M33.7,55.4L33.7,55.4c0,0.4,0.2,0.8,0.4,1.1 c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1l-2.8,0L33.7,55.4L33.7,55.4z M41.5,55.4L41.5,55.4 c0,0.4,0.2,0.8,0.4,1.1c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1h-2.8L41.5,55.4L41.5,55.4z M37.6,50.3L37.6,50.3c0,0.4,0.2,0.8,0.4,1.1c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1h-2.8V50.3 L37.6,50.3z"/>
              </svg>
            </span>
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
  background: #1b212f;
  color: #ffffff;
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

.main-nav a,
.main-nav a:link,
.main-nav a:visited {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-bottom: 4px solid transparent;
}

.main-nav a:hover {
  color: #ffffff;
  border-bottom-color: #6495ED;
}

.main-nav a.active {
  color: #ffffff;
  border-bottom-color: #6495ED;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-switcher {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.lang-btn {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-btn:hover {
  background: #6495ED;
  border-color: #6495ED;
  color: #ffffff;
}

.lang-btn.active {
  background: #6495ED;
  border-color: #6495ED;
  color: #ffffff;
}

.flag-icon {
  width: 20px;
  height: 15px;
  display: inline-block;
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
