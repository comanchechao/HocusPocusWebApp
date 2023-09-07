<template>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />
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
        class="flex lg:items-start justify-center items-center Stat1 lg:justify-start w-full flex-col my-9"
      >
        <div
          class="flex flex-col items-center rounded-md shadow-md border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h4 class="text-white">تومان</h4>
            <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
              221,450,88
            </h1>
          </div>
          <h3 class="text-white text-lg">مقدار کل فروش رفته</h3>
        </div>
      </div>
      <div
        class="flex items-center lg:flex-row flex-col lg:space-y-0 space-y-14 lg:space-x-20 my-11"
      >
        <LazySoldDialog />
        <LazyInStockDialog />
        <LazyAvailableDialog />
      </div>
      <div class="w-full justify-center my-7 space-x-6 flex items-center">
        <LazyAddProduct class="Product" />
        <LazyAddFilter class="Product" />
      </div>
      <div
        class="w-full mt-10 lg:mt-0 h-full lg:h-dialog flex flex-col items-end space-y-6"
      >
        <div
          class="w-full flex items-center justify-center lg:flex-row flex-col-reverse space-y-3 lg:space-y-0 lg:justify-end lg:space-x-6 mb-10"
        >
          <LazyOrderManagementDialog class="lg:mt-0 mt-7" />
          <h2 class="text-4xl neonText">سفارش ها</h2>
        </div>
        <div
          class="w-full h-full bg-white flex flex-col rounded-md text-xs lg:text-lg"
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
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainRed"
          >
            <h3 class="text-darkPurple">1544455</h3>
            <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhCheckCircle class="text-green-500" :size="25" weight="fill" />

              <span>تحویل داده شده</span>
            </h3>
            <h3 class="text-mainRed text-center px-5">
              Joker and the Thief: Blood Red Edition Playing Cards
            </h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainRed"
          >
            <h3 class="text-darkPurple">4566564</h3>
            <h3 class="text-darkPurple">شنبه 23 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhAirplaneTilt class="text-blue-600" :size="25" weight="fill" />

              <span>فرستاده شده</span>
            </h3>
            <h3 class="text-mainRed text-center px-5">
              Joker and the Thief: Psychonaut Edition Playing Cards
            </h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainRed"
          >
            <h3 class="text-darkPurple">789555</h3>
            <h3 class="text-darkPurple">چهارشنبه 20 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhPackage class="text-mainViolet" :size="25" weight="fill" />

              <span>در حال پردازش</span>
            </h3>
            <h3 class="text-mainRed text-center px-5">
              Bicycle: Batman Edition Playing Cards
            </h3>
          </div>
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-mainRed"
          >
            <h3 class="text-darkPurple">789555</h3>
            <h3 class="text-darkPurple">چهارشنبه 20 تیر</h3>
            <h3 class="text-darkPurple flex items-center space-x-2">
              <PhPackage class="text-mainViolet" :size="25" weight="fill" />

              <span>در حال پردازش</span>
            </h3>
            <h3 class="text-mainRed text-center px-5">
              Bicycle: Batman Edition Playing Cards
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  PhCaretLeft,
  PhCoffee,
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

onMounted(() => {
  TM.from(".Bread", { opacity: 0, duration: 1, delay: 0.5 });
  TM.from(".Stat1", { opacity: 0, duration: 1 });
  TM.from(".Stat2", { opacity: 0, duration: 1, stagger: 0.3 });

  TM.from(".Product", { opacity: 0, duration: 0.5 });
});
</script>

<style scoped></style>
