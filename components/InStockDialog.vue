<template>
  <div class="flex justify-center">
    <div
      @click="visible = true"
      class="w-72 h-32 bg-white Stat2 cursor-pointer rounded-xl shadow-lg shadow-mainRed flex p-4 items-center justify-around"
    >
      <PhChartPieSlice class="text-mainRed" :size="60" weight="fill" />
      <div class="flex flex-col items-center space-y-3">
        <h3 class="text-mainPurple text-md">کالاهای موجود</h3>
        <h1 class="text-darkPurple text-5xl font-bold">50000</h1>
      </div>
    </div>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '40vw', backgroundColor: '#150531', height: '60vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-3 space-y-10 flex flex-col items-center justify-center"
      >
        <h2 class="text-white text-3xl">کالاهای موجود</h2>
        <div class="w-full h-full bg-white rounded-md">
          <div
            class="h-10 w-full border-b border-mainPurple place-items-center grid grid-cols-4"
          >
            <h3 class="text-mainPurple text-sm">کد کالا</h3>
            <h3 class="text-mainPurple text-sm">تعداد کالا</h3>
            <h3 class="text-mainPurple text-sm">تاریخ ورود</h3>
            <h3 class="text-mainPurple text-sm">نام کالا</h3>
          </div>
          <div
            class="h-14 w-full border-mainRed place-items-center grid grid-cols-4"
          >
            <h3 class="text-darkPurple text-sm">0123555</h3>
            <h3 class="text-darkPurple text-xs">54</h3>
            <h3 class="text-darkPurple text-xs">دوشنبه 24 تیر 1402</h3>
            <h3 class="text-mainRed text-xs text-center">
              Joker and the Thief: Blood Red Edition Playing Cards
            </h3>
          </div>
          <div
            class="h-14 w-full border-mainRed place-items-center grid grid-cols-4"
          >
            <h3 class="text-darkPurple text-sm">0123555</h3>
            <h3 class="text-darkPurple text-xs">54</h3>
            <h3 class="text-darkPurple text-xs">دوشنبه 24 تیر 1402</h3>
            <h3 class="text-mainRed text-xs text-center">
              Joker and the Thief: Blood Red Edition Playing Cards
            </h3>
          </div>
          <div
            class="h-14 w-full border-mainRed place-items-center grid grid-cols-4"
          >
            <h3 class="text-darkPurple text-sm">0123555</h3>
            <h3 class="text-darkPurple text-xs">54</h3>
            <h3 class="text-darkPurple text-xs">دوشنبه 24 تیر 1402</h3>
            <h3 class="text-mainRed text-xs text-center">
              Joker and the Thief: Blood Red Edition Playing Cards
            </h3>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhChartPieSlice } from "@phosphor-icons/vue";
const visible = ref(false);
</script>

<style scoped></style>
