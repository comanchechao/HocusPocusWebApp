<template>
  <head>
    <title>تکمیل خرید - هوکوس پوکوس</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-full pb-12 bg-mainBrown">
    <LazyNavbar />
    <div class="lg:h-full h-full w-screen p-8 pt-20 lg:px-20">
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end my-10 space-x-2 lg:space-x-4"
      >
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span class="pb-2 border-b-2 border-mainYellow"> تکمیل خرید </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> آموزش </span>
        </h2>
      </div>
      <div
        class="w-full lg:h-full bg-white p-6 flex lg:flex-row flex-col-reverse items-center space-x-4 rounded-md"
      >
        <div class="h-full w-full lg:w-2/3 flex flex-col items-end">
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainYellow text-darkPurple text-2xl"
          >
            <span> اطلاعات خرید </span>
            <PhInfo :size="30" weight="fill" />
          </h3>
          <div class="h-full w-full flex items-center">
            <LazyCustomerInfoCheckout :isVisible="true" />
          </div>
          <NuxtLink class="w-full flex items-center justify-center">
            <button
              v-show="isLogged"
              @click="getUser()"
              class="lg:text-xl text-md px-3 lg:px-10 active:text-darkPurple active:bg-mainYellow flex items-center space-x-2 self-center justify-center py-2 transition duration-300 ease-in-out bg-mainYellow text-darkPurple rounded-sm shadow-md shadow-transparent hover:shadow-mainOrange hover:text-mainYellow hover:bg-mainBrown"
            >
              <span> تایید و ادامه به درگاه بانکی </span>
              <PhShoppingBagOpen :size="35" weight="fill" />
            </button>
          </NuxtLink>

          <div
            v-show="!isLogged"
            class="lg:text-sm h-full px-5 justify-center text-sm flex items-center bg-darkPurple space-x-2 self-center py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow rounded-lg shadow-mainOrange shadow-md text-mainRed"
          >
            <LazyLogin v-show="!isLogged" />
            <span> برای تکمیل خرید وارد خود شوید </span>
          </div>
          <Message severity="error" v-show="faild">{{ errorMessages }}</Message>
        </div>
        <div
          class="h-full lg:h-dialog w-full lg:w-1/3 lg:border-l-2 border-mainYellow flex flex-col items-end"
        >
          <h3
            class="border-b-4 pb-2 flex items-center space-x-2 rounded-md border-mainYellow text-darkPurple text-lg lg:text-2xl"
          >
            <span> محصولات انتخاب شده </span>
            <PhBasket :size="30" weight="fill" />
          </h3>

          <div
            class="w-full h-full py-11 flex items-center flex-col px-9 pt-9 space-y-5 lg:overflow-y-scroll"
          >
            <div
              v-for="item in shoppingCart"
              :key="item.id"
              class="w-full flex flex-col items-center space-y-7 h-full"
            >
              <div
                class="w-full h-64 justify-center p-5 flex flex-col items-center border-2 rounded-md border-mainYellow"
              >
                <div
                  class="w-full flex items-center flex-col text-right space-y-6 justify-center h-full bg-white"
                >
                  <LazyVideoCardImage :courseId="item.CoursesImages" />
                  <h3 class="text-mainBrown text-md">
                    {{ item.title }}
                  </h3>
                </div>

                <!-- <div
                class="h-full flex flex-col items-center justify-center"
              ></div> -->
              </div>
              <div class="flex items-center space-x-3">
                <h3
                  class="text-xl text-darkPurple border-2 border-mainOrange border-dashed p-3 rounded-md flex space-x-2 items-center"
                >
                  <span class="text-mainYellow text-sm">تومان</span>
                  <span class="text-2xl">{{ item.price }} </span>
                </h3>
                <button
                  @click="removeItem(item.id)"
                  class="text-red-500 px-5 py-2 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
                >
                  <PhTrash :size="30" />
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
              <span class="text-sm text-darkPurple">تومان هزینه پست</span>
              <span>20000</span>
            </h2>
            <h2 class="font-bold text-2xl">+</h2>
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
  PhTrash,
  PhCaretLeft,
  PhInfo,
  PhBasket,
} from "@phosphor-icons/vue";
import { storeToRefs } from "pinia";
import { useCheckoutStore } from "~/stores/checkoutStore";
import { useCourseStore } from "~/stores/coursesStore";
import { useUserStore } from "~/stores/user";

