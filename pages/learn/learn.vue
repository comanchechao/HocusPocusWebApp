<template>
  <div class="w-screen h-full bg-mainBrown">
    <LazyNavbar />
    <div class="flex items-center justify-center h-screen flex-col w-full">
      <div
        class="flex-col flex items-center Bread opacity-0 justify-center space-y-6"
      >
        <h2 class="text-2xl text-mainYellow">آموزش شعبده بازی و تردستی</h2>
        <h1 class="Pocused text-center">Hocus Pocus</h1>
      </div>
      <img
        src="../../assets/images/LearnDivider.webp"
        class="h-40 my-3 object-contain lg:px-0 px-3 Stat1 opacity-0"
        alt=""
      />
    </div>

    <div class="h-full w-screen lg:my-9 flex flex-col items-center">
      <h2
        class="text-mainRed font-bold border-b-8 rounded-2xl border-mainYellow pb-5 my-3 md:my-7 lg:my-14 text-center text-3xl lg:text-5xl flex"
      >
        <PhPackage weight="fill" />
        <span> محصولات هوکوس پوکوس </span>
      </h2>
      <div
        class="h-dialog w-full flex items-center lg:flex-row flex-col justify-between space-y-5 lg:space-y-0 lg:space-x-20 p-10 lg:my-8"
      >
        <div
          class="lg:w-1/2 w-full h-96 lg:h-full bg-mainYellow cursor-pointer"
        ></div>
        <div
          class="lg:w-1/2 w-full h-96 lg:h-full bg-mainPink cursor-pointer"
        ></div>
      </div>
      <div
        class="w-full lg:px-0 px-5 h-rem22 flex flex-col items-center justify-center space-y-3 bg-Amber-400"
      >
        <h2
          class="text-mainBrown border-b-8 rounded-2xl border-mainBrown pb-5 text-center text-3xl lg:text-3xl flex"
        >
          <PhGraduationCap :size="35" weight="fill" class="mr-3" />
          <span> شعبده باز تازه کارید؟ </span>
        </h2>
        <h2
          class="text-mainBrown rounded-lg text-center text-xl lg:text-xl flex"
        >
          <span> این بخش مخصوص شماست</span>
        </h2>
        <NuxtLink to="/learn/learn">
          <button
            class="w-full lg:px-20 px-4 lg:w-auto md:w-full justify-center py-2 lg:flex-row md:flex-row flex-col-reverse lg:py-4 transition duration-300 ease-in hover:bg-mainYellow hover:text-mainBrown border-4 border-transparent hover:border-mainBrown bg-mainBrown flex items-center space-x-3 text-mainYellow text-lg lg:text-2xl rounded-full"
          >
            <PhNotebook
              :size="35"
              weight="fill"
              class="mr-3 lg:flex hidden md:flex"
            />
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
        <LazyVideoCardsCarousel :courses="courses" class="self-center" />
      </div>
      <div
        class="w-full h-rem22 flex flex-col items-center justify-center space-y-3 px-6 lg:px-0 bg-mainPurple"
      >
        <h2
          class="text-mainPink border-b-8 rounded-2xl border-mainBrown pb-5 text-center font-bold md:text-3xl text-xl lg:text-3xl flex"
        >
          <PhShoppingBagOpen :size="37" weight="fill" class="mr-3" />
          <span> دنبال محصولات شعبده بازی میگردید؟ </span>
        </h2>
        <h2
          class="text-mainPink rounded-lg text-center text-xl lg:text-xl flex"
        >
          <span> این بخش مخصوص شماست</span>
        </h2>
        <NuxtLink to="/shop/shop">
          <button
            class="lg:px-20 lg:w-auto md:w-full w-full px-4 py-2 transition duration-300 ease-in hover:bg-mainPink hover:text-mainBrown border-4 border-transparent hover:border-mainBrown bg-mainBrown flex items-center space-x-3 text-mainPink text-lg lg:text-2xl rounded-full"
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
        <LazyCardsCarousel :products="products" class="self-center" />
      </div>
    </div>

    <div class="h-auto w-full bg-mainBrown flex flex-col items-center">
      <div
        class="h-auto lg:my-10 my-5 w-screen flex items-center justify-center"
      >
        <h2 class="text-mainRed text-center text-3xl lg:text-5xl flex">
          <PhCards weight="fill" class="mr-3" />
          <span> کارت های منتخب هفته </span>
        </h2>
      </div>
      <div
        class="w-full h-full lg:px-32 flex items-center justify-around my-7 lg:my-10"
      >
        <div class=" ">
          <LazyCardsSwiper :products="products" />
        </div>
        <div class="lg:flex hidden md:flex">
          <LazyCardsSwiper :products="products" />
        </div>
      </div>

      <img
        src="../../assets/images/MagicDivider.webp"
        class="w-full px-5 lg:px-36 object-contain"
        alt=""
      />
    </div>
    <div
      class="w-full py-5 fh-full bg-mainBrown flex items-center space-y-9 flex-col"
    >
      <h2 class="text-mainRed text-center text-3xl lg:text-5xl flex">
        <PhHeartStraight weight="fill" class="mr-3" />
        <span> محصولات پرطرفدار </span>
      </h2>
      <div
        class="w-full h-screen grid grid-cols-4 grid-rows-2 place-items-center px-24 py-9 gap-5"
      >
        <div
          v-if="latestCourse"
          class="h-full space-y-4 w-full bg-mainPink col-span-2 row-span-2 flex flex-col items-end justify-end p-5"
        >
          <h2
            class="text-mainBrown font-bold text-center text-lg lg:text-3xl flex"
          >
            <span> {{ latestCourse.title }} </span>
          </h2>
          <h3
            class="text-4xl border-2 border-dashed border-mainBrown rounded-md py-2 px-8 text-mainBrown flex items-center justify-center space-x-2"
          >
            <span class="text-xs text-mainBrown">تومان</span>
            <span> {{ latestCourse.price }} </span>
            <PhMoney :size="34" weight="fill" />
          </h3>
        </div>

        <div
          v-if="loading"
          class="w-full h-full flex flex-col items-center space-y-5"
        >
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
          <div
            class="w-full h-full grid grid-cols-4 gap-7 place-items-center text-center text-darkBlue"
          >
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
            <Skeleton height="3rem" class="mb-2"></Skeleton>
          </div>
        </div>

        <div
          v-show="latestFour"
          v-for="course in latestFour"
          :key="course.id"
          class="h-full w-full bg-mainYellow space-y-4 flex flex-col items-end justify-end p-5"
        >
          <h2
            class="text-mainBrown font-bold text-center text-md lg:text-xl flex"
          >
            <span> {{ course.title }} </span>
          </h2>
          <h3
            class="text-xl border-2 border-dashed border-mainBrown rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
          >
            <span class="text-xs text-mainBrown">تومان</span>
            <span> {{ course.price }}</span>
            <PhMoney :size="34" weight="fill" />
          </h3>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-mainBrown flex flex-col">
      <div
        class="h-24 w-full bg-mainYellow items-center justify-between px-10 flex"
      >
        <button
          class="px-7 py-2 transition duration-300 ease-in hover:bg-mainYellow hover:text-mainBrown border-4 border-transparent hover:border-mainBrown bg-mainBrown flex items-center space-x-3 text-mainYellow text-2xl rounded-sm"
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
        <LazyInstagramCarousel />
      </div>
    </div>
    <LazyFooter />
  </div>
