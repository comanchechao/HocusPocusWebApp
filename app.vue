<template>
  <div v-if="isLoaded">
    <NuxtPage />
  </div>
</template>
<script>
export default {
  name: "MyPage",
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    this.isLoaded = true;
  },
};
</script>
