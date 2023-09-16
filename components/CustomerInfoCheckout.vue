<template>
  <div
    :class="{
      'lg:grid lg:grid-cols-1 lg:place-items-end lg:gap-5 h-full w-full lg:p-20 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col':
        $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
      'lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:p-20 my-10 lg:my-0 flex items-center justify-center space-y-7 lg:space-y-0 flex-col':
        $route.path === '/' || $route.path.startsWith('/shop/'),
    }"
    class=""
  >
    <Dropdown
      v-if="isVisible"
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      inputId="dd-city"
      placeholder="انتخاب شهر"
      class="w-full rounded-lg h-11"
    />
    <Dropdown
      v-if="isVisible"
      v-model="selectedRegion"
      :options="regions"
      optionLabel="name"
      placeholder="انتخاب استان"
      class="w-full rounded-lg h-11"
    />
    <InputNumber
      placeholder="شماره تلفن"
      v-model="phoneNumber"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="نام و نام خانوادگی"
      id="fullname"
      v-model="fullname"
      class="w-full rounded-lg h-11"
      aria-describedby="username-help"
    />
    <InputText
      v-if="isVisible"
      placeholder="آدرس کامل"
      id="address"
      v-model="address"
      class="w-full rounded-lg h-11 col-span-2"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="ایمیل"
      id="email"
      v-model="email"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
    <InputText
      placeholder="کد پستی"
      id="postalCode"
      v-model="postalCode"
      class="w-full rounded-lg h-11 self"
      aria-describedby="username-help"
    />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useProfileStore } from "../stores/profileStore";
import { storeToRefs } from "pinia";

// register profile store

const profileStore = useProfileStore();

const { storeFullname } = storeToRefs(profileStore);

// customer information

const fullname = ref("");
const phoneNumber = ref("");
const selectedCity = ref();
const address = ref("");
const postalCode = ref("");
const email = ref("");
const selectedRegion = ref();

const cities = ref([
  { name: "تهران", code: "NY" },
  { name: "تبریز", code: "RM" },
  { name: "ارومیه", code: "LDN" },
  { name: "شیراز", code: "IST" },
]);
const regions = ref([
  { name: "آذربایجان غربی", code: "NY" },
  { name: "آذربایجان شرقی", code: "RM" },
  { name: "البرز", code: "LDN" },
  { name: "هرمزگان", code: "IST" },
]);

// handle information submit
</script>

<script>
export default {
  props: ["isVisible"],
};
</script>
<style>
.p-dropdown .p-dropdown-label.p-placeholder {
  color: #150531;
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
  color: #150531;
}

.p-dropdown-panel
  .p-dropdown-items
  .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
  background-color: #150531;
  color: #fbf8ff;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: #f36b31;
  color: #150531;
}
.p-dropdown-panel .p-dropdown-header .p-dropdown-filter-container .p-inputtext {
  padding: 0;
}
input::placeholder,
textarea::placeholder {
  background-color: #fbf8ff;
  color: #15053190;
}
</style>
