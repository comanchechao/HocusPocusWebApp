<template>
  <div
    class="w-rem38 h-auto rounded-md shadow-lg transition flex-col items-center shadow-mainYellow"
  >
    <div class="h-52 w-full bg-white rounded-t-md"></div>
    <div
      class="h-auto space-y-6 text-right w-full bg-white rounded-b-md flex items-end flex-col p-4"
    >
      <h2
        class="text-xl flex items-center justify-center space-x-3 text-mainBrown border-b-4 border-b-mainYellow rounded-md pb-2"
      >
        <span> آموزش تکنیک عبور اجسام از کش پک آموزشی شعبده بازی </span>
        <PhMagicWand :size="25" weight="fill" />
      </h2>
      <h3 class="text-sm">
        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است،
      </h3>
      <div class="w-full flex items-center justify-around px-3">
        <h3
          class="text-lg border-2 border-dashed border-mainOrange rounded-md px-8 text-mainBrown flex items-center justify-center space-x-2"
        >
          <span class="text-xs text-mainOrange">تومان</span>
          <span>599000</span>
          <PhMoney :size="20" weight="fill" />
        </h3>
        <NuxtLink to="/learn/productDetail">
          <button
            class="px-8 py-2 shadow-md shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out bg-mainBrown text-mainYellow hover:text-mainBrown hover:bg-mainYellow rounded-md"
          >
            <span> جزئیات بیشتر </span> <PhInfo :size="20" />
          </button>
        </NuxtLink>
      </div>
      <NuxtLink class="self-center my-5" to="/learn/productDetail">
        <button
          class="px-8 py-2 shadow-md shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
        >
          <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import {
  PhInfo,
  PhShoppingBagOpen,
  PhMagicWand,
  PhMoney,
} from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
