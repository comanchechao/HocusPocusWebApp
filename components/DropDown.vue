<template>
  <div>
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="قیمت"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
  { name: "بایسیکل", code: "NY" },
  { name: "جوکر", code: "RM" },
  { name: "تلی هو", code: "LDN" },
  { name: "فلکی", code: "IST" },
]);
</script>

<style>
@font-face {
  font-family: "IranSans";
  src: url("../assets/fonts/IRYekan.woff");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
.p-icon {
  color: #f72585;
}

.p-dropdown .p-dropdown-label.p-placeholder {
  color: #f72585;
}
.p-dropdown {
  font-family: "IranSans";

  border-radius: 0.2rem;
  background-color: #10002b;
  color: #f72585;
  border: 2;
  border-color: #f72585;
  padding: 0px 0px;
  flex-direction: row-reverse;
}
.p-dropdown-label,
.p-dropdown-item,
.p-inputtext {
  font-family: "IranSans";

  color: #f72585;
  font-size: 1rem;
  text-transform: uppercase;
}
</style>
