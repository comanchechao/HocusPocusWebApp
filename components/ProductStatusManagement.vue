<template>
  <div
    class="w-full h-rem28 overflow-y-scroll bg-white flex flex-col rounded-md text-xs lg:text-lg"
  >
    <div
      class="w-full h-96 py-5 grid grid-cols-4 place-items-center border-b border-Indigo-600"
    >
      <h3 class="text-mainPurple">محصولات تخفیف دار</h3>
      <h3 class="text-mainPurple">محصولات پرطرفدار</h3>
      <h3 class="text-mainPurple">محصولات منتخب هفته</h3>
      <h3 class="text-mainPurple">نام کالا</h3>
    </div>
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
    <LazyProductStatusCard />
  </div>
</template>

<script setup></script>

<style></style>
