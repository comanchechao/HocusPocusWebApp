<template>
  <div
    class="w-rem38 h-72 rounded-md shadow-lg transition flex-col items-center shadow-mainYellow"
  >
    <div class="h-2/3 w-full bg-white rounded-t-md"></div>
    <div
      class="h-auto space-y-3 text-right w-full bg-white rounded-b-md flex items-end flex-col p-4"
    >
      <h2
        class="text-xl text-mainBrown border-b-4 border-b-mainYellow rounded-md pb-2"
      >
        آموزش تکنیک عبور اجسام از کش
      </h2>
      <h3 class="text-sm">
        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است،
      </h3>
      <NuxtLink to="/learn/productDetail">
        <button
          class="px-8 py-2 shadow-md shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out bg-mainBrown text-mainOrange hover:text-mainBrown hover:bg-mainOrange rounded-md"
        >
          <span> جزئیات بیشتر </span> <PhInfo :size="20" />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { PhInfo } from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
