<template>
  <div class="w-screen h-full bg-mainBrown">
    <Navbar />
    <div class="flex items-center justify-center h-screen flex-col w-full">
      <div class="flex-col flex items-center justify-center space-y-6">
        <h2 class="text-2xl text-mainYellow">آموزش شعبده بازی و تردستی</h2>
        <h1 class="Pocused text-center">Hocus Pocus</h1>
      </div>
      <img
        src="../../assets/images/LearnDivider.webp"
        class="h-40 my-3 object-contain lg:px-0 px-3"
        alt=""
      />
    </div>
    <div class="h-screen w-full flex items-start">
      <div class="h-24 w-screen bg-mainYellow flex items-center justify-center">
        <h2 class="text-mainBrown text-3xl flex">
          <PhCards class="mr-3" /> <span> جدیدترین کارت ها </span>
        </h2>
      </div>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: "Pocused";
  src: url("../../assets/fonts/man.otf");
  font-style: normal;

  /* unicode-range: U+0020-007F; */
}

.Pocused {
  font-family: "Pocused";
  color: #fdbe39;
  font-size: 10rem;
  text-shadow: 7px 0px 1px #fb6107;
}

@media only screen and (max-width: 480px) {
  .Pocused {
    font-family: "Pocused";
    color: #fdbe39;
    font-size: 6rem;
    text-shadow: 7px 0px 1px #fb6107;
  }
}
@media only screen and (max-width: 768px) {
  .Pocused {
    font-family: "Pocused";
    color: #fdbe39;
    font-size: 6rem;
    text-shadow: 7px 0px 1px #fb6107;
  }
}
</style>
