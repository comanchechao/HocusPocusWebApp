<template>
  <div class="bg-darkPurple">
    <div class="bg-darkPurple">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "فروشگاه و مجموعه آموزشی شعبده بازی هوکوس پوکوس",
  meta: [
    {
      name: "فروشگاه و مجموعه آموزشی هوکوس پوکوس، قدیم ترین مجموعه آموزشی و فروشگاهی در زمینه ی  شعبده بازی، با هدف پیشرفت روز افزون  هنر و صنعت شعبده بازی در سطح کشور است",
      content:
        "فروشگاه و مجموعه آموزشی هوکوس پوکوس، قدیم ترین مجموعه آموزشی و فروشگاهی در زمینه ی  شعبده بازی، با هدف پیشرفت روز افزون  هنر و صنعت شعبده بازی در سطح کشور است",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
});
</script>
