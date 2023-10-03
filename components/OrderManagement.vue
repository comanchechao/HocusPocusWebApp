<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div
      class="w-full h-96 py-5 grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple">اطلاعات تکمیلی</h3>
      <h3 class="text-mainPurple">تاریخ سفارش</h3>
      <h3 class="text-mainPurple">وضعیت سفارش</h3>
      <h3 class="text-mainPurple">نام کالا</h3>
    </div>
    <LazyOrderCard>
      <template #Status>
        <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

        <span>تحویل داده شده</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhAirplaneTilt class="text-blue-600" :size="25" weight="fill" />

        <span>فرستاده شده</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhPackage class="text-mainViolet" :size="25" weight="fill" />

        <span>در حال پردازش</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhPackage class="text-mainViolet" :size="25" weight="fill" />

        <span>در حال پردازش</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhPackage class="text-mainViolet" :size="25" weight="fill" />

        <span>در حال پردازش</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

        <span>تحویل داده شده</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhAirplaneTilt class="text-blue-600" :size="25" weight="fill" />

        <span>فرستاده شده</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhPackage class="text-mainViolet" :size="25" weight="fill" />

        <span>در حال پردازش</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhPackage class="text-mainViolet" :size="25" weight="fill" />

        <span>در حال پردازش</span>
      </template>
    </LazyOrderCard>
    <LazyOrderCard>
      <template #Status>
        <PhPackage class="text-mainViolet" :size="25" weight="fill" />

        <span>در حال پردازش</span>
      </template>
    </LazyOrderCard>
  </div>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(false);
const orders = ref();

const getProducts = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/products", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.products);
      products.value = response.products;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

import { PhCheckCircle, PhAirplaneTilt, PhPackage } from "@phosphor-icons/vue";
</script>

<style></style>
