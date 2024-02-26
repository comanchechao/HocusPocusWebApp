<template>
  <head>
    <title>تکمیل خرید - هوکوس پوکوس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar />

    <div class="lg:h-full pt-24 h-auto w-full p-6 lg:px-20">
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
        <div class="lg:h-full h-full w-full lg:w-2/3 flex flex-col items-end">
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainRed text-darkPurple text-2xl"
          >
            <span> اطلاعات ارسال </span>
            <PhInfo :size="30" weight="fill" />
          </h3>
          <div class="h-full w-full flex items-center">
            <LazyCustomerInfoCheckout />
          </div>
          <NuxtLink class="w-full flex items-center justify-center">
            <button
              v-show="isLogged"
              @click="getUser()"
              class="lg:text-lg justify-center text-sm flex items-center bg-darkPurple space-x-2 w-96 self-center py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
            >
              <span> تایید و ادامه به درگاه بانکی </span>
              <PhShoppingBagOpen :size="35" weight="fill" />
            </button>
          </NuxtLink>
          <Message
            class="space-x-4 flex items-center justify-center"
            severity="info"
            v-show="gatewayRedirect"
          >
            <span class="text-right mx-3"> درحال انتقال به درگاه</span>
            <ProgressSpinner
              style="width: 20px; height: 20px"
              strokeWidth="8"
              animationDuration=".5s"
              aria-label="Custom ProgressSpinner"
            />
          </Message>
          <Message
            v-for="error in errorMessages.slice(0, 2)"
            :key="error"
            severity="error"
            >{{ error }}</Message
          >

          <!-- <Message severity="error" v-show="errorMessage"
            >لطفا اطلاعات خود را بررسی کنید</Message
          > -->
          <Message severity="error" v-show="authError"
            >لطفا وارد حساب کاربری خود شوید</Message
          >

          <div
            v-show="!isLogged"
            class="lg:text-sm px-5 justify-center text-sm flex items-center bg-darkPurple space-x-2 self-center transition duration-150 ease-in-out border-b-8 border-mainYellow rounded-lg shadow-mainOrange shadow-md text-mainRed"
          >
            <LazyLogin v-show="!isLogged" />
            <span> برای تکمیل خرید وارد خود شوید </span>
          </div>
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
              class="w-full flex-col space-y-3 h-full flex items-center justify-center"
              v-if="item in shoppingCart === false"
              :key="item"
            >
              <PhBasket size="99" class="opacity-60 text-mainBlack" />
              <h3
                class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainRed text-darkPurple text-lg lg:text-2xl"
              >
                <span> سبد شما خالیست </span>
              </h3>
            </div>
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
          <div
            class="h-24 w-full rounded-md flex items-center justify-center space-x-2"
          >
            <h2
              class="text-mainPink flex items-center justify-center space-x-1 text-md px-3 py-2 rounded-md border-2 border-dashed border-mainPink"
            >
              <span class="text-sm text-darkPurple">تومان</span>
              <span>{{ cartTotalPrice }}</span>
            </h2>
            <h2 class="text-darkPurple text-sm">مجموع خرید</h2>
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
import { useUserStore } from "~/stores/user";
const runtimeConfig = useRuntimeConfig();

// checkout function

const gatewayRedirect = ref(false);
const auth = ref();

const checkoutFunc = async function () {
  gatewayRedirect.value = true;
  setTimeout(() => {
    gatewayRedirect.value = false;
  }, 5000);
  const data = new URLSearchParams({
    amount: cartTotalPrice.value * 10,
    phoneNumber: phoneNumber.value,
    orderId: submitedOrdersId.value,
    userId: userId.value,
    email: email.value,
    name: fullname.value,
  });
  await $fetch("http://localhost:3333/payment-records/togateway", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then(async (response, error) => {
      console.log(response.data.authority);
      auth.value = response.data.authority;
    })
    .catch((error) => {});
};

watch(auth, (cur, old) => {
  openNewTab(`https://www.zarinpal.com/pg/StartPay/${cur}`);
});

function openNewTab(url) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.click();
}

const togateway = async function (authority) {
  const data = new URLSearchParams({
    authority: authority,
  });
  await $fetch(`http://localhost:3333/auth/togateway/${authority}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    withCredentials: true,
  })
    .then(async (response, error) => {
      console.log(response, "here");
    })
    .catch((error) => {
      console.log(error.response.data.url.url, "here");
      if (error.response && error.response.status === 307) {
        window.location.href = error.response.data.url;
      }
    });
};

// register user store

const userStore = useUserStore();

const { isLogged } = storeToRefs(userStore);

// register product store

const productStore = useProductStore();

const { shoppingCart, cartTotalPrice } = storeToRefs(productStore);

// register checkout store

const checkoutStore = useCheckoutStore();

const { phoneNumber, fullname, city, region, postalCode, email, address } =
  storeToRefs(checkoutStore);

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

const errorMessages = ref([]);

const submitedOrdersId = ref();
const errorMessage = ref(false);
const submitOrder = async (userId) => {
  errorMessages.value = [];
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

  if (phoneNumber.value === "") {
    errorMessages.value.push("لطفا شماره تلفن خود را وارد کنید");
  }
  if (fullname.value === "") {
    errorMessages.value.push("نام خود را وارد کنید");
  }
  if (city.value === "") {
    errorMessages.value.push("شهر محل سکونت خود را انتخاب فرمایید");
  }
  if (region.value === "") {
    errorMessages.value.push("استان محل سکونت خود را انتخاب فرمایید");
  }
  if (address.value === "") {
    errorMessages.value.push("ادرس محل سکونت خود را وارد کنید");
  }
  if (cartTotalPrice.value === 0) {
    errorMessages.value.push("سبد کالا شما خالی میباشد");
  }

  if (
    phoneNumber.value !== "" &&
    fullname.value !== "" &&
    city.value !== "" &&
    region.value !== "" &&
    address.value !== "" &&
    cartTotalPrice.value !== 0
  ) {
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
        if (response.order) {
          submitedOrdersId.value = response.order.id;
          orderItems();
          checkoutFunc();
        }
      })
      .catch((error) => {});
  } else {
    errorMessage.value = true;
    setTimeout(() => {
      errorMessage.value = false;
    }, 3000);
  }

  setTimeout(() => {
    errorMessages.value = [];
  }, 4000);
};

const authError = ref(false);

const getUser = async () => {
  const { data } = await $fetch("http://localhost:3333/auth/isauthenticated", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      userId.value = response.userId;
      submitOrder(response.userId);
    })
    .catch(function (error) {
      userStore.setNotLogged();
      authError.value = true;
      setTimeout(() => {
        authError.value = false;
      }, 3000);
    });
};

// assign router
const router = useRouter();

const orderItems = async () => {
  const cart = JSON.stringify(shoppingCart.value);
  const data = new URLSearchParams({});

  shoppingCart.value.forEach((item) => {
    data.append("items", [item.id, item.quantity]);
  });

  data.append("order_id", submitedOrdersId.value);

  await $fetch("http://localhost:3333/orders/submititems", {
    method: "POST",
    headers: {},
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {})
    .catch((error) => {
      console.log(error);
    });
};
</script>
