<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div
      class="w-full h-20 py-5 grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple">اطلاعات تکمیلی</h3>
      <h3 class="text-mainPurple">تاریخ سفارش</h3>
      <h3 class="text-mainPurple">وضعیت سفارش</h3>
      <h3 class="text-mainPurple">نام کالا</h3>
    </div>
    <LazyOrderCard v-for="order in orders" :key="order.id" :order="order">
      <template #Status>
        <span v-show="order.status === 'PROCESSING'">درحال پردازش</span>
        <PhCheckCircle
          v-show="order.status === 'PROCESSING'"
          class="text-red-500"
          :size="25"
          weight="fill"
        />
        <span v-show="order.status === 'SHIPPING'">در حال ارسال</span>
        <PhCheckCircle
          v-show="order.status === 'SHIPPING'"
          class="text-yellow-500"
          :size="25"
          weight="fill"
        />
        <span v-show="order.status === 'DELIVERED'">تحویل داده شده</span>
        <PhCheckCircle
          v-show="order.status === 'DELIVERED'"
          class="text-green-500"
          :size="25"
          weight="fill"
        />
      </template>
    </LazyOrderCard>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["orders"]);

const loading = ref(false);

import { PhCheckCircle, PhAirplaneTilt, PhPackage } from "@phosphor-icons/vue";
</script>

<style></style>
