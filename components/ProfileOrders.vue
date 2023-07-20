<template>
  <div
    class="w-full h-full flex items-center justify-center flex-col space-y-6"
  >
    <div class="flex items-center justify-center space-x-5 h-14 w-full">
      <button
        class="w-full h-14 text-xl justify-center flex items-center space-x-2 rounded-md bg-green-500 text-white transition ease-in duration-150 hover:bg-white hover:text-green-500"
      >
        <span>تحویل داده شده</span>
        <PhCheckCircle weight="fill" :size="30" />
      </button>
      <button
        class="w-full h-14 text-xl justify-center flex items-center space-x-2 rounded-md bg-blue-700 text-white transition ease-in duration-150 hover:bg-white hover:text-blue-700"
      >
        <span>فرستاده شده</span>
        <PhAirplaneTakeoff weight="fill" :size="30" />
      </button>
      <button
        class="w-full h-14 text-xl justify-center flex items-center space-x-2 rounded-md bg-mainViolet text-white transition ease-in duration-150 hover:bg-white hover:text-mainViolet"
      >
        <span>در حال پردازش</span>
        <PhPackage weight="fill" :size="30" />
      </button>
    </div>
    <div
      class="h-full w-full shadow-mainPurple shadow-lg rounded-md bg-white flex flex-col items-center"
    ></div>
  </div>
</template>

<script setup>
import {
  PhPackage,
  PhAirplaneTakeoff,
  PhCheckCircle,
} from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
