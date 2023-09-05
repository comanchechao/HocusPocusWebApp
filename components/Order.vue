<template>
  <div
    class="lg:h-32 h-full w-full flex lg:flex-row flex-col lg:space-y-0 space-y-4 items-center justify-around lg:space-x-10"
  >
    <div
      class="flex items-center flex-col justify-center space-y-3 w-full h-full"
    >
      <div
        class="w-full h-full hidden lg:grid grid-cols-4 place-items-center border-b border-mainRed"
      >
        <h2 class="text-mainPurple text-lg font-bold">کد سفارش</h2>
        <h2 class="text-mainPurple text-lg font-bold">تاریخ خرید</h2>
        <h2 class="text-mainPurple text-lg font-bold">تعداد</h2>
        <h2 class="text-mainPurple text-lg font-bold">نام کالا</h2>
      </div>
      <div
        class="w-full h-full flex flex-col-reverse items-center lg:grid lg:grid-cols-4 lg:place-items-center text-center text-darkPurple"
      >
        <div
          class="flex items-center lg:justify-center justify-end space-x-2 w-full"
        >
          <h2 class="text-lg font-bold">8324243</h2>
          <h2 class="text-md lg:hidden">کد سفارش</h2>
        </div>
        <div
          class="flex items-center lg:justify-center justify-end space-x-2 w-full"
        >
          <h2 class="text-lg font-bold">دوشنبه 19 تیر 1402</h2>
          <h2 class="text-md lg:hidden">تاریخ خرید</h2>
        </div>
        <div
          class="flex items-center lg:justify-center justify-end space-x-2 w-full"
        >
          <h2 class="text-lg font-bold">4</h2>
          <h2 class="text-md lg:hidden">تعداد کالا</h2>
        </div>
        <div
          class="flex items-center lg:justify-center justify-end space-x-2 w-full"
        >
          <h2 class="text-sm font-bold">
            Bicycle: Batman Edition Playing Cards
          </h2>
          <h2 class="text-md lg:hidden">نام کالا</h2>
        </div>
      </div>
    </div>
    <div class="lg:h-full h-auto w-24 lg:w-auto bg-white flex items-center">
      <img
        src="../assets/images/Psychonauts.webp"
        class="object-contain h-36 lg:h-full w-full"
        alt=""
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
