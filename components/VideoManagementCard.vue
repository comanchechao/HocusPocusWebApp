<template>
  <div
    class="w-full h-20 grid grid-cols-4 place-items-center border-b border-mainYellow"
  >
    <h3 class="text-darkPurple">دوشنبه 25 تیر</h3>
    <div class="flex items-center space-x-3">
      <InputSwitch v-model="checked"></InputSwitch>
      <h3 class="text-lg text-darkPurple">موجود</h3>
    </div>
    <h3 class="text-darkPurple">{{ course.trainer }}</h3>
    <h3 class="text-mainBrown text-center px-5">{{ course.title }}</h3>
    <button @click="removeCourseImage()">delete</button>
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
  PhVideo,
} from "@phosphor-icons/vue";
const visible = ref(false);
const checked = ref(false);
const props = defineProps(["course"]);

const removeCourseImage = async function () {
  console.log(props.course.CoursesImages);
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
        alert("deleted image");
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
        alert("deleted image");
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
        alert("deleted image");
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
      alert("deleted");
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
