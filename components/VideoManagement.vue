<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-md flex active:text-mainBrown active:bg-mainYellow items-center space-x-2 px-4 py-1 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
    >
      <span> مدیریت ویدیوها </span>
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
        <h2 class="text-2xl neonText">مدیریت آموزش ها</h2>
        <div
          class="w-full h-rem34 bg-white my-10 flex flex-col rounded-md text-xs lg:text-lg"
        >
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-Indigo-600"
          >
            <h3 class="text-mainPurple">کد سفارش</h3>
            <h3 class="text-mainPurple">تاریخ سفارش</h3>
            <h3 class="text-mainPurple">وضعیت سفارش</h3>
            <h3 class="text-mainPurple">نام کالا</h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-mainBrown">1544455</h3>
            <h3 class="text-mainBrown">دوشنبه 25 تیر</h3>
            <h3 class="text-mainBrown flex items-center space-x-2">
              <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

              <span>تحویل داده شده</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-mainYellow text-center px-5">
              Joker and the Thief: Blood Red Edition Playing Cards
            </h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-mainBrown">4566564</h3>
            <h3 class="text-mainBrown">شنبه 23 تیر</h3>
            <h3 class="text-mainBrown flex items-center space-x-2">
              <PhAirplaneTilt class="text-blue-600" :size="25" weight="fill" />

              <span>فرستاده شده</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-mainYellow text-center px-5">
              Joker and the Thief: Psychonaut Edition Playing Cards
            </h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
          >
            <h3 class="text-mainBrown">789555</h3>
            <h3 class="text-mainBrown">چهارشنبه 20 تیر</h3>
            <h3 class="text-mainBrown flex items-center space-x-2">
              <PhPackage class="text-mainViolet" :size="25" weight="fill" />

              <span>در حال پردازش</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-mainYellow text-center px-5">
              Bicycle: Batman Edition Playing Cards
            </h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-mainYellow"
          >
            <h3 class="text-mainBrown">789555</h3>
            <h3 class="text-mainBrown">چهارشنبه 20 تیر</h3>
            <h3 class="text-mainBrown flex items-center space-x-2">
              <PhPackage class="text-mainViolet" :size="25" weight="fill" />

              <span>در حال پردازش</span>
              <LazyChangeStatusDialog />
            </h3>
            <h3 class="text-mainYellow text-center px-5">
              Bicycle: Batman Edition Playing Cards
            </h3>
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
