<template>
  <button
    label="Show"
    @click="visible = true"
    class="lg:text-xl justify-center text-lg flex items-center space-x-2 w-full transition duration-150 ease-in-out border-b-2 border-mainYellow hover:border-mainRed rounded-lg shadow-mainOrange shadow-md border hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
  >
    <span> فیلترها </span>
    <PhFadersHorizontal :size="30" weight="fill" />
  </button>

  <Dialog
    :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
    v-model:visible="visible"
    modal
    :style="{ width: 'auto', backgroundColor: '#150531', height: 'auto' }"
    dismissableMask
    :contentStyle="{ backgroundColor: '#150531' }"
  >
    <div
      class="w-full h-full justify-center flex items-center lg:p-3 p-2 flex-col space-y-4"
    >
      <div class="grid lg:grid-cols-2 place-items-center gap-4 grid-cols-1">
        <LazyFilters></LazyFilters>
        <button
          label="Show"
          @click="formSubmit()"
          class="text-xl flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
        >
          <ProgressSpinner
            v-if="loading"
            style="width: 30px; height: 30px"
            strokeWidth="8"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
          <span v-if="!loading"> تایید </span>
          <PhSignature v-if="!loading" :size="25" />
        </button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";
import { PhFadersHorizontal } from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
const visible = ref(false);
const loading = ref(false);
// register user store

// sign up information

// signup state
</script>
<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
</style>
