<template>
  <div
    class="flex items-center justify-center space-x-6 flex-wrap w-screen lg:w-full h-full lg:h-full py-5 border-t-2 border-mainRed"
  >
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
      <h3 class="text-lg text-mainRed">موجودی کالا</h3>
    </div>
    <MultiSelect
      :maxSelectedLabels="2"
      v-model="selectedRarity"
      :options="rarity"
      optionLabel="name"
      display="chip"
      placeholder="کمیابی"
      :showToggleAll="false"
    >
    </MultiSelect>
    <MultiSelect
      :maxSelectedLabels="2"
      v-model="selectedDesigns"
      :options="designs"
      optionLabel="name"
      display="chip"
      placeholder="طرح ها"
      :showToggleAll="false"
    >
    </MultiSelect>
    <MultiSelect
      :maxSelectedLabels="2"
      v-model="selectedBrands"
      :options="brands"
      optionLabel="name"
      display="chip"
      placeholder="برندها"
      :showToggleAll="false"
    >
    </MultiSelect>

    <MultiSelect
      :maxSelectedLabels="2"
      v-model="selectedCategory"
      :options="categories"
      optionLabel="name"
      display="chip"
      placeholder="دسته بندی"
      :showToggleAll="false"
    ></MultiSelect>
    <MultiSelect
      :maxSelectedLabels="2"
      v-model="selectedTypes"
      :options="types"
      optionLabel="name"
      display="chip"
      placeholder="نوع"
      :showToggleAll="false"
    >
    </MultiSelect>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useFilterStore } from "../stores/filtersStore";
const checked = ref(false);
const selectedTypes = ref();
const selectedBrands = ref();
const selectedRarity = ref();
const selectedDesigns = ref();
const selectedCategory = ref();

// register filter store

const filterStore = useFilterStore();

watch(selectedTypes, (cur, old) => {
  console.log(selectedTypes.value);
  filterStore.setTypes(selectedTypes.value);
});

watch(selectedBrands, (cur, old) => {
  console.log(selectedBrands.value);
  filterStore.setBrand(selectedBrands.value);
});

watch(selectedDesigns, (cur, old) => {
  console.log(selectedDesigns.value);
  filterStore.setDesign(selectedDesigns.value);
});

watch(selectedCategory, (cur, old) => {
  console.log(selectedCategory.value);
  filterStore.setCategory(selectedCategory.value);
});

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
  { name: "کوپاگ", code: "NY" },
  { name: "کارتماندی", code: "RM" },
  { name: "کِم", code: "LDN" },
  { name: "پیانتیک", code: "NY" },
  { name: "بیی", code: "RM" },
  { name: "رافورد", code: "LDN" },
]);
const categories = ref([
  { name: "کلوس آپ مجیک", code: "NY" },
  { name: "جادو کودکان", code: "NY" },
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
  background-color: #b10449;
}
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
  background-color: #d9065a;
}
.p-multiselect-items-wrapper {
  border: 0.2rem #090025;
}

.p-multiselect:not(.p-disabled).p-focus {
  box-shadow: 0 0 0 0.1rem #090025;
  border: 0;
}

.p-icon {
  color: #090025;
  width: 1.4rem;
  height: 1.4rem;
}
.p-dialog .p-dialog-header {
  background-color: #150531;
}

.p-checkbox .p-checkbox-box .p-checkbox-icon {
  color: #d9065a;
}
.p-multiselect .p-multiselect-label.p-placeholder {
  color: #090025;
}
.p-multiselect {
  font-family: "IranSans";
  border: 4px #090025;
  border-radius: 0rem;
  background-color: #d9065a;
  color: #090025;
  padding: 0px 0px;
  flex-direction: row-reverse;
}
.p-multiselect-label,
.p-multiselect-item,
.p-inputtext {
  font-family: "IranSans";

  color: #090025;
  font-size: 1rem;
  text-transform: uppercase;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  background-color: #fdf7fa;
  color: #090025;
}
.p-multiselect-panel
  .p-multiselect-header
  .p-multiselect-
  -container
  .p-inputtext {
  padding: 0;
}

.p-multiselect-panel .p-multiselect-header {
  background-color: #d9065a;
  color: #090025;
}
.p-multiselect-label-container {
  background-color: #d9065a;
  border: 0;
}
.p-multiselect-token {
  background-color: #d9065a;
  color: #090025;
}
.p-multiselect-panel .p-multiselect-items {
  background-color: #ffffff;
  color: #090025;
}

.p-checkbox {
  color: #090025;
}

.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
  border-color: #090025;
}

.p-checkbox .p-checkbox-box {
  border-radius: 2rem;
  background-color: #d9065a;
}
.p-overlay-open {
  border: 20;
  border-color: #090025;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #090025;
  color: #d9065a;
}
.p-multiselect-panel .p-multiselect-items .p-multiselect-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
  background: #090025;
}

.p-checkbox .p-checkbox-box.p-highlight {
  background-color: #090025;
  border: 20;
  border-color: #d9065a;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  background-color: #090025;
  color: #d9065a;
}
.p-multiselect-panel
  .p-multiselect-items
  .p-multiselect-item.p-highlight.p-focus {
  background: #090025;
}
</style>
