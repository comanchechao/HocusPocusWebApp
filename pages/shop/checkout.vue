<template>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />

    <div class="lg:h-full h-auto w-screen p-8 lg:px-20">
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end my-10 space-x-2 lg:space-x-4"
      >
        <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span class="rounded-md border-b-2 border-mainRed"> تکمیل خرید </span>
        </h2>
        <NuxtLink to="/shop/shop">
          <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
            <PhCaretLeft :size="20" weight="fill" />
            <span> خرید </span>
          </h2>
        </NuxtLink>
        <NuxtLink to="/">
          <h2 class="text-mainRed flex space-x-3 items-center cursor-pointer">
            <PhCaretLeft :size="20" weight="fill" />
            <span> خونه </span>
          </h2>
        </NuxtLink>
      </div>
      <div
        class="w-full h-full bg-white p-6 flex lg:flex-row flex-col-reverse items-center space-x-4 rounded-md"
      >
        <div class="lg:h-dialog h-full w-full lg:w-2/3 flex flex-col items-end">
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainRed text-darkPurple text-2xl"
          >
            <span> اطلاعات ارسال </span>
            <PhInfo :size="30" weight="fill" />
          </h3>
          <div class="h-full w-full flex items-center">
            <LazyCustomerInfoCheckout :isVisible="true" />
          </div>
          <button
            @click="getUser()"
            class="lg:text-xl text-md px-10 active:text-darkPurple active:bg-mainRed flex items-center space-x-2 self-center justify-center py-2 transition duration-300 bg-darkPurple ease-in-out border-2 hover:bg-mainRed hover:text-darkPurple border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet text-mainRed"
          >
            <span> تایید و ادامه به درگاه بانکی </span>
            <PhShoppingBagOpen :size="35" weight="fill" />
          </button>
        </div>
        <div
          class="h-dialog w-full lg:w-1/3 lg:border-l-2 border-mainRed flex flex-col items-end"
        >
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainRed text-darkPurple text-lg lg:text-2xl"
          >
            <span> محصولات انتخاب شده </span>
            <PhBasket :size="30" weight="fill" />
          </h3>
          <div
            class="w-full h-full flex items-center flex-col px-9 pt-9 overscroll-y-scroll"
          >
            <div
              v-for="item in shoppingCart"
              :key="item"
              class="w-full flex flex-col items-center space-y-7 h-48"
            >
              <div
                class="w-full h-24 justify-between pr-8 flex items-center border-2 rounded-sm border-mainRed"
              >
                <div class="w-24 h-full bg-white p-3">
                  <LazyOrderItemImage :productId="item.ProductImages[0].id" />
                </div>
                <h3 class="text-xl text-darkPurple flex flex-col items-center">
                  <span> {{ item.price }} </span>
                  <span class="text-mainRed text-sm">تومان</span>
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
                  class="px-3 py-1 border-2 text-darkPurple font-bold border-mainYellow rounded-full"
                >
                  {{ item.quantity }}
                </h4>
                <PhMinusSquare
                  @click="decreaseItem(item.id)"
                  class="text-mainYellow cursor-pointer transition ease-in hover:bg-mainYellow hover:text-darkPurple"
                  :size="32"
                />
                <button
                  class="text-red-500 px-5 py-1 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
                >
                  <PhTrash @click="removeItem(item.id)" :size="30" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  PhShoppingBagOpen,
  PhMinusSquare,
  PhPlusSquare,
  PhTrash,
  PhCaretLeft,
  PhInfo,
  PhBasket,
} from "@phosphor-icons/vue";
import { storeToRefs } from "pinia";
import { useCheckoutStore } from "../../stores/checkoutStore";
import { useProductStore } from "../../stores/productStore";

// register product store

const productStore = useProductStore();

const { shoppingCart, cartTotalPrice } = storeToRefs(productStore);

// register checkout store

const checkoutStore = useCheckoutStore();

const { phoneNumber, fullname, city, region, postalCode, email, address } =
  storeToRefs(checkoutStore);

watch(phoneNumber, (cur, old) => {
  console.log(
    phoneNumber.value,
    fullname.value,
    city.value,
    region.value,
    postalCode.value,
    email.value,
    address.value
  );
});

const increaseItem = (itemId) => {
  productStore.increaseQuantity(itemId);
};
const decreaseItem = (itemId) => {
  productStore.decreaseQuantity(itemId);
};

const removeItem = (itemId) => {
  productStore.removeProduct(itemId);
};

// handle order submit

const userId = ref();

const submitedOrdersId = ref();

const submitOrder = async (userId) => {
  const data = new URLSearchParams({
    userId: userId,
    totalPrice: cartTotalPrice.value,
    estimatedDeliveryDays: 5,
    city: city.value,
    region: region.value,
    address: address.value,
    fullname: fullname.value,
    phone_number: phoneNumber.value,
    postal_code: postalCode.value,
  });

  await $fetch("http://localhost:3333/orders/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      console.log(response);
      if (response.order) {
        submitedOrdersId.value = response.order.id;
        orderItems();
      }
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(
    phoneNumber.value,
    fullname.value,
    city.value,
    region.value,
    postalCode.value,
    email.value,
    address.value
  );
};

const getUser = async () => {
  const { data } = await $fetch("http://localhost:3333/auth/isauthenticated", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.userId);
      userId.value = response.userId;
      submitOrder(response.userId);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const orderItems = async () => {
  const cart = JSON.stringify(shoppingCart.value);
  const data = new URLSearchParams({});

  shoppingCart.value.forEach((item) => {
    console.log(item.id);
    data.append("items", [item.id, item.quantity]);
  });

  console.log(data);

  data.append("order_id", submitedOrdersId.value);

  await $fetch("http://localhost:3333/orders/submititems", {
    method: "POST",
    headers: {},
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(
    phoneNumber.value,
    fullname.value,
    city.value,
    region.value,
    postalCode.value,
    email.value,
    address.value
  );
};
</script>