</template>

<script setup lang="ts">
import {
  PhMagicWand,
  PhCards,
  PhPackage,
  PhGraduationCap,
  PhMoney,
  PhInstagramLogo,
  PhShoppingBagOpen,
  PhShoppingBag,
  PhHeartStraight,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const courses = ref();
const loading = ref(false);

const getCourses = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/videos", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.courses);
      courses.value = response.courses;
      loading.value = false;
      getLatestCourse();
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

const latestCourse = ref();
const loadingTwo = ref(false);

const getLatestCourse = async () => {
  loadingTwo.value = true;
  const { data } = await $fetch("http://localhost:3333/videos/latest", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.course);
      latestCourse.value = response.course[0];
      loadingTwo.value = false;
      getLatestFour();
    })
    .catch(function (error) {
      console.error(error);
      loadingTwo.value = false;
    });
};

const latestFour = ref();
const loadingThree = ref();

const getLatestFour = async () => {
  loadingThree.value = true;
  const { data } = await $fetch("http://localhost:3333/videos/lastfour", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.courses);
      latestFour.value = response.courses;
      loadingThree.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loadingThree.value = false;
    });
};

onMounted(() => {
  getCourses();

  TM.to(".Bread", { opacity: 1, duration: 1, delay: 1 });
  TM.to(".Stat1", { opacity: 1, duration: 1.5 });
});
</script>

<style>
@font-face {
  font-family: "Pocused";
  src: url("../../assets/fonts/man.otf");
  font-style: normal;

  /* unicode-range: U+0020-007F; */
}

.Pocused {
  font-family: "Pocused";
  color: #fdbe39;
  font-size: 10rem;
  text-shadow: 2px 0px 1px #fb6107, 4px 0px 1px #fb6107, 6px 0px 1px #fb6107,
    8px 0px 1px #fb6107;
}

@media only screen and (max-width: 480px) {
  .Pocused {
    font-family: "Pocused";
    color: #fdbe39;
    font-size: 6rem;
    text-shadow: 7px 0px 1px #fb6107;
  }
}
@media only screen and (max-width: 768px) {
  .Pocused {
    font-family: "Pocused";
    color: #fdbe39;
    font-size: 6rem;
    text-shadow: 7px 0px 1px #fb6107;
  }
}
</style>
