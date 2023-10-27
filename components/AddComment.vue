<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-md flex active:text-mainBrown active:bg-mainYellow items-center space-x-2 px-4 py-1 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
    >
      <span> اضافه کردن نظر </span>
      <PhPlus weight="fill" :size="23" />
    </button>
    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      modal
      :style="{ width: 'auto', backgroundColor: '#150531', height: 'auto' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full flex items-center flex-col">
        <div class="w-full flex items-center flex-col space-y-7">
          <div class="flex items-end flex-col space-y-4">
            <label class="text-xl text-mainRed" for="description"
              >نظر خودتون راجب محصول رو بنویسید
            </label>
            <Textarea
              v-model="comment"
              class="w-full text-darkPurple"
              autoResize
              rows="10"
              cols="90"
            />
          </div>
          <div
            class="flex items-center space-x-3 self-end px-28 justify-center p-"
          >
            <Rating class="rounded-sm" v-model="value" :cancel="false" />
            <h3
              class="font-bold rounded-sm flex items-center space-x-2 text-mainRed text-lg"
            >
              : امتیاز
            </h3>
          </div>
          <div class="w-full flex flex-col items-center justify-center">
            <div>
              <Message v-show="success">نظرتون اضافه شد</Message>
            </div>

            <button
              @click="getUser()"
              class="text-xl flex items-center mb-10 space-x-2 px-4 lg:px-10 py-2 transition duration-150 ease-in-out border-b-8 border-mainYellow bg-mainRed hover:border-mainRed rounded-lg shadow-mainOrange shadow-md hover:shadow-darkPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه کردن کامنت </span>
              <PhPlus weight="fill" :size="23" />
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPlus, PhUpload } from "@phosphor-icons/vue";
const visible = ref(false);
const comment = ref("");
const value = ref(null);
const loading = ref(false);

const success = ref(false);
const failed = ref(false);

const userId = ref();

// assign router
const router = useRoute();

const submitComment = async (userId, username) => {
  const body = new URLSearchParams({
    username: username,
    comment: comment.value,
    userId: userId,
  });
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/comments/${router.params._id}`,
    {
      method: "Post",
      headers: {},
      withCredentials: true,
      body: body,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response.comments);
      loading.value = false;
      success.value = true;
      setTimeout(() => {
        success.value = false;
      }, 3000);
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
      failed.value = true;
      setTimeout(() => {
        failed.value = false;
      }, 3000);
    });
};

const getUser = async () => {
  const { data } = await $fetch("http://localhost:3333/auth/isauth", {
    headers: {},
    withCredentials: true,
    credentials: "include",
  })
    .then(function (response) {
      console.log(response.userId);
      userId.value = response.userId;
      submitComment(response.userId, response.username);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// image from events
</script>
<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
</style>
