<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex items-center justify-end w-full space-x-3">
      <LazyVideoCommentAdd />
      <h1 class="text-mainRed text-3xl">نظرات مشتریان</h1>
    </div>
    <LazySortBy />
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
// assign router

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
