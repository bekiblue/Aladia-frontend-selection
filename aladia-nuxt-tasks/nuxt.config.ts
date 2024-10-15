// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icons', '@vesp/nuxt-fontawesome', '@nuxtjs/storybook', '@pinia/nuxt' ],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fontawesome: {
    icons: {
      solid: ['envelope', 'spinner', 'key', 'eye' ,'eye-slash', 'user', 'arrow-left', 'arrow-right'],
      
    },
  }
})