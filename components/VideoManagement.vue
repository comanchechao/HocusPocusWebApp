<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-md flex active:text-mainBrown active:bg-mainYellow items-center space-x-2 px-4 py-1 transition duration-150 ease-in-out border-2 border-mainYellow hover:border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainViolet hover:text-mainViolet text-mainYellow"
    >
      <span> مدیریت ویدیوها </span>
      <PhVideo />
    </button>
    <Dialog
      v-model:visible="visible"
      :responsive="['md', 'lg', 'xl']"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="w-full h-full flex items-center flex-col py-7">
        <h2 class="text-2xl text-mainYellow">مدیریت آموزش ها</h2>
        <div
          class="w-full h-full bg-white my-4 flex flex-col rounded-md text-xs lg:text-lg"
        >
          <div
            class="w-full h-20 grid grid-cols-4 place-items-center border-b border-Indigo-600"
          >
            <h3 class="text-mainPurple">ویرایش</h3>

            <h3 class="text-mainPurple">تاریخ آپلود</h3>
            <h3 class="text-mainPurple">موجودی آموزش</h3>
            <h3 class="text-mainPurple">نام آموزش</h3>
          </div>
          <LazyVideoManagementCard
            v-for="course in courses"
            :key="course.id"
            :course="course"
          />
        </div>
      </div>
    </Dialog>
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
import { useMainManagement } from "~/stores/managementStore";

// register mainmangement store

const mainManagement = useMainManagement();
const visible = ref(false);
const checked = ref(false);
const props = defineProps(["courses"]);

const removeCourseImage = async function (course) {
  console.log(course);
  if (course.CourseImages.length) {
    await $fetch(
      `http://localhost:3333/management/removecourseimages/${course.CourseImages[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response, error) => {
        alert("deleted image");
        removeCourse(course);
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removecourseimages/${course.CourseImages[1].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response, error) => {
        alert("deleted image");
        removeCourse(course);
      })
      .catch((error) => {
        console.log(error.data);
      });
    await $fetch(
      `http://localhost:3333/management/removecourseimages/${course.CourseImages[2].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response, error) => {
        alert("deleted image");
        removeCourse(course);
      })
      .catch((error) => {
        console.log(error.data);
      });
  } else {
    removeCourse(course);
  }
};

const removeCourse = async function (course) {
  await $fetch(`http://localhost:3333/management/removecourse/${course.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response, error) => {
      alert("deleted");
      mainManagement.setStateChange();
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
