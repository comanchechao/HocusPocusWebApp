<template>
  <div class="h-full w-screen px-5">
    <swiper
      :breakpoints="{
        '640': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :slidesPerView="1"
      class="mySwiper w-full"
    >
      <!-- <swiper-slide v-for="product in products" :key="product"
          ><LazyCard :product="product"
        /></swiper-slide> -->
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
      <swiper-slide><LazyInstagramCard /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
export default {
  props: ["products"],
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
// register product store
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
