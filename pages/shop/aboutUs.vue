<template>
  <div class="h-full w-full bg-darkPurple">
    <LazyNavbar />
    <div class="h-auto w-full lg:px-44 px-6 my-16">
      <img
        src="../../assets/images/aboutUsBg.webp"
        class="w-full object-contain"
        alt=""
      />
    </div>
    <div
      class="h-full w-full md:px-24 px-7 lg:px-44 flex items-center flex-col mb-48"
    >
      <h2
        class="text-mainRed self-end border-b-8 rounded-2xl border-mainYellow pb-5 my-14 text-center text-2xl lg:text-4xl flex"
      >
        <PhMagicWand :size="45" weight="fill" class="mr-3" />
        <span> ما رو بیشتر بشناسید </span>
      </h2>

      <h2
        class="text-mainRed self-end border-b-8 rounded-2xl border-mainYellow pb-2 my-14 text-center text-xl lg:text-2xl flex"
      >
        <PhBookOpenText :size="35" weight="fill" class="mr-3" />
        <span> تاریخچه</span>
      </h2>

      <div class="w-full h-dialog bg-white rounded-md"></div>

      <h2
        class="text-mainRed self-end border-b-8 rounded-2xl border-mainYellow pb-2 my-14 text-center text-lg lg:text-2xl flex"
      >
        <PhBookOpenText :size="35" weight="fill" class="mr-3" />
        <span>
          پرسنل فروشگاه محصولات شعبده بازی و وبسایت آموزشی هوکوس پوکوس</span
        >
      </h2>
      <div class="w-full h-auto flex items-center justify-around">
        <div class="flex flex-col items-center justify-center space-y-4">
          <div class="h-44 w-44 rounded-full bg-mainYellow"></div>
          <h2 class="text-mainRed text-center text-xl lg:text-2xl flex">
            <span> امیر فاطمی</span>
          </h2>
          <h2 class="text-mainRed text-center text-sm lg:text-md flex">
            <span> موسس و بنیانگذار</span>
          </h2>
        </div>
        <div class="flex flex-col items-center justify-center space-y-4">
          <div class="h-44 w-44 rounded-full bg-mainYellow"></div>
          <h2 class="text-mainRed text-center text-xl lg:text-2xl flex">
            <span> فرخ فاطمی</span>
          </h2>
          <h2 class="text-mainRed text-center text-sm lg:text-md flex">
            <span> موسس و بنیانگذار</span>
          </h2>
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>
<script setup>
import { PhMagicWand, PhBookOpenText } from "@phosphor-icons/vue";
</script>
