// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    scan: false,
  },
  components: [],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-vuefire"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vuefire: {
    config: {
      apiKey: "AIzaSyDnN0vEMeFmFR1sSowpbsCilkq58ZwLspU",
      authDomain: "bdc-signin-sheet.firebaseapp.com",
      projectId: "bdc-signin-sheet",
      storageBucket: "bdc-signin-sheet.appspot.com",
      messagingSenderId: "314765327273",
      appId: "1:314765327273:web:39d888ed449b6801a162b8",
      measurementId: "G-T95V4HYCYH",
    },
  },
});
