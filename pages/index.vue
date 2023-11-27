<template>
  <div
    class="w-screen h-screen absolute LoadingDiv bg-darkPurple flex items-center justify-center"
  >
    <ProgressSpinner
      class="bg-darkPurple"
      style="width: 80px; height: 80px"
      strokeWidth="8"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
  <div class="w-screen h-auto flex flex-col items-center">
    <LazyNavbar></LazyNavbar>

    <div
      ref="container"
      class="lg:h-full container h-auto NavbarTrigger w-full flex flex-col items-center bg pt-24 justify-center"
    >
      <div
        class="w-full md:h-rem26 h-72 px-3 lg:h-screen flex flex-col items-center justify-center"
      >
        <div class="flex flex-col items-center justify-center px-48">
          <div class="flex items-center absolute justify-center w-full">
            <img
              src="../assets/images/HocusUp1.webp"
              class="object-contain absolute Up opacity-0 lg:w-full w-96 md:w-rem38"
              alt=""
            />
            <img
              src="../assets/images/HocusUp2.webp"
              class="object-contain absolute Up2 opacity-0 lg:w-full w-96 md:w-rem38"
              alt=""
            />
          </div>
          <div class="flex items-center absolute justify-center w-full">
            <img
              src="../assets/images/HocusDownP.webp"
              class="object-contain lg:w-full z-10 w-96 md:w-rem38 absolute P opacity-0"
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
      <div class="Store opacity-0">
        <h1
          class="flex space-x-2 lg:px-0 px-8 lg:mt-7 ease-in-out text-2xl my-4 lg:text-4xl font-bold text-center border-mainViolet drop-shadow-sm rounded-sm text-mainRed"
        >
          <span>آنلاین شاپ و وبسایت آموزشی شعبده بازی </span>
        </h1>
      </div>
      <!-- <img
        src="../assets/images/MagicshopDivider.webp"
        class="w-full px-8 lg:px-40 object-contain my-8"
        alt=""
      /> -->
    </div>
    <div class="h-full w-screen lg:my-9 flex flex-col items-center">
      <img
        src="../assets/images/PumpkinMain1.webp"
        class="object-contain md:h-32 h-24 lg:h-32 my-10 w-full lg:px-0 px-4"
        alt=""
      />
      <h2
        class="text-mainRed font-bold border-b-8 rounded-2xl border-mainYellow pb-5 my-3 md:my-7 lg:my-14 text-center text-2xl lg:text-5xl flex"
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
              src="../assets/images/TeachM.webp"
              class="lg:w-rem28 w-72 object-contain"
              alt=""
            />
            <img
              src="../assets/images/StarsTeach.webp"
              class="lg:w-rem28 w-72 absolute star2 object-contain"
              alt=""
            />
          </div>
        </NuxtLink>
        <NuxtLink
          class="lg:w-1/2 flex items-center rounded-md justify-center CardistTrigger w-full h-96 lg:h-full cursor-pointer border-4 border-dashed transition ease-linear duration-200 hover:bg-mainPink border-mainPink"
          to="shop/shop"
        >
          <div
            class="relative w-full h-full flex items-center justify-center FCards"
          >
            <img
              src="../assets/images/ShopM.webp"
              class="lg:w-rem28 w-72 absolute object-contain"
              alt=""
            />
            <img
              src="../assets/images/StarsShop.webp"
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
          class="text-darkPurple border-b-8 rounded-2xl border-darkPurple pb-5 text-center text-3xl lg:text-3xl flex"
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
          class="text-darkPurple border-b-8 rounded-2xl border-darkPurple pb-5 text-center font-bold md:text-3xl text-lg lg:text-3xl flex"
        >
          <PhShoppingBagOpen :size="37" weight="fill" class="mr-3" />
          <span> دنبال محصولات شعبده بازی میگردید؟ </span>
        </h2>
        <h2
          class="text-darkPurple rounded-lg text-center text-xl lg:text-xl flex"
        >
          <span> این بخش مخصوص شماست</span>
        </h2>
        <NuxtLink to="/shop/shop">
          <button
            class="lg:px-20 lg:w-auto md:w-full w-full px-4 py-2 transition duration-300 ease-in hover:bg-mainPink hover:text-darkPurple border-4 border-transparent hover:border-darkPurple bg-darkPurple flex items-center space-x-3 text-mainPink text-md lg:text-2xl rounded-full"
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
          v-if="loading"
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
          v-if="!loading"
          :products="products"
          class="self-center"
        />
      </div>
    </div>

    <div class="h-auto w-full flex flex-col items-center">
      <img
        src="../assets/images/PumpkinMain.webp"
        class="object-contain h-32 lg:h-32 md:32 w-full lg:px-0 px-4"
        alt=""
      />

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
          v-if="loading"
        >
          <Skeleton width="18rem" height="25rem"></Skeleton>
          <Skeleton
            class="lg:flex hidden"
            width="18rem"
            height="25rem"
          ></Skeleton>
        </div>
        <div class="SCards">
          <LazyCardsSwiper v-if="!loading" :products="products" />
        </div>
        <div class="lg:flex SCards hidden md:flex">
          <LazyCardsSwiper v-if="!loading" :products="products" />
        </div>
      </div>
    </div>
    <div class="w-full my-16 h-full flex items-center space-y-9 flex-col">
      <h2 class="text-mainRed text-center text-3xl lg:text-5xl flex">
        <PhHeartStraight weight="fill" class="mr-3" />
        <span> محصولات پرطرفدار </span>
      </h2>
      <div
        class="w-full h-full lg:h-screen grid-cols-1 grid lg:grid-cols-4 lg:grid-rows-2 place-items-center px-4 lg:px-24 py-9 gap-5"
      >
        <div
          v-show="latestProduct"
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
              :productId="latestProduct.ProductImages[0].id"
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
              <span> {{ latestProduct.title }} </span>
            </h2>
            <h3
              v-if="!loadingTwo"
              class="text-xl border-2 border-dashed border-darkPurple rounded-md px-8 text-mainBrown flex items-center justify-center space-x-2"
            >
              <span class="text-xs text-darkPurple">تومان</span>
              <span>{{ latestProduct.price }}</span>
              <PhMoney :size="34" weight="fill" />
            </h3>
            <button
              v-if="!loadingTwo"
              @click="addToCart(latestProduct)"
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
        <Skeleton
          class="hidden lg:flex"
          v-if="loadingThree"
          width="20rem"
          height="20rem"
        ></Skeleton>
        <Skeleton
          class="hidden lg:flex"
          v-if="loadingThree"
          width="20rem"
          height="20rem"
        ></Skeleton>
        <Skeleton
          class="hidden lg:flex"
          v-if="loadingThree"
          width="20rem"
          height="20rem"
        ></Skeleton>
        <Skeleton
          class="hidden lg:flex"
          v-if="loadingThree"
          width="20rem"
          height="20rem"
        ></Skeleton>

        <LazyIndexPopularMiniCard
          v-if="!loadingThree"
          v-for="item in products.slice(1, 5)"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>

    <LazyFooter></LazyFooter>
  </div>
