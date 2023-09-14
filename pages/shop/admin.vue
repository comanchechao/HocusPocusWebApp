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
        class="flex lg:items-start lg:flex-row flex-col lg:space-y-0 space-y-8 px-7 lg:space-x-8 justify-center items-center Stat1 lg:justify-start w-full my-9"
      >
        <div
          class="flex flex-col items-center rounded-md shadow-lg lg:w-auto w-full border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h4 class="text-white">تومان</h4>
            <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
              221,450,88
            </h1>
          </div>
          <h3 class="text-white text-lg">مقدار کل فروش رفته</h3>
        </div>
        <div
          class="flex flex-col items-center rounded-md md:w-80 w-full lg:w-96 shadow-lg border border-mainPink shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3 Stat1">
            <h1 class="lg:text-6xl text-4xl text-mainRed Text font-bold">
              5421
            </h1>
          </div>
          <h3 class="text-white text-lg">مجموع سفارش ها</h3>
        </div>
      </div>
      <div
        class="flex items-center lg:flex-row md:flex-row md:space-y-0 md:space-x-4 flex-col lg:space-y-0 space-y-14 lg:space-x-20 my-11"
      >
        <LazySoldDialog />
        <LazyInStockDialog />
        <LazyAvailableDialog />
      </div>
      <div
        class="md:space-x-6 md:flex-row md:space-y-0 w-full justify-center my-7 lg:space-x-6 lg:flex-row flex-col space-x-0 lg:space-y-0 space-y-4 flex items-center"
      >
        <LazyAddProduct class="Product" />
        <LazyAddFilter class="Product" />
      </div>
      <div
        class="w-full mt-10 lg:mt-0 h-full lg:h-full flex flex-col items-end space-y-6"
      >
        <h2
          class="text-4xl font-bold text-mainRed border-b-8 border-mainYellow rounded-xl pb-3"
        >
          سفارش ها
        </h2>
        <LazySortBy />
        <LazyOrderManagement />
      </div>
      <div class="w-full h-screen mt-20 flex flex-col items-end space-y-6">
        <h2
          class="text-4xl text-mainRed border-b-8 border-mainYellow rounded-xl pb-3"
        >
          مدیریت صفحه ی اول
        </h2>
        <LazyProductStatusManagement />
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
