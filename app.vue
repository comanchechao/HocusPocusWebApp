<template>
  <div
    v-if="!isLoaded"
    class="w-screen h-screen bg-darkPurple flex items-center justify-center"
  >
    <ProgressSpinner
      style="width: 50px; height: 50px"
      strokeWidth="8"
      fill="var(--surface-ground)"
      animationDuration=".5s"
      aria-label="Custom ProgressSpinner"
    />
  </div>
  <div v-else="isLoaded" class="bg-darkPurple">
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
