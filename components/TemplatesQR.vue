<template>
    <div style="display: flex;justify-content: center;gap:20px">
        <TemplateQRVueMyTemplate :qr="qrDataTemplates.qr1" @set-q-r="$emit('setQR',qrDataTemplates.qr1)"/>
        <TemplateQRVueMyTemplate :qr="qrDataTemplates.qr2" @set-q-r="$emit('setQR',qrDataTemplates.qr2)"/>
        <TemplateQRVueMyTemplate :qr="qrDataTemplates.qr3" @set-q-r="$emit('setQR',qrDataTemplates.qr3)"/>
    </div>
</template>

<script setup lang="ts">
import { DotsStyle,CornersSquareStyle,CornersDotStyle,ErrorCorrectionLevel,Mode } from "~/interfaceQR";
import type { QRCode } from "~/interfaceQR";
defineEmits(['setQR'])
const qrDataTemplates = ref({
    qr1:{
  width: 300,
  height: 300,
  data: "https://www.facebook.com/",
  image: "",
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: Mode.Byte,
    errorCorrectionLevel: ErrorCorrectionLevel.H,
  },
  imageOptions: {
    hideBackgroundDots: false,
    imageSize: 0.4,
    margin: 0,
  },
  dotsOptions: {
    type: DotsStyle.classy,
    color: "blue",
  },
  backgroundOptions: {
    color: "red",
    gradient: {
      type: "Linear",
      colorStops: [
        {
          offset: 1,
          color: "white",
        },
        {
          offset: 0,
          color: "white",
        },
      ],
    },
  },
  cornersSquareOptions: {
    type: CornersSquareStyle.dot,
    color: "yellow",
  },
  cornersDotOptions: {
    type: CornersDotStyle.square,
    color: "red",
  },
},
qr2:{
  width: 300,
  height: 300,
  data: "https://www.youtube.com",
  image: "",
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: Mode.Byte,
    errorCorrectionLevel: ErrorCorrectionLevel.Q,
  },
  imageOptions: {
    hideBackgroundDots: false,
    imageSize: 0.4,
    margin: 0,
  },
  dotsOptions: {
    type: DotsStyle.square,
    color: "red",
  },
  backgroundOptions: {
    color: "red",
    gradient: {
      type: "Linear",
      colorStops: [
        {
          offset: 1,
          color: "white",
        },
        {
          offset: 0,
          color: "white",
        },
      ],
    },
  },
  cornersSquareOptions: {
    type: CornersSquareStyle.square,
    color: "red",
  },
  cornersDotOptions: {
    type: CornersDotStyle.square,
    color: "red",
  },
},
qr3:{
  width: 300,
  height: 300,
  data: "https://www.facebook.com/",
  image: "",
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: Mode.Byte,
    errorCorrectionLevel: ErrorCorrectionLevel.Q,
  },
  imageOptions: {
    hideBackgroundDots: false,
    imageSize: 0.4,
    margin: 0,
  },
  dotsOptions: {
    type: DotsStyle.dots,
    color: "#000000",
  },
  backgroundOptions: {
    color: "red",
    gradient: {
      type: "Linear",
      colorStops: [
        {
          offset: 1,
          color: "white",
        },
        {
          offset: 0,
          color: "white",
        },
      ],
    },
  },
  cornersSquareOptions: {
    type: CornersSquareStyle.square,
    color: "#000000",
  },
  cornersDotOptions: {
    type: CornersDotStyle.square,
    color: "#000000",
  },
}
})
const qrData:Ref<QRCode> = ref({
  width: 300,
  height: 300,
  data: "https://www.facebook.com/",
  image: "",
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: Mode.Byte,
    errorCorrectionLevel: ErrorCorrectionLevel.Q,
  },
  imageOptions: {
    hideBackgroundDots: false,
    imageSize: 0.4,
    margin: 0,
  },
  dotsOptions: {
    type: DotsStyle.classy,
    color: "#000000",
  },
  backgroundOptions: {
    color: "red",
    gradient: {
      type: "Linear",
      colorStops: [
        {
          offset: 1,
          color: "white",
        },
        {
          offset: 0,
          color: "white",
        },
      ],
    },
  },
  cornersSquareOptions: {
    type: CornersSquareStyle.square,
    color: "#000000",
  },
  cornersDotOptions: {
    type: CornersDotStyle.square,
    color: "#000000",
  },
});
</script>

<style scoped>

</style>