export default defineNuxtConfig({
  modules: [
    "@hypernym/nuxt-gsap",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
      motionPath: true,
    },
  },
  pages: true,
  css: [
    "~/assets/css/main.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
  ],
  build: {
    transpile: ["primevue"],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      VITE_MERCHANT_ID: process.env.VITE_MERCHANT_ID,
    },
  },
});
