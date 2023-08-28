<template>
  <div class="w-screen h-auto bg-darkPurple flex flex-col items-center">
    <LazyNavbar></LazyNavbar>
    <div
      ref="container"
      class="lg:h-full container h-carousel w-full flex flex-col items-center bg pt-7 justify-center"
    >
      <!-- <img
        ref="image"
        src="../assets/images/Pump.webp"
        class="w-44 image object-contain opacity-80 Stat2"
        alt=""
      /> -->
      <!-- <div
        class="w-1/2 h-dialog lg:flex items-center justify-center py-3 px-14 hidden"
      >
        <div
          class="transition h-full w-full duration-150 ease-in-out border-2 cursor-pointer border-mainViolet rounded-md shadow-xl shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
        ></div>
      </div> -->
      <!-- <TestSwiper /> -->
      <div class="Store opacity-0">
        <h1
          class="transition flex space-x-2 duration-150 mt-7 ease-in-out text-2xl text-center border-mainViolet drop-shadow-sm rounded-sm text-mainRed"
        >
          <span> آنلاین شاپ و وبسایت آموزشی شعبده بازیِ </span>
          <PhMagicWand :size="35" weight="fill" />
        </h1>
      </div>
      <div
        class="w-full h-96 lg:h-screen flex flex-col items-center justify-center"
      >
        <div class="flex flex-col items-center justify-center px-48">
          <div class="flex items-center absolute justify-center w-full">
            <img
              src="../assets/images/HocusUp1.webp"
              class="object-contain absolute Up opacity-0"
              alt=""
            />
            <img
              src="../assets/images/HocusUp2.webp"
              class="object-contain absolute Up2 opacity-0"
              alt=""
            />
          </div>
          <div class="flex items-center absolute justify-center w-full">
            <img
              src="../assets/images/HocusDownP.webp"
              class="object-contain lg:w-full w-96 md:w-rem38 absolute P opacity-0"
              alt=""
            />
            <img
              src="../assets/images/HocusDownO.webp"
              class="object-contain lg:w-full w-96 md:w-rem38 absolute O opacity-0"
              alt=""
            />
            <img
              src="../assets/images/HocusDownC.webp"
              class="object-contain lg:w-full w-96 md:w-rem38 absolute C opacity-0"
              alt=""
            />
            <img
              src="../assets/images/HocusDownU.webp"
              class="object-contain lg:w-full w-96 md:w-rem38 absolute U opacity-0"
              alt=""
            />
            <img
              src="../assets/images/HocusDownS.webp"
              class="object-contain lg:w-full w-96 md:w-rem38 absolute S opacity-0"
              alt=""
            />
          </div>
        </div>
      </div>
      <!-- <img
        src="../assets/images/MagicshopDivider.webp"
        class="w-full px-8 lg:px-40 object-contain my-8"
        alt=""
      /> -->
    </div>
    <div class="h-full w-screen my-9 flex flex-col items-center">
      <img
        src="../assets/images/PumpkinMain1.webp"
        class="object-contain h-48 w-full lg:px-0 px-4"
        alt=""
      />
      <h2
        class="text-mainRed font-bold border-b-8 rounded-2xl border-mainYellow pb-5 my-14 text-center text-3xl lg:text-5xl flex"
      >
        <PhPackage weight="fill" class="mr-3" />
        <span> محصولات هوکوس پوکوس </span>
      </h2>
      <div
        class="h-dialog w-full flex items-center justify-between space-x-20 p-10 my-8"
      >
        <div class="w-1/2 h-full bg-mainYellow cursor-pointer"></div>
        <div class="w-1/2 h-full bg-mainPink cursor-pointer"></div>
      </div>
      <div
        class="w-full h-rem22 flex flex-col items-center justify-center space-y-3 bg-Amber-400"
      >
        <h2
          class="text-darkPurple border-b-8 rounded-2xl border-darkPurple pb-5 text-center text-3xl lg:text-3xl flex"
        >
          <PhGraduationCap :size="35" weight="fill" class="mr-3" />
          <span> شعبده باز تازه کارید؟ </span>
        </h2>
        <h2
          class="text-darkPurple rounded-lg text-center text-3xl lg:text-xl flex"
        >
          <span> این بخش مخصوص شماست</span>
        </h2>
        <NuxtLink to="/learn/learn">
          <button
            class="px-20 py-4 transition duration-300 ease-in hover:bg-mainYellow hover:text-darkPurple border-4 border-transparent hover:border-darkPurple bg-darkPurple flex items-center space-x-3 text-mainYellow text-2xl rounded-full"
          >
            <PhNotebook :size="35" weight="fill" class="mr-3" />
            <span>ورود به بخش آموزش هوکوس پوکوس </span>
          </button>
        </NuxtLink>
      </div>
      <div class="h-full w-full flex flex-col items-end px-5 lg:px-28 my-9">
        <h2
          class="text-mainRed border-b-8 rounded-2xl border-mainYellow pb-5 my-14 text-center text-3xl lg:text-3xl flex"
        >
          <PhGraduationCap :size="35" weight="fill" class="mr-3" />
          <span> جدیدترین آموزش ها </span>
        </h2>
        <LazyVideoCardsCarousel class="self-center" />
      </div>
      <div
        class="w-full h-rem22 flex flex-col items-center justify-center space-y-3 bg-mainPink"
      >
        <h2
          class="text-darkPurple border-b-8 rounded-2xl border-darkPurple pb-5 text-center text-3xl lg:text-3xl flex"
        >
          <PhShoppingBagOpen :size="37" weight="fill" class="mr-3" />
          <span> دنبال محصولات شعبده بازی میگردید؟ </span>
        </h2>
        <h2
          class="text-darkPurple rounded-lg text-center text-3xl lg:text-xl flex"
        >
          <span> این بخش مخصوص شماست</span>
        </h2>
        <NuxtLink to="/shop/shop">
          <button
            class="px-20 py-4 transition duration-300 ease-in hover:bg-mainPink hover:text-darkPurple border-4 border-transparent hover:border-darkPurple bg-darkPurple flex items-center space-x-3 text-mainPink text-2xl rounded-full"
          >
            <PhShoppingBag :size="35" weight="fill" class="mr-3" />
            <span>ورود به بخش خرید هوکوس پوکوس </span>
          </button>
        </NuxtLink>
      </div>
      <div class="h-full w-full flex flex-col items-end px-5 lg:px-28">
        <h2
          class="text-mainRed border-b-8 rounded-2xl border-mainPink pb-5 my-7 text-center text-3xl lg:text-3xl flex"
        >
          <PhCards :size="35" weight="fill" class="mr-3" />
          <span> جدیدترین محصولات </span>
        </h2>
        <LazyCardsCarousel class="self-center" />
      </div>
    </div>

    <div class="h-auto w-full bg-darkPurple flex flex-col items-center">
      <img
        src="../assets/images/PumpkinMain.webp"
        class="object-contain h-64 w-full lg:px-0 px-4"
        alt=""
      />

      <div class="h-44 w-screen flex items-center justify-center">
        <h2 class="text-mainRed text-center text-3xl lg:text-5xl flex">
          <PhCards weight="fill" class="mr-3" />
          <span> کارت های منتخب هفته </span>
        </h2>
      </div>
      <div class="w-screen px-32 flex items-center justify-center my-10">
        <LazyCardsSwiper /> <LazyCardsSwiper />
      </div>

      <img
        src="../assets/images/MagicDivider.webp"
        class="w-full px-5 lg:px-36 object-contain"
        alt=""
      />
    </div>
    <div class="w-full h-full my-14 flex flex-col">
      <div
        class="h-24 w-full bg-mainYellow items-center justify-between px-10 flex"
      >
        <button
          class="px-7 py-2 transition duration-300 ease-in hover:bg-mainYellow hover:text-darkPurple border-4 border-transparent hover:border-darkPurple bg-darkPurple flex items-center space-x-3 text-mainYellow text-2xl rounded-sm"
        >
          <PhInstagramLogo :size="40" weight="fill" class="mr-3" />
          <span>دنبال کن </span>
        </button>
        <h2 class="text-2xl flex items-center space-x-3">
          <span>تازه ترین ها در اینستاگرام </span>
          <PhInstagramLogo :size="35" weight="fill" class="mr-3" />
        </h2>
      </div>
      <div class="w-full flex items-center">
        <LazyInstagramCard /> <LazyInstagramCard />
        <LazyInstagramCard />
        <LazyInstagramCard />
        <LazyInstagramCard />
        <LazyInstagramCard />
      </div>
    </div>
    <LazyFooter></LazyFooter>
  </div>
