<template>
  <div class="flex justify-center">
    <div
      @click="visible = true"
      class="w-72 h-32 bg-white transition text-darkPurple ease-in duration-200 hover:bg-mainYellow rounded-xl cursor-pointer shadow-lg shadow-mainRed flex p-4 items-center justify-around"
    >
      <PhChartPieSlice class="text-mainRed" :size="60" weight="fill" />
      <div class="flex flex-col items-center space-y-3">
        <h3 class="text-mainPurple text-md">کالاهای موجود</h3>
        <h1 class="text-darkPurple text-5xl font-bold">{{ productsCount }}</h1>
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
          کالاهای موجود در انبار
        </h2>
        <div
          class="w-full h-full bg-white rounded-md overflow-y-scroll lg:px-11 md:px-14"
        >
          <div
            class="h-10 w-full border-b border-mainPurple place-items-center grid grid-cols-5"
          >
            <h3 class="text-mainPurple text-sm">ویرایش</h3>

            <h3 class="text-mainPurple text-sm">کد کالا</h3>
            <h3 class="text-mainPurple text-sm">تعداد کالا</h3>
            <h3 class="text-mainPurple text-sm">تاریخ ورود</h3>
            <h3 class="text-mainPurple text-sm">نام کالا</h3>
          </div>

          <LazyAvailableProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhChartPieSlice } from "@phosphor-icons/vue";
import { useMainManagement } from "~/stores/managementStore";
import { storeToRefs } from "pinia";

const visible = ref(false);
const props = defineProps(["products"]);

// register mainManagement store

const mainManagement = useMainManagement();

const { productsCount } = storeToRefs(mainManagement);
</script>

<style scoped></style>
