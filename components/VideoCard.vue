<template>
  <div
    class="lg:w-rem38 w-full h-auto lg:h-rem33 rounded-md shadow-lg transition flex-col items-center"
  >
    <video
      controls
      class="lg:h-2/4 h-96 w-full bg-gray-900 flex items-center rounded-t-md"
    >
      <source
        type="video/mp4"
        src="../assets/luffy_sing_a_new_song_at_wano_with_arrival_of_jimbei_GDgl4g1pM5o_133.mp4"
      />
    </video>
    <div
      class="lg:h-2/4 h-auto space-y-6 text-right w-full bg-white rounded-b-md flex items-end flex-col p-4"
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
      <div
        class="w-full h-auto flex lg:flex-row flex-col items-center space-y-7 lg:space-y-0 justify-center lg:justify-around px-3"
      >
        <h3
          class="text-4xl border-2 border-dashed border-mainOrange rounded-md py-2 px-8 text-mainBrown flex items-center justify-center space-x-2"
        >
          <span class="text-xs text-mainOrange">تومان</span>
          <span>599,000</span>
          <PhMoney :size="34" weight="fill" />
        </h3>
        <div class="flex items-center space-y-4 flex-col">
          <NuxtLink to="/learn/productDetail">
            <button
              class="w-44 justify-center py-2 shadow-md shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
            >
              <span> جزئیات بیشتر </span> <PhInfo :size="20" />
            </button>
          </NuxtLink>
          <button
            class="w-44 justify-center py-2 shadow-md bg-mainYellow shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
          >
            <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
          </button>
        </div>
      </div>
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
