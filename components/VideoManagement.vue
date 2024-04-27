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
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '80vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div class="Search self-end m-4">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
        </label>
        <div class="relative">
          <input
            dir="rtl"
            v-model="search"
            placeholder="جستجو بر اساس اسم و توضیحات"
            type="search"
            id="default-search"
            class="block w-96 bg-mainWhite p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            @click.prevent="searchCourse()"
            type="submit"
            class="text-white top-0 absolute bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            جستجو
          </button>
          <div
            class="absolute inset-y-0 end-0 flex pr-4 items-center ps-3 pointer-events-none"
          ></div>
        </div>
      </div>
      <div class="w-full h-full flex items-center flex-col py-7">
        <h2 class="text-2xl text-mainYellow">مدیریت آموزش ها</h2>
        <div
          class="w-full h-full bg-white my-4 flex flex-col rounded-md text-xs lg:text-lg"
        >
          <div
            class="w-full h-20 grid grid-cols-3 place-items-center border-b border-Indigo-600"
          >
            <h3 class="text-mainPurple">ویرایش</h3>

            <h3 class="text-mainPurple">تاریخ آپلود</h3>
            <h3 class="text-mainPurple">نام آموزش</h3>
          </div>
          <LazyVideoManagementCard
            v-show="!showSearch"
            v-for="course in courses"
            :key="course.id"
            :course="course"
          />
          <LazyVideoManagementCard
            v-show="showSearch"
            v-for="course in searchedCourses"
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

// search

const search = ref("");
const searchedCourses = ref([]);
const searchedId = ref([]);

const showSearch = ref(false);

const searchCourse = () => {
  const regex = new RegExp(search.value, "i"); // 'i' flag for case-insensitive search
  searchedCourses.value = props.courses.filter((course) =>
    regex.test(course.title)
  );
  console.log(searchedCourses.value);
  showSearch.value = true;
};

watch(search, (cur, old) => {
  if (cur === "") {
    showSearch.value = false;
  }
});

// remove course function

const removeCourseImage = async function (course) {
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
</script>

<style></style>
