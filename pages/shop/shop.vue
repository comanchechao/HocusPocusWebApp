<template>
  <div class="h-full w-screen bg-darkPurple">
    <LazyNavbar></LazyNavbar>

    <div
      class="h-full w-screen bg-darkPurple md:p-10 lg:p-20 flex items-center"
    >
      <div
        class="w-full h-full border-mainRed rounded-sm flex flex-col items-start"
      >
        <LazySortBy class="Sort"></LazySortBy>
        <LazyFilters class="lg:flex Filter md:flex hidden"></LazyFilters>
        <div
          class="h-full LazyCard w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-4 justify-items-center"
        >
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
          <LazyCard class="LazyCard" /> <LazyCard class="LazyCard" />
        </div>
        <div class="flex items-center justify-center w-full">
          <Paginator
            class="Paginator opacity-0"
            :rows="10"
            :totalRecords="120"
          ></Paginator>
        </div>
      </div>
    </div>

    <LazyFooter></LazyFooter>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

onMounted(() => {
  TM.from(".Sort", { opacity: 0, duration: 1, delay: 1 });
  TM.from(".Filter", { opacity: 0, duration: 1 });

  TM.from(".LazyCard", { opacity: 0, duration: 1.5, stagger: 0.4 });
  TM.to(".Paginator", { opacity: 1, duration: 1 });
});
</script>

<style>
.p-paginator {
  background-color: transparent;
  color: white;
}

.p-paginator .p-paginator-pages .p-paginator-page {
  color: white;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background-color: white;
  color: #0a001a;
}

.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
  background-color: gray;
  color: white;
}
</style>
