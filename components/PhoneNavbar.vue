<template>
  <div class="">
    <Sidebar position="left" v-model:visible="visible"> </Sidebar>
    <button
      class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-3 py-1 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
      @click="visible = true"
    >
      <PhList :size="30" />
    </button>
  </div>
</template>

<script setup>
import { PhList } from "@phosphor-icons/vue";
import { ref } from "vue";

const visible = ref(false);
</script>
