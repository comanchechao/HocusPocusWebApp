<template>
  <div
    class="h-auto w-full border-mainRed border-t py-3 place-items-center grid grid-cols-4"
  >
    <h3 class="text-darkPurple md:text-md lg:text-base text-sm">55</h3>
    <h3 class="text-darkPurple md:text-md lg:text-base text-xs">
      دوشنبه 24 تیر 1402
    </h3>
    <h3 class="text-darkPurple md:text-md lg:text-base text-xs text-center">
      دوشنبه 24 تیر 1402
    </h3>
    <h3 class="text-darkPurple md:text-sm lg:text-sm text-xs text-center px-2">
      {{ record.name }}
    </h3>
  </div>
</template>

<script setup>
import { PhTrash } from "@phosphor-icons/vue";
const props = defineProps(["record"]);
</script>

<style lang="scss" scoped></style>
