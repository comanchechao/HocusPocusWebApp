<template>
  <div class="flex justify-center items-center lg:h-2/4 bg-mainWhite">
    <ProgressSpinner
      v-if="loading"
      style="width: 50px; height: 50px"
      strokeWidth="8"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
    <img v-if="!loading" :src="image" class="h-full object-contain" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(["courseId"]);
const image = ref("");
const loading = ref(true);
const getArticleImage = async () => {
  console.log(props.courseId[0].id, "course image id");
  const { data } = await $fetch(
    `http://localhost:3333/videos/image/${props.courseId[0].id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      image.value = response.image;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getArticleImage();
});
</script>
