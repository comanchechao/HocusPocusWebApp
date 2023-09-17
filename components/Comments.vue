<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center justify-end w-full space-x-3">
      <LazyAddComment />
      <h1 class="text-mainRed text-3xl">نظرات مشتریان</h1>
    </div>
    <LazySortBy />
    <div class="flex flex-col items-center">
      <LazyComment /> <LazyComment /> <LazyComment />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
