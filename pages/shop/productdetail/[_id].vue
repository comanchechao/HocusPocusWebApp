<template>
  <head>
    <title>
      فروشگاه شعبده بازی | {{ product.category }} | {{ product.title }} | هوکوس
      پوکوس
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-auto w-screen bg-darkPurple">
    <LazyNavbar />
    <div
      class="h-auto w-screen flex-col flex items-center pt-28 px-7 lg:px-32 py-16"
    >
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end space-x-2 lg:space-x-4"
      >
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <Skeleton v-if="loading" width="10rem" height="2rem"></Skeleton>

          <span v-if="!loading"> {{ product.title }} </span>
        </h2>
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خونه </span>
        </h2>
      </div>
      <div
        v-if="loading"
        class="w-full Product flex lg:flex-row flex-col-reverse items-center mt-9 rounded-md h-auto lg:h-screen lg:space-x-5"
      >
        <div
          class="lg:w-1/2 w-full h-full flex flex-col items-center justify-center"
        >
          <div
            class="w-full h-full rounded-sm flex self-start flex-col items-end justify-start"
          >
            <div
              class="w-full lg:px-0 flex flex-col items-end space-y-2 justify-between"
            >
              <div
                class="flex w-full h-full flex-col items-end justify-start space-y-2"
              >
                <Skeleton width="10rem" height="3rem"></Skeleton>

                <div class="flex items-center justify-end w-full space-x-2">
                  <Skeleton width="17rem" height="4rem"></Skeleton>
                </div>
                <Skeleton width="17rem" height="4rem"></Skeleton>
              </div>
              <Skeleton width="35rem" height="16rem"></Skeleton>
              <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
          </div>
        </div>
        <div class="flex items-start lg:w-1/2 w-full h-full flex-col">
          <div
            class="w-full bg-mainWhite rounded-md h-full flex items-center mb-7 justify-center"
          >
            <ProgressSpinner
              v-if="loading"
              style="width: 50px; height: 50px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </div>
        </div>
      </div>
      <div
        v-if="!loading"
        class="w-full Product flex lg:flex-row flex-col-reverse items-center mt-9 rounded-md h-auto lg:h-screen lg:space-x-5"
      >
        <div
          class="lg:w-1/2 w-full h-full flex flex-col items-center justify-center"
        >
          <div
            class="w-full h-full rounded-sm flex self-start flex-col items-end justify-start"
          >
            <div
              class="w-full lg:px-0 flex flex-col items-end space-y-2 justify-between"
            >
              <div
                class="flex w-full h-full flex-col items-end justify-start space-y-2"
              >
                <div class="w-full flex items-center justify-end space-x-3">
                  <h3
                    class="text-xl cursor-pointer hover:bg-mainPink hover:text-mainPurple transition ease-out duration-300 text-mainPink border-2 border-dashed border-mainPurple p-2 rounded-md text-right"
                  >
                    <span> {{ product.category }} </span>
                  </h3>
                  <h2 class="text-mainPink text-xl">دسته بندی</h2>
                </div>
                <div class="flex items-center justify-end w-full space-x-2">
                  <h1
                    class="lg:text-7xl text-4xl font-bold text-mainPink p-2 rounded-md text-right"
                  >
                    <span> {{ product.title }} </span>
                  </h1>
                </div>
                <h3
                  class="text-2xl border-2 border-dashed border-mainPink rounded-md py-1 px-5 text-mainPink flex items-center justify-center space-x-2"
                >
                  <span class="text-xs text-mainRed">تومان</span>
                  <span> {{ product.price }} </span>
                  <!-- <span>599,000</span> -->
                  <PhMoney :size="34" weight="fill" />
                </h3>
              </div>
              <h1 class="text-3xl font-bold my-2 p-3 rounded-md text-mainWhite">
                معرفی کالا
              </h1>
              <h1
                class="text-darkPurple my-2 w-full bg-white p-3 rounded-md flex flex-col space-y-6 text-right text-md"
              >
                <span class="text-xl font-bold rounded-xl flex justify-end">
                  {{ product.description }}
                </span>
                <span> {{ product.description }} </span>
              </h1>
              <div
                class="flex items-center space-x-3 justify-center p-3 rounded-md"
              >
                <Rating class="rounded-sm" v-model="value" :cancel="false" />
                <h3
                  class="font-bold rounded-sm flex items-center space-x-2 text-mainWhite text-lg"
                >
                  : امتیاز
                </h3>
              </div>
            </div>

            <div class="flex items-center justify-center space-x-3">
              <PhMinus
                class="text-mainRed cursor-pointer p-2 border-2 border-transparent duration-200 ease-in transition hover:border-mainPink"
                :size="55"
                weight="fill"
              />
              <h3 class="text-3xl font-bold text-mainRed font-SultanFont">6</h3>
              <PhPlus
                class="text-mainRed cursor-pointer p-2 border-2 border-transparent duration-200 ease-in transition hover:border-mainPink"
                :size="55"
                weight="fill"
              />
              <h3 class="text-xl text-mainRed">تعداد</h3>
            </div>
            <button
              @click="addToCart(product)"
              class="text-sm flex items-center space-x-2 px-7 py-1 mt-4 transition duration-150 ease-in-out border-b-4 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه به سبد خرید </span>
              <PhShoppingBagOpen :size="25" weight="fill" />
            </button>
          </div>
          <Message :closable="false" v-show="addSuccess" severity="success">
            <span class="lg:text-sm text-sm font-bold"
              >به سبد خرید اضافه شد</span
            >
          </Message>
        </div>
        <div class="flex items-start lg:w-1/2 w-full h-full flex-col">
          <div
            class="w-full rounded-md lg:h-auto h-full flex items-center mb-7 justify-center"
          >
            <LazyImageGallery :productImages="product.ProductImages" />
          </div>
        </div>
      </div>
      <div
        class="h-full mt-20 Comment w-full mb-11 flex flex-col space-y-4 py-5 items-end"
      >
        <LazyComments />
      </div>
      <div class="h-full flex flex-col items-end w-screen lg:px-24 px-5">
        <h2
          class="text-mainPink border-b-8 rounded-2xl border-mainPink pb-5 my-7 text-center text-3xl lg:text-3xl flex"
        >
          <PhCards :size="35" weight="fill" class="mr-3" />
          <span> جدیدترین محصولات </span>
        </h2>
        <div
          class="grid lg:grid-cols-4 grid-cols-1 place-items-center gap-7 px-4 w-full"
          v-if="loadingThree"
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
          v-if="!loadingThree"
          :products="products"
          class="self-center"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  PhCaretLeft,
  PhShoppingBagOpen,
  PhCards,
  PhPlus,
  PhMinus,
  PhMoney,
} from "@phosphor-icons/vue";

