<template>
  <div class="h-full w-full flex items-center justify-center">
    <div
      class="lg:grid lg:grid-cols-2 lg:place-items-end lg:gap-5 h-full w-full lg:p-20 my-10 lg:my-0 flex items-end text-right justify-center space-y-7 lg:space-y-0 flex-col"
    >
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
          class=""
        >
          ارومیه
        </h2>
        <h2 class="text-mainPurple">شهر</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          آذربایجان غربی
        </h2>
        <h2 class="text-mainPurple">استان</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          09145623377
        </h2>
        <h2 class="text-mainPurple">شماره تلفن</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          آروین نیک بین
        </h2>
        <h2 class="text-mainPurple">نام و نام خانوادگی</h2>
      </div>
      <div class="flex items-center justify-center space-x-6 col-span-2">
        <div
          class="lg:text-xl text-lg flex items-center justify-center space-x-2 w-full"
        >
          <h2
            :class="{
              'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
                $route.path === '/learn/learn' ||
                $route.path.startsWith('/learn/'),
              'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
                $route.path === '/' || $route.path.startsWith('/shop/'),
            }"
          >
            ارومیه - خیابان عمار - خیابان حج - مجتمع مسکونی ارم - بلوک یک
          </h2>
          <h2 class="text-mainPurple">آدرس کامل</h2>
        </div>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          arvin.nikbin22@gmail.com
        </h2>
        <h2 class="text-mainPurple">ایمیل</h2>
      </div>
      <div
        class="lg:text-xl text-lg flex items-center justify-center space-x-2"
      >
        <h2
          :class="{
            'text-mainBrown border-b-4 border-mainYellow pb-1 rounded-md':
              $route.path === '/learn/learn' ||
              $route.path.startsWith('/learn/'),
            'text-darkPurple border-b-4 border-mainRed pb-1 rounded-md':
              $route.path === '/' || $route.path.startsWith('/shop/'),
          }"
        >
          5727575427
        </h2>
        <h2 class="text-mainPurple">کد پستی</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isVisible"],
};
</script>
<style></style>
