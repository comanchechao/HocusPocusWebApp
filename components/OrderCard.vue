<template>
  <div
    class="w-full h-20 py-5 grid grid-cols-4 place-items-center border-b border-mainRed"
  >
    <h3 class="text-darkPurple">1544455</h3>
    <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
    <h3 class="text-darkPurple flex items-center space-x-2">
      <slot name="Status"></slot>
      <LazyChangeStatusDialog />
    </h3>
    <h3 class="text-darkPurple text-center px-5">
      Joker and the Thief: Blood Red Edition Playing Cards
    </h3>
  </div>
</template>
