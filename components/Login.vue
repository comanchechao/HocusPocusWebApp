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
      <PhLockKey weight="fill" :size="25" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      :showHeader="false"
      modal
      :style="{ width: '40vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="w-full h-full justify-center flex items-center lg:p-16 flex-col lg:pt-8 pt-14 space-y-10"
      >
        <h2 class="text-6xl neonText">ورود</h2>
        <div class="flex flex-col items-center space-y-4">
          <div class="flex items-end flex-col space-y-4">
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
          <div class="flex items-end flex-col space-y-4">
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
          <div class="flex items-end flex-col space-y-4">
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
          <Message class="w-full" v-show="successLogin" severity="success">
            <span class="text-2xl">وارد حساب خود شدید</span>
          </Message>
          <Message class="w-full" v-show="faildLogin" severity="error">
            <span class="text-2xl">اطلاعات ورودی خود را چک کنید</span>
          </Message>
        </div>
        <div class="h-full w-full flex flex-col items-center space-y-5">
          <button
            label="Show"
            @click="formSubmit()"
            class="text-xl flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-mainViolet hover:border-mainRed rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
          >
            <span> ورود </span>
            <PhKeyhole :size="25" />
          </button>
          <LazySignUp />
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
      successLogin.value = true;
      setTimeout(() => {
        successLogin.value = false;
      }, 3000);
    })
    .catch(function (error) {
      console.error(error);
      faildLogin.value = true;
      setTimeout(() => {
        faildLogin.value = false;
      }, 3000);
    });
}
</script>
