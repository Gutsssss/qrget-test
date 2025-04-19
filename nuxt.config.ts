// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr:false,
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/eslint',"@element-plus/nuxt"],
  alias:{
    '@': "/<srcDir>",
  },
  css: ['~/assets/css/main.css']
  
})