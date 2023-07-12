<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-4 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن کالا </span>
      <PhPlus weight="fill" :size="23" />
    </button>
    <Dialog
      v-model:visible="visible"
      modal
      :style="{ width: '70vw', backgroundColor: '#10002b', height: '100vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#10002b' }"
    >
      <div class="w-full h-full flex items-center flex-col space-y-10">
        <h2 class="neonText text-xl">آپلود تصاویر</h2>
        <div class="w-full h-full flex items-center justify-around flex-wrap">
          <div
            class="w-40 h-52 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="w-40 h-52 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="w-40 h-52 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="w-40 h-52 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="w-40 h-52 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPlus, PhUpload } from "@phosphor-icons/vue";
const visible = ref(false);
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #10002b;
}
</style>
