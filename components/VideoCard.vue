<template>
  <div
    v-if="course"
    class="lg:w-rem28 w-full h-auto lg:h-dialog bg-mainWhite rounded-md shadow-lg transition flex-col items-center"
  >
    <NuxtLink :to="'/learn/coursedetail/' + course.id">
      <LazyVideoCardImage :courseId="course.CoursesImages"></LazyVideoCardImage>
    </NuxtLink>

    <div
      class="h-auto bg-mainWhite lg:h-44 space-y-2 text-right w-full rounded-b-md flex items-center flex-col p-4"
    >
      <NuxtLink :to="'/learn/coursedetail/' + course.id">
        <h2
          class="lg:text-xl md:text-2xl text-lg cursor-pointer flex items-center transition px-5 ease-in duration-300 justify-center space-x-3 text-mainBrown border-b-8 hover:border-mainPink border-b-transparent rounded-md"
        >
          <span> {{ course.title }} </span>
        </h2>
      </NuxtLink>

      <div
        class="w-full h-auto flex flex-col items-center space-y-7 lg:space-y-0 justify-center lg:justify-around px-3"
      >
        <h3
          class="lg:text-2xl mb-3 text-xl border-2 border-dashed border-mainOrange rounded-md py-1 px-2 lg:px-3 text-mainBrown flex items-center justify-center space-x-2"
        >
          <span class="text-xs text-mainOrange">تومان</span>
          <span>{{ course.price }}</span>
          <PhMoney :size="34" weight="fill" />
        </h3>
        <div class="flex items-center space-y-4 flex-col">
          <NuxtLink :to="'/learn/coursedetail/' + course.id">
            <button
              class="w-44 justify-center py-2 shadow-md shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
            >
              <span> جزئیات بیشتر </span> <PhInfo :size="20" />
            </button>
          </NuxtLink>
          <button
            dir="rtl"
            class="w-44 justify-center shadow-transparent py-2 shadow-md flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown bg-mainYellow hover:bg-mainYellow rounded-full"
          >
            <PhInfo class="ml-2" :size="20" />
            <span> بزودی... </span>
          </button>
          <!-- <button
            @click="addToCart(props.course)"
            class="w-44 justify-center py-2 shadow-md bg-mainYellow shadow-mainYellow hover:shadow-mainOrange flex items-center space-x-2 transition text-sm duration-200 ease-in-out text-mainBrown hover:text-mainBrown border-2 border-mainBrown hover:bg-mainYellow rounded-md"
          >
            <span> اضافه به سبد خرید </span> <PhShoppingBagOpen :size="20" />
          </button>
          <Message
            class="absolute"
            :closable="false"
            v-show="addSuccess"
            severity="success"
          >
            <span class="lg:text-sm text-sm font-bold"
              >به سبد خرید اضافه شد</span
            >
          </Message> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhInfo,
  PhShoppingBagOpen,
  PhMagicWand,
  PhMoney,
} from "@phosphor-icons/vue";
import { useCourseStore } from "~/stores/coursesStore";
const props = defineProps(["course"]);

// register course store

onMounted(() => {
  console.log("this should work ", props.course);
});
const courseStore = useCourseStore();

const addSuccess = ref(false);

const addToCart = (course) => {
  courseStore.addToShoppingCart(course);
  addSuccess.value = true;

  setTimeout(() => {
    addSuccess.value = false;
  }, 3000);
};
</script>

<style lang="scss" scoped></style>
