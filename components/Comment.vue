<template>
  <div class="flex flex-col items-center p-10 h-full w-full">
    <div
      class="h-full w-full p-5 flex flex-col items-end bg-gray-100 shadow-md shadow-mainYellow"
    >
      <div class="flex items-center space-x-6">
        <h2 class="text-2xl text-mainBrown">نام کاربر</h2>
        <div class="h-16 w-16 rounded-full bg-gray-500"></div>
      </div>
      <div
        class="p-10 text-right flex flex-col items-end space-y-9 justify-center"
      >
        <h3>
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای
        </h3>
        <Rating class="rounded-sm" v-model="value" :cancel="false" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const value = ref(null);
</script>
<style lang="scss" scoped></style>
