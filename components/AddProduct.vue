<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن کالا </span>
      <PhPlus weight="fill" :size="23" />
    </button>
    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full flex items-center flex-col lg:p-10 space-y-10">
        <h2 class="neonText text-3xl">آپلود تصاویر</h2>
        <div
          class="w-full h-full lg:flex items-center grid grid-cols-2 grid-rows-2 justify-items-center px-7 place-items-center gap-3 lg:space-x-0 lg:justify-between lg:flex-wrap"
        >
          <div
            class="lg:w-40 lg:h-52 w-28 h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="lg:w-40 lg:h-52 w-28 h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="lg:w-40 lg:h-52 w-28 h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="lg:w-40 lg:h-52 w-28 h-32 bg-mainRed transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
          <div
            class="lg:w-40 lg:h-52 w-28 h-32 bg-mainRed transition ease-in-out col-span-2 duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
          >
            <PhUpload weight="fill" :size="66" />
          </div>
        </div>
        <div class="w-full flex items-center flex-col space-y-7">
          <div
            class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
          >
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
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainRed" for="email">توضیحات کالا</label>
            <Textarea
              class="w-full"
              autoResize
              v-model="value1"
              rows="1"
              cols="90"
            />
          </div>
          <Filters />
          <div class="h-28 w-full flex items-center justify-center">
            <button
              @click="visible = false"
              class="text-xl flex active:text-mainRed active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
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
const value1 = ref("");
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(100% - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(100% - 46px) !important;
  }
}
</style>
