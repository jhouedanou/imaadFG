<template>
  <header class="site-header u-header u-clearfix">
    <div class="header-container u-sheet u-clearfix">
      <!-- Logo -->
      <NuxtLink to="/" class="logo u-image u-logo u-image-1">
        <NuxtImg 
          :src="site.logo" 
          :alt="site.name" 
          class="u-logo-image"
        />
      </NuxtLink>

      <!-- Menu NicePage -->
      <nav 
        class="Menudepage u-align-center u-menu u-menu-one-level u-offcanvas u-menu-1" 
        data-responsive-from="MD" 
        role="navigation"
      >
        <!-- Hamburger (mobile) -->
        <div class="menu-collapse" style="font-size: 1rem; font-weight: 300;">
          <a 
            class="u-button-style u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-file-icon u-hamburger-link u-nav-link u-text-grey-5 u-file-icon-1" 
            href="#"
            @click.prevent="toggleMobileMenu"
          >
            <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302">
              <use xlink:href="#svg-hamburger"></use>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="svg-hamburger" x="0px" y="0px" viewBox="0 0 302 302" class="u-svg-content">
              <g>
                <rect y="36" width="302" height="30"></rect>
                <rect y="236" width="302" height="30"></rect>
                <rect y="136" width="302" height="30"></rect>
              </g>
            </svg>
          </a>
        </div>

        <!-- Menu Desktop -->
        <div class="u-custom-menu u-nav-container">
          <ul class="u-custom-font u-heading-font u-nav u-spacing-30 u-unstyled u-nav-1" role="menubar">
            <li v-for="item in navigation" :key="item.id" class="u-nav-item" role="none">
              <a
                v-if="item.external"
                :href="item.path"
                target="_blank"
                rel="noopener noreferrer"
                class="u-border-4 u-border-active-custom-color-4 u-border-hover-palette-3-light-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-5 u-text-custom-color-4 u-text-hover-custom-color-4"
                style="padding: 2px 8px;"
                role="menuitem"
              >
                {{ $t(`nav.${item.id}`) }}
              </a>
              <NuxtLink
                v-else
                :to="localePath(item.path)"
                class="u-border-4 u-border-active-custom-color-4 u-border-hover-palette-3-light-2 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-5 u-text-custom-color-4 u-text-hover-custom-color-4"
                :class="{ active: isActive(item.path) }"
                style="padding: 2px 8px;"
                role="menuitem"
              >
                {{ $t(`nav.${item.id}`) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Menu Mobile (Sidenav) -->
        <div 
          class="u-custom-menu u-nav-container-collapse" 
          :class="{ 'u-menu-open': mobileMenuOpen }"
          role="region" 
          aria-label="Menu panel"
        >
          <div class="u-align-center u-container-align-center u-container-style u-custom-color-6 u-inner-container-layout u-opacity u-opacity-70 u-sidenav u-sidenav-1">
            <div class="u-inner-container-layout u-sidenav-overflow" style="padding: 0px;">
              <div 
                class="u-menu-close" 
                tabindex="-1" 
                aria-label="Close menu"
                @click="closeMobileMenu"
              ></div>
              <ul class="u-align-center u-custom-font u-heading-font u-nav u-popupmenu-items u-spacing-14 u-unstyled u-nav-2">
                <li v-for="item in navigation" :key="`mobile-${item.id}`" class="u-nav-item">
                  <a
                    v-if="item.external"
                    :href="item.path"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="u-button-style u-nav-link"
                    @click="closeMobileMenu"
                  >
                    {{ $t(`nav.${item.id}`) }}
                  </a>
                  <NuxtLink
                    v-else
                    :to="localePath(item.path)"
                    class="u-button-style u-nav-link"
                    :class="{ active: isActive(item.path) }"
                    @click="closeMobileMenu"
                  >
                    {{ $t(`nav.${item.id}`) }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="u-menu-overlay" @click="closeMobileMenu"></div>
        </div>
      </nav>

      <!-- Language Switcher -->
      <div class="language-switcher u-social-icons">
        <button
          v-for="loc in availableLocales"
          :key="loc.code"
          @click="setLocale(loc.code)"
          :class="{ active: loc.code === $i18n.locale }"
          class="lang-btn u-social-url"
        >
          <span v-if="loc.code === 'fr'" class="flag-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15">
              <rect y="16" fill="#EDEDED" width="112" height="80"/>
              <rect y="16" fill="#323E95" width="37.3" height="80"/>
              <rect x="74.7" y="16" fill="#D80031" width="37.3" height="80"/>
            </svg>
          </span>
          <span v-else-if="loc.code === 'en'" class="flag-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15">
              <path fill="#EDEDED" d="M51.3,63.9V96h-3.5V70.7L11,96H7.1l39.8-27.3h-7.8L0,95.5v-7.8l27.5-19H0v-4.8C0,63.9,51.3,63.9,51.3,63.9z M61.7,96h3.4V70.7l37,25.3h9.9v-0.8L73.2,68.7H81l31,21.2v-3.1L85.4,68.7H112v-4.8H61.7V96z M51.3,16h-3.5v26.9L8.8,16H0v0.8 l40.9,28.1h-7.7L0,22.1v3.8l27.5,19H0v4.8h51.3V16z M67.3,44.9L109.4,16h-5.1L65.1,42.9V16h-3.4v33.7H112v-4.8H85.4L112,26.6v-7 L75,44.9H67.3z"/>
              <path fill="#1A237B" d="M65.1,42.9V16h39.2L65.1,42.9z M47.8,16h-39l39,26.9V16z M112,44.9V26.6L85.4,44.9H112z M112,86.8V68.7H85.4 L112,86.8z M11,96h36.8V70.7L11,96z M65.1,96h37l-37-25.3V96z M0,68.7v19l27.5-19H0z M0,25.9v19h27.5L0,25.9z"/>
              <path fill="#BD0034" d="M112,16v3.6L75,44.9h-7.7L109.4,16H112z M73.2,68.7L112,95.2v-5.3L81,68.7H73.2z M40.9,44.9L0,16.8v5.3 l33.2,22.8C33.2,44.9,40.9,44.9,40.9,44.9z M39.1,68.7L0,95.5V96h7.1l39.8-27.3H39.1z M61.7,16H51.3v33.7H0v14.2h51.3V96h10.4V63.9 H112V49.7H61.7V16z"/>
            </svg>
          </span>
          {{ loc.code.toUpperCase() }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { site, navigation } = useSiteData()
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const availableLocales = computed(() => locales.value)
const mobileMenuOpen = ref(false)

const isActive = (path: string) => {
  return route.path === path || route.path === localePath(path)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close menu on route change
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style>
/* Minimal fallbacks - NicePage CSS handles most styling */

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.u-logo-image {
  max-height: 60px;
  width: auto;
}

/* Language switcher */
.language-switcher {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.lang-btn {
  background: transparent;
  border: 2px solid currentColor;
  color: inherit;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.lang-btn:hover,
.lang-btn.active {
  background: rgba(255, 255, 255, 0.2);
}

.flag-icon {
  width: 20px;
  height: 15px;
  display: inline-flex;
}

/* Mobile menu */
.u-menu-open .u-sidenav {
  transform: translateX(0) !important;
}

.u-menu-open .u-menu-overlay {
  display: block !important;
  opacity: 1 !important;
}

/* SVG hamburger icon fix */
.u-svg-content {
  display: none;
}

.u-svg-link {
  width: 24px;
  height: 24px;
}

@media (max-width: 767px) {
  .header-container {
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
  }
  
  .u-nav-container {
    display: none;
  }
  
  .menu-collapse {
    display: block !important;
  }
}

@media (min-width: 768px) {
  .menu-collapse {
    display: none !important;
  }
  
  .u-nav-container-collapse {
    display: none !important;
  }
}
</style>
