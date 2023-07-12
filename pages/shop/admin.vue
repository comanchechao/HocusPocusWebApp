<template>
  <div class="h-full w-screen bg-darkPurple">
    <Navbar />
    <div
      class="w-full h-screen flex flex-col items-center px-32 py-16 space-y-12"
    >
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
      <div class="flex items-center space-x-20">
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
} from "@phosphor-icons/vue";
</script>
