<template>
  <div
    class="w-full h-full flex items-center justify-center flex-col space-y-6"
  >
    <div
      class="flex items-center justify-center lg:space-y-0 space-y-5 lg:space-x-5 h-auto lg:flex-row flex-col lg:h-14 w-full"
    >
      <button
        @click="toggleRecieved"
        class="w-full h-14 text-lg lg:text-xl justify-center flex items-center space-x-2 rounded-md shadow-md shadow-transparent active:bg-green-700 active:text-white hover:shadow-green-500 bg-green-500 text-white transition ease-in duration-150 hover:bg-white hover:text-green-500"
      >
        <span>تحویل داده شده</span>
        <PhCheckCircle weight="fill" :size="30" />
      </button>
      <button
        @click="togglesent"
        class="w-full h-14 text-lg lg:text-xl justify-center flex items-center space-x-2 rounded-md shadow-md shadow-transparent active:bg-blue-900 active:text-white hover:shadow-blue-700 bg-blue-700 text-white transition ease-in duration-150 hover:bg-white hover:text-blue-700"
      >
        <span>فرستاده شده</span>
        <PhAirplaneTakeoff weight="fill" :size="30" />
      </button>
      <button
        @click="toggleProcess"
        class="w-full h-14 text-lg lg:text-xl justify-center flex items-center space-x-2 rounded-md shadow-md shadow-transparent active:bg-Fuchsia-950 active:text-white hover:shadow-mainViolet bg-mainYellow text-white transition ease-in duration-150 hover:bg-white hover:text-mainViolet"
      >
        <span>در حال پردازش</span>
        <PhPackage weight="fill" :size="30" />
      </button>
    </div>
    <div
      class="h-dialog overflow-y-scroll w-full shadow-mainPurple shadow-lg rounded-md bg-white flex flex-col items-center"
    >
      <div
        id="process"
        v-show="processDiv"
        class="flex w-full items-center h-full flex-col justify-around space-y-5 p-4 lg:p-10"
      >
        <h2
          class="text-2xl font-bold flex self-end items-center space-x-2 text-darkPurple border-b-4 border-mainRed pb-2 rounded-md"
        >
          <span>اطلاعات سفارش ها</span>
          <PhClipboardText weight="fill" :size="25" />
        </h2>
        <div
          class="h-full pt-6 w-full flex flex-col justify-center px-2 space-y-5 overflow-y-scroll items-center"
        >
          <Order
            v-for="order in processingOrders"
            :key="order.id"
            :order="order"
          />
        </div>
      </div>
      <div
        id="sent"
        v-show="sentDiv"
        class="flex w-full items-center h-full flex-col justify-around space-y-5 p-10"
      >
        <h2
          class="text-2xl font-bold flex self-end items-center space-x-2 text-darkPurple border-b-4 border-mainRed pb-2 rounded-md"
        >
          <span>اطلاعات سفارش ها</span>
          <PhClipboardText weight="fill" :size="25" />
        </h2>
        <div
          class="h-full pt-6 w-full flex flex-col justify-center space-y-5 overflow-y-scroll items-center"
        >
          <Order
            v-for="order in shippingOrders"
            :key="order.id"
            :order="order"
          />
        </div>
      </div>
      <div
        id="recieved"
        v-show="recievedDiv"
        class="flex w-full items-center h-full flex-col justify-around space-y-5 p-10"
      >
        <h2
          class="text-2xl font-bold flex self-end items-center space-x-2 text-darkPurple border-b-4 border-mainRed pb-2 rounded-md"
        >
          <span>اطلاعات سفارش ها</span>
          <PhClipboardText weight="fill" :size="25" />
        </h2>
        <div
          class="h-full pt-6 w-full flex flex-col justify-center space-y-5 overflow-y-scroll items-center"
        >
          <Order
            v-for="order in deliveredOrders"
            :key="order.id"
            :order="order"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import {
  PhPackage,
  PhAirplaneTakeoff,
  PhCheckCircle,
  PhClipboardText,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const processDiv = ref(true);
const sentDiv = ref();
const recievedDiv = ref();

const userId = ref();
const loading = ref(false);

const processingOrders = ref([]);
const shippingOrders = ref([]);
const deliveredOrders = ref([]);
const orders = ref();

const getOrders = async (userId: string) => {
  const body = new URLSearchParams({
    userId: userId,
  });
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/orders/userorder", {
    method: "Post",
    headers: {},
    body: body,
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.orders);
      orders.value = response.orders;
      response.orders.forEach((order) => {
        if (order.status === "PROCESSING") {
          processingOrders.value.push(order);
        }
        if (order.status === "SHIPPING") {
          shippingOrders.value.push(order);
        }
        if (order.status === "DELIVERED") {
          deliveredOrders.value.push(order);
        }
      });
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

const getUser = async () => {
  const { data } = await $fetch("http://localhost:3333/auth/isauthenticated", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.userId);
      userId.value = response.userId;
      getOrders(response.userId);
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getUser();
  setTimeout(() => {
    console.log(processingOrders.value);
    console.log(shippingOrders.value);
  }, 2000);
});

function toggleProcess() {
  processDiv.value = true;
  sentDiv.value = false;
  recievedDiv.value = false;
}

function togglesent() {
  sentDiv.value = true;
  processDiv.value = false;
  recievedDiv.value = false;
}
function toggleRecieved() {
  sentDiv.value = false;
  processDiv.value = false;
  recievedDiv.value = true;
}
watch([processDiv, sentDiv, recievedDiv], (values) => {
  const [processVisible, sentVisible, recievedVisible] = values;
  const TL = $gsap.timeline();
  if (processVisible) {
    TL.fromTo(
      "#process",
      { opacity: 0, x: 40 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  } else if (sentVisible) {
    TL.fromTo(
      "#sent",
      { opacity: 0, x: 40 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  } else if (recievedVisible) {
    TL.fromTo(
      "#recieved",
      { opacity: 0, x: 40 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }
});
</script>

<style></style>
