<template>
  <div class="flex justify-center">
    <button
      @click="visible = true"
      class="text-xl flex active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
    >
      <span> اضافه کردن آموزش </span>
      <PhPlus weight="fill" :size="23" />
    </button>
    <Dialog
      :breakpoints="{ '960px': '100vw', '641px': '100vw' }"
      v-model:visible="visible"
      modal
      :showHeader="false"
      :style="{ width: '70vw', backgroundColor: '#150531', height: '100vw' }"
      dismissableMask
      :contentStyle="{ backgroundColor: '#150531' }"
    >
      <div
        class="w-full h-full pt-10 pt flex items-center flex-col lg:p-10 space-y-10"
      >
        <h2 class="text-3xl text-mainYellow">اضافه کردن آموزش</h2>

        <div class="w-full flex items-center flex-col space-y-7">
          <div
            class="flex lg:flex-row flex-col items-center lg:space-y-0 space-y-7 lg:space-x-10"
          >
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainYellow" for="email"
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
              <label class="text-xl text-mainYellow" for="title"
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
              <label class="text-xl text-mainYellow" for="email"
                >تاریخ آپلود آموزش <span class="text-sm">(به شمسی)</span></label
              >
              <!-- <InputMask
                v-model="courseDate"
                placeholder="99/99/9999"
                slotChar="mm/dd/yyyy"
              /> -->
            </div>
            <div class="flex items-end flex-col space-y-4">
              <label class="text-xl text-mainYellow" for="trainer"
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
            <label class="text-2xl text-mainYellow" for="description"
              >توضیحات ویدیو
            </label>
            <Textarea
              class="w-full text-right text-2xl py-3"
              autoResize
              v-model="courseDescription"
              rows="6"
              cols="90"
            />
          </div>
          <h2 class="text-mainYellow text-3xl">آپلود تصاویر ویدیو</h2>
          <div
            class="w-full h-full lg:flex items-center grid grid-cols-2 grid-rows-2 justify-items-center px-7 place-items-center gap-3 lg:space-x-0 lg:justify-center lg:flex-wrap"
          >
            <label
              for="imageOne"
              class="lg:w-40 lg:h-52 w-28 h-32 bg-mainYellow transition ease-in-out duration-300 shadow-lg shadow-transparent hover:shadow-mainPurple text-darkPurple flex items-center justify-center cursor-pointer rounded-md"
            >
              <PhUpload weight="fill" :size="66" />
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
              <PhUpload weight="fill" :size="66" />
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
              <PhUpload weight="fill" :size="66" />
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

          <LazyVideoFilter />
          <!-- {{ type }}
          {{ design }}
          {{ brand }}
          {{ rarity }} -->
          <div class="h-full w-full flex space-x-6 items-center justify-center">
            <div>
              <Message v-show="success">کالا به انبار اضافه شد</Message>
            </div>
            <div v-if="Array.isArray(errorMessage)">
              <Message
                v-for="error in errorMessage"
                :key="error"
                v-show="faild"
                >{{ error }}</Message
              >
            </div>
            <label
              for="videoFile"
              class="text-xl cursor-pointer flex mb-10 active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
            >
              <span> آپلود ویدیو آموزش </span>
              <PhPlus weight="fill" :size="23" />
            </label>
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
            <button
              for="videoFile"
              @click="handleCourse()"
              class="text-xl flex mb-10 active:text-mainYellow active:bg-darkPurple items-center space-x-2 px-8 py-4 transition duration-150 ease-in-out border-2 border-transparent bg-mainYellow hover:border-mainPurple rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-darkPurple text-darkPurple"
            >
              <span> اضافه کردن آموزش </span>
              <PhPlus weight="fill" :size="23" />
            </button>
            <Message severity="success" v-show="videoUploadLoading"
              >فایل ها درحال بارگذاری لطفا خارج نشوید
              <ProgressSpinner
                style="width: 50px; height: 50px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
            /></Message>
            <Message severity="success" v-show="imageUploadLoading"
              >عکس ها درحال بارگذاری لطفا خارج نشوید
              <ProgressSpinner
                style="width: 50px; height: 50px"
                strokeWidth="8"
                animationDuration=".5s"
                aria-label="Custom ProgressSpinner"
            /></Message>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { PhPlus, PhUpload } from "@phosphor-icons/vue";
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
const coursePrice = ref();
const trainer = ref("");

const eventVideo = ref();

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

const handleCourse = async () => {
  videoUploadLoading.value = true;
  console.log(eventVideo.value);
  // const data = new URLSearchParams({
  //   title: courseTitle.value,
  //   price: coursePrice.value,
  //   type: type.value,
  //   file: eventVideo.value,
  //   trainer: trainer.value,
  //   description: courseDescription.value,
  // });

  const formData = new FormData();

  formData.append("file", eventVideo.value);
  formData.append("title", courseTitle.value);
  formData.append("price", coursePrice.value);
  formData.append("type", type.value);
  formData.append("trainer", trainer.value);
  formData.append("description", courseDescription.value);

  await $fetch("http://localhost:3333/management/addvideo", {
    method: "POST",
    headers: {},
    credentials: "include",
    body: formData,
    withCredentials: true,
  })
    .then((response, error) => {
      console.log(response.video.id);
      addedCourseId.value = response.video.id;
      mainManagement.setStateChange();
      console.log(error);
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
      faild.value = true;
      videoUploadLoading.value = false;
      errorMessage.value = error.data.message;
      setTimeout(() => {
        faild.value = false;
      }, 3000);
    });
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
  console.log(image);
  await $fetch("http://localhost:3333/management/courseimageupload", {
    method: "POST",

    body: formData,
  })
    .then((response) => {
      console.log(response);
      imageUploadLoading.value = false;
    })
    .catch((error) => {
      imageUploadError.value = true;
      uploadErrorMessage.value = error.data.message;
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
