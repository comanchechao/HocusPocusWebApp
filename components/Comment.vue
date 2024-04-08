<template>
  <div
    class="h-full w-full my-6 p-3 flex flex-col items-end bg-gray-100 rounded-md"
  >
    <div class="flex items-center space-x-6">
      <h2 class="text-xl text-mainBrown">{{ comment.username }}</h2>
      <div class="h-16 w-16 rounded-full bg-gray-500"></div>
    </div>
    <div
      class="p-3 text-right flex flex-col items-end space-y-3 justify-center"
    >
      <h3>
        {{ comment.comment }}
      </h3>
      <Rating
        class="rounded-sm"
        v-model="props.comment.rating"
        :cancel="false"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["comment"]);

const value = ref(null);
</script>
<style lang="scss" scoped></style>
