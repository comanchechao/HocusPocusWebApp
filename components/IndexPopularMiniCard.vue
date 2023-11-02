<template>
  <div
    class="h-full w-full bg-mainYellow space-y-4 flex flex-col items-end justify-end p-5"
  >
    <LazyLastProductImage :productId="item.ProductImages[0].id" />

    <h2 class="text-darkPurple font-bold text-center text-md lg:text-xl flex">
      <span> {{ item.title }} </span>
    </h2>
    <h3
      class="text-xl border-2 border-dashed border-darkPurple rounded-md py-1 px-5 text-mainBrown flex items-center justify-center space-x-2"
    >
      <span class="text-xs text-darkPurple">تومان</span>
      <span>{{ item.price }}</span>
      <PhMoney :size="34" weight="fill" />
    </h3>
    <button
      @click="addToCart(item)"
      class="w-full justify-center mt-3 py-2 shadow-md bg-mainYellow shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
    >
      <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
    </button>
    <Message :closable="false" v-show="addSuccess" severity="success">
      <span class="lg:text-sm text-sm font-bold">به سبد خرید اضافه شد</span>
    </Message>
  </div>
</template>
<script setup>
import { PhMoney, PhShoppingBagOpen } from "@phosphor-icons/vue";
import { useProductStore } from "~/stores/productStore";
const props = defineProps(["item"]);

// assign product store

const productStore = useProductStore();

const addSuccess = ref(false);

const addToCart = (product) => {
  productStore.addToShoppingCart(product);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};
</script>
