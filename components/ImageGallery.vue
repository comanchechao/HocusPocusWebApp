<template>
  <div class="card md:flex md:justify-content-center">
    <Galleria
      :thumbnailsPosition="position"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      :circular="true"
      containerStyle="max-width: 640px"
      :showItemNavigators="true"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from "@/services/PhotoService";
const props = defineProps(["productImages"]);

const getProductImages = async (image) => {
  const { data } = await $fetch(
    `http://localhost:3333/products/image/${image.id}`,
    {
      headers: {},
      withCredentials: true,
      credentials: "include",
    }
  )
    .then(function (response) {
      images.value.push({ itemImageSrc: response.image });
      console.log(images.value);
    })
    .catch(function (error) {
      console.error(error);
    });
};

onMounted(() => {
  setTimeout(() => {
    props.productImages.forEach((image) => {
      getProductImages(image);
    });
  }, 3000);
});

const images = ref([]);
const responsiveOptions = ref([
  {
    breakpoint: "991px",
    numVisible: 4,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>
