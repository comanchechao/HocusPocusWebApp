<template>
  <div class="flex justify-center align-center">
    <img v-if="!loading" :src="image" class="w-full h-full" alt="" />
    <ProgressSpinner
      v-if="loading"
      style="width: 50px; height: 50px"
      strokeWidth="8"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
</template>

<script setup>
const props = defineProps(["productId"]);
const image = ref("");
const loading = ref(true);

const getArticleImage = async () => {
  const { data } = await $fetch(
    `http://localhost:3333/products/image/${props.productId}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      image.value = response.image;
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
};

onMounted(() => {
  getArticleImage();
});
</script>
