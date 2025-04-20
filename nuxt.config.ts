// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/eslint",
    "@element-plus/nuxt",
    "@nuxtjs/i18n",
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '101191528',
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      }
    ]
  ],
  alias: {
    "@": "/<srcDir>",
  },
  i18n: {
    defaultLocale: "en",
    strategy: "no_prefix",
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "ru", language: "ru-RU", file: "ru.json" },
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
        measurementId:process.env.NUXT_PUBLIC_FIREBASE_MEASURMENT_ID
      }
    }
  }
});
