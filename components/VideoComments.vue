<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex items-center justify-end w-full space-x-3">
      <LazyVideoCommentAdd v-show="isLogged" />
      <div v-show="!isLogged" class="flex justify-center items-center">
        <LazyLogin />
        <div class="flex justify-center items-center text-white font-bold">
          <p>برای افزودن نظر وارد حساب کاربری خود شوید</p>
        </div>
      </div>
      <h1 class="text-mainRed text-3xl">نظرات مشتریان</h1>
    </div>
    <div class="flex flex-col items-center w-full">
      <LazyVideoComment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCommentsStore } from "~/stores/commentsStore";
import { useUserStore } from "~/stores/user";
// register comments store

const commentsStore = useCommentsStore();
const { videoState } = storeToRefs(commentsStore);

watch(videoState, (cur, old) => {
  getComments();
});
// assign router

//register user store

const userStore = useUserStore();
const { isLogged } = storeToRefs(userStore);

const router = useRoute();

const comments = ref();
const loading = ref(false);

const getComments = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/videocomments/${router.params._id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      comments.value = response.comments;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getComments();
});
</script>

<style lang="scss" scoped></style>
