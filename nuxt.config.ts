import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      url: 'https://dretcomunacasa.com',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://forms.compromis.net/api/forms/dretcomunacasa/'
    }
  },

  css: [
    '~/assets/css/main.css',
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  googleFonts: {
    families: {
      'Instrument Serif': [400],
    }
  },

  i18n: {
    detectBrowserLanguage: false,
    defaultLocale: 'val',
    locales: [
      {
        code: 'val',
        language: 'ca-ES',
        name: 'Valencià',
        file: 'val.js'
      },
      {
        code: 'cas',
        language: 'es-ES',
        name: 'Castellano',
        file: 'cas.js'
      },
    ],
    baseUrl: 'https://dretcomunacasa.com',
    lazy: true,
    langDir: 'lang',
  },
})