<template>
  <div
    class="flex md:flex-row lg:flex-row flex-col flex-wrap space-y-4 lg:space-y-0 lg:pt-0 pt-6 items-center justify-end lg:space-x-10 w-screen lg:w-full h-full lg:h-full border-t-2 border-mainRed"
  >
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
      <h3 class="text-lg text-mainRed">موجودی آموزش</h3>
    </div>
    <MultiSelect
      v-model="selectedCategory"
      :options="categories"
      optionLabel="name"
      display="chip"
      filter
      placeholder="دسته بندی"
      :showToggleAll="false"
    ></MultiSelect>
    <MultiSelect
      v-model="selectedRarity"
      :options="rarity"
      optionLabel="name"
      display="chip"
      filter
      placeholder="کمیابی"
      :showToggleAll="false"
    >
    </MultiSelect>
    <MultiSelect
      v-model="selectedDesigns"
      :options="designs"
      optionLabel="name"
      display="chip"
      filter
      placeholder="طرح ها"
      :showToggleAll="false"
    >
    </MultiSelect>
    <MultiSelect
      v-model="selectedBrands"
      :options="brands"
      optionLabel="name"
      display="chip"
      filter
      placeholder="برندها"
      :showToggleAll="false"
    >
    </MultiSelect>
    <MultiSelect
      v-model="selectedTypes"
      :options="types"
      optionLabel="name"
      display="chip"
      filter
      placeholder="نوع"
      :showToggleAll="false"
    >
    </MultiSelect>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useManagementStore } from "../stores/productManagement";

// filter values

const inStock = ref(true);
const selectedTypes = ref();
const selectedBrands = ref();
const selectedRarity = ref();
const selectedDesigns = ref();
const selectedCategory = ref();

// register management store

const managementStore = useManagementStore();

// set properties to add product component

watch(selectedTypes, (current, old) => {
  managementStore.setType(current[0].name);
  console.log(current[0].name);
});

watch(inStock, (current, old) => {
  managementStore.setInStock(current);
});

watch(selectedBrands, (current, old) => {
  managementStore.setBrand(current[0].name);
  console.log(current[0].name);
});

watch(selectedRarity, (current, old) => {
  managementStore.setRarity(current[0].name);
  console.log(current[0].name);
});

watch(selectedDesigns, (current, old) => {
  managementStore.setDesign(current[0].name);
  console.log(current[0].name);
});

// types

const types = ref([
  {
    name: "کارت ها",
  },
  { name: "لوازم شعبده بازی" },
]);
const designs = ref([{ name: "کلاسیک" }, { name: "کاستوم" }]);
const rarity = ref([
  { name: "کمیاب" },
  { name: "لیمیتد" },
  { name: "کمتر از 500" },
]);
const brands = ref([
  { name: "بایسیکل", code: "NY" },
  { name: "جوکر", code: "RM" },
  { name: "تلی هو", code: "LDN" },
]);
const categories = ref([
  { name: "کلوس آپ مجیک", code: "NY" },
  { name: "کارت مجیک", code: "RM" },
  { name: "سکه و پول", code: "LDN" },
  { name: "حرکت اجسام", code: "LDN" },
  { name: "منتالیسم", code: "LDN" },
  { name: "جادوی خیابانی", code: "LDN" },
  { name: "جادوی استند آپ", code: "LDN" },
  { name: "جادوی اجرا بزرگ", code: "LDN" },
  { name: "جادوی کافی شاپ", code: "LDN" },
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
.p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
  .p-inputswitch-slider {
  background-color: #9a0649;
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
  background-color: #f36b31;
}
.p-multiselect-items-wrapper {
  border: 0.2rem #f36b31;
}

.p-multiselect:not(.p-disabled).p-focus {
  box-shadow: 0 0 0 0.1rem #f36b31;
  border: 0;
}

.p-icon {
  color: #f36b31;
}

.p-checkbox .p-checkbox-box .p-checkbox-icon {
  color: #150531;
}
.p-multiselect .p-multiselect-label.p-placeholder {
  color: #f36b31;
}
.p-multiselect {
  font-family: "IranSans";
  border: #f36b31;
  border-radius: 0rem;
  background-color: #150531;
  color: #f36b31;
  padding: 0px 0px;
  flex-direction: row-reverse;
}
.p-multiselect-label,
.p-multiselect-item,
.p-inputtext {
  font-family: "IranSans";

  color: #f36b31;
  font-size: 1rem;
  text-transform: uppercase;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  background-color: #150531;
  color: #f36b31;
}
.p-multiselect-panel
  .p-multiselect-header
  .p-multiselect-filter-container
  .p-inputtext {
  padding: 0;
}

.p-multiselect-panel .p-multiselect-header {
  background-color: #150531;
  color: #f36b31;
}
.p-multiselect-label-container {
  background-color: #150531;
  border: 0;
}
.p-multiselect-token {
  background-color: #150531;
  color: #f36b31;
}
.p-multiselect-panel .p-multiselect-items {
  background-color: #150531;
  color: #f36b31;
}

.p-checkbox {
  color: #f36b31;
}

.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
  border-color: #f36b31;
}

.p-checkbox .p-checkbox-box {
  border-radius: 2rem;
  background-color: #150531;
}
.p-overlay-open {
  border: 20;
  border-color: #f36b31;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #f36b31;
  color: #150531;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  background: #f36b31;
  color: #150531;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background: #f9eef7;
}

.p-checkbox .p-checkbox-box.p-highlight {
  background-color: #f36b31;
  border: 20;
  border-color: #150531;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  background-color: #f36b31;
  color: #150531;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item.p-highlight.p-focus {
  background: #f36b31;
}
</style>
