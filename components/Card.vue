<template>
  <NuxtLink to="/shop/productDetail">
    <div
      class="h-rem28 bg-darkPurple rounded-lg duration-200 ease-in-out transition hover:shadow-xl cursor-pointer w-72 border shadow-md shadow-transparent hover:shadow-mainRed my-10 border-mainRed"
    >
      <div class="w-full h-2/3 p-3">
        <img
          src="../assets/images/Psychonauts.webp"
          class="w-full h-full object-contain opacity-100 backdrop-blur-3xl"
          alt=""
        />
      </div>
      <div class="w-full h-1/3 flex items-center flex-col px-7 space-y-5">
        <h3 class="text-center title text-2xl text-white">
          Seafarers: Commodore Edition Playing Cards
        </h3>
        <button
          class="px-12 py-2 transition text-xl duration-200 ease-in-out bg-mainYellow text-darkPurple border border-mainYellow hover:text-mainYellow shadow-mainYellow hover:bg-darkPurple rounded-sm"
        >
          خرید
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<style>
@font-face {
  font-family: "Pocus";
  src: url("../assets/fonts/RobotoCondensed-Bold.ttf");
  font-style: normal;
  font-display: swap;

  /* unicode-range: U+0020-007F; */
}

.title {
  font-family: "Pocus";
}
</style>
