<template>
  <div class="bg-darkPurple">
    <div class="bg-darkPurple">
      <NuxtPage />
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
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
