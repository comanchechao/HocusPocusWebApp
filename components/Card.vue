<template>
  <div
    class="h-auto rounded-lg bg-mainWhite duration-200 ease-in-out transition hover:shadow-xl cursor-pointer w-96 shadow-md shadow-transparent hover:shadow-mainRed my-10 border-mainRed"
  >
    <div
      class="w-full h-full bg-white rounded-t-sm opacity-0 mb-2"
      id="div1"
      v-show="showDiv1"
      @mouseenter="toggleDiv1"
      @mouseleave="toggleDiv2"
    >
      <img
        src="../assets/images/Psychonauts2.webp"
        class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
        alt=""
      />
      <!-- <ProductImage :productId="props.product.ProductImages[0].id">
      </ProductImage> -->
    </div>
    <div
      class="w-full h-72 bg-white rounded-t-sm mb-2"
      id="div2"
      v-show="showDiv2"
      @mouseenter="toggleDiv1"
      @mouseleave="toggleDiv2"
    >
      <img
        src="../assets/images/Psychonauts.webp"
        class="w-full mt-4 h-full object-contain opacity-100 backdrop-blur-3xl"
        alt=""
      />
    </div>

    <div class="w-full h-full flex items-center flex-col px-7 py-5 space-y-4">
      <h3 class="text-center leading-snug title text-xl text-darkPurple">
        {{ props.product.title }}
      </h3>
      <!-- <h3 class="text-center leading-snug title text-xl text-darkPurple">
        Seafarers: Commodore Edition Playing Cards
      </h3> -->
      <h3
        class="text-xl border-2 border-dashed border-darkPurple rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
      >
        <span class="text-xs text-mainRed">تومان</span>
        <span>{{ props.product.price }}</span>
        <!-- <span>599,000</span> -->
        <PhMoney :size="34" weight="fill" />
      </h3>
      <button
        @click="addToCart(props.product)"
        class="w-44 justify-center py-2 shadow-md bg-mainRed hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
      >
        <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
      </button>
      <NuxtLink :to="'/shop/productdetail/' + product.id">
        <button
          class="px-8 py-2 border-2 border-darkPurple shadow-sm shadow-mainRed flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-darkPurple hover:text-mainRed hover:bg-darkPurple rounded-md"
        >
          <span> جزئیات بیشتر </span> <PhInfo :size="20" /></button
      ></NuxtLink>
      <!-- <NuxtLink>
        <button
          class="px-8 py-2 border-2 border-darkPurple shadow-sm shadow-mainRed flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-darkPurple hover:text-mainRed hover:bg-darkPurple rounded-md"
        >
          <span> جزئیات بیشتر </span> <PhInfo :size="20" /></button
      ></NuxtLink> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from "../stores/productStore";

import { ref, watch } from "vue";
import { PhInfo, PhShoppingBagOpen } from "@phosphor-icons/vue";
const { $gsap } = useNuxtApp();
const showDiv1 = ref(true);
const showDiv2 = ref();
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
    TL.fromTo(
      "#div2",
      { opacity: 0 },
      {
        y: 0,

        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
      }
    );
  }
});
const props = defineProps(["product"]);

// register product store

const productStore = useProductStore();

const addToCart = (product: any) => {
  productStore.addToShoppingCart(product);
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

.title {
  font-family: "Pocus";
}
</style>
