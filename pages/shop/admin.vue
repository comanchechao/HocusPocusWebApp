<template>
  <head>
    <title>مدیریت خرید</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />
    <div
      class="LoadingDiv h-screen w-screen flex items-center justify-center bg-darkPurple"
    >
      <ProgressSpinner
        class="bg-darkPurple"
        style="width: 80px; height: 80px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
    <div
      class="w-full pt-28 h-full flex flex-col items-center px-7 lg:px-40 py-16"
    >
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
        class="flex lg:items-center lg:flex-row flex-col lg:space-y-0 space-y-8 lg:space-x-8 justify-center items-center Stat1 lg:justify-center w-full my-9"
      >
     
        <div
          class="flex flex-col items-center rounded-md shadow-lg lg:w-auto w-full border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h4 class="text-white">تومان</h4>
            <h1
              v-if="!loading"
              class="lg:text-6xl text-4xl text-mainRed Text font-bold"
            >
              {{ totalSales }}
            </h1>
            <ProgressSpinner
              v-show="loading"
              style="width: 50px; height: 50px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </div>
          <h3 class="text-white text-lg">مقدار کل فروش رفته</h3>
        </div> <div
          class="flex flex-col items-center rounded-md shadow-lg lg:w-auto w-full border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h4 class="text-white">تومان</h4>
            <h1
              v-if="!loading"
              class="lg:text-6xl text-4xl text-mainRed Text font-bold"
            >
              {{ totalSales }}
            </h1>
            <ProgressSpinner
              v-show="loading"
              style="width: 50px; height: 50px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </div>
          <h3 class="text-white text-lg">مقدار فروش رفته ماه جاری</h3>
        </div>
        <div
          class="flex flex-col items-center rounded-md md:w-full w-full lg:w-96 shadow-lg border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h1
              v-if="!loading"
              class="lg:text-6xl text-4xl text-mainRed Text font-bold"
            >
              {{ ordersCount }}
            </h1>
            <ProgressSpinner
              v-show="loading"
              style="width: 50px; height: 50px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </div>
          <h3 class="text-white text-lg">مجموع سفارش ها</h3>
        </div>
      </div>
      <div
        id="Stat2"
        class="flex Store items-center lg:flex-row md:flex-col md:space-y-5 md:space-x-0 flex-col lg:space-y-0 space-y-14 lg:space-x-20 my-11"
      >
        <LazySoldDialog class="Stat2" :records="records" />
        <LazyInStockDialog class="Stat2" :products="products" />
        <LazyAvailableDialog class="Stat2" :products="products" />
      </div>
      <div
        class="w-full justify-center my-7 flex-col space-x-0 space-y-4 flex items-center"
      >
        <LazyAddProduct class="Product" />
      </div>
      <div
        class="w-full mt-10 lg:mt-0 h-full lg:h-full flex flex-col items-end space-y-6"
      >
        <h2
          class="lg:text-4xl text-xl font-bold text-mainRed border-b-8 border-mainYellow rounded-md pb-1"
        >
          سفارش ها
        </h2>
        <LazyOrderManagement :orders="orders" />
      </div>
      <div
        class="w-full mt-10 lg:mt-24 h-full lg:h-full flex flex-col items-end space-y-6"
      >
        <h2
          class="lg:text-4xl text-xl text-mainRed border-b-8 border-mainYellow rounded-md pb-1"
        >
          مدیریت صفحه ی اول
        </h2>
        <div class="Search">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
          </label>
          <div class="relative">
            <input
              v-model="search"
              type="search"
              id="default-search"
              class="block w-96 bg-mainWhite p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <button
              @click.prevent="getSearch()"
              type="submit"
              class="text-white top-0 absolute bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              جستجو
            </button>
            <div
              class="absolute inset-y-0 end-0 flex pr-4 items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <LazyProductStatusManagement :products="products" />
      </div>
      <div
        class="w-full mt-10 lg:mt-24 h-full lg:h-full flex flex-col items-end space-y-6"
      >
        <h2
          class="lg:text-4xl text-xl text-mainRed border-b-8 border-mainYellow rounded-md pb-1"
        >
          دریافت کد تخفیف
        </h2>

        <LazyGenerateCode />
      </div>
      <!-- <div
        class="w-full mt-10 lg:mt-10 h-full lg:h-full flex justify-end items-center space-x-6"
      >
        <div class="flex items-center space-x-3">
          <InputSwitch v-model="mode"></InputSwitch>
        </div>
        <h2
          class="lg:text-4xl text-xl text-mainRed border-b-8 border-mainYellow rounded-md pb-1"
        >
          پنهان کردن محصولات
        </h2>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);
import { PhCaretLeft, PhCoffee } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useManagementStore } from "~/stores/productManagement";
import { useMainManagement } from "~/stores/managementStore";
import { useOrderMainStore } from "~/stores/orderMainStore";
// register productManagement store
const mainManagement = useMainManagement();
const productManagement = useManagementStore();
const orderMainStore = useOrderMainStore();
const mode = ref(false);

const totalSales = ref(0);

const { orderStatus } = storeToRefs(orderMainStore);
const { stateChange } = storeToRefs(mainManagement);
const { ordersCount } = storeToRefs(mainManagement);

watch(stateChange, (cur, old) => {
  getProducts();
});

watch(orderStatus, (cur, old) => {
  getOrders();
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
      products.value = response.products;
      mainManagement.setProductCount(response.products.length);
      loading.value = false;
      getRecords();
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
      getRecords();
    });
};

const records = ref([]);

const getRecords = async () => {
  loading.value = true;
  const { data } = await $fetch(
    "http://localhost:3333/payment-records/management/getrecords",
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      loading.value = false;
      records.value = response.records;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

// watch(mode, (cur, old) => {
//   if (cur === true) {
//     enablemode();
//   } else {
//     deablemode();
//   }
// });
const enablemode = async () => {
  await $fetch("http://localhost:3333/management/enablemode", {
    method: "POST",
    headers: {},
    credentials: "include",
    withCredentials: true,
  })
    .then((response, error) => {
      console.log("enable");
      mainManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error);
    });
};

const deablemode = async () => {
  await $fetch("http://localhost:3333/management/deablemode", {
    method: "POST",
    headers: {},
    credentials: "include",
    withCredentials: true,
  })
    .then((response, error) => {
      console.log("deablemd");
      mainManagement.setStateChange();
    })
    .catch((error) => {
      console.log(error);
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
      orders.value = response.orders;
      mainManagement.setOrdersCount(response.orders.length);
      loading.value = false;
      const sum = response.orders.reduce(
        (total: number, obj: any) => total + Number(obj.totalPrice),
        0
      );

      totalSales.value = sum;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getProducts();
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

<style>
.p-icon {
  width: 1rem;
  height: 1rem;
  color: #f90d0d;
}
</style>
