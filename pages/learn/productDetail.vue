<template>
  <div class="h-full w-screen bg-mainBrown">
    <Navbar />
    <div
      class="h-auto w-screen bg-mainBrown flex-col flex items-center px-7 lg:px-32 py-16"
    >
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end space-x-2 lg:space-x-4"
      >
        <h2
          class="text-mainYellow flex space-x-3 items-center underline cursor-pointer"
        >
          <span> Joker and the Thief: Blood Red Edition Playing Cards </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> کارت ها </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خونه </span>
        </h2>
      </div>
    </div>
    <div
      class="h-auto justify-center pb-6 w-full flex flex-col items-center px-7 lg:px-32"
    >
      <div
        class="w-full h-dialog rounded-md shadow-lg shadow-mainYellow bg-white"
      ></div>

      <div class="h-full w-full flex flex-col my-12 items-end space-y-7">
        <h1
          class="text-4xl text-gray-100 flex items-center justify-center space-x-3"
        >
          <span> آموزش تکنیک عبور اجسام از کش پک آموزشی شعبده بازی </span>
          <PhMagicWand class="text-mainYellow" :size="25" weight="fill" />
        </h1>
        <div class="w-full h-auto flex items-start space-x-14 justify-around">
          <div class="h-44 rounded-md bg-gray-100 w-96"></div>
          <div class="h-96 rounded-md bg-gray-100 w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhCaretLeft, PhMagicWand } from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
