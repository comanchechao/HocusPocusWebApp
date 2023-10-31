<template>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />
    <div
      class="LoadingDiv h-screen w-screen flex items-center justify-center bg-darkPurple"
    >
      <ProgressSpinner
        class="bg-darkPurple"
        style="width: 80px; height: 80px"
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
    <div class="w-full h-full flex flex-col items-center px-5 lg:px-40 py-16">
      <div class="flex Bread items-center w-full justify-end space-x-4">
        <h2
          class="text-mainRed underline text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCoffee :size="20" weight="fill" />

          <span> مدیریت </span>
        </h2>
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> خونه </span>
        </h2>
      </div>
      <div
        class="flex lg:items-center lg:flex-row flex-col lg:space-y-0 space-y-8 px-7 lg:space-x-8 justify-center items-center Stat1 lg:justify-center w-full my-9"
      >
        <div
          class="flex flex-col items-center rounded-md shadow-lg lg:w-auto w-full border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h4 class="text-white">تومان</h4>
            <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
              221,450,88
            </h1>
          </div>
          <h3 class="text-white text-lg">مقدار کل فروش رفته</h3>
        </div>
        <div
          class="flex flex-col items-center rounded-md md:w-80 w-full lg:w-96 shadow-lg border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h1
              v-if="!loading"
              class="lg:text-6xl text-4xl text-mainRed Text font-bold"
            >
              {{ ordersCount }}
            </h1>
          </div>
          <h3 class="text-white text-lg">مجموع سفارش ها</h3>
        </div>
      </div>
      <div
        id="Stat2"
        class="flex Store items-center lg:flex-row md:flex-row md:space-y-0 md:space-x-4 flex-col lg:space-y-0 space-y-14 lg:space-x-20 my-11"
      >
        <LazySoldDialog class="Stat2" :products="products" />
        <LazyInStockDialog class="Stat2" :products="products" />
        <LazyAvailableDialog class="Stat2" :products="products" />
      </div>
      <div
        class="md:space-x-6 md:flex-row md:space-y-0 w-full justify-center my-7 lg:space-x-6 lg:flex-row flex-col space-x-0 lg:space-y-0 space-y-4 flex items-center"
      >
        <LazyAddProduct class="Product" />
        <LazyAddFilter class="Product" />
      </div>
      <div
        class="w-full mt-10 lg:mt-0 h-full lg:h-full flex flex-col items-end space-y-6"
      >
        <h2
          class="lg:text-4xl text-xl font-bold text-mainRed border-b-8 border-mainYellow rounded-xl pb-3"
        >
          سفارش ها
        </h2>
        <LazySortBy />
        <LazyOrderManagement :orders="orders" />
      </div>
      <div
        class="w-full mt-10 lg:mt-24 h-full lg:h-full flex flex-col items-end space-y-6"
      >
        <h2
          class="lg:text-4xl text-xl text-mainRed border-b-8 border-mainYellow rounded-xl pb-3"
        >
          مدیریت صفحه ی اول
        </h2>
        <LazySortBy />

        <LazyProductStatusManagement :products="products" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PhCaretLeft, PhCoffee } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useManagementStore } from "~/stores/productManagement";
import { useMainManagement } from "~/stores/managementStore";
// register productManagement store
const mainManagement = useMainManagement();
const productManagement = useManagementStore();

const { stateChange } = storeToRefs(mainManagement);
const { ordersCount } = storeToRefs(mainManagement);

watch(stateChange, (cur, old) => {
  console.log("stateChange", stateChange);
  getProducts();
});
const loading = ref(false);
const products = ref();

const getProducts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/management/products", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.products);
      products.value = response.products;
      mainManagement.setProductCount(response.products.length);
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

const orders = ref();

const getOrders = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/management/orders", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.orders);
      orders.value = response.orders;
      mainManagement.setOrdersCount(response.orders.length);
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getProducts();
  console.log(stateChange);
  getOrders();
});

onMounted(() => {
  TM.to(".LoadingDiv", {
    display: "none",
  });
  TM.from(".Bread", { opacity: 0, duration: 0.7 });
  TM.from(".Stat1", { opacity: 0, duration: 0.7 });
  TM.from(".Stat2", { opacity: 0, duration: 0.7, stagger: 0.2 });

  TM.from(".Product", { opacity: 0, duration: 0.5 });
  window.addEventListener("load", () => {
    TM.play();
  });
});
</script>

<style scoped></style>
