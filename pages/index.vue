<template>
  <div class="w-screen h-auto bg-darkPurple flex flex-col items-center">
    <Navbar></Navbar>
    <div
      ref="container"
      class="lg:h-screen container h-carousel w-screen flex items-center pt-7 justify-center bg-darkPurple"
    >
      <img
        ref="image"
        src="../assets/images/Pump.webp"
        class="w-44 image object-contain opacity-80"
        alt=""
      />
      <!-- <div
        class="w-1/2 h-dialog lg:flex items-center justify-center py-3 px-14 hidden"
      >
        <div
          class="transition h-full w-full duration-150 ease-in-out border-2 cursor-pointer border-mainViolet rounded-md shadow-xl shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
        ></div>
      </div> -->
      <div class="w-full h-auto flex flex-col items-center justify-center">
        <h1
          class="transition flex duration-150 my-7 ease-in-out text-2xl text-center border-mainViolet drop-shadow-sm rounded-sm text-mainRed"
        >
          <PhMagicWand />
          <span> مجیک شاپِ </span>
        </h1>
        <h1
          class="transition w-full capitalize HocusPocus duration-150 ease-in-out text-center text-white"
        >
          HOCUS POCUS
        </h1>
      </div>
    </div>
    <div class="h-auto w-full bg-darkPurple flex flex-col items-center">
      <div class="h-24 w-screen bg-mainRed flex items-center justify-center">
        <h2 class="text-darkPurple text-3xl flex">
          <PhCards class="mr-3" /> <span> جدیدترین کارت ها </span>
        </h2>
      </div>
      <div class="w-screen px-10 flex items-center justify-center space-x-14">
        <Card /> <Card class="hidden lg:flex" />
        <Card class="hidden lg:flex" />
        <Card class="hidden lg:flex" />
      </div>

      <img
        src="../assets/images/MagicDivider.webp"
        class="w-full px-5 lg:px-36 object-contain"
        alt=""
      />
    </div>
    <div
      class="lg:h-full h-auto w-full bg-darkPurple flex flex-col items-center my-32 lg:px-28"
    >
      <h2 class="text-6xl text-mainRed neonText my-14 lg:my-0">کشف کن</h2>

      <div
        class="flex items-center w-full h-full lg:flex-row flex-col px-7 lg:px-0 space-y-14"
      >
        <div
          class="lg:w-1/2 w-full h-full lg:h-screen flex items-center justify-center lg:py-16 lg:px-28"
        >
          <div
            class="h-full w-auto lg:w-full bg-mainYellow transform rounded-3xl p-5 cursor-pointer lg:translate-y-80"
          >
            <img
              src="../assets/images/Cardistry.webp"
              class="w-full h-dialog lg:h-full object-contain opacity-100 transform backdrop-brightness-90 p-10 rounded-3xl backdrop-blur-3xl"
              alt=""
            />
          </div>
        </div>
        <div
          class="lg:w-1/2 w-full h-full lg:h-screen flex items-center justify-center lg:py-16 lg:px-32"
        >
          <div
            class="h-full w-auto lg:w-full bg-mainPurple rounded-3xl p-5 cursor-pointer"
          >
            <img
              src="../assets/images/Dali.webp"
              class="w-full h-dialog lg:h-full object-contain opacity-100 backdrop-blur-3xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import Card from "../components/Card.vue";
import { PhMagicWand, PhCards } from "@phosphor-icons/vue";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
const products = ref();

const container = ref(null);
const image = ref(null);

onMounted(() => {
  const TL = gsap.timeline();
  TL.to(image.value, {
    duration: 66,
    motionPath: {
      path: [
        { x: 200, y: -110 },
        { x: 1000, y: -100 },
        { x: 1300, y: -110 },
        { x: 1400, y: -100 },

        { x: 1300, y: 500 },
        { x: 1000, y: 600 },
        { x: 200, y: 500 },

        { x: 0, y: 100 },
      ],
      ease: "power1.inOut",
      autoRotate: true,
    },
    repeat: -1,
  });
  TL.to(image.value, {
    opacity: 0,
    duration: 2,
  });
  TL.to(image.value, {
    opacity: 0.7,
    duration: 2,
  });
});
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style>
@font-face {
  font-family: "Hocus";
  src: url("../assets/fonts/Slagless.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}

.HocusPocus {
  line-height: 3cm;
  font-size: 13rem;
  font-family: "Hocus";
  text-shadow: 0 0 1px #f72585, 0 0 4px #f72585, 0 0 10px #f72585,
    0 0 20px #f72585;
}

.neonText {
  color: #fff;
  text-shadow: 0 0 1px #f72585, 0 0 4px #f72585, 0 0 10px #f72585,
    0 0 20px #f72585;
}
.container {
  position: relative;
  width: 100vw;
}

.image {
  position: absolute;
  left: 0;
}
@media only screen and (max-width: 480px) {
  .HocusPocus {
    font-size: 7rem;
    font-family: "Hocus";
    text-shadow: 0 0 1px #f72585, 0 0 4px #f72585, 0 0 10px #f72585,
      0 0 20px #f72585;
  }
}
@media only screen and (max-width: 768px) {
  .HocusPocus {
    font-size: 7rem;
    font-family: "Hocus";
    text-shadow: 0 0 1px #f72585, 0 0 4px #f72585, 0 0 10px #f72585,
      0 0 20px #f72585;
  }
}
</style>
