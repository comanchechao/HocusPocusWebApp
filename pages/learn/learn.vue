<template>
  <div class="w-screen h-full bg-mainBrown">
    <LazyNavbar />
    <div class="flex items-center justify-center h-screen flex-col w-full">
      <div
        class="flex-col flex items-center Bread NavbarTrigger opacity-0 justify-center space-y-6"
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
        class="lg:h-dialog h-screen FCardsTrigger w-full flex items-center lg:flex-row flex-col justify-between space-y-5 lg:space-y-0 lg:space-x-20 p-10 lg:my-8"
      >
        <NuxtLink
          class="lg:w-1/2 flex items-center rounded-md justify-center w-full h-96 lg:h-full cursor-pointer border-4 transition ease-linear duration-200 hover:bg-mainYellow border-dashed border-mainYellow"
          to="learn/learn"
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
          to="shop/shop"
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
          class="text-mainRed border-b-8 rounded-2xl border-mainPink pb-5 my-7 text-center text-3xl lg:text-3xl flex"
        >
          <PhCards :size="35" weight="fill" class="mr-3" />
          <span> جدیدترین محصولات </span>
        </h2>
        <div
          class="grid lg:grid-cols-4 grid-cols-1 place-items-center gap-7 px-4 w-full"
          v-if="loadingProducts"
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
          :products="products"
          class="self-center"
        />
      </div>
    </div>

    <div
      class="h-auto lg:my-10 SCardsTrigger my-5 w-screen flex items-center justify-center"
    >
      <h2 class="text-mainRed text-center text-3xl lg:text-5xl flex">
        <PhCards weight="fill" class="mr-3" />
        <span> کارت های منتخب هفته </span>
      </h2>
    </div>
    <div
      class="w-full h-full lg:px-32 flex items-center justify-around my-7 lg:my-10"
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
        <LazyCardsSwiper v-if="!loadingProducts" :products="products" />
      </div>
      <div class="lg:flex SCards hidden md:flex">
        <LazyCardsSwiper v-if="!loadingProducts" :products="products" />
      </div>
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
          v-show="latestCourse"
          class="h-full space-y-1 w-full rounded-md lg:col-span-2 bg-mainWhite lg:row-span-2 flex flex-col items-end justify-center p-5"
        >
          <div class="h-3/4 w-full flex items-end flex-col justify-center">
            <ProgressSpinner
              v-if="loading"
              style="width: 50px; height: 50px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
            <LazyLastProductImage
              v-if="!loadingTwo"
              :productId="latestCourse.ProductImages[0].id"
            />
          </div>
          <div
            class="w-full h-1/4 flex flex-col items-end justify-center space-y-4"
          >
            <Skeleton
              class="hidden lg:flex"
              v-if="loadingTwo"
              width="35rem"
              height="3rem"
            ></Skeleton>
            <Skeleton v-if="loadingTwo" width="10rem" height="3rem"></Skeleton>

            <h2
              v-if="!loadingTwo"
              class="text-darkPurple font-bold text-center text-lg lg:text-3xl flex"
            >
              <span> {{ latestCourse.title }} </span>
            </h2>
            <h3
              v-if="!loadingTwo"
              class="text-xl border-2 border-dashed border-darkPurple rounded-md px-8 text-mainBrown flex items-center justify-center space-x-2"
            >
              <span class="text-xs text-darkPurple">تومان</span>
              <span>{{ latestCourse.price }}</span>
              <PhMoney :size="34" weight="fill" />
            </h3>
            <button
              v-if="!loadingTwo"
              @click="addToCart(latestCourse)"
              class="w-full justify-center mt-3 py-1 shadow-md bg-mainYellow shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
            >
              <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
            </button>
            <Message :closable="false" v-show="addSuccess" severity="success">
              <span class="lg:text-sm text-sm font-bold"
                >به سبد خرید اضافه شد</span
              >
            </Message>
          </div>
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
      getProducts();
      getLatestCourse();
    })
    .catch(function (error) {
      console.error(error);
    });
};
const addSuccess = ref(false);
const productStore = useProductStore();

const latestCourse = ref();
const loadingTwo = ref(false);
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
      console.log(response.products);
      products.value = response.products;
      loadingProducts.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loadingProducts.value = false;
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
