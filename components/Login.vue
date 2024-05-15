<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      :class="{
        'hover:border-mainOrange text-mainYellow hover:shadow-mainOrange hover:text-mainOrange':
          $route.path === '/learn/learn' || $route.path.startsWith('/learn/'),
        'hover:border-mainViolet text-mainRed hover:shadow-mainViolet hover:text-mainViolet':
          $route.path === '/' || $route.path.startsWith('/shop/'),
      }"
      class="text-xl flex active:text-darkPurple active:bg-mainRed items-center space-x-2 px-8 py-1 transition duration-150 ease-in-out border-2 border-transparent rounded-sm shadow-md shadow-transparent"
    >
      <span> ورود </span>
      <PhKeyhole weight="fill" :size="25" />
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      :style="{ width: 'auto', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="w-full h-full justify-center flex items-center py-3 px-8 flex-col"
      >
        <!-- <h2 class="text-6xl neonText">ورود</h2> -->
        <div
          dir="rtl"
          class="grid lg:grid-cols-2 place-items-center gap-3 md:grid-cols-2 grid-cols-1"
        >
          <label
            class="form-control w-full flex items-start space-y-2 flex-col max-w-xs"
          >
            <div class="label">
              <span class="text-md text-mainYellow">نام کاربری</span>
            </div>
            <input
              dir="ltr"
              id="username"
              v-model="loginUsername"
              aria-describedby="username-help"
              type="text"
              class="input input-xl p-4 rounded-md input-bordered w-full max-w-xs"
            />
            <div class="label">
              <small class="text-xs text-mainViolet" id="username-help"
                >نام کاربری خودتون رو وارد کنید</small
              >
            </div>
          </label>
          <label
            class="form-control w-full flex items-start space-y-2 flex-col max-w-xs"
          >
            <div class="label">
              <span class="text-md text-mainYellow">ایمیل</span>
            </div>
            <input
              dir="ltr"
              id="email"
              v-model="loginEmail"
              aria-describedby="username-help"
              type="text"
              class="input input-xl p-4 rounded-md input-bordered w-full max-w-xs"
            />
            <div class="label">
              <small class="text-xs text-mainViolet" id="username-help"
                >ایمیل خودتون رو وارد کنید</small
              >
            </div>
          </label>
          <label
            class="form-control w-full flex items-start space-y-2 flex-col max-w-xs"
          >
            <div class="label">
              <span class="text-md text-mainYellow">رمز عبور</span>
            </div>
            <input
              dir="ltr"
              id="password"
              v-model="loginPassword"
              aria-describedby="username-help"
              type="text"
              class="input input-xl p-4 rounded-md input-bordered w-full max-w-xs"
            />
            <div class="label">
              <small class="text-xs text-mainViolet" id="username-help"
                >رمز عبور خودتون رو وارد کنید</small
              >
            </div>
          </label>
        </div>
        <div class="h-full w-full flex flex-col items-center space-y-5">
          <Message
            class="w-full bg-mainWhite text-right absolute top-0"
            v-show="successLogin"
            severity="success"
          >
            <span class="lg:text-2xl text-md">ورود موفقیت آمیز بود</span>
          </Message>
          <Message
            class="w-full text-right absolute bg-mainWhite"
            v-show="faildLogin"
            severity="error"
          >
            <span class="lg:text-xl text-md px-7"
              >اطلاعات ورودی خود را چک کنید</span
            >
          </Message>
          <div
            class="flex lg:flex-row w-full flex-col lg:px-20 items-center lg:space-y-0 space-y-4 lg:space-x-4"
          >
            <button
              label="Show"
              @click="formSubmit()"
              class="text-sm flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <ProgressSpinner
                v-if="loading"
                style="width: 30px; height: 30px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
              <span v-if="!loading"> ورود با ایمیل </span>
              <PhAt v-if="!loading" :size="25" />
            </button>
            <LazySignUp />
          </div>
          <h2 class="text-lg text-mainRed">یا</h2>
          <LazyPhoneLogin></LazyPhoneLogin>
          <div class="flex space-x-2 items-center">
            <LazyPasswordRecovery></LazyPasswordRecovery>
            <h2 class="text-sm text-mainRed">گذرواژه خود را فراموش کردید؟</h2>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhAt, PhKeyhole } from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";

const visible = ref(false);
const loading = ref(false);
//set up store

const userStore = useUserStore();

const loginEmail = ref("");
const loginPassword = ref("");
const loginUsername = ref("");

// log state configuration

const successLogin = ref(false);
const faildLogin = ref(false);
const errorMessage = ref("");

async function formSubmit() {
  loading.value = true;
  const data = new URLSearchParams({
    email: loginEmail.value.toLowerCase(),
    password: loginPassword.value,
    username: loginUsername.value.toLowerCase(),
  });

  await $fetch(
    "http://localhost:3333/auth/signin",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
      credentials: "include",
    },
    { withCredentials: true }
  )
    .then(function (response) {
      userStore.setLogState();
      loading.value = false;
      successLogin.value = true;
      testFunction();
      setTimeout(() => {
        successLogin.value = false;
      }, 2000);
      setTimeout(() => {
        visible.value = false;
      }, 2000);
    })
    .catch(function (error) {
      console.error(error);
      successLogin.value = false;
      loading.value = false;
      faildLogin.value = true;
      setTimeout(() => {
        faildLogin.value = false;
      }, 2000);
    });
}

async function testFunction() {
  await $fetch("http://localhost:3333/auth/ischeck", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    withCredentials: true,
  }).then(function (response) {
    console.log(response);
    if (response.check) {
      userStore.setManager();
    }
  });
}
</script>
<style>
.p-dialog {
  max-height: 100% !important;
  max-width: 100% !important;
}
.p-message-close.p-link {
  margin-left: 5px;
}
.p-message-wrapper {
  align-items: center;
  justify-content: end;
}
.p-message.p-message-error .p-message-close {
  margin-left: 0;
}
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
</style>
