<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-md flex active:text-darkPurple active:bg-mainYellow items-center space-x-2 px-4 py-1 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
    >
      <span> مدیریت اشتراک ها </span>
      <PhVideo />
    </button>
    <Dialog
      v-model:visible="visible"
      :responsive="['md', 'lg', 'xl']"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full flex items-center flex-col py-7">
        <h2 class="text-4xl neonText">مدیریت سفارش ها</h2>
        <div
          class="w-full h-full bg-white my-10 flex flex-col rounded-md text-xs lg:text-lg"
        >
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-Indigo-600"
          >
            <h3 class="text-mainPurple font-bold">تاریخ سفارش</h3>
            <h3 class="text-mainPurple font-bold">وضعیت سفارش</h3>
            <h3 class="text-mainPurple font-bold">نام خریدار</h3>
            <h3 class="text-mainPurple font-bold">نام اشتراک</h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

              <span>تحویل داده شده</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-darkPurple">آروین نیک بین</h3>
            <h3 class="text-mainBrown text-center px-5">آموزش بر زدن ورق</h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-darkPurple">شنبه 23 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhAirplaneTilt class="text-blue-600" :size="25" weight="fill" />

              <span>فرستاده شده</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-darkPurple">آروین نیک بین</h3>
            <h3 class="text-mainBrown text-center px-5">آموزش بر زدن ورق</h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

              <span>تحویل داده شده</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-darkPurple">آروین نیک بین</h3>
            <h3 class="text-mainBrown text-center px-5">آموزش بر زدن ورق</h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

              <span>تحویل داده شده</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-darkPurple">آروین نیک بین</h3>
            <h3 class="text-mainBrown text-center px-5">آموزش بر زدن ورق</h3>
          </div>
        </div>
        <div class="h-full w-full flex flex-col items-center space-y-5">
          <button
            label="Show"
            @click="visible = false"
            class="text-xl flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-mainViolet hover:border-mainYellow rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
          >
            <span> تایید تغییرات </span>
            <PhKeyhole :size="25" />
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

import {
  PhCaretLeft,
  PhCoffee,
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
  PhVideo,
} from "@phosphor-icons/vue";
const visible = ref(false);
</script>

<style></style>
