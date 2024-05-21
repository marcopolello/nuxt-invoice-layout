// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/index.css'
  ],
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  }
})
