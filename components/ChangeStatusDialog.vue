<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-sm flex active:text-mainRed active:bg-darkPurple items-center px-1 py-1 rounded-full transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainPurple shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
    >
      <PhInfo weight="fill" :size="23" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '50vw', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-3 space-y-10 flex flex-col items-center justify-center"
      >
        <h2 class="text-white text-3xl">تغییر وضعیت سفارش</h2>
        <div
          class="flex items-center justify-center text-right space-x-7 w-full h-full"
        >
          <div class="flex items-center space-x-3">
            <InputSwitch v-model="checked"></InputSwitch>
            <h3 class="text-lg text-mainRed">در حال پردازش</h3>
          </div>
          <div class="flex items-center space-x-3">
            <InputSwitch v-model="checked"></InputSwitch>
            <h3 class="text-lg text-mainRed">فرستاده شده</h3>
          </div>
          <div class="flex items-center space-x-3">
            <InputSwitch v-model="checked"></InputSwitch>
            <h3 class="text-lg text-mainRed">تحویل داده شده</h3>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhInfo } from "@phosphor-icons/vue";
const visible = ref(false);

const checked = ref(false);
</script>

<style scoped></style>
