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
        </div>
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
        <LazyInStockDialog class="Stat2" :products="inStockProducts" />
        <LazyAvailableDialog class="Stat2" :products="products" />
      </div>
      <div
        class="w-full justify-center my-7 flex-col space-x-0 space-y-4 flex items-center"
      >
        <LazyAddProduct class="Product" />
        <div
          class="flex flex-col w-full border-2 p-5 border-dashed border-mainPink rounded-md items-end my-24 justify-end"
        >
          <h2
            class="lg:text-4xl text-xl font-bold text-mainRed border-b-8 border-mainYellow rounded-xl pb-3"
          >
            هزینه پست
          </h2>
          <div
            class="w-full h-full flex lg:flex-row flex-col-reverse lg:space-x-5 items-center justify-center lg:justify-end py-12"
          >
            <button
              @click="updateShippmentCost()"
              class="text-sm flex items-center space-x-2 px-3 lg:px-5 transition duration-150 ease-in-out border-b-4 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg py-2 shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <span> تایید </span>
            </button>
            <div
              class="flex items-center justify-center space-x-4 h-full w-auto"
            >
              <h2 class="text-mainPink text-2xl font-bold">تومان</h2>
              <input
                :placeholder="shippmentCost"
                v-model="shippmentCost"
                class="w-full rounded-lg h-11"
                aria-describedby="username-help"
              />
            </div>

            <div>
              <Message severity="success" v-show="message2"
                >به هزینه پست اضافه شد</Message
              >
            </div>
          </div>
        </div>
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
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const { isLogged, isManager } = storeToRefs(userStore);

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

onMounted(() => {
  setTimeout(() => {
    if (isManager.value === false) {
      navigateTo({
        path: "/",
      });
    }
  }, 2000);
});

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

const inStockProducts = ref([]);

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
      inStockProducts.value = response.products.filter(
        (product: any) => product.inStock === true
      );
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

onMounted(() => {
  getShippmentCost();
});

const newShipment = ref();

const updateShippmentCost = async () => {
  const data = new URLSearchParams({
    cost: shippmentCost.value,
  });
  try {
    const response = await $fetch(
      "http://localhost:3333/management/updateshippmentcost",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
        withCredentials: true,
        credentials: "include",
      }
    );
    console.log(data);

    // Handle the response as needed
    getShippmentCost();
    return response;
  } catch (error) {
    console.error("Error updating shippment cost:", error);
    throw error;
  }
};

const shippmentCost = ref("0");

const getShippmentCost = async () => {
  try {
    const response = await $fetch(
      "http://localhost:3333/management/getShippmentCost",
      {
        headers: {},
        withCredentials: true,
        credentials: "include",
      }
    );

    console.log("Shippment Cost Data:", response.cost);
    shippmentCost.value = response.cost;
    // You can handle the response data here (e.g., set it in a store or use it in the UI)
    return response;
  } catch (error) {
    console.error("Error fetching shippment cost:", error);
    // Handle any errors (e.g., display an error message)
  }
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
