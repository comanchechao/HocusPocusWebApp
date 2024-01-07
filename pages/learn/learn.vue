<template>
  <head>
    <title>مجموعه آموزشی شعبده بازی هوکوس پوکوس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="w-screen h-full bg-mainBrown">
    <LazyNavbar />
    <div class="flex items-center justify-center h-screen flex-col w-full">
      <div
        class="flex-col flex items-center Bread NavbarTrigger opacity-0 justify-center space-y-6"
      >
        <h1 class="Pocused text-center">Hocus Pocus</h1>
      </div>
      <img
        src="../../assets/images/LearnDivider.webp"
        class="h-40 my-3 object-contain lg:px-0 px-3 Stat1 opacity-0"
        alt=""
      />
      <h2 class="text-2xl text-mainYellow">
        <span> وبسایت آموزش و فروش محصولات شعبده بازی</span>
      </h2>
    </div>

    <div class="h-full w-screen lg:my-9 flex flex-col items-center">
      <h2
        class="text-mainRed border-b-8 rounded-md border-mainYellow pb-2 my-3 md:my-7 lg:my-14 text-center text-2xl lg:text-5xl flex"
      >
        <PhPackage weight="fill" />
        <span> محصولات هوکوس پوکوس </span>
      </h2>
      <div
        class="lg:h-dialog h-screen FCardsTrigger w-full flex items-center lg:flex-row flex-col justify-between space-y-5 lg:space-y-0 lg:space-x-20 p-10 lg:my-8"
      >
        <NuxtLink
          class="lg:w-1/2 flex items-center rounded-md justify-center w-full h-96 lg:h-full cursor-pointer border-4 transition ease-linear duration-200 hover:bg-mainYellow border-dashed border-mainYellow"
          to="/learn/shop"
        >
          <div
            class="relative w-full h-full flex items-center FCards justify-center"
          >
            <img
              src="../../assets/images/TeachM.webp"
              class="lg:w-rem28 w-72 object-contain"
              alt=""
            />
            <img
              src="../../assets/images/StarsTeach.webp"
              class="lg:w-rem28 w-72 absolute star2 object-contain"
              alt=""
            />
          </div>
        </NuxtLink>
        <NuxtLink
          class="lg:w-1/2 flex items-center rounded-md justify-center w-full h-96 lg:h-full cursor-pointer border-4 border-dashed transition ease-linear duration-200 hover:bg-mainPink border-mainPink"
          to="/shop/shop?page=1"
        >
          <div class="relative w-full h-full flex items-center justify-center">
            <img
              src="../../assets/images/ShopM.webp"
              class="lg:w-rem28 w-72 absolute object-contain"
              alt=""
            />
            <img
              src="../../assets/images/StarsShop.webp"
              class="lg:w-rem28 w-72 absolute star object-contain"
              alt=""
            />
          </div>
        </NuxtLink>
      </div>
      <div
        class="w-full Cardist lg:px-0 px-5 h-rem22 flex flex-col items-center justify-center space-y-3 bg-Amber-400"
      >
        <h2
          class="text-darkPurple border-b-8 rounded-md border-darkPurple pb-1 text-center text-3xl lg:text-3xl flex"
        >
          <PhGraduationCap :size="35" weight="fill" class="mr-3" />
          <span> شعبده باز تازه کارید؟ </span>
        </h2>
        <h2
          class="text-darkPurple rounded-lg text-center text-xl lg:text-xl flex"
        >
          <span> این بخش مخصوص شماست</span>
        </h2>
        <NuxtLink to="/learn/learn">
          <button
            class="w-full lg:px-20 px-4 lg:w-auto md:w-full justify-center py-2 lg:flex-row md:flex-row flex-col-reverse lg:py-4 transition duration-300 ease-in hover:bg-mainYellow hover:text-darkPurple border-4 border-transparent hover:border-darkPurple bg-darkPurple flex items-center space-x-3 text-mainYellow text-md lg:text-2xl rounded-full"
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
          class="text-mainRed border-b-8 rounded-md border-mainYellow pb-2 my-14 text-center text-xl lg:text-3xl flex"
        >
          <PhGraduationCap :size="30" weight="fill" class="mr-3" />
          <span> جدیدترین آموزش ها </span>
        </h2>
        <div
          class="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-7 lg:px-20 px-4 w-full"
          v-if="loading"
        >
          <Skeleton width="35rem" height="25rem"></Skeleton>
          <Skeleton
            class="lg:flex hidden"
            width="35rem"
            height="25rem"
          ></Skeleton>
        </div>
        <LazyVideoCardsCarousel
          v-if="!loading"
          :courses="courses"
          class="self-center"
        />
      </div>
      <div
        class="w-full h-rem22 flex flex-col items-center justify-center space-y-3 px-6 lg:px-0 bg-mainPink"
      >
        <h2
          class="text-mainBrown border-b-8 rounded-2xl border-mainBrown pb-5 text-center font-bold md:text-3xl text-xl lg:text-3xl flex"
        >
          <PhShoppingBagOpen :size="37" weight="fill" class="mr-3" />
          <span> دنبال محصولات شعبده بازی میگردید؟ </span>
        </h2>
        <h2
          class="text-mainBrown rounded-lg text-center text-xl lg:text-xl flex"
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
          class="text-mainRed border-b-4 rounded-md border-mainYellow pb-2 my-14 text-center text-xl lg:text-3xl flex"
        >
          <PhCards :size="30" weight="fill" class="mr-3" />
          <span> جدیدترین محصولات </span>
        </h2>
        <div
          class="grid lg:grid-cols-4 grid-cols-1 place-items-center gap-7 px-4 w-full"
          v-show="loadingProducts"
        >
          <Skeleton width="18rem" height="25rem"></Skeleton>
          <Skeleton
            class="lg:flex hidden"
            width="18rem"
            height="25rem"
          ></Skeleton>
          <Skeleton
            class="lg:flex hidden"
            width="18rem"
            height="25rem"
          ></Skeleton>
          <Skeleton
            class="lg:flex hidden"
            width="18rem"
            height="25rem"
          ></Skeleton>
        </div>
        <LazyCardsCarousel
          v-if="!loadingProducts"
          :products="products.slice(0, 6)"
          class="self-center"
        />
      </div>
    </div>

    <div
      class="h-auto lg:my-10 hidden md:flex lg:flex SCardsTrigger my-5 w-screen items-center justify-center"
    >
      <h2 class="text-mainRed text-center text-3xl lg:text-5xl flex">
        <PhCards weight="fill" class="mr-3" />
        <span> محصولات منتخب هفته </span>
      </h2>
    </div>
    <div
      class="w-full hidden lg:flex md:flex h-full lg:px-32 items-center justify-around my-7 lg:my-10"
    >
      <div
        class="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-7 px-4 w-full"
        v-if="loadingProducts"
      >
        <Skeleton width="18rem" height="25rem"></Skeleton>
        <Skeleton
          class="lg:flex hidden"
          width="18rem"
          height="25rem"
        ></Skeleton>
      </div>
      <div class="SCards">
        <LazyCardsSwiper
          v-if="!loadingProducts"
          :products="products.slice(1, 5)"
        />
      </div>
      <div class="lg:flex SCards hidden md:flex">
        <LazyCardsSwiper
          v-if="!loadingProducts"
          :products="products.slice(5, 9)"
        />
      </div>
    </div>

    <LazyFooter />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../../stores/productStore";

