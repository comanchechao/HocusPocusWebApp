import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
// import Dropdown from "primevue/dropdown";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("InputText", InputText);

  //   nuxtApp.vueApp.component("Dropdown", Dropdown);

  //other components that you need
});
