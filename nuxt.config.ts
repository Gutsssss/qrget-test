// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr:false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/eslint',
    "@element-plus/nuxt",
    '@nuxtjs/i18n'
  ],
  alias:{
    '@': "/<srcDir>",
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', language: 'en-US',file:'en.json' },
      { code: 'ru', language: 'ru-RU',file:'ru.json' }
    ],
  },
  css: ['~/assets/css/main.css']
  
})