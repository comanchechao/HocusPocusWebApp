<template>
  <div
    class="w-screen h-auto overflow-hidden from-mainPurple to-darkPurple bg-gradient-to-t"
  >
    <LazyNavbar />

    <div
      class="w-full h-screen absolute LoadingDiv bg-darkPurple flex items-center justify-center"
    >
      <ProgressSpinner
        class="bg-darkPurple"
        style="width: 80px; height: 80px"
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
    <div
      class="h-auto pt-44 w-full relative flex items-center justify-center lg:px-44 px-6 my-16"
    >
      <img
        src="../../assets/images/AboutUsH.webp"
        class="h-dialog object-contain H absolute"
        alt=""
      />
      <img
        src="../../assets/images/AboutUsHand.webp"
        class="h-dialog object-contain P Hand absolute"
        alt=""
      />
      <img
        src="../../assets/images/AboutUsP.webp"
        class="h-dialog object-contain P absolute"
        alt=""
      />
    </div>
    <div
      class="h-full w-full md:px-24 px-7 mt-24 lg:px-44 flex items-center flex-col mb-20"
    >
      <h2
        class="text-mainRed self-end border-b-8 rounded-2xl border-mainYellow pb-5 my-14 text-center text-2xl lg:text-4xl flex"
      >
        <PhMagicWand :size="45" weight="fill" class="mr-3" />
        <span> ما رو بیشتر بشناسید </span>
      </h2>

      <h2
        class="text-mainRed self-end border-b-8 rounded-2xl border-mainYellow pb-2 my-14 text-center text-xl lg:text-2xl flex"
      >
        <PhBookOpenText :size="35" weight="fill" class="mr-3" />
        <span> تاریخچه</span>
      </h2>

      <div class="w-full h-dialog bg-white rounded-md"></div>

      <h2
        class="text-mainRed self-end border-b-8 rounded-2xl border-mainYellow pb-2 my-14 text-center text-lg lg:text-2xl flex"
      >
        <PhBookOpenText :size="35" weight="fill" class="mr-3" />
        <span>
          پرسنل فروشگاه محصولات شعبده بازی و وبسایت آموزشی هوکوس پوکوس</span
        >
      </h2>
      <div
        class="w-full h-auto flex items-center md:flex-row lg:flex-row flex-col lg:space-y-0 md:space-y-0 space-y-9 justify-around"
      >
        <div class="flex flex-col items-center justify-center space-y-4">
          <div class="h-44 w-44 rounded-full bg-mainYellow"></div>
          <h2 class="text-mainRed text-center text-xl lg:text-2xl flex">
            <span> امیر فاطمی</span>
          </h2>
          <h2 class="text-mainRed text-center text-sm lg:text-md flex">
            <span> موسس و بنیانگذار</span>
          </h2>
        </div>
        <div class="flex flex-col items-center justify-center space-y-4">
          <div class="h-44 w-44 rounded-full bg-mainYellow"></div>
          <h2 class="text-mainRed text-center text-xl lg:text-2xl flex">
            <span> فرخ فاطمی</span>
          </h2>
          <h2 class="text-mainRed text-center text-sm lg:text-md flex">
            <span> موسس و بنیانگذار</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-start w-full flex-col">
      <h1 class="text-mainPink text-7xl">راه های</h1>
      <NuxtLink to="/shop/contactUs">
        <div
          class="px-24 cursor-pointer duration-200 ease-in-out text-mainRed hover:text-darkPurple transition hover:bg-mainYellow py-10 rounded-md border-4 my-9 border-dashed border-mainYellow"
        >
          <h2 class="text-5xl">تماس با ما</h2>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { PhMagicWand, PhBookOpenText } from "@phosphor-icons/vue";

import { gsap } from "gsap";
// const audioAction = new AudioAction("mySound.mp3");
onMounted(() => {
  const TL = gsap.timeline();
  TL.to(".LoadingDiv", {
    display: "none",
  });

  TL.from(".P", { opacity: 0, duration: 0.3 });
  TL.fromTo(
    ".H",
    { opacity: 0, duration: 0.6, delay: 0.9 },
    { opacity: 1, duration: 0.6, delay: 0.9 }
  );
  window.addEventListener("load", () => {
    TM.play();
  });
  gsap.fromTo(
    ".Hand",
    { rotate: -30, duration: 1, delay: 0.5 },
    {
      yoyo: true,
      rotate: 40,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.5,
      repeat: -1,
      transformOrigin: "15% 60%",
    }
  );
  // gsap.add(audioAction, { duration: 1 });
  gsap.fromTo(
    ".H",
    { scale: 0, opacity: 0, duration: 1, delay: 1 },
    {
      opacity: 1,
      yoyo: true,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.5,
      repeat: -1,
      transformOrigin: "55% 60%",
    }
  );
});
</script>
