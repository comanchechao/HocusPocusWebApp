<template>
  <div class="h-full w-screen bg-darkPurple">
    <Navbar></Navbar>

    <div
      class="h-full w-screen bg-darkPurple md:p-10 lg:p-20 flex items-center"
    >
      <div
        class="w-full h-full border-mainRed rounded-sm flex flex-col items-start"
      >
        <SortBy class="Sort"></SortBy>
        <Filters class="lg:flex Filter md:flex hidden"></Filters>
        <div
          class="h-full Card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-4 justify-items-center"
        >
          <Card class="Card" /> <Card class="Card" /> <Card class="Card" />
          <Card class="Card" /> <Card class="Card" /> <Card class="Card" />
          <Card class="Card" /> <Card class="Card" />
        </div>
        <div class="flex items-center justify-center w-full">
          <Paginator :rows="10" :totalRecords="120"></Paginator>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const TM = $gsap.timeline();

onMounted(() => {
  TM.from(".Sort", { opacity: 0, duration: 1, delay: 1 });
  TM.from(".Filter", { opacity: 0, duration: 1 });

  TM.from(".Card", { opacity: 0, duration: 1.5, stagger: 0.4 });
});
</script>

<style>
.p-paginator {
  background-color: #0a001a;
  color: #f72585;
}

.p-paginator .p-paginator-pages .p-paginator-page {
  color: #f72585;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background-color: #f72585;
  color: #0a001a;
}

.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
  background-color: #f72585;
  color: #0a001a;
}
</style>
