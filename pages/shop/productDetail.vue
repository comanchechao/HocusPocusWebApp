<template>
  <div>
    <Navbar />
    <div
      class="h-auto w-screen bg-darkPurple flex-col flex items-center px-32 py-16"
    >
      <div class="flex items-center w-full justify-end space-x-4">
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center underline cursor-pointer"
        >
          <span> Joker and the Thief: Blood Red Edition Playing Cards </span>
        </h2>
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> کارت ها </span>
        </h2>
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2
          class="text-mainRed text-lg flex space-x-3 items-center cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />
          <span> خونه </span>
        </h2>
      </div>
      <div class="w-full h-full flex items-center my-6 space-x-5">
        <div
          class="w-1/2 h-full flex flex-col items-end space-y-6 justify-start"
        >
          <h1
            class="text-3xl text-mainRed font-semibold italic p-2 rounded-md bg-white text-right"
          >
            Joker and the Thief : Blood Red
            <span class="text-darkPurple not-italic font-thin">کارت بازی</span>
            Edition Playing Cards
          </h1>
          <Rating
            class="bg-white p-2 rounded-md"
            v-model="value"
            :cancel="false"
          />
          <div
            class="w-full h-full bg-white rounded-md flex flex-col items-end justify-center p-7"
          >
            <h1 class="text-2xl font-bold text-darkPurple">توضیحات</h1>
            <h1 class="text-darkPurple text-right text-xl">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
            </h1>
          </div>
        </div>
        <div class="w-1/2 h-full flex items-center justify-center">
          <ImageGallery />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PhCaretLeft } from "@phosphor-icons/vue";

import { ref } from "vue";

const value = ref(null);
</script>

<style>
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: #f72585;
}
.p-rating .p-rating-item .p-rating-icon.p-icon {
  width: 1.7rem;
  height: 1.7rem;
}
</style>
