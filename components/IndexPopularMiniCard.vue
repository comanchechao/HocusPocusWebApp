<template>
  <div
    class="h-auto rounded-lg bg-mainWhite duration-200 overflow-hidden ease-in-out transition hover:shadow-lg cursor-pointer w-full shadow-md shadow-transparent hover:shadow-mainRed border-mainRed"
  >
    <div
      class="w-full flex items-center justify-center h-72 oerflow-hidden mb-3 bg-mainWhite rounded-t-lg"
    >
      <NuxtLink :to="'/shop/productdetail/' + item.id">
        <div class="flex justify-center items-center">
          <img
            v-if="!loading"
            :src="image"
            class="h-[17rem] w-full object-fill"
            alt=""
          />
          <ProgressSpinner
            v-if="loading"
            style="width: 50px; height: 50px"
            strokeWidth="8"
            animationDuration=".5s"
            aria-label="Custom ProgressSpinner"
          />
        </div>
      </NuxtLink>
    </div>
    <div
      class="w-full p-4 h-1/4 flex flex-col items-center justify-center space-y-4"
    >
      <div class="flex items-center flex-col space-y-2 justify-around w-full">
        <NuxtLink :to="'/shop/productdetail/' + item.id">
          <h2 class="text-darkPurple text-center text-md lg:text-lg flex">
            <span> {{ item.title }} </span>
          </h2>
        </NuxtLink>
        <h3
          class="text-sm border-2 border-dashed border-darkPurple rounded-md px-5 text-mainBrown flex items-center justify-center space-x-2"
        >
          <span class="text-xs text-darkPurple">تومان</span>
          <span>{{ item.price }}</span>
          <PhMoney :size="20" weight="fill" />
        </h3>
      </div>
      <button
        @click="addToCart(item)"
        class="w-full justify-center mt-3 py-1 shadow-md bg-mainYellow shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-xs duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
      >
        <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
      </button>
      <Message :closable="false" v-show="addSuccess" severity="success">
        <span class="lg:text-sm text-xs z-30 bg-mainWhite"
          >به سبد خرید اضافه شد</span
        >
      </Message>
    </div>
  </div>
</template>
<script setup>
import { PhMoney, PhShoppingBagOpen } from "@phosphor-icons/vue";
import { useProductStore } from "~/stores/productStore";
const props = defineProps(["item"]);

// assign product store

const productStore = useProductStore();

const image = ref(`data:image/jpeg;base64,${props.item.cover}`);

const addSuccess = ref(false);

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

const addToCart = (product) => {
  productStore.addToShoppingCart(product);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};
</script>
