<template>
  <div class="h-full w-screen bg-darkPurple">
    <Navbar />
    <div class="w-full h-full flex flex-col items-center px-40 py-16">
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
      <div class="flex items-start justify-start w-full flex-col my-9">
        <div
          class="flex flex-col items-center rounded-md shadow-md shadow-mainPurple p-6"
        >
          <div class="flex items-center space-x-3">
            <h4 class="text-white">تومان</h4>
            <h1 class="text-6xl text-mainRed Text font-bold">221,450,88</h1>
          </div>
          <h3 class="text-white text-lg">مقدار کل فروش رفته</h3>
        </div>
      </div>
      <div class="flex items-center space-x-20 my-11">
        <div
          class="w-72 h-32 bg-white rounded-xl shadow-lg shadow-mainRed flex p-4 items-center justify-around"
        >
          <PhMoney class="text-mainRed" :size="70" weight="fill" />
          <div class="flex flex-col items-center space-y-3">
            <h3 class="text-mainPurple text-sm">اجناس فروخته شده</h3>
            <h1 class="text-darkPurple text-5xl font-bold">352</h1>
          </div>
        </div>
        <div
          class="w-72 h-32 bg-white rounded-xl shadow-lg shadow-mainRed flex p-4 items-center justify-around"
        >
          <PhStack class="text-mainRed" :size="60" weight="fill" />
          <div class="flex flex-col items-center space-y-3">
            <h3 class="text-mainPurple text-sm">اجناس در انبار</h3>
            <h1 class="text-darkPurple text-5xl font-bold">1522000</h1>
          </div>
        </div>
        <div
          class="w-72 h-32 bg-white rounded-xl shadow-lg shadow-mainRed flex p-4 items-center justify-around"
        >
          <PhChartPieSlice class="text-mainRed" :size="60" weight="fill" />
          <div class="flex flex-col items-center space-y-3">
            <h3 class="text-mainPurple text-sm">اجناس موجود</h3>
            <h1 class="text-darkPurple text-5xl font-bold">50000</h1>
          </div>
        </div>
      </div>
      <div class="w-full justify-center my-7 flex items-center">
        <AddProduct />
      </div>
      <div class="w-full h-dialog flex flex-col items-end space-y-6x">
        <h2 class="text-4xl neonText mb-10">سفارش ها</h2>
        <div class="w-full h-auto bg-white flex flex-col rounded-md">
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
<script setup>
import {
  PhCaretLeft,
  PhCoffee,
  PhMoney,
  PhStack,
  PhChartPieSlice,
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
} from "@phosphor-icons/vue";
</script>

<style scoped></style>
