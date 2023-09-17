<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper h-full"
  >
    <!-- <swiper-slide v-for="product in products" :key="product"
      ><LazyCard :product="product"
    /></swiper-slide> -->
    <swiper-slide><LazyCard /></swiper-slide>
    <swiper-slide><LazyCard /></swiper-slide>
    <swiper-slide><LazyCard /></swiper-slide>
    <swiper-slide><LazyCard /></swiper-slide>
    <swiper-slide><LazyCard /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { useProductStore } from "../stores/productStore";
import { storeToRefs } from "pinia";
// register product store

export default {
  props: ["products"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 340px;
  height: 660px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 22px;
}
</style>
