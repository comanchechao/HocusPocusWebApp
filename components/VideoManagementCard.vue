<template>
  <div
    class="w-full h-20 grid grid-cols-3 place-items-center border-b border-mainYellow"
  >
    <!-- <button
      @click="removeComments()"
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
    </button> -->
    <button
      @click="visible = true"
      class="text-blue-500 p-3 rounded-sm bg-white cursor-pointer transition ease-in hover:bg-red-500 hover:text-darkPurple"
    >
      <ProgressSpinner
        v-if="loading"
        style="width: 30px; height: 30px"
        strokeWidth="8"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
      <PhNotePencil v-if="!loading" :size="30" />
    </button>

    <Dialog
      :breakpoints="{ '960px': '75vh', '641px': '100vh' }"
      v-model:visible="visible"
      modal
      :showHeader="true"
      :style="{ width: '60vw', backgroundColor: '#150531', height: '80vh' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="h-full w-full p-3 space-y-10 flex flex-col items-center justify-center"
      >
        <h2
          class="text-mainRed border-b-8 border-mainYellow rounded-xl pb-3 text-3xl"
        >
          ویرایش
        </h2>

        <div class="w-full flex items-center flex-col space-y-7">
          <div
            class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
          >
            <div class="flex items-end flex-col space-y-4">
              <label class="text-md text-mainYellow" for="email"
                >قیمت اشتراک <span class="text-sm">(به تومان)</span></label
              >
              <input
                id="email"
                :placeholder="course.price"
                v-model="newPrice"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
            <div class="flex items-end flex-col space-y-4">
              <label class="text-md text-mainYellow" for="title"
                >عنوان ویدیو</label
              >
              <InputText
                id="title"
                v-model="newTitle"
                :placeholder="course.title"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
          </div>
          <div
            class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
          >
            <div class="flex items-end flex-col space-y-4">
              <label class="text-md text-mainYellow" for="trainer"
                >نام مدرس</label
              >
              <InputText
                id="trainer"
                v-model="newTrainer"
                :placeholder="course.trainer"
                aria-describedby="username-help"
                class="w-full"
              />
            </div>
          </div>
          <div class="flex items-end lg:col-span-2 flex-col space-y-4">
            <label class="text-md text-mainYellow" for="description"
              >توضیحات ویدیو
            </label>
            <Textarea
              class="w-full text-right text-2xl py-3"
              autoResize
              v-model="newDescription"
              :placeholder="course.description"
              rows="6"
              cols="90"
            />
          </div>
          <h2 class="text-mainYellow text-xl">آپلود تصاویر ویدیو</h2>
          <div
            class="w-full h-full lg:flex items-center grid grid-cols-2 grid-rows-2 justify-items-center px-7 place-items-center gap-3 lg:space-x-0 lg:justify-center lg:flex-wrap"
          >
            <label
              for="imageOne"
              class="lg:w-40 lg:h-52 w-28 h-32 bg-mainYellow transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
            >
              <PhCheckCircle
                v-show="eventImageOne"
                class="text-green-400"
                weight="fill"
                :size="66"
              />
              <PhUpload v-show="!eventImageOne" weight="fill" :size="66" />
            </label>
            <input
              @change="
                (event) => {
                  eventImageOne = event.target.files[0];
                }
              "
              type="file"
              class="hidden"
              id="imageOne"
            />
            <label
              for="imageTwo"
              class="lg:w-40 lg:h-52 w-28 h-32 bg-mainYellow transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
            >
              <PhCheckCircle
                v-show="eventImageTwo"
                class="text-green-400"
                weight="fill"
                :size="66"
              />
              <PhUpload v-show="!eventImageTwo" weight="fill" :size="66" />
            </label>
            <input
              @change="
                (event) => {
                  eventImageTwo = event.target.files[0];
                }
              "
              type="file"
              class="hidden"
              id="imageTwo"
            />
            <label
              for="imageThree"
              class="lg:w-40 lg:h-52 w-28 h-32 bg-mainYellow transition ease-in-out col-span-2 duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
            >
              <PhCheckCircle
                v-show="eventImageThree"
                class="text-green-400"
                weight="fill"
                :size="66"
              />
              <PhUpload v-show="!eventImageThree" weight="fill" :size="66" />
            </label>
            <input
              @change="
                (event) => {
                  eventImageThree = event.target.files[0];
                }
              "
              type="file"
              class="hidden"
              id="imageThree"
            />
          </div>

          <!-- {{ type }}
          {{ design }}
          {{ brand }}
          {{ rarity }} -->
          <div class="h-full w-full flex space-x-6 items-center justify-center">
            <div>
              <Message v-show="success">ویرایش موفقیت آمیز بود</Message>
              <Message severity="error" v-show="faild">{{
                errorMessage
              }}</Message>
              <Message severity="error" v-show="loginErr"
                >وارد حساب ادمین شوید</Message
              >
            </div>
            <div v-if="Array.isArray(errorMessage)">
              <Message
                v-for="error in errorMessage"
                :key="error"
                v-show="faild"
                >{{ error }}</Message
              >
            </div>
            <div class="flex space-x-3 items-center justify-center">
              <label
                for="videoFile"
                class="lg:text-md text-sm cursor-pointer flex mb-10 active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-4 py-2 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
              >
                <span> حذف ویدیو آموزش </span>
                <PhPlus v-show="!eventVideo" weight="fill" :size="23" />
                <PhCheckCircle
                  weight="fill"
                  :size="23"
                  class="text-green-500"
                  v-show="eventVideo"
                />
                <input
                  @change="
                    (event) => {
                      eventVideo = event.target.files[0];
                    }
                  "
                  type="file"
                  class="hidden"
                  id="videoFile"
                />
              </label>
              <button
                for="videoFile"
                @click="handleCourse()"
                class="lg:text-md text-sm flex mb-10 active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-4 py-2 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
              >
                <span> ذخیره تغییرات </span>
                <PhVideo weight="fill" :size="23" />
              </button>
            </div>

            <Message
              class="space-x-4 flex items-center justify-center"
              severity="info"
              v-show="videoUploadLoading"
            >
              <span class="text-right mx-3"> درحال بارگذاری عکس ها</span>
              <ProgressSpinner
                style="width: 20px; height: 20px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              /> </Message
            ><Message
              class="space-x-4 flex items-center justify-center"
              severity="info"
              v-show="imageUploadLoading"
            >
              <span class="text-right mx-3"> درحال بارگذاری عکس ها</span>
              <ProgressSpinner
                style="width: 20px; height: 20px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
              />
            </Message>
          </div>
          <div v-show="videoUploadLoading" class="card w-full h-10 px-24">
            <div
              class="flex text-mainBlue items-end justify-end space-x-2 w-full text-opacity-70"
            >
              <span dir="rtl">{{ `${seconds} ثانیه ` }}</span> <span>و</span>
              <span dir="rtl"> {{ `${minutes} دقیقه` }}</span>
            </div>
            <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
          </div>
        </div>
      </div>
    </Dialog>
    <h3 class="text-darkPurple">{{ date }}</h3>

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
import { PhNotePencil, PhTrash, PhFloppyDisk } from "@phosphor-icons/vue";
import { PhPlus, PhUpload, PhVideo, PhCheckCircle } from "@phosphor-icons/vue";

