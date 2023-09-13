<template>
  <div class="flex justify-center align-center">
    <img :src="image" class="w-full h-full" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(["productId"]);
const image = ref("");

const getArticleImage = async () => {
  console.log(props.productId);
  const { data } = await $fetch(
    `http://localhost:3333/products/image/${props.productId}`,
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
