<template>
  <div class="flex justify-center">
    <div
      @click="visible = true"
      class="w-72 h-32 bg-white transition text-darkPurple ease-in duration-200 hover:bg-mainYellow rounded-xl cursor-pointer shadow-lg shadow-mainRed flex p-4 items-center justify-around"
    >
      <PhMoney class="text-mainRed" :size="70" weight="fill" />
      <div class="flex flex-col items-center space-y-3">
        <h3 class="text-mainPurple text-sm">تراکنش ها</h3>
        <h1 class="text-darkPurple text-5xl font-bold">{{ records.length }}</h1>
      </div>
    </div>
    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '60vw', backgroundColor: '#150531', height: '80vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-3 space-y-10 flex flex-col items-center justify-center"
      >
        <h2
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-3 text-3xl"
        >
          لیست تراکنش ها
        </h2>
        <div
          class="w-full h-full bg-white rounded-md overflow-y-scroll lg:px-11 md:px-14"
        >
          <div
            class="h-10 w-full border-b border-mainPurple place-items-center grid grid-cols-4"
          >
            <h3 class="text-mainPurple text-sm">شماره سفارش</h3>
            <h3 class="text-mainPurple text-sm">وضعیت فروش</h3>
            <h3 class="text-mainPurple text-sm">تاریخ ثبت</h3>
            <h3 class="text-mainPurple text-sm">نام خریدار</h3>
          </div>

          <LazySoldCard
            v-for="record in records"
            :key="record.id"
            :record="record"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhMoney } from "@phosphor-icons/vue";
const props = defineProps(["records"]);
const visible = ref(false);
</script>

<style scoped></style>
