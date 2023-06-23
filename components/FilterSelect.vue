<template>
  <div>
    <MultiSelect
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      display="chip"
      filter
      placeholder="برندها"
      :showToggleAll="false"
    >
    </MultiSelect>
  </div>
</template>
<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
  { name: "بایسیکل", code: "NY" },
  { name: "جوکر", code: "RM" },
  { name: "تلی هو", code: "LDN" },
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

..p-multiselect-items-wrapper {
  border: 0.2rem #f72585;
}

.p-multiselect:not(.p-disabled).p-focus {
  box-shadow: 0 0 0 0.1rem #f72585;
  border: 0;
}

.p-icon {
  color: #f72585;
}

.p-checkbox .p-checkbox-box .p-checkbox-icon {
  color: #10002b;
}
.p-multiselect .p-multiselect-label.p-placeholder {
  color: #f72585;
}
.p-multiselect {
  font-family: "IranSans";
  border: #f72585;
  border-radius: 0.2rem;
  background-color: #10002b;
  color: #f72585;
  padding: 0px 0px;
  flex-direction: row-reverse;
}
.p-multiselect-label,
.p-multiselect-item,
.p-inputtext {
  font-family: "IranSans";

  color: #f72585;
  font-size: 1rem;
  text-transform: uppercase;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  background-color: #10002b;
  color: #f72585;
}
.p-multiselect-panel
  .p-multiselect-header
  .p-multiselect-filter-container
  .p-inputtext {
  padding: 0;
}

.p-multiselect-panel .p-multiselect-header {
  background-color: #10002b;
  color: #f72585;
}
.p-multiselect-label-container {
  background-color: #10002b;
  border: 0;
}
.p-multiselect-token {
  background-color: #10002b;
  color: #f72585;
}
.p-multiselect-panel .p-multiselect-items {
  background-color: #10002b;
  color: #f72585;
}

.p-checkbox {
  color: #f72585;
}

.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
  border-color: #f72585;
}

.p-checkbox .p-checkbox-box {
  border-radius: 2rem;
  background-color: #10002b;
}
.p-overlay-open {
  border: 20;
  border-color: #f72585;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #f72585;
  color: #10002b;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  background: #f72585;
  color: #10002b;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background: #f9eef7;
}

.p-checkbox .p-checkbox-box.p-highlight {
  background-color: #f72585;
  border: 20;
  border-color: #10002b;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  background-color: #f72585;
  color: #10002b;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item.p-highlight.p-focus {
  background: #f72585;
}
</style>
