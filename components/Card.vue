<template>
  <div
    class="h-auto rounded-lg relative bg-mainWhite duration-200 ease-in-out transition hover:shadow-lg cursor-pointer w-full shadow-md shadow-transparent hover:shadow-mainRed my-10 border-mainRed"
  >
    <div
      class="w-44 h-10 absolute -top-0 rounded-md bg-mainPink space-x-1 flex items-center justify-center"
    >
      <h2>درصد تخفیف</h2>
      <h2 class="font-bold text-2xl">23</h2>
    </div>
    <div
      class="w-full flex items-center justify-center h-72 overflow-hidden mb-3 bg-mainWhite rounded-t-lg opacity-0"
      id="div1"
      v-show="showDiv1"
      @mouseenter="toggleDiv1"
      @mouseleave="toggleDiv2"
    >
      <!-- <img
        src="../assets/images/Psychonauts2.webp"
        class="w-full object-fill opacity-100 backdrop-blur-3xl"
        alt=""
      /> -->

      <ProductImage
        class="h-72 object-contain"
        :productId="props.product.ProductImages[0].id"
      >
      </ProductImage>
    </div>
    <div
      class="w-full items-center justify-center flex h-72 mb-3 bg-mainWhite rounded-t-lg"
      id="div2"
      v-show="showDiv2"
      @mouseenter="toggleDiv1"
    >
      <ProductImage
        class="h-72 object-contain"
        :productId="props.product.ProductImages[1].id"
      >
      </ProductImage>
      <!-- <img
          src="../assets/images/Psychonauts.webp"
          class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
          alt=""
        /> -->
    </div>

    <div class="w-full h-full flex items-end flex-col px-7 py-5 space-y-4">
      <h3
        class="text-center leading-snug title font-bold text-xl text-darkPurple"
      >
        {{ props.product.title }}
      </h3>
      <!-- <h3 class="text-center leading-snug title text-xl text-darkPurple">
        Seafarers: Commodore Edition Playing Cards
      </h3> -->
      <h3
        class="text-xl border-2 border-dashed w-full border-darkPurple rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
      >
        <span class="text-xs text-mainRed">تومان</span>
        <span class="line-through">{{ props.product.price }}</span>
        <span class="text-mainPink">599,000</span>
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
          class="justify-center w-14 h-10 shadow-md border-mainPink border-2 flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-darkPurple hover:text-mainPink hover:border-darkPurple hover:bg-darkPurple rounded-md"
        >
          <PhShoppingBagOpen :size="30" weight="fill" />
        </button>
      </div>
      <Message :closable="false" v-show="addSuccess" severity="success">
        <span class="lg:text-sm text-sm font-bold">به سبد خرید اضافه شد</span>
      </Message>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "../stores/productStore";

import { ref, watch } from "vue";
import { PhInfo, PhShoppingBagOpen, PhMoney } from "@phosphor-icons/vue";
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

// register product store

const productStore = useProductStore();

const addToCart = (product: any) => {
  productStore.addToShoppingCart(product);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};

onMounted(() => {
  console.log();
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
