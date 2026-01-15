// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'ready'() {
      console.log('✅ UI layer loaded!')
    }
  },
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