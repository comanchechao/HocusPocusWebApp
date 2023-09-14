<template>
  <div
    class="w-full h-20 py-5 grid grid-cols-4 place-items-center border-b border-mainRed"
  >
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
    </div>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
    </div>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
    </div>
    <h3 class="text-darkPurple text-center px-5">
      Joker and the Thief: Blood Red Edition Playing Cards
    </h3>
  </div>
</template>
<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>
