<template>
  <head>
    <title>درباره ما هوکوس پوکوس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-auto overflow-hidden bg-darkPurple">
    <LazyNavbar />

    <div
      class="w-full h-screen absolute LoadingDiv bg-darkPurple flex items-center justify-center"
    >
      <ProgressSpinner
        class="bg-darkPurple"
        style="width: 80px; height: 80px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>
    <div
      class="lg:h-dialog h-auto pt-44 lg:pb-28 lg:pt-48 w-full relative flex mt-24 items-end lg:items-center justify-center lg:px-44 px-10 lg:my-24"
    >
      <img
        src="../../assets/images/AboutUsH.webp"
        class="lg:h-dialog md:h-dialog object-contain H absolute"
        alt=""
      />
      <img
        src="../../assets/images/AboutUsHand.webp"
        class="lg:h-dialog md:h-dialog object-contain P Hand absolute"
        alt=""
      />
      <img
        src="../../assets/images/AboutUsP.webp"
        class="lg:h-dialog md:h-dialog object-contain P absolute"
        alt=""
      />
    </div>
    <div
      class="h-full w-full md:px-24 px-7 lg:mt-24 lg:px-44 flex items-center flex-col mb-20"
    >
      <h2
        class="text-mainRed border-b-4 rounded-sm border-mainYellow pb-1 my-14 text-center text-xl lg:text-4xl flex"
      >
        <PhMagicWand :size="30" weight="fill" class="mr-3" />
        <span> ما رو بیشتر بشناسید </span>
      </h2>
      <div
        class="lg:h-full h-auto md:grid-cols-2 grid-cols-1 grid lg:grid-cols-4 place-items-center gap-5 w-screen"
      >
        <img
          src="../../assets/images/AUPic1.webp"
          class="w-72 object-contain"
          alt=""
        />
        <img
          src="../../assets/images/AUPic2.webp"
          class="w-96 object-contain"
          alt=""
        />
        <img
          src="../../assets/images/AUPic3.webp"
          class="w-96 object-contain"
          alt=""
        />
        <img
          src="../../assets/images/AUPic4.webp"
          class="w-96 object-contain"
          alt=""
        />
        <img
          src="../../assets/images/AUPic5.webp"
          class="w-96 object-contain lg:col-span-4"
          alt=""
        />
      </div>
      <h2
        class="text-mainRed self-end border-b-8 rounded-md border-mainYellow pb-1 my-14 text-center text-lg lg:text-2xl flex"
      >
        <PhBookOpenText :size="30" weight="fill" class="mr-3" />
        <span> تاریخچه</span>
      </h2>

      <div
        dir="rtl"
        class="w-full h-auto p-5 flex-col space-y-6 bg-mainWhite rounded-md flex items-center justify-center text-right text-sm"
      >
        <h2
          class="text-darkPurple self-start border-b-8 rounded-md border-mainYellow pb-1 text-center text-md font-bold lg:text-xl flex"
        >
          تاریخچه فروشگاه شعبده بازی هوکوس پوکوس
        </h2>
        <h2>
          فروشگاه شعبده بازی هوکوس پوکوس در سال 1379 توسط آقای امیر فاطمی در شهر
          ارومیه تاسیس شد. این فروشگاه قدیمی ترین فروشگاه شعبده بازی ایران است و
          در طول این سال ها به یکی از معتبرترین و شناخته شده ترین فروشگاه های
          این حوزه تبدیل شده است. فروشگاه هوکوس پوکوس در طول این سال ها نقش مهمی
          در توسعه و گسترش شعبده بازی در ایران داشته است.
        </h2>
        <h2>
          فروشگاه هوکوس پوکوس در ابتدا با تعداد محدودی وسیله شعبده بازی فعالیت
          خود را آغاز کرد، اما به مرور زمان و با افزایش علاقه مردم به شعبده
          بازی، این فروشگاه نیز توسعه یافت و اکنون یکی از بزرگترین فروشگاه های
          شعبده بازی در ایران است. فروشگاه هوکوس پوکوس طیف گسترده ای از وسایل
          شعبده بازی را در اختیار مشتریان خود قرار می دهد. این وسایل شامل انواع
          وسایل ساده و پیشرفته، وسایل تردستی، وسایل ذهنی و وسایل ویژه کودکان
          است. همچنین، این فروشگاه خدمات آموزشی نیز ارائه می دهد و کلاس های
          آموزشی شعبده بازی را برای علاقه مندان برگزار می کند.
        </h2>

        <h2
          class="text-darkPurple self-start border-b-8 rounded-md border-mainYellow pb-1 my-14 text-center text-md font-bold lg:text-xl flex"
        >
          برخی از دستاوردهای فروشگاه
        </h2>
        <div
          class="self-start flex flex-col items-start justify-center space-y-4"
        >
          <h2 class="border-b-4 rounded-sm border-b-mainPink">
            قدیمی ترین فروشگاه شعبده بازی ایران
          </h2>
          <h2 class="border-b-4 rounded-sm border-b-mainPink">
            یکی از بزرگترین فروشگاه های شعبده بازی در ایران
          </h2>
          <h2 class="border-b-4 rounded-sm border-b-mainPink">
            ارائه طیف گسترده ای از وسایل شعبده بازی
          </h2>
          <h2 class="border-b-4 rounded-sm border-b-mainPink">
            ارائه خدمات آموزشی شعبده بازی به منظور پرورش نسل جدیدی از شعبده
            بازان ایرانی
          </h2>
        </div>
        <h2
          class="text-darkPurple self-start border-b-8 rounded-md border-mainYellow pb-1 my-14 text-center text-md font-bold lg:text-xl flex"
        >
          آینده فروشگاه
        </h2>
        <h2>
          هوکوس پوکوس در آینده نیز به فعالیت خود ادامه خواهد داد و تلاش خواهد
          کرد تا همچنان به یکی از معتبرترین و شناخته شده ترین فروشگاه های شعبده
          بازی در ایران تبدیل بماند. این فروشگاه همچنین قصد دارد تا فعالیت های
          آموزشی خود را گسترش دهد و به پرورش نسل جدیدی از شعبده بازان ایرانی کمک
          کند.
        </h2>
      </div>

      <h2
        class="text-mainRed self-end border-b-8 rounded-md border-mainYellow pb-1 my-14 text-center text-lg lg:text-2xl flex"
      >
        <span> پرسنل فروشگاه </span>
      </h2>
      <div
        dir="rtl"
        class="w-full h-auto flex items-center md:flex-row lg:flex-row flex-col lg:space-y-0 md:space-y-0 space-y-9 justify-around"
      >
        <div class="flex flex-col items-center justify-center space-y-4">
          <div
            class="h-44 w-44 p-3 overflow-hidden flex items-center justify-center rounded-full bg-mainYellow"
          >
            <img
              src="../../assets/images/AboutUsMagus.webp"
              class="h-full object-contain transform translate-x-3 translate-y-4 rotate-3"
              alt=""
            />
          </div>
          <h2 class="text-mainRed text-center text-xl lg:text-2xl flex">
            <span> امیر فاطمی</span>
          </h2>
          <h2 class="text-mainRed text-center text-sm lg:text-md flex">
            <span> موسس و بنیانگذار</span>
          </h2>
        </div>
        <div class="flex flex-col items-center justify-center space-y-4">
          <div
            class="h-44 w-44 p-3 overflow-hidden flex items-center justify-center rounded-full bg-mainYellow"
          >
            <img
              src="../../assets/images/Farokh.webp"
              class="h-full object-contain transform -rotate-3 -translate-x-3 translate-y-4"
              alt=""
            />
          </div>
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
      <h1 class="text-mainPink text-4xl">راه های</h1>
      <NuxtLink to="/shop/contactUs">
        <div
          class="lg:px-16 px-11 cursor-pointer duration-200 ease-in-out text-mainRed hover:text-darkPurple transition hover:bg-mainYellow py-2 lg:py-5 rounded-md border-4 my-9 border-dashed border-mainYellow"
        >
          <h2 class="text-3xl">تماس با ما</h2>
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
    { rotate: -10, duration: 1, delay: 0.5 },
    {
      yoyo: true,
      rotate: 30,
      duration: 0.8,
      ease: "power1.out",
      delay: 0.5,
      repeat: -1,
      transformOrigin: "15% 60%",
    }
  );
  if (window.innerWidth < 768) {
    // Mobile animation
    gsap.fromTo(
      ".Hand",
      { rotate: -10, duration: 1, delay: 0.5 },
      {
        yoyo: true,
        rotate: 8,
        duration: 0.8,
        ease: "power1.out",
        delay: 0.5,
        repeat: -1,
        transformOrigin: "10%",
      }
    );
  }
  // gsap.add(audioAction, { duration: 1 });
  gsap.fromTo(
    ".H",
    { scale: 0.3, opacity: 0, duration: 1, delay: 1 },
    {
      opacity: 1,
      yoyo: true,
      scale: 1,
      duration: 0.8,
      ease: "power1.out",
      delay: 0.5,
      repeat: -1,
      transformOrigin: "55% 60%",
    }
  );
});
</script>
