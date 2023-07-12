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
      <div class="w-full h-full flex items-center flex-col space-y-10 px-8">
        <h2 class="neonText text-xl">آپلود تصاویر</h2>
        <div class="w-full h-full flex items-center justify-between flex-wrap">
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
        <div class="w-full flex items-center flex-col space-y-4">
          <div class="flex items-center space-x-10">
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainRed" for="email">قیمت کالا</label>
              <InputNumber
                id="email"
                v-model="value"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainRed" for="email">نام کالا</label>
              <InputText
                id="email"
                v-model="value"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
          </div>

          <Filters />
          <div class="h-28 w-full flex items-center justify-center">
            <button
              @click="visible = false"
              class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-4 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه کردن کالا </span>
              <PhPlus weight="fill" :size="23" />
            </button>
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