</template>
<script setup>
import {
  PhNotebook,
  PhCards,
  PhPackage,
  PhGraduationCap,
  PhMoney,
  PhInstagramLogo,
  PhShoppingBagOpen,
  PhShoppingBag,
  PhHeartStraight,
} from "@phosphor-icons/vue";
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { useProductStore } from "../stores/productStore";
useHead({
  title: "فروشگاه و مجموعه آموزشی شعبده بازی هوکوس پوکوس",
  meta: [
    {
      name: "فروشگاه و مجموعه آموزشی هوکوس پوکوس، قدیم ترین مجموعه آموزشی و فروشگاهی در زمینه ی  شعبده بازی، با هدف پیشرفت روز افزون  هنر و صنعت شعبده بازی در سطح کشور است",
      content:
        "فروشگاه و مجموعه آموزشی هوکوس پوکوس، قدیم ترین مجموعه آموزشی و فروشگاهی در زمینه ی  شعبده بازی، با هدف پیشرفت روز افزون  هنر و صنعت شعبده بازی در سطح کشور است",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
});
// assign product store

const productStore = useProductStore();

const products = ref();

const container = ref(null);
const image = ref(null);

const loading = ref(true);

const addSuccess = ref(false);

const addToCart = (product) => {
  productStore.addToShoppingCart(product);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};

const getProducts = async () => {
  const { data } = await $fetch("http://localhost:3333/products", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.products);
      products.value = response.products;
      productStore.setProducts(response.products);
      getCourses();
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const courses = ref();

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
      getLatestProduct();
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const loadingTwo = ref(true);
const latestProduct = ref({});

const getLatestProduct = async () => {
  loadingTwo.value = true;
  const { data } = await $fetch("http://localhost:3333/products/latest", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.product);
      latestProduct.value = response.product[0];
      getLatestFour();
      loadingTwo.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const latestFour = ref([]);
const loadingThree = ref(true);

const getLatestFour = async () => {
  loadingThree.value = true;
  const { data } = await $fetch("http://localhost:3333/products/lastfour", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.products);
      latestFour.value = response.products;
      loadingThree.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  const TL = gsap.timeline();
  TL.to(".LoadingDiv", {
    display: "none",
    delay: 0.9,
  });
  TL.to(".Up", { opacity: 1, duration: 0.7 });
  TL.fromTo(
    ".Up2",
    { opacity: 0, duration: 0.6 },
    { opacity: 1, duration: 0.6 }
  );

  TL.to(".P", { opacity: 1, duration: 0.3 });
  TL.to(".O", { opacity: 1, duration: 0.3 });
  TL.to(".C", { opacity: 1, duration: 0.3 });
  TL.to(".U", { opacity: 1, duration: 0.3 });
  TL.to(".S", { opacity: 1, duration: 0.3 });
  TL.to(".Store", { opacity: 1, duration: 0.7, delay: 0.4 });
  window.addEventListener("load", () => {
    TL.play();
  });
  getProducts();
  gsap.fromTo(
    ".star",
    { opacity: -1, duration: 0.4 },
    {
      yoyo: true,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(1.7)",

      repeat: -1,
    }
  );
  gsap.fromTo(
    ".star2",
    { opacity: -1, delay: 0.4, duration: 0.4 },
    {
      yoyo: true,
      opacity: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      delay: 0.4,
      repeat: -1,
    }
  );
  gsap.from(".SCards", {
    opacity: 0,
    x: 80,
    stagger: 0.4,
    duration: 0.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".SCardsTrigger",
      start: "bottom center",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".FCards", {
    opacity: 0,
    y: 80,
    duration: 0.9,
    stagger: 0.4,

    ease: "power4.out",
    scrollTrigger: {
      trigger: ".FCardsTrigger",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.from(".Cardist", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".CardistTrigger",
      start: "bottom center",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
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
</style>
