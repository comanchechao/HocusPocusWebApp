<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><LazyCard /></swiper-slide
    ><swiper-slide><LazyCard /></swiper-slide>
    <swiper-slide><LazyCard /></swiper-slide>
    <swiper-slide><LazyCard /></swiper-slide
    ><swiper-slide><LazyCard /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default {
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
  width: 300px;
  height: 450px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 22px;
  font-weight: bold;
}
</style>
