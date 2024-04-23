<template>
  <div
    class="h-auto rounded-lg bg-mainWhite duration-200 overflow-hidden ease-in-out transition hover:shadow-lg cursor-pointer w-full shadow-md shadow-transparent hover:shadow-mainRed my-10 border-mainRed"
  >
    <div
      class="w-full flex items-center justify-center h-72 overflow-hidden mb-3 bg-mainWhite rounded-t-lg opacity-0"
      id="div1"
      v-show="showDiv1"
      @mouseenter="toggleDiv1"
      @mouseleave="toggleDiv2"
    >
      <NuxtLink :to="'/shop/productdetail/' + product.id">
        <ProductImage
          class="h-72 object-contain"
          :productId="props.product.ProductImages[1].id"
        >
        </ProductImage>
      </NuxtLink>
    </div>
    <div
      class="w-full items-center justify-center overflow-hidden flex h-72 mb-3 bg-mainWhite rounded-t-lg"
      id="div2"
      v-show="showDiv2"
      @mouseenter="toggleDiv1"
    >
      <!-- <NuxtLink :to="'/shop/productdetail/' + product.id">
        <ProductImage
          class="h-72 object-fill"
          :productId="props.product.ProductImages[0].id"
        >
        </ProductImage>
      </NuxtLink> -->
      <div class="object-contain">
        <img :src="image" class="h-72 object-fill" alt="" />
      </div>

      <!-- <img
          src="../assets/images/Psychonauts.webp"
          class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
          alt=""
        /> -->
    </div>

    <div
      class="w-full h-full z-30 mt-3 flex items-end flex-col px-7 py-5 space-y-4"
    >
      <div class="w-full justify-between flex items-center">
        <h2 class="flex items-center space-x-1">
          <PhStar class="text-mainPink" size="20" weight="fill"></PhStar>
          <span class="">{{ rating }}</span>
        </h2>
        <NuxtLink :to="'/shop/productdetail/' + product.id">
          <h3
            class="text-center rounded-sm border-b-4 border-mainPink hover:border-mainYellow title text-sm duration-200 transition ease-in-out hover:text-blue-600 text-darkPurple"
          >
            {{ props.product.title }}
          </h3>
        </NuxtLink>
      </div>
      <!-- <h3 class="text-center leading-snug title text-xl text-darkPurple">
        Seafarers: Commodore Edition Playing Cards
      </h3> -->
      <h3
        v-show="!isOff"
        class="text-xl border-2 border-dashed w-full border-darkPurple rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
      >
        <span class="text-xs text-mainRed">تومان</span>
        <span>{{ props.product.price }}</span>
        <PhMoney :size="34" weight="fill" />
      </h3>
      <h3
        v-show="isOff"
        class="text-xl border-2 border-dashed w-full border-darkPurple rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
      >
        <span class="text-xs text-mainRed">تومان</span>
        <span v-if="offPrice" class="text-mainPink">{{ offPrice }}</span>
        <span
          :class="{ 'line-through': offPrice, 'no-underline': !offPrice }"
          >{{ props.product.price }}</span
        >
        <PhMoney :size="34" weight="fill" />
      </h3>

      <div class="flex space-x-3 items-end w-full justify-end h-auto">
        <NuxtLink
          class="w-full flex items-center justify-center"
          :to="'/shop/productdetail/' + product.id"
        >
          <button
            class="px-3 py-2 border-2 justify-center w-full border-darkPurple shadow-sm shadow-mainRed flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-darkPurple hover:text-mainRed hover:bg-darkPurple rounded-md"
          >
            <span> جزئیات بیشتر </span> <PhInfo :size="20" /></button
        ></NuxtLink>
        <!-- <NuxtLink to="/shop/productDetail" class="w-full">
          <button
            class="px-3 w-full flex items-center justify-center py-2 border-2 border-darkPurple shadow-sm shadow-mainRed space-x-2 transition text-sm duration-200 ease-in-out text-darkPurple hover:text-mainRed hover:bg-darkPurple rounded-md"
          >
            <span> جزئیات بیشتر </span> <PhInfo :size="20" /></button
        ></NuxtLink> -->
        <button
          @click="addToCart(props.product)"
          class="justify-center w-14 h-10 shadow-md text-darkPurple bg-mainPink border-2 flex items-center space-x-2 transition text-sm duration-200 ease-in-out hover:text-mainPink hover:border-darkPurple hover:bg-darkPurple rounded-md"
        >
          <PhShoppingBagOpen :size="30" weight="fill" />
        </button>
      </div>
      <Message :closable="false" v-show="addSuccess" severity="success">
        <span class="lg:text-sm text-sm">به سبد خرید اضافه شد</span>
      </Message>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "../stores/productStore";

import { ref, watch } from "vue";
import {
  PhInfo,
  PhShoppingBagOpen,
  PhMoney,
  PhStar,
} from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const addSuccess = ref(false);
const loading = ref(true);
const showDiv1 = ref();
const showDiv2 = ref(true);

function toggleDiv1() {
  showDiv1.value = true;
  showDiv2.value = false;
}

function toggleDiv2() {
  showDiv1.value = false;
  showDiv2.value = true;
}

watch([showDiv1, showDiv2], (values) => {
  const [div1Visible, div2Visible] = values;
  const TL = $gsap.timeline();
  if (div1Visible) {
    TL.fromTo(
      "#div1",
      { opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
      }
    );
  } else if (div2Visible) {
    TL.to("#div2", {
      y: 0,

      opacity: 1,
      duration: 1.3,
      ease: "power2.out",
    });
  }
});
const props = defineProps(["product"]);

const image = ref(`data:image/jpeg;base64,${props.product.cover}`);

// register product store

const productStore = useProductStore();

const addToCart = (product: any) => {
  productStore.addToShoppingCart(product);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};

const offPrice = ref();
const isOff = ref(false);

function calculateDiscountedPrice(price: number, discountPercentage: number) {
  let discountedPrice = price - price * (discountPercentage / 100);
  offPrice.value = discountedPrice;
  if (props.product.price !== offPrice.value) {
    isOff.value = true;
  }
}

const rating = ref(0);
onMounted(() => {
  rating.value = Math.floor(
    Math.random() * (Math.floor(6) - Math.ceil(3)) + Math.ceil(3)
  );
  calculateDiscountedPrice(
    Number(props.product.price),
    Number(props.product.discount)
  );
});
</script>

<style>
#div1,
#div2 {
  transition: opacity 0.2s;
}
</style>
<style>
@font-face {
  font-family: "Pocus";
  src: url("../assets/fonts/RobotoCondensed-Bold.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}
</style>
