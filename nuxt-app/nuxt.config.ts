// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Configuration pour Netlify - génération statique
  ssr: true,
  nitro: {
    preset: 'netlify'
  },

  css: [
    '~/assets/css/nicepage-site.css',
    '~/assets/css/index.css',
    '~/assets/css/fonts.css',
    '~/assets/css/Accueil-fonts.css'
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
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'pt',
        iso: 'pt-PT',
        name: 'Português',
        file: 'pt.json'
      }
    ],
    langDir: '../locales',
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
