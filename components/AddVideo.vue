<template>
  <div
    class="flex justify-center border-2 border-mainYellow border-dashed rounded-md w-full my-8"
  >
    <div
      class="w-full h-full pt-10 pt flex items-end flex-col px-5 lg:p-10 space-y-10"
    >
      <h2
        class="lg:text-2xl text-xl font-bold text-mainYellow border-b-8 border-mainRed rounded-xl pb-3"
      >
        اضافه کردن آموزش
      </h2>

      <div class="w-full flex items-center flex-col space-y-7">
        <div
          class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
        >
          <div class="flex items-end flex-col space-y-4">
            <label class="text-md text-mainYellow" for="email"
              >قیمت اشتراک <span class="text-sm">(به تومان)</span></label
            >
            <InputNumber
              id="email"
              v-model="coursePrice"
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
              v-model="courseTitle"
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
              v-model="trainer"
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
            class="w-full text-right text-2xl py-3 px-6"
            autoResize
            v-model="courseDescription"
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
            <PhEye v-show="!eventImageOne" weight="fill" :size="66" />
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
            <Message v-show="success">کالا به انبار اضافه شد</Message>
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
              <span> آپلود ویدیو آموزش </span>
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
              <span> اضافه کردن آموزش </span>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  PhPlus,
  PhUpload,
  PhVideo,
  PhCheckCircle,
  PhEye,
} from "@phosphor-icons/vue";
import { useManagementStore } from "../stores/productManagement";
import { storeToRefs } from "pinia";
import { useMainManagement } from "~/stores/managementStore";
const visible = ref(false);

// product refs

const success = ref(false);
const faild = ref(false);

const errorMessage = ref("");

// course properties
const courseDate = ref("");
const courseTitle = ref("");
const courseDescription = ref("");
const coursePrice = ref(null);
const trainer = ref("");

const eventVideo = ref(null);

// event images

const eventImageOne = ref();
const eventImageTwo = ref();
const eventImageThree = ref();

// for uploading functnon

const addedCourseId = ref();

// regiter management store

const managementStore = useManagementStore();
const mainManagement = useMainManagement();

const { type, brand, design, rarity, inStock } = storeToRefs(managementStore);

// handle adding product via submit

const videoUploadLoading = ref(false);
const minutes = ref();
const seconds = ref();

const loginErr = ref(false);

watch(minutes, (cur, old) => {
  if (cur === 0 && seconds.value === 0) {
    minutes.value = "لطفن کمی صبر کنید";
  }
});

const handleCourse = async () => {
  // const data = new URLSearchParams({
  //   title: courseTitle.value,
  //   price: coursePrice.value,
  //   type: type.value,
  //   file: eventVideo.value,
  //   trainer: trainer.value,
  //   description: courseDescription.value,
  // });

  if (eventVideo.value === null) {
    faild.value = true;
    errorMessage.value = "فایل ویدیو را انتخاب کنید";
  }
  if (courseTitle.value === "") {
    faild.value = true;
    errorMessage.value = "عنوان آموزش را وارد نمایید";
  }
  if (coursePrice.value === null) {
    faild.value = true;
    errorMessage.value = "قیمت آموزش را انتخاب کنید";
  }
  if (trainer.value === "") {
    faild.value = true;
    errorMessage.value = "مدرس ویدیو را انتخاب کنید";
  }
  if (courseDescription.value === "") {
    faild.value = true;
    errorMessage.value = "توضیحات آموزش را وارد کنید";
  }

  if (
    eventVideo.value !== null &&
    courseTitle.value !== "" &&
    coursePrice.value !== null &&
    trainer.value !== "" &&
    courseDescription.value !== ""
  ) {
    videoUploadLoading.value = true;
    const formData = new FormData();

    formData.append("file", eventVideo.value);
    formData.append("title", courseTitle.value);
    formData.append("price", coursePrice.value);
    formData.append("type", type.value);
    formData.append("trainer", trainer.value);
    formData.append("description", courseDescription.value);

    const uploadTimeSeconds = eventVideo.value.size / 100000;

    minutes.value = Math.floor(uploadTimeSeconds / 60);
    seconds.value = Math.round(uploadTimeSeconds % 60);
    console.log(`${minutes.value} minutes and ${seconds.value} seconds`);

    const countdown = setInterval(() => {
      // Print the current countdown value
      console.log(
        `${minutes.value} minutes and ${seconds.value} seconds remaining`
      );

      // Decrease the seconds by 1
      seconds.value--;

      // If seconds reach 0, decrease the minutes and reset the seconds to 59
      if (seconds.value < 0) {
        minutes.value--;
        seconds.value = 59;
      }

      // If both minutes and seconds reach 0, stop the countdown
      if (minutes.value === 0 && seconds.value === 0) {
        console.log("Upload complete!");
        clearInterval(countdown);
      }
    }, 1000); // Run the countdown every 1 second

    await $fetch("http://localhost:3333/management/addvideo", {
      method: "POST",
      headers: {},
      credentials: "include",
      body: formData,
      withCredentials: true,
    })
      .then((response, error) => {
        addedCourseId.value = response.video.id;
        mainManagement.setStateChange();
        let images = [
          eventImageOne.value,
          eventImageTwo.value,
          eventImageThree.value,
        ];
        if (response.video) {
          videoUploadLoading.value = false;
        }
        images.forEach((image) => {
          uploadImage(image);
        });
        success.value = true;
        setTimeout(() => {
          success.value = false;
        }, 3000);
      })
      .catch((error) => {
        if (error.status === 403) {
          loginErr.value = true;
          setTimeout(() => {
            loginErr.value = false;
          }, 2000);
        }
        faild.value = true;
        videoUploadLoading.value = false;
        errorMessage.value = error.data.message;
        setTimeout(() => {
          faild.value = false;
        }, 3000);
      });
  }
};

// handling image upload

const imageUploadLoading = ref(false);
const imageUploadError = ref(false);
const uploadErrorMessage = ref("");

const uploadImage = async function (image) {
  imageUploadLoading.value = true;
  const formData = new FormData();

  formData.append("file", image);
  formData.append("courseId", addedCourseId.value);
  await $fetch("http://localhost:3333/management/courseimageupload", {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      imageUploadLoading.value = false;
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadErrorMessage.value = error.data.message;
      imageUploadError.value = false;
    });
};
</script>

<style>
.p-dialog .p-dialog-header {
  background-color: #150531;
}
@media only screen and (max-width: 480px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
@media only screen and (max-width: 768px) {
  .p-dialog {
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  .p-dialog-content {
    height: calc(auto - 46px) !important;
  }
}
</style>