// register user store

const userStore = useUserStore();

const { isLogged } = storeToRefs(userStore);

const checkoutStore = useCheckoutStore();

const { phoneNumber, fullname, city, region, postalCode, email, address } =
  storeToRefs(checkoutStore);

const submit = () => {
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

// register courseStore

const courseStore = useCourseStore();

const { shoppingCart, cartTotalPrice } = storeToRefs(courseStore);

const increaseItem = (itemId) => {
  courseStore.increaseQuantity(itemId);
};
const decreaseItem = (itemId) => {
  courseStore.decreaseQuantity(itemId);
};

const removeItem = (itemId) => {
  courseStore.removeProduct(itemId);
};

// user info

const userId = ref();

const getUser = async () => {
  const { data } = await $fetch("http://localhost:3333/auth/isauth", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      userId.value = response.userId;
      if (response.userId) {
        submitOrder();
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

const submitedOrdersId = ref();
const errorMessages = ref("");
const faild = ref(false);

const submitOrder = async () => {
  faild.value = false;

  if (phoneNumber.value === "") {
    faild.value = true;
    setTimeout(() => {
      faild.value = false;
    }, 2000);
    errorMessages.value = "لطفا شماره تلفن خود را وارد کنید";
  }
  if (fullname.value === "") {
    faild.value = true;
    setTimeout(() => {
      faild.value = false;
    }, 2000);
    errorMessages.value = "نام خود را وارد کنید";
  }
  if (city.value === "") {
    faild.value = true;
    setTimeout(() => {
      faild.value = false;
    }, 2000);
    errorMessages.value = "شهر محل سکونت خود را انتخاب فرمایید";
  }
  if (region.value === "") {
    faild.value = true;
    setTimeout(() => {
      faild.value = false;
    }, 2000);
    errorMessages.value = "استان محل سکونت خود را انتخاب فرمایید";
  }
  if (address.value === "") {
    faild.value = true;
    setTimeout(() => {
      faild.value = false;
    }, 2000);
    errorMessages.value = "ادرس محل سکونت خود را وارد کنید";
  }
  if (cartTotalPrice.value === 0) {
    faild.value = true;
    setTimeout(() => {
      faild.value = false;
    }, 2000);
    errorMessages.value = "سبد کالا شما خالی میباشد";
  }

  if (
    phoneNumber.value !== "" &&
    fullname.value !== "" &&
    city.value !== "" &&
    region.value !== "" &&
    address.value !== "" &&
    cartTotalPrice.value !== 0
  ) {
    const data = new URLSearchParams({
      userId: userId.value,
      totalPrice: cartTotalPrice.value,
      estimatedDeliveryDays: 5,
      city: city.value,
      region: region.value,
      address: address.value,
      fullname: fullname.value,
      phone_number: phoneNumber.value,
      postal_code: postalCode.value,
    });

    await $fetch("http://localhost:3333/videos/submit", {
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
      .catch((error) => {
        console.log(error);
      });
  }
};

// const getUser = async () => {
//   const { data } = await $fetch("http://localhost:3333/auth/isauthenticated", {
//     headers: {},
//     withCredentials: true,
//     credentials: "include",
//   })
//     .then(function (response) {
//       console.log(response.userId);
//       userId.value = response.userId;
//       submitOrder(response.userId);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

const orderItems = async () => {
  const data = new URLSearchParams({});

  shoppingCart.value.forEach((item) => {
    data.append("items", [item.id, item.quantity]);
  });

  data.append("membership_id", submitedOrdersId.value);

  await $fetch("http://localhost:3333/videos/submititems", {
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
};

onMounted(() => {
  getUser();
});
</script>

<style lang="scss" scoped></style>
