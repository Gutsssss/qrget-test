<template>
  <div style="display: flex; flex-direction: column; gap: 30px">
    <div>
      <p class="main__prewiew">{{$t('main')}}</p>
    </div>
    <InfoBlock />
    <FastCreateQR
      :qr-data="qrData"
      :width="qrData.width"
      @update:width="changeWidth"
    />
    <InstructionBlock />
    <div>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in arrImages" :key="item.image">
          <div class="image-wrapper">
            <img :src="item.image" alt="Carousel Image">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import image1 from "../assets/bordeaux-qr-code.webp";
import image2 from "../assets/qr.webp";
import image3 from "../assets/qr2.jpg";
import { ref, watch } from "vue";

let qrCode;
const arrImages = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
];
const qrData = ref({
  width: 300,
  height: 300,
  type: "svg",
  data: "https://www.facebook.com/",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded",
  },
  backgroundOptions: {
    color: "#e9ebee",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
    imageSize:1
  },
});

const changeWidth = (newWidth:number) => {
  qrData.value.width = newWidth;
}

// Правильное отслеживание изменений
watch(() => qrData.value.width, (newWidth) => {
  console.log('Width changed:', newWidth);
});

// Или если нужно отслеживать весь объект
watch(qrData, (newVal) => {
  console.log('QR data changed:', newVal);
}, { deep: true });
</script>

<style scoped>
.main__prewiew {
  text-align: center;
  font-size: 40px;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>