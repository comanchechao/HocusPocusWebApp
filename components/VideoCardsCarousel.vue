<template>
  <div class="h-full w-screen px-5 lg:px-14">
    <swiper
      :breakpoints="{
        '480': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :slidesPerView="1"
      :spaceBetween="10"
      class="mySwiper w-full"
    >
      <swiper-slide v-for="course in courses" :key="course.id"
        ><LazyVideoCard :course="course"
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { Autoplay } from "swiper/modules";

import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";

export default {
  props: ["courses"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
