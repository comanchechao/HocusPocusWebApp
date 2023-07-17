<template>
  <div class="grid grid-cols-2 place-items-end gap-5 h-full w-full p-20">
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      inputId="dd-city"
      placeholder="انتخاب شهر"
      class="w-full rounded-lg h-11"
    />
    <Dropdown
      v-model="selectedRegion"
      :options="regions"
      optionLabel="name"
      placeholder="انتخاب استان"
      class="w-full rounded-lg h-11"
    />
    <InputNumber
      placeholder="شماره تلفن"
      v-model="value"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="نام و نام خانوادگی"
      id="email"
      v-model="value"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="آدرس کامل"
      id="email"
      v-model="value"
      class="w-full rounded-lg h-11 col-span-2"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="ایمیل"
      id="email"
      v-model="value"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="کد پستی"
      id="email"
      v-model="value"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
const selectedCity = ref();
const cities = ref([
  { name: "تهران", code: "NY" },
  { name: "تبریز", code: "RM" },
  { name: "ارومیه", code: "LDN" },
  { name: "شیراز", code: "IST" },
]);
const selectedRegion = ref();
const regions = ref([
  { name: "آذربایجان غربی", code: "NY" },
  { name: "آذربایجان شرقی", code: "RM" },
  { name: "البرز", code: "LDN" },
  { name: "هرمزگان", code: "IST" },
]);
</script>
<style>
.p-dropdown .p-dropdown-label.p-placeholder {
  color: #10002b;
}
.p-dropdown .p-dropdown-label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.p-inputtext {
  text-align: end;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
}
.p-dropdown {
  cursor: pointer;
  display: flex;
  font-family: "IranSans";
  background-color: #fbf8ff;
  border-radius: 0.3rem;
  flex-direction: row-reverse;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  background-color: #fbf8ff;
  color: #10002b;
}

.p-dropdown-panel
  .p-dropdown-items
  .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #10002b;
  color: #fbf8ff;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: #f72585;
  color: #10002b;
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-container .p-inputtext {
  padding: 0;
}
input::placeholder,
textarea::placeholder {
  background-color: #fbf8ff;
  color: #10002b90;
}
</style>
