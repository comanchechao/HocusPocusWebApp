<template>
  <div
    class="w-full h-full bg-white rounded-md flex items-center justify-center flex-col p-6"
  >
    <div class="w-full h-24 flex items-center justify-end px-6">
      <h2
        class="text-2xl text-darkPurple border-b-4 border-mainRed pb-2 rounded-md"
      >
        اطلاعات کاربری
      </h2>
    </div>
    <CustomerInfo />
    <button
      @click="currentTab = 'tab1'"
      class="text-lg flex active:text-mainRed active:bg-darkPurple items-center space-x-2 justify-center px-8 py-2 transform scale-100 hover:scale-105 transition duration-150 ease-in-out border-2 border-transparent bg-mainRed hover:border-mainViolet rounded-sm shadow-md shadow-transparent hover:shadow-mainViolet hover:text-darkPurple text-darkPurple"
    >
      ویرایش اطلاعات
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