</template>
<script setup>
import {
  PhMagicWand,
  PhCards,
  PhPackage,
  PhGraduationCap,
  PhNotebook,
  PhInstagramLogo,
  PhShoppingBagOpen,
  PhShoppingBag,
} from "@phosphor-icons/vue";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
const products = ref();

const container = ref(null);
const image = ref(null);

onMounted(() => {
  const TL = gsap.timeline();
  TL.to(".Store", { opacity: 1, delay: 1, duration: 0.5 });

  TL.to(".Up", { opacity: 1, duration: 1, delay: 0.5 });
  TL.fromTo(".Up2", { opacity: 0, duration: 1 }, { opacity: 1, duration: 1 });

  TL.to(".P", { opacity: 1, duration: 0.5 });
  TL.to(".O", { opacity: 1, duration: 0.5 });
  TL.to(".C", { opacity: 1, duration: 0.5 });
  TL.to(".U", { opacity: 1, duration: 0.5 });
  TL.to(".S", { opacity: 1, duration: 0.5 });

  // TL.from(image.value, {
  //   opacity: 0,
  //   duration: 1,
  // });
  // TL.to(image.value, {
  //   duration: 66,
  //   motionPath: {
  //     path: [
  //       { x: 200, y: -110 },
  //       { x: 1000, y: -100 },
  //       { x: 1300, y: -110 },
  //       { x: 1400, y: -100 },

  //       { x: 1300, y: 500 },
  //       { x: 1000, y: 600 },
  //       { x: 200, y: 500 },

  //       { x: 0, y: 100 },
  //     ],
  //     ease: "power1.inOut",
  //     autoRotate: true,
  //   },
  //   repeat: -1,
  // });
  // TL.to(image.value, {
  //   opacity: 0,
  //   duration: 2,
  // });
  // TL.to(image.value, {
  //   opacity: 0.7,
  //   duration: 2,
  // });
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
  line-height: 5cm;

  font-size: 14rem;
  font-family: "Hocus";
  text-shadow: 0 0 1px #f36b31, 0 0 4px #f36b31, 0 0 10px #f36b31,
    0 0 20px #f36b31;
}

.neonText {
  color: #fff;
  text-shadow: 0 0 1px #f36b31, 0 0 4px #f36b31, 0 0 10px #f36b31,
    0 0 20px #f36b31;
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
    line-height: 3cm;

    font-size: 7rem;
    font-family: "Hocus";
    text-shadow: 0 0 1px #f36b31, 0 0 4px #f36b31, 0 0 10px #f36b31,
      0 0 20px #f36b31;
  }
}
@media only screen and (max-width: 768px) {
  .HocusPocus {
    line-height: 3cm;

    font-size: 7rem;
    font-family: "Hocus";
    text-shadow: 0 0 1px #f36b31, 0 0 4px #f36b31, 0 0 10px #f36b31,
      0 0 20px #f36b31;
  }
}
</style>
