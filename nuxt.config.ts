// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [
    {
      path: './components',
      prefix: 'Ui'
    }
  ],
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss'
  ]
})