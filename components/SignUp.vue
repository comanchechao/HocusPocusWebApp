<template>
  <button
    label="Show"
    @click="visible = true"
    class="lg:text-xl justify-center text-lg flex items-center space-x-2 w-full py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow hover:border-mainRed rounded-lg shadow-mainOrange shadow-md border hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
  >
    <span> ثبت نام </span>
    <PhSignature :size="25" />
  </button>

  <Dialog
    :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
    v-model:visible="visible"
    modal
    :style="{ width: 'auto', backgroundColor: '#150531', height: 'auto' }"
    dismissableMask
    :contentStyle="{ backgroundColor: '#150531' }"
  >
    <div
      class="w-full h-full justify-center flex items-center lg:p-3 p-2 flex-col space-y-4"
    >
      <div class="grid lg:grid-cols-2 place-items-center gap-4 grid-cols-1">
        <div class="flex items-end flex-col space-y-2">
          <label class="text-xl text-mainRed" for="username">نام کاربری</label>
          <InputText
            id="username"
            v-model="signupUsername"
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
            v-model="signupEmail"
            aria-describedby="username-help"
          />
          <small class="text-sm text-mainViolet" id="username-help"
            >ایمیل خودتون رو وارد کنید</small
          >
        </div>
        <div
          class="flex items-end flex-col space-y-2 md:col-span-2 lg:col-span-2"
        >
          <label class="text-xl text-mainRed" for="password">رمز عبور</label>
          <InputText
            id="password"
            v-model="signupPassword"
            aria-describedby="username-help"
          />
          <small class="text-sm text-mainViolet" id="username-help"
            >رمز عبور خودتون رو وارد کنید</small
          >
        </div>
      </div>
      <div class="h-full w-full flex flex-col items-center relative space-y-5">
        <div class="absolute" v-if="Array.isArray(errorMessage)">
          <Message class="w-full" v-show="successSignup" severity="success">
            <span class="text-2xl">حساب کاربری با موفقیت ساخته شد</span>
          </Message>
          <Message class="w-full" v-show="succussLogin" severity="success">
            <span class="text-2xl">وارد حساب کاربری شدید</span>
          </Message>
          <Message
            v-for="error in errorMessage"
            :key="error"
            class="w-full"
            v-show="faildSignup"
            severity="error"
          >
            <span class="lg:text-xl text-md">{{ error }}</span>
          </Message>
        </div>
        <div v-else>
          <Message
            class="w-full text-right"
            v-show="faildSignup"
            severity="error"
          >
            <span class="lg:text-xl text-md">{{ errorMessage }}</span>
          </Message>
        </div>
      </div>
      <button
        label="Show"
        @click="formSubmit()"
        class="text-xl flex items-center space-x-2 w-full justify-center py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 30px; height: 30px"
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <span v-if="!loading"> ثبت نام </span>
        <PhSignature v-if="!loading" :size="25" />
      </button>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";
import { PhSignature } from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
const visible = ref(false);
const loading = ref(false);
// register user store

const userStore = useUserStore();

// sign up information

const signupUsername = ref("");
const signupEmail = ref("");
const signupPassword = ref("");

// signup state

const successSignup = ref(false);
const faildSignup = ref(false);
const errorMessage = ref("");

const succussLogin = ref(false);

async function formSubmit() {
  loading.value = true;
  const data = new URLSearchParams({
    email: signupEmail.value,
    password: signupPassword.value,
    username: signupUsername.value,
  });

  await $fetch("http://localhost:3333/auth/signup", {
    method: "POST",
    body: data,
  })
    .then(() => {
      loading.value = false;
      successSignup.value = true;
      setTimeout(() => {
        successSignup.value = false;
      }, 3000);
      loginFunction();
    })
    .catch((error) => {
      loading.value = false;
      faildSignup.value = true;
      errorMessage.value = error.data.message;
    });
}

async function loginFunction() {
  const data = new URLSearchParams({
    email: signupEmail.value,
    password: signupPassword.value,
    username: signupUsername.value,
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
      succussLogin.value = true;
      setTimeout(() => {
        succussLogin.value = false;
      }, 3000);
    })
    .catch(function (error) {
      console.error(error);
    });
}
</script>
<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: AUTO !important;
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
    width: AUTO !important;
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
