<template>
  <div
    class="w-screen h-20 flex items-center justify-center px-10 bg-darkPurple"
  >
    <div class="flex items-center justify-end">
      <button
        class="text-xl flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition bg-main duration-150 ease-in-out border-2 border-dashed border-transparent hover:border-mainViolet rounded-sm hover:text-mainViolet text-mainRed"
      >
        <span> ورود </span>
        <PhKeyhole :size="25" />
      </button>
    </div>
    <div class="w-full flex justify-end items-center space-x-3">
      <button
        class="text-xl flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition bg-main duration-150 ease-in-out border-2 border-dashed border-transparent hover:border-mainViolet rounded-sm hover:text-mainViolet text-mainRed"
      >
        <span> درباره ما </span>
        <PhSpade />
      </button>
      <button
        class="text-xl flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition bg-main duration-150 ease-in-out border-2 border-dashed border-transparent hover:border-mainViolet rounded-sm hover:text-mainViolet text-mainRed"
      >
        <span> تماس با ما </span> <PhCallBell />
      </button>
      <button
        class="text-xl flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition bg-main duration-150 ease-in-out border-2 border-dashed border-transparent hover:border-mainViolet rounded-sm hover:text-mainViolet text-mainRed"
      >
        <span> آموزش </span>
        <PhCube />
      </button>
      <button
        class="text-xl flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition bg-main duration-150 ease-in-out border-2 border-dashed border-transparent hover:border-mainViolet rounded-sm hover:text-mainViolet text-mainRed"
      >
        <span> خرید </span> <PhStorefront />
      </button>
      <button
        class="text-xl flex items-center space-x-2 px-8 py-1 transform scale-100 hover:scale-105 transition bg-main duration-150 ease-in-out border-2 border-dashed border-transparent hover:border-mainViolet rounded-sm hover:text-mainViolet text-mainRed"
      >
        <span> خونه </span>
        <PhHouseSimple />
      </button>
    </div>
  </div>
</template>
<script setup>
import {
  PhHouseSimple,
  PhCube,
  PhCallBell,
  PhSpade,
  PhStorefront,
  PhKeyhole,
} from "@phosphor-icons/vue";
</script>
