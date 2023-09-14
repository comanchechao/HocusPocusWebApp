<template>
  <div
    class="h-auto rounded-md duration-200 ease-in-out transition hover:shadow-xl cursor-pointer w-72 shadow-md shadow-transparent hover:shadow-mainRed my-10 border-mainRed"
  >
    <div class="w-full h-96 p-9 bg-white rounded-t-sm">
      <ProductImage :productId="props.product.ProductImages[0].id">
      </ProductImage>
    </div>
    <div
      class="w-full h-full flex items-center flex-col px-7 py-5 bg-white space-y-4"
    >
      <h3 class="text-center leading-snug title text-xl text-darkPurple">
        {{ props.product.title }}
      </h3>
      <h3
        class="text-xl border-2 border-dashed border-darkPurple rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
      >
        <span class="text-xs text-mainRed">تومان</span>
        <span>{{ props.product.price }}</span>
        <PhMoney :size="34" weight="fill" />
      </h3>
      <button
        @click="addToCart(props.product)"
        class="w-44 justify-center py-2 shadow-md bg-mainRed hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
      >
        <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
      </button>
      <button
        class="px-8 py-2 border-2 border-darkPurple shadow-sm shadow-mainRed flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-darkPurple hover:text-mainRed hover:bg-darkPurple rounded-md"
      >
        <span> جزئیات بیشتر </span> <PhInfo :size="20" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { PhInfo, PhShoppingBagOpen } from "@phosphor-icons/vue";
import { useProductStore } from "../stores/productStore";
const props = defineProps(["product"]);

// register product store

const productStore = useProductStore();

const addToCart = (product) => {
  productStore.addToShoppingCart(product);
};

onMounted(() => {
  console.log();
});
</script>
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
