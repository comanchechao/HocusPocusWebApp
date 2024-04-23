<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div class="Search self-end m-4">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
      </label>
      <div class="relative">
        <input
          dir="rtl"
          v-model="search"
          type="search"
          id="default-search"
          class="block w-96 bg-mainWhite p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <button
          @click.prevent="searchProduct()"
          type="submit"
          class="text-white top-0 absolute bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          جستجو
        </button>
        <div
          class="absolute inset-y-0 end-0 flex pr-4 items-center ps-3 pointer-events-none"
        ></div>
      </div>
    </div>
    <div
      class="w-full hidden h-20 py-5 lg:grid grid-cols-5 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple text-md">اطلاعات تکمیلی</h3>
      <h3 class="text-mainPurple text-md">تاریخ سفارش</h3>
      <h3 class="text-mainPurple text-md">وضعیت سفارش</h3>
      <h3 class="text-mainPurple text-md">نام خریدار</h3>
      <h3 class="text-mainPurple text-md">شاره سفارش</h3>
    </div>
    <div v-show="!showSearch">
      <LazyOrderCard
        class="text-sm"
        v-for="order in orders"
        :key="order.id"
        :order="order"
      >
        <template #Status>
          <span v-show="order.status === 'NOT PAIED'">پرداخت نشده</span>
          <PhX
            v-show="order.status === 'NOT PAIED'"
            class="text-red-500"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'PROCESSING'">درحال پردازش</span>
          <PhPackage
            v-show="order.status === 'PROCESSING'"
            class="text-mainViolet"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'SHIPPING'">ارسال شده</span>
          <PhAirplaneTilt
            v-show="order.status === 'SHIPPING'"
            class="text-blue-700"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'DELIVERED'">تحویل داده شده</span>
          <PhCheckCircle
            v-show="order.status === 'DELIVERED'"
            class="text-green-500"
            :size="30"
            weight="fill"
          />
        </template>
      </LazyOrderCard>
    </div>
    <div v-show="showSearch">
      <LazyOrderCard
        class="text-sm"
        v-for="order in searchedOrders"
        :key="order.id"
        :order="order"
      >
        <template #Status>
          <span v-show="order.status === 'NOT PAIED'">پرداخت نشده</span>
          <PhX
            v-show="order.status === 'NOT PAIED'"
            class="text-red-500"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'PROCESSING'">درحال پردازش</span>
          <PhPackage
            v-show="order.status === 'PROCESSING'"
            class="text-mainViolet"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'SHIPPING'">ارسال شده</span>
          <PhAirplaneTilt
            v-show="order.status === 'SHIPPING'"
            class="text-blue-700"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'DELIVERED'">تحویل داده شده</span>
          <PhCheckCircle
            v-show="order.status === 'DELIVERED'"
            class="text-green-500"
            :size="30"
            weight="fill"
          />
        </template>
      </LazyOrderCard>
    </div>
    <div v-show="showSearch">
      <LazyOrderCard
        class="text-sm"
        v-for="order in searchedId"
        :key="order.id"
        :order="order"
      >
        <template #Status>
          <span v-show="order.status === 'NOT PAIED'">پرداخت نشده</span>
          <PhX
            v-show="order.status === 'NOT PAIED'"
            class="text-red-500"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'PROCESSING'">درحال پردازش</span>
          <PhPackage
            v-show="order.status === 'PROCESSING'"
            class="text-mainViolet"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'SHIPPING'">ارسال شده</span>
          <PhAirplaneTilt
            v-show="order.status === 'SHIPPING'"
            class="text-blue-700"
            :size="30"
            weight="fill"
          />
          <span v-show="order.status === 'DELIVERED'">تحویل داده شده</span>
          <PhCheckCircle
            v-show="order.status === 'DELIVERED'"
            class="text-green-500"
            :size="30"
            weight="fill"
          />
        </template>
      </LazyOrderCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["orders"]);

const search = ref("");
const searchedOrders = ref([]);
const searchedId = ref([]);

const showSearch = ref(false);

const searchProduct = () => {
  const regex = new RegExp(search.value, "i"); // 'i' flag for case-insensitive search
  const regexId = new RegExp(Number(search.value));
  searchedOrders.value = props.orders.filter((order) =>
    regex.test(order.fullname)
  );
  searchedId.value = props.orders.filter((order) => regexId.test(order.id));
  console.log(searchedOrders.value);
  showSearch.value = true;
};

watch(search, (cur, old) => {
  if (cur === "") {
    showSearch.value = false;
  }
});

const loading = ref(false);

import {
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
  PhX,
} from "@phosphor-icons/vue";
</script>

<style></style>
