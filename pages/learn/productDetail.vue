<template>
  <div class="h-full w-screen bg-mainBrown">
    <LazyNavbar />
    <div
      class="h-auto w-screen bg-mainBrown flex-col flex items-center px-7 lg:px-32 py-16"
    >
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end space-x-2 lg:space-x-4"
      >
        <h2
          class="text-mainYellow flex space-x-3 items-center underline cursor-pointer"
        >
          <span> آموزش تکنیک عبور اجسام از کش پک آموزشی شعبده بازی </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> فیلم ها </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> آموزش </span>
        </h2>
      </div>
    </div>
    <div
      class="h-auto justify-center pb-6 w-full flex flex-col items-center px-7 lg:px-32"
    >
      <div
        class="w-full h-dialog rounded-md shadow-lg shadow-mainYellow bg-white"
      >
        <video
          controls
          class="h-full w-full bg-gray-900 flex items-center rounded-t-md"
        >
          <source
            type="video/mp4"
            src="../../assets/luffy_sing_a_new_song_at_wano_with_arrival_of_jimbei_GDgl4g1pM5o_133.mp4"
          />
        </video>
      </div>

      <div class="h-full w-full flex flex-col my-12 items-end space-y-7">
        <h1
          class="text-4xl text-gray-100 flex items-center justify-center space-x-3"
        >
          <span> آموزش تکنیک عبور اجسام از کش پک آموزشی شعبده بازی </span>
          <PhMagicWand class="text-mainYellow" :size="55" weight="fill" />
        </h1>
        <div class="w-full h-auto flex items-start space-x-14 justify-around">
          <div
            class="h-44 rounded-md bg-gray-100 w-96 flex flex-col p-3 items-center justify-around"
          >
            <h3 class="text-sm">قیمت پک آموزشی</h3>
            <div
              class="flex items-center space-x-3 shadow-lg shadow-mainOrange py-2 px-3 rounded-md"
            >
              <h4 class="text-mainBrown">تومان</h4>
              <h1 class="lg:text-3xl text-2xl text-mainRed Text font-bold">
                221,000
              </h1>
            </div>
            <button
              class="px-8 py-2 shadow-md shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out bg-mainBrown text-mainYellow hover:text-mainBrown hover:bg-mainYellow rounded-md"
            >
              <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
            </button>
          </div>
          <div
            class="h-auto rounded-md w-full text-right flex-col items-end flex justify-around"
          >
            <h2
              class="text-mainBrown text-2xl bg-gray-100 p-3 rounded-md my-3 font-bold"
            >
              توضیحات کالا
            </h2>
            <h3 class="text-sm bg-gray-100 p-3 rounded-md my-3">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              نیاز شامل حروفچینی دستاوردهای اصل میباشدورم ایپسوم متن ساختگی با
              تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
              است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد، نیاز شامل حروفچینی
              دستاوردهای اصل میباشدورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
              فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد، نیاز شامل حروفچینی دستاوردهای اصل میباشد
            </h3>
          </div>
        </div>
      </div>
      <div
        class="h-full w-full flex flex-col items-end my-12 justify-center space-y-7"
      >
        <div class="w-full h-full rounded-md">
          <Comments />
        </div>
      </div>
    </div>
    <LazyFooter />
  </div>
</template>

<script setup>
import {
  PhCaretLeft,
  PhMagicWand,
  PhShoppingBagOpen,
  PhUserList,
} from "@phosphor-icons/vue";
</script>

<style lang="scss" scoped></style>
