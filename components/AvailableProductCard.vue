<template>
  <div
    class="h-auto w-full border-mainRed border-t py-3 place-items-center grid grid-cols-5"
  >
    <button
      class="text-red-500 p-3 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
    >
      <PhTrash :size="30" />
    </button>
    <h3 class="text-darkPurple md:text-md lg:text-lg text-sm">0123555</h3>
    <h3 class="text-darkPurple md:text-md lg:text-lg text-xs">65</h3>
    <h3 class="text-darkPurple md:text-md lg:text-lg text-xs text-center">
      دوشنبه 24 تیر 1402
    </h3>
    <h3 class="text-darkPurple md:text-sm lg:text-sm text-xs text-center px-2">
      Joker and the Thief: Blood Red Edition Playing Cards
    </h3>
  </div>
</template>

<script setup>
import { PhTrash } from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
