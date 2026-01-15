// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/storybook'
  ],
  devtools: { enabled: false },
})
