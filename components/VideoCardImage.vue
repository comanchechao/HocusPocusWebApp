<template>
  <div class="flex justify-center align-center">
    <img :src="image" class="w-full h-full" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(["courseId"]);
const image = ref("");

const getArticleImage = async () => {
  console.log(props.courseId);
  const { data } = await $fetch(
    `http://localhost:3333/videos/image/${props.courseId}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      console.log(response);
      image.value = response.image;
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  getArticleImage();
});
</script>
