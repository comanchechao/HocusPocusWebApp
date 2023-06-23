<template>
  <div
    class="rounded-t-lg shadow-mainRed h-24 w-full flex justify-end space-x-4 px-8 items-center"
  >
    <button
      class="text-sm flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> بیشترین امتیاز </span> <PhStar :size="18" weight="fill" />
    </button>
    <button
      class="text-sm flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> پرفروش ترین </span> <PhCoins :size="20" weight="fill" />
    </button>
    <button
      class="text-sm flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-mainRed active:text-darkPurple active:bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> پربازدید ترین </span>
      <PhEye :size="20" weight="fill" />
    </button>
    <h2 class="text-mainRed text-md flex items-center space-x-3">
      <span> : </span>
      مرتب سازی بر اساس
      <PhFadersHorizontal :size="30" weight="fill" />
    </h2>
  </div>
</template>
<script setup>
import {
  PhEye,
  PhCoins,
  PhStar,
  PhFadersHorizontal,
} from "@phosphor-icons/vue";
</script>