import {
  PhCards,
  PhPackage,
  PhGraduationCap,
  PhMoney,
  PhShoppingBagOpen,
  PhShoppingBag,
  PhHeartStraight,
  PhNotebook,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const courses = ref();
const loading = ref(true);
const loadingThree = ref(true);

const getCourses = async () => {
  loading.value = true;
  const { data } = await $fetch("http://localhost:3333/videos", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      courses.value = response.courses;
      loading.value = false;
      getProducts();
      loadingTwo.value = false;
      getLatestCourse();
      loadingThree.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};
const addSuccess = ref(false);
const productStore = useProductStore();

const latestCourse = ref();
const loadingTwo = ref(true);
const addToCart = (product) => {
  productStore.addToShoppingCart(product);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};
const getLatestCourse = async () => {
  loadingTwo.value = true;
  const { data } = await $fetch("http://localhost:3333/videos/latest", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      latestCourse.value = response.course[0];
      loadingTwo.value = false;
      loadingThree.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loadingTwo.value = false;
    });
};

const loadingProducts = ref(true);
const products = ref();

const getProducts = async () => {
  loadingProducts.value = true;
  const { data } = await $fetch("http://localhost:3333/products", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      products.value = response.products;
      loadingProducts.value = false;
      loadingTwo.value = false;
      loadingThree.value = false;
      console.log("ghis is loading three value ", loadingThree.value);
    })
    .catch(function (error) {
      console.error(error);
      loadingProducts.value = false;
    });
};

const latestFour = ref();

const getLatestFour = async () => {
  loadingThree.value = true;
  const { data } = await $fetch("http://localhost:3333/videos/lastfour", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      latestFour.value = response.courses;
      loadingThree.value = false;
    })
    .catch(function (error) {
      console.error(error);
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
