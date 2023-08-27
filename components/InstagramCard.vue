<template>
  <div
    @mouseenter="startAnimation"
    @mouseleave="resetAnimation"
    class="w-64 relative h-64 rounded-sm cursor-pointer m-4 bg-mainWhite flex items-center justify-center"
  >
    <img
      src="../assets/images/Psychonauts.webp"
      class="object-contain h-full p-3 Img"
      alt=""
    />
    <div
      class="absolute text-xl text-white w-full flex items-center Caption p-6 justify-center h-36 bg-black bg-opacity-95s bottom-0"
    >
      <h1>blahblah blah</h1>
    </div>
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();
const startAnimation = () => {
  TM.fromTo(
    ".Caption",
    { y: 50, duration: 0.7, opacity: 0 },
    { y: 0, duration: 0.7, opacity: 1 }
  );
};
const resetAnimation = () => {
  TM.fromTo(
    ".Caption",
    { y: 0, duration: 0.7, opacity: 1 },
    { y: 50, duration: 0.7, opacity: 0 }
  );
};
</script>

<style lang="scss" scoped></style>
