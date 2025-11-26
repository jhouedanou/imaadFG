// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/nicepage-site.css',
    '~/assets/css/index.css',
    '~/assets/css/fonts.css',
    '~/assets/css/Accueil-fonts.css',
    '~/assets/css/Actualites.css',
    '~/assets/css/Contact.css',
    '~/assets/css/Nos-activites.css',
    '~/assets/css/Notre-equipe.css',
    '~/assets/css/partenariats-public-prive.css',
    '~/assets/css/capital-risque.css',
    '~/assets/css/financement-souverain.css',
    '~/assets/css/pages.css',
    '~/assets/css/main.css',
    '~/assets/scss/global.scss'
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/scripts'
  ],

  // Configuration Vite pour SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '$primary-color: #003d82; $secondary-color: #00509e; $accent-color: #c9a961;'
        }
      }
    }
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  image: {
    dir: 'public/assets/images'
  },

  icon: {
    serverBundle: 'local'
  },

  content: {
    // Configuration Nuxt Content v3
  },

  app: {
    head: {
      title: 'IMAAD Financial Group',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Catalyseur de la Souveraineté et de la Croissance Durable'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
