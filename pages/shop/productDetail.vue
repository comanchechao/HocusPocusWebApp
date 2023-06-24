<template>
  <div>
    <Navbar />
    <div
      class="h-screen w-screen bg-darkPurple flex-col flex items-center p-16"
    >
      <div class="flex items-center w-full justify-end space-x-4">
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center underline cursor-pointer"
        >
          <span> Joker and the Thief: Blood Red Edition Playing Cards </span>
        </h2>
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> کارت ها </span>
        </h2>
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> خونه </span>
        </h2>
      </div>
      <div class="w-full h-full flex items-center"></div>
    </div>
  </div>
</template>
<script setup>
import { PhCaretLeft } from "@phosphor-icons/vue";
</script>
