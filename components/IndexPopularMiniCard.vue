<template>
  <div
    class="h-full w-full bg-mainYellow space-y-4 flex flex-col items-end justify-end p-5"
  >
    <h2 class="text-darkPurple font-bold text-center text-md lg:text-xl flex">
      <span> مجموعه آموزشی برای شروع </span>
    </h2>
    <h3
      class="text-xl border-2 border-dashed border-darkPurple rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
    >
      <span class="text-xs text-darkPurple">تومان</span>
      <span>599,000</span>
      <PhMoney :size="34" weight="fill" />
    </h3>
    <button
      class="w-full justify-center mt-3 py-2 shadow-md bg-mainYellow shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
    >
      <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
    </button>
  </div>
</template>
<script setup>
import { PhMoney, PhShoppingBagOpen } from "@phosphor-icons/vue";
</script>
