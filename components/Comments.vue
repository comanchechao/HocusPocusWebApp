<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex items-center justify-around w-full space-x-3">
      <LazyAddComment />
      <h1 class="text-mainRed text-3xl">دیدگاه ها</h1>
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
      <LazyComment
        v-if="comments"
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script setup>
// assign router

const router = useRoute();

const comments = ref();
const loading = ref(false);

const getComments = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/comments/${router.params._id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response.comments);
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
