<template>
  <div class="card flex justify-center">
    <button
      label="Show"
      @click="visible = true"
      class="text-xl active:text-darkPurple active:bg-mainRed flex items-center space-x-2 px-6 py-1 transition duration-150 ease-in-out border-2 border-dashed border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
    >
      <span> ثبت نام </span>
      <PhSignature :size="25" />
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      :style="{ width: '30vw', backgroundColor: '#150531' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-rem34 flex items-center justify-center">
        <div class="flex flex-col space-y-7 items-center">
          <h2 class="text-6xl neonText">ثبت نام</h2>
          <div class="flex flex-col items-center space-y-4">
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainRed" for="username"
                >نام کاربری</label
              >
              <InputText
                id="username"
                v-model="signupUsername"
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
                v-model="signupEmail"
                aria-describedby="username-help"
              />
              <small class="text-sm text-mainViolet" id="username-help"
                >ایمیل خودتون رو وارد کنید</small
              >
            </div>
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainRed" for="password"
                >رمز عبور</label
              >
              <InputText
                id="password"
                v-model="signupPassword"
                aria-describedby="username-help"
              />
              <small class="text-sm text-mainViolet" id="username-help"
                >رمز عبور خودتون رو وارد کنید</small
              >
            </div>
            <Message class="w-full" v-show="successSignup" severity="success">
              <span class="text-2xl">حساب کاربری با موفقیت ساخته شد</span>
            </Message>
            <Message class="w-full" v-show="succussLogin" severity="success">
              <span class="text-2xl">وارد حساب کاربری شدید</span>
            </Message>
            <div v-if="Array.isArray(errorMessage)" class="flex flex-col">
              <Message
                v-for="error in errorMessage"
                :key="error"
                class="w-full"
                v-show="faildSignup"
                severity="error"
              >
                <span class="text-2xl">{{ error }}</span>
              </Message>
            </div>
            <div v-else>
              <Message class="w-full" v-show="faildSignup" severity="error">
                <span class="text-2xl">{{ errorMessage }}</span>
              </Message>
            </div>
          </div>
          <button
            label="Show"
            @click="formSubmit()"
            class="text-xl flex items-center space-x-2 px-10 py-2 transition duration-150 ease-in-out border-2 border-mainViolet hover:border-mainRed rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainRed"
          >
            <span> ثبت نام </span>
            <PhSignature :size="25" />
          </button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhSignature } from "@phosphor-icons/vue";
import { useUserStore } from "../stores/user";
const visible = ref(false);

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
      successSignup.value = true;
      setTimeout(() => {
        successSignup.value = false;
      }, 3000);
      loginFunction();
    })
    .catch((error) => {
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
