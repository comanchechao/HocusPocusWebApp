<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div
      class="w-full hidden h-20 py-5 lg:grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple text-md">اطلاعات تکمیلی</h3>
      <h3 class="text-mainPurple text-md">تاریخ سفارش</h3>
      <h3 class="text-mainPurple text-md">وضعیت سفارش</h3>
      <h3 class="text-mainPurple text-md">نام خریدار</h3>
    </div>
    <LazyOrderCard
      class="text-sm"
      v-for="order in orders"
      :key="order.id"
      :order="order"
    >
      <template #Status>
        <span v-show="order.status === 'PROCESSING'">درحال پردازش</span>
        <PhPackage
          v-show="order.status === 'PROCESSING'"
          class="text-mainYellow"
          :size="25"
          weight="fill"
        />
        <span v-show="order.status === 'SHIPPING'">ارسال شده</span>
        <PhAirplaneTilt
          v-show="order.status === 'SHIPPING'"
          class="text-blue-700"
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