import { ref } from "vue";
import { useProductStore } from "~/stores/productStore";
import { storeToRefs } from "pinia";
import { useUserStore } from "~/stores/user";

const value = ref(null);
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

const userStore = useUserStore();

const { isLogged } = storeToRefs(userStore);

// register product stroe

const productStore = useProductStore();

// add to card function

const addSuccess = ref(false);

const addToCart = (product) => {
  productStore.addToShoppingCart(product);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};

const product = ref({});
const loading = ref(true);
const imageLoading = ref(true);

const image = ref();

const router = useRoute();
const getProduct = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/products/${router.params._id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      product.value = response.product;
      // if (response.product) {
      //   getProductImage();
      // }
      loading.value = false;
      getLatestFour();
    })
    .catch(function (error) {
      console.error(error);
    });
};

const loadingThree = ref(true);
const products = ref();

const getLatestFour = async () => {
  loadingThree.value = true;
  const { data } = await $fetch("http://localhost:3333/products/lastfour", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      products.value = response.products;
      loadingThree.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

// const getProductImage = async () => {
//   console.log(product);
//   const { data } = await $fetch(
//     `http://localhost:3333/articles/image/${product.value.ArticleImage[0].id}`,
//     {
//       headers: {},
//       withCredentials: true,
//       credentials: "include",
//     }
//   )
//     .then(function (response) {
//       console.log(response);
//       image.value = response.image;
//       imageLoading.value = false;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

onMounted(() => {
  TM.from(".Bread", { opacity: 0, duration: 1, delay: 1 });
  TM.from(".Product", { opacity: 0, duration: 1 });

  TM.from(".Comment", { opacity: 0, duration: 1.5, stagger: 0.4 });
  getProduct();
});
</script>

<style>
.p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
  color: #f36b31;
}
.p-rating .p-rating-item .p-rating-icon.p-icon {
  width: 1.7rem;
  height: 1.7rem;
}
</style>