import { useMainManagement } from "~/stores/managementStore";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

const date = ref();

dayjs.extend(jalaliday);

onMounted(() => {
  console.log(props.course.createdAt);
  date.value = dayjs(props.course.createdAt)
    .calendar("jalali")
    .locale("en")
    .format("DD MMMM YYYY");
});

// resiger mainmanagement store

const mainManagement = useMainManagement();

// values

const message = ref(false);

const visible = ref(false);
const checked = ref(false);
const props = defineProps(["course"]);
const loading = ref(false);

const newTitle = ref(null);
const newPrice = ref(null);
const newTrainer = ref(null);
const newDescription = ref(null);

const success = ref(false);

const handleCourse = async () => {
  const data = new URLSearchParams({
    id: props.course.id,
    title: props.course.title,
    price: props.course.price,
    newTrainer: props.course.trainer,
    description: props.course.description,
  });

  // Add title if it has a value
  if (newTitle.value) {
    data.set("title", newTitle.value);
    console.log("we ran this");
  }

  // Add price if it has a value
  if (newPrice.value) {
    data.set("price", newPrice.value);
  }

  // Add inStock if it has a value (assuming inStock.value is truthy/falsy)

  // Add quantity if it has a value
  if (newTrainer.value) {
    data.set("quantity", newTrainer.value);
  }

  // Add description if it has a value
  if (newDescription.value) {
    data.set("description", newDescription.value);
  }

  console.log("Title:", data.get("title"));
  console.log("price:", data.get("price"));
  console.log("category:", data.get("category"));
  console.log("quantity:", data.get("quantity"));
  console.log("description:", data.get("description"));

  await $fetch("http://localhost:3333/edits/updatecourse", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: data,
    withCredentials: true,
  })
    .then((response, error) => {
      console.log(response);
      success.value = true;
      setTimeout(() => {
        success.value = false;
      }, 2000);
      mainManagement.setStateChange();
    })
    .catch((error) => {});
};

const removeComments = async function (product) {
  loading.value = true;
  console.log(props.course);
  if (props.course.VideoComments.length) {
    await $fetch(
      `http://localhost:3333/management/removevideocomment/${props.course.VideoComments[0].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeCourseImage();
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
      });
    await $fetch(
      `http://localhost:3333/management/removevideocomment/${props.course.VideoComments[1].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((response, error) => {
        removeCourseImage();
        // loading.value = false;
        // message.value = true;
        // setTimeout(() => {
        //   message.value = false;
        // }, 3000);
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
      });
    await $fetch(
      `http://localhost:3333/management/removevideocomment/${props.course.VideoComments[2].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        alert("comment deleted");
        removeCourseImage();
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
      });
    await $fetch(
      `http://localhost:3333/management/removevideocomment/${props.course.VideoComments[3].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        alert("comment deleted");
        removeCourseImage();
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
      });
  } else {
    removeCourseImage();
  }
};

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
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeCourse();
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
      });
    await $fetch(
      `http://localhost:3333/management/removecourseimage/${props.course.CoursesImages[1].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeCourse();
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
      });
    await $fetch(
      `http://localhost:3333/management/removecourseimage/${props.course.CoursesImages[2].id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
        credentials: "include",
      }
    )
      .then((response, error) => {
        removeCourse();
      })
      .catch((error) => {
        console.log(error.data);
        loading.value = false;
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
      withCredentials: true,
      credentials: "include",
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
      loading.value = false;
    });
};

onMounted(() => {
  console.log(props.courses);
});
</script>

<style></style>
