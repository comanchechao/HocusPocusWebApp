import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import InputSwitch from "primevue/inputswitch";
import Paginator from "primevue/paginator";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("Paginator", Paginator);

  nuxtApp.vueApp.component("Dropdown", Dropdown);

  //other components that you need
});
