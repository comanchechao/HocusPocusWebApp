<template>
  <div class="">
    <Sidebar position="right" v-model:visible="visible">
      <div
        class="w-full h-full bg-darkPurple flex items-center justify-center flex-col pb-5"
      >
        <div class="w-full h-full flex items-center space-y-10 flex-col p-5">
          <div
            v-show="shoppingCart.length"
            v-for="item in shoppingCart"
            :key="item"
            class="w-full flex flex-col items-center space-y-7 h-48"
          >
            <div
              class="w-full h-24 border-y space-x-4 border-r rounded-md border-mainRed justify-between pr-8 flex items-center"
            >
              <div class="w-24 h-24 flex items-center justify-center">
                <LazyProductImage
                  :productId="item.ProductImages[0].id"
                  class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
                  alt=""
                />
              </div>
              <h3 class="text-lg text-mainYellow flex flex-col items-center">
                <span> {{ item.title }} </span>
              </h3>
              <h3 class="text-lg text-mainYellow flex flex-col items-center">
                <span> {{ item.price }} </span>
                <span class="text-mainRed text-md">تومان</span>
              </h3>
              <!-- <div
                class="h-full flex flex-col items-center justify-center"
              ></div> -->
            </div>
            <div class="flex items-center space-x-3">
              <PhPlusSquare
                @click="increaseItem(item.id)"
                class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                :size="32"
              />

              <h4
                class="px-3 py-1 border-2 text-mainRed font-bold border-mainYellow rounded-full"
              >
                {{ item.quantity }}
              </h4>
              <PhMinusSquare
                @click="decreaseItem(item.id)"
                class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                :size="32"
              />
              <button
                @click="removeFromCart(item.id)"
                class="text-red-500 px-5 py-1 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
              >
                <PhTrash :size="30" />
              </button>
            </div>
          </div>
        </div>
        <NuxtLink v-if="$route.path.startsWith('/learn')" to="/learn/checkout">
          <button
            class="text-xl bg-mainYellow active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-darkPurple text-darkPurple"
          >
            <span>تکمیل خرید</span>
          </button>
        </NuxtLink>
        <NuxtLink
          v-if="$route.path === '/' || $route.path.startsWith('/shop/')"
          to="/shop/checkout"
        >
          <button
            class="text-xl bg-mainRed active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
          >
            <span>تکمیل خرید</span>
          </button>
        </NuxtLink>
      </div>
    </Sidebar>
    <button
      :class="{
        'hover:border-mainOrange relative text-mainYellow hover:shadow-mainOrange hover:text-mainOrange':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
        'hover:border-mainViolet relative text-mainRed hover:shadow-mainViolet hover:text-mainViolet':
          $route.path === '/' || $route.path.startsWith('/shop/'),
      }"
      class="text-xl active:text-darkPurple active:bg-mainRed flex items-center px-2 py-1 transition duration-150 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
      @click="visible = true"
    >
      <Badge
        class="absolute -top-2 right-7"
        v-show="shoppingCart.length"
        :value="shoppingCart.length"
      ></Badge>
      <PhShoppingBagOpen :size="30" />
    </button>
  </div>
</template>

<script setup>
import { useProductStore } from "../stores/productStore";

// register product store

const productStore = useProductStore();
const { shoppingCart } = storeToRefs(productStore);

const removeFromCart = (product) => {
  productStore.removeProduct(product);
};

const decreaseItem = (product) => {
  productStore.decreaseQuantity(product);
};

const increaseItem = (product) => {
  productStore.increaseQuantity(product);
};

onMounted(() => {
  console.log(shoppingCart.value, "this is shopping cart value");
});

import {
  PhShoppingBagOpen,
  PhMinusSquare,
  PhPlusSquare,
  PhTrash,
} from "@phosphor-icons/vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const visible = ref(false);
</script>
<style>
.p-badge {
  background-color: chocolate;
}
</style>
