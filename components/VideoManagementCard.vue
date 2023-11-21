<template>
  <div
    class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
  >
    <button
      @click="removeCourseImage()"
      class="text-red-500 px-5 py-2 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
    >
      <ProgressSpinner
        v-if="loading"
        style="width: 30px; height: 30px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
      <PhTrash v-if="!loading" :size="30" />
    </button>
    <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
      <h3 class="text-sm text-darkPurple">موجود</h3>
    </div>
    <!-- <h3 class="text-darkPurple">{{ course.trainer }}</h3> -->
    <h3 class="text-mainBrown text-center px-5">{{ course.title }}</h3>

    <Message
      class="w-full text-right absolute top-40"
      v-show="message"
      severity="success"
    >
      <span class="lg:text-xl text-md">محصول با موفقیت پاک شد</span>
    </Message>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  PhCaretLeft,
  PhCoffee,
  PhCheckCircle,
  PhAirplaneTilt,
  PhPackage,
  PhTrash,
  PhVideo,
} from "@phosphor-icons/vue";
import { useMainManagement } from "~/stores/managementStore";

// resiger mainmanagement store

const mainManagement = useMainManagement();

// values

const message = ref(false);

const visible = ref(false);
const checked = ref(false);
const props = defineProps(["course"]);
const loading = ref(false);
const removeCourseImage = async function () {
  loading.value = true;
  if (props.course.CoursesImages.length) {
    await $fetch(
      `http://localhost:3333/management/removecourseimage/${props.course.CoursesImages[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response, error) => {
        removeCourse();
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removecourseimage/${props.course.CoursesImages[1].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response, error) => {
        removeCourse();
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removecourseimage/${props.course.CoursesImages[2].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response, error) => {
        removeCourse();
      })
      .catch((error) => {
        console.log(error.data);
      });
  } else {
    removeCourse();
  }
};

const removeCourse = async function () {
  await $fetch(
    `http://localhost:3333/management/removecourse/${props.course.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
    .then((response, error) => {
      mainManagement.setStateChange();
      loading.value = false;
      message.value = true;
      setTimeout(() => {
        message.value = false;
      }, 3000);
    })
    .catch((error) => {
      console.log(error.data);
    });
};

onMounted(() => {
  console.log(props.courses);
});
</script>

<style></style>
