<template>
  <Navbar></Navbar>

  <div class="h-full w-screen bg-darkPurple p-20 flex items-center">
    <div
      class="w-full h-full border-mainRed rounded-sm flex flex-col items-start"
    >
      <SortBy></SortBy>
      <Filters></Filters>
      <div class="h-full w-full flex items-center justify-around flex-wrap">
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </div>
      <div class="flex items-center justify-center w-full">
        <Paginator :rows="10" :totalRecords="120"></Paginator>
      </div>
    </div>
  </div>
</template>

<style>
.p-paginator {
  background-color: #10002b;
  color: #f72585;
}

.p-paginator .p-paginator-pages .p-paginator-page {
  color: #f72585;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background-color: #f72585;
  color: #10002b;
}

.p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
  background-color: #f72585;
  color: #10002b;
}
</style>
