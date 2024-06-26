import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Listbox from "primevue/listbox";
import MultiSelect from "primevue/multiselect";
import InputSwitch from "primevue/inputswitch";
import Paginator from "primevue/paginator";
import Galleria from "primevue/galleria";
import Sidebar from "primevue/sidebar";
import Rating from "primevue/rating";
import Message from "primevue/message";
import ProgressBar from "primevue/progressbar";
import InputNumber from "primevue/inputnumber";
import Badge from "primevue/badge";
import Textarea from "primevue/textarea";
import Skeleton from "primevue/skeleton";
import ProgressSpinner from "primevue/progressspinner";
import Checkbox from "primevue/checkbox";
import Password from "primevue/password";

import InputMask from "primevue/inputmask";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("Checkbox", Checkbox);

  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("Paginator", Paginator);
  nuxtApp.vueApp.component("Sidebar", Sidebar);
  nuxtApp.vueApp.component("Galleria", Galleria);
  nuxtApp.vueApp.component("Rating", Rating);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("ProgressBar", ProgressBar);
  nuxtApp.vueApp.component("Badge", Badge);
  nuxtApp.vueApp.component("Message", Message);
  nuxtApp.vueApp.component("Listbox  ", Listbox);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Skeleton", Skeleton);
  nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner);
  nuxtApp.vueApp.component("InputMask", InputMask);
  nuxtApp.vueApp.component("Password", Password);

  //other components that you need
});
