<template>
  <div class="flex flex-col items-center w-screen">
    <div
      class="flex items-end flex-col lg:justify-end justify-around w-full lg:space-x-3"
    >
      <h1 class="text-mainRed text-3xl">دیدگاه ها</h1>

      <LazyAddComment v-show="isLogged" />
    </div>
    <div
      v-show="!isLogged"
      class="w-screen px-10 h-auto lg:h-14 bg-transparent border-4 text-right py-2 lg:flex-row flex-col border-dashed border-mainPink my-10 rounded-lg flex items-center justify-center"
    >
      <LazyLogin v-show="!isLogged" />
      <h2 class="text-mainPink text-sm lg:text-xl">
        برای اضافه کردن نظر وارد حساب کاربری خود بشید
      </h2>
    </div>

    <div class="flex flex-col items-center w-full">
      <div
        v-if="comments === null"
        class="w-full h-96 bg-mainWhite my-10 rounded-md flex items-center justify-center"
      >
        <h2 class="text-darkPurple text-3xl">
          دیدگاهی برای این محصول ثبت نشده است
        </h2>
      </div>
      <div class="w-full h-full" v-if="comments">
        <LazyComment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCommentsStore } from "~/stores/commentsStore";
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();

const { isLogged } = storeToRefs(userStore);

// assign router

const router = useRoute();

// register CommentsStore

const commentsStore = useCommentsStore();

const { stateChange } = storeToRefs(commentsStore);

watch(stateChange, (cur, old) => {
  getComments();
});

const comments = ref();
const loading = ref(false);

const getComments = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/comments/${router.params._id}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
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
