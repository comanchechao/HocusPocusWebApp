<template>
  <head>
    <title v-if="course">
      آموزش شعبده بازی | {{ course.price }} | {{ course.title }} | هوکوس پوکوس
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </head>
  <div class="h-full w-screen bg-mainBrown">
    <LazyNavbar />
    <div
      class="h-auto w-screen bg-mainBrown flex-col flex items-center px-7 pt-28 lg:px-32 py-16"
    >
      <div
        class="flex Bread text-sm lg:text-lg items-center w-full justify-end space-x-2 lg:space-x-4"
      >
        <h2
          class="text-mainYellow flex space-x-3 items-center underline cursor-pointer"
        >
          <PhCaretLeft :size="20" weight="fill" />

          <Skeleton v-if="loading" width="10rem" height="2rem"></Skeleton>

          <span v-if="!loading"> {{ course.title }} </span>
        </h2>

        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> خرید </span>
        </h2>
        <h2 class="text-mainYellow flex space-x-3 items-center cursor-pointer">
          <PhCaretLeft :size="20" weight="fill" />
          <span> آموزش </span>
        </h2>
      </div>
    </div>
    <div
      class="h-auto justify-center pb-6 w-full flex flex-col items-center px-7 lg:px-32"
    >
      <div
        class="w-full h-dialog flex items-center justify-center rounded-md shadow-lg shadow-mainYellow bg-white"
      >
        <ProgressSpinner
          v-if="loading"
          style="width: 50px; height: 50px"
          strokeWidth="8"
          animationDuration=".5s"
          aria-label="Custom ProgressSpinner"
        />
        <video
          v-if="!loading"
          type="video/mp4"
          class="w-full h-full"
          controls
          :src="videoFile"
        ></video>
      </div>
      <div class="h-full w-full flex flex-col my-12 items-end space-y-7">
        <Skeleton v-if="loading" width="10rem" height="2rem"></Skeleton>

        <h1
          v-if="!loading"
          class="text-4xl text-gray-100 flex items-center justify-center space-x-3"
        >
          <span> {{ course.title }} </span>
          <PhMagicWand class="text-mainYellow" :size="55" weight="fill" />
        </h1>
        <div
          class="w-full h-auto flex lg:flex-row flex-col-reverse items-start lg:space-x-14 justify-around"
        >
          <div
            class="h-44 rounded-md bg-gray-100 w-full lg:w-96 flex flex-col p-3 items-center justify-around"
          >
            <div
              class="flex items-center space-x-3 border-mainBrown border-4 border-dashed py-2 px-3 rounded-md"
            >
              <h4 class="text-mainBrown">تومان</h4>
              <PhMoney></PhMoney>
              <Skeleton v-if="loading" width="10rem" height="2rem"></Skeleton>

              <h1
                v-if="!loading"
                class="lg:text-3xl text-2xl text-mainRed Text font-bold"
              >
                <span> {{ course.price }}</span>
              </h1>
            </div>
            <Skeleton v-if="loading" width="10rem" height="2rem"></Skeleton>

            <button
              v-if="!loading"
              class="px-8 py-2 shadow-md shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out bg-mainBrown text-mainYellow hover:text-mainBrown hover:bg-mainYellow rounded-md"
            >
              <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
            </button>
          </div>
          <div
            class="h-auto bg-mainWhite rounded-md w-full text-right flex-col items-end flex justify-around"
          >
            <Skeleton
              class="my-5"
              v-if="loading"
              width="10rem"
              height="3rem"
            ></Skeleton>

            <h2
              v-if="!loading"
              class="text-mainBrown text-2xl bg-gray-100 p-3 rounded-md my-3 font-bold"
            >
              توضیحات کالا
            </h2>
            <Skeleton
              class="lg:flex hidden"
              v-if="loading"
              width="44rem"
              height="10rem"
            ></Skeleton>
            <Skeleton
              class="lg:hidden flex my-4"
              v-if="loading"
              width="10rem"
              height="6rem"
            ></Skeleton>

            <h3 v-if="!loading" class="text-sm bg-gray-100 p-3 rounded-md my-3">
              {{ course.description }}
            </h3>
          </div>
        </div>
      </div>
      <div
        class="h-full w-full flex flex-col items-end my-12 justify-center space-y-7"
      >
        <div class="w-full h-full rounded-md">
          <LazyComments />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhCaretLeft,
  PhMagicWand,
  PhMoney,
  PhShoppingBagOpen,
  PhUserList,
} from "@phosphor-icons/vue";

const loading = ref(true);
const course = ref();
const videoFile = ref();

const router = useRoute();
const getCourse = async () => {
  loading.value = true;
  const { data } = await $fetch(
    `http://localhost:3333/videos/${router.params._id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      course.value = response.course;
      const uint8Array = new Uint8Array(response.course.file.data);
      const blob = new Blob([uint8Array], { type: "video/mp4" });
      videoFile.value = URL.createObjectURL(blob);
      // if (response.product) {
      //   getProductImage();
      // }
      loading.value = false;
    })
    .catch(function (error) {
      console.error(error);
      loading.value = false;
    });
  loading.value = false;
};

onMounted(() => {
  getCourse();
});
</script>

<style lang="scss" scoped></style>
