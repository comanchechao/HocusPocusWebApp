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
      <div class="w-full h-full justify-center flex items-center p-8 flex-col">
        <!-- <h2 class="text-6xl neonText">ورود</h2> -->
        <div
          class="grid lg:grid-cols-2 place-items-center gap-3 md:grid-cols-2 grid-cols-1"
        >
          <div class="flex items-end flex-col space-y-2">
            <label class="text-xl text-mainRed" for="username"
              >نام کاربری</label
            >
            <InputText
              id="username"
              v-model="loginUsername"
              aria-describedby="username-help"
            />
            <small class="text-sm text-mainViolet" id="username-help"
              >ایمیل خودتون رو وارد کنید</small
            >
          </div>
          <div class="flex items-end flex-col space-y-2">
            <label class="text-xl text-mainRed" for="email">ایمیل</label>
            <InputText
              id="email"
              v-model="loginEmail"
              aria-describedby="username-help"
            />
            <small class="text-sm text-mainViolet" id="username-help"
              >ایمیل خودتون رو وارد کنید</small
            >
          </div>
          <div
            class="flex items-end flex-col space-y-2 md:col-span-2 justify-self-end lg:col-span-2"
          >
            <label class="text-xl text-mainRed" for="password">رمز عبور</label>
            <InputText
              id="password"
              v-model="loginPassword"
              aria-describedby="username-help"
            />
            <small class="text-sm text-mainViolet" id="username-help"
              >رمز عبور خودتون رو وارد کنید</small
            >
          </div>
        </div>
        <div class="h-full w-full flex flex-col items-center space-y-5">
          <Message
            class="w-full text-right absolute"
            v-show="successLogin"
            severity="success"
          >
            <span class="lg:text-2xl text-md font-bold"
              >ورود موفقیت آمیز بود</span
            >
          </Message>
          <Message
            class="w-full text-right absolute"
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
              class="text-xl flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <ProgressSpinner
                v-if="loading"
                style="width: 30px; height: 30px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
              <span v-if="!loading"> ورود </span>
              <PhKeyhole v-if="!loading" :size="25" />
            </button>
            <LazySignUp />
          </div>
          <LazyPasswordRecovery></LazyPasswordRecovery>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhKeyhole } from "@phosphor-icons/vue";
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
    email: loginEmail.value,
    password: loginPassword.value,
    username: loginUsername.value,
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
      console.log(response);
      userStore.setLogState();
      loading.value = false;
      successLogin.value = true;
      setTimeout(() => {
        successLogin.value = false;
      }, 3000);
      setTimeout(() => {
        visible.value = false;
      }, 1000);
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
      faildLogin.value = true;
    });
}
</script>
<style>
.p-dialog {
  max-height: 100% !important;
  max-width: 100% !important;
}
.p-message-wrapper {
  align-items: center;
  justify-content: center;
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
