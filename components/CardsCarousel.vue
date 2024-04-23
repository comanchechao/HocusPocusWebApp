<template>
  <div class="h-full w-screen px-5 lg:px-14">
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
        '1095': {
          slidesPerView: 4,
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
      <swiper-slide v-for="product in products.slice(0, 6)" :key="product"
        ><LazyCard :product="product"
      /></swiper-slide>
      <!-- <swiper-slide><LazyCard /></swiper-slide>
      <swiper-slide><LazyCard /></swiper-slide>
      <swiper-slide><LazyCard /></swiper-slide> -->
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
import { useProductStore } from "../stores/productStore";
import { storeToRefs } from "pinia";
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

const productStore = useProductStore();
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;

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
