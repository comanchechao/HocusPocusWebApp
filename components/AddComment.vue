<template>
  <div
    class="w-full md:w-full lg:w-full flex items-center flex-col my-9 justify-center lg:items-end space-y-7"
  >
    <div class="flex items-end flex-col space-y-4">
      <label class="text-md text-mainRed" for="description"
        >نظر خودتون راجب محصول رو بنویسید
      </label>
      <Textarea
        dir="rtl"
        v-model="comment"
        class="lg:w-textArea md:w-full w-full text-darkPurple text-sm"
        autoResize
        rows="5"
        cols="90"
      />
    </div>

    <Rating class="rounded-sm" v-model="value" :cancel="false" />
    <div class="w-full flex flex-col items-center justify-center">
      <div>
        <Message severity="success" v-show="success">نظرتون اضافه شد</Message>
      </div>
      <button
        @click="getUser()"
        class="text-md flex active:text-mainBrown active:bg-mainYellow items-center space-x-2 px-4 py-1 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
      >
        <span> اضافه کردن نظر </span>
        <PhPlus weight="fill" :size="23" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPlus, PhUpload } from "@phosphor-icons/vue";
import { useCommentsStore } from "~/stores/commentsStore";

// register comments store

const commentsStore = useCommentsStore();

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
    rating: value.value,
    userId: userId,
  });
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/comments/${router.params._id}`,
    {
      method: "POST",
      headers: {},
      withCredentials: true,
      body: body,
      credentials: "include",
    }
  )
    .then(function (response) {
      loading.value = false;
      success.value = true;
      commentsStore.setStateChange();
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
