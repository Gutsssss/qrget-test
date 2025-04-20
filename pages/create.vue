<template>
  <div style="display: flex;flex-direction: column;">
  <div class="createQr_main">
  <div class="createQr_main__qrDiv">
    <div ref="qrCodeTemplate" class="qr-code"><span /></div>
    <div class="createQr_main__qrDiv__download">
      <el-button @click="downloadQR">Download</el-button>
      <el-select v-model="downloadQRMode" style="width:100px">
        <el-option
          v-for="item in DownloadQR"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>
    <div class="demo-collapse">
      <el-collapse
      v-model="activeNames"
        style="padding: 20px;min-width: 500px"
      >
        <el-collapse-item title="Main Options" name="1">
          <create-form>
            <el-form-item label="Data">
              <el-input v-model="qrData.data" type="textarea" />
            </el-form-item>
            <el-form-item label="Image File">
              <input
                ref="inputRef"
                multiple
                type="file"
                node="image"
                @change="handleFileUpload"
              >
              <el-button @click="cancelImage">Cancel</el-button>
            </el-form-item>
            <el-form-item label="Width">
              <el-input v-model="qrData.width" type="number" min="0" />
            </el-form-item>
            <el-form-item label="Height">
              <el-input v-model="qrData.height" type="number" min="0" />
            </el-form-item>
            <el-form-item label="Margin">
              <el-input v-model="qrData.margin" type="number" min="0" />
            </el-form-item>
          </create-form>
        </el-collapse-item>

        <el-collapse-item title="Dots Options" name="2">
          <el-form-item label="Dots Style">
            <el-select v-model="qrData.dotsOptions.type">
              <el-option
                v-for="item in DotsStyle"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Color">
            <el-color-picker v-model="qrData.dotsOptions.color" />
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="Corners Square Options" name="3">
          <el-form-item label="Corners Square Style">
            <el-select v-model="qrData.cornersSquareOptions.type">
              <el-option
                v-for="item in CornersSquareStyle"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Color">
            <el-color-picker v-model="qrData.cornersSquareOptions.color" />
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="Corners Dot Options" name="4">
          <el-form-item label="Corners Dot Style">
            <el-select v-model="qrData.cornersDotOptions.type">
              <el-option
              v-for="item in CornersDotStyle"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Color">
            <el-color-picker v-model="qrData.cornersDotOptions.color"/>
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="Background Options" name="5">
          <el-form-item>
            <el-radio-group>
              <el-radio value="1" size="large">Single color</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Background Color">
            <el-color-picker v-model="qrData.backgroundOptions.color" />
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="Image Options" name="6">
          <el-form-item>
            <el-checkbox
              v-model="qrData.imageOptions.hideBackgroundDots"
              label="Hide Background Dots"
              size="large"
            />
          </el-form-item>
          <el-form-item label="Image Size">
            <el-input  v-model="qrData.imageOptions.imageSize" type="number" max="1" min="0" step="0.1" />
          </el-form-item>
          <el-form-item label="Margin">
            <el-input v-model="qrData.imageOptions.margin" type="number" />
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="QR Options" name="7">
          <el-form-item label="Type Number">
            <el-input v-model="qrData.qrOptions.typeNumber" max="50" min="0" type="number" />
          </el-form-item>
          <el-form-item label="Mode">
            <el-select v-model="qrData.qrOptions.mode"/>
            
          </el-form-item>
          <el-form-item label="Error Correction Level">
            <el-select v-model="qrData.qrOptions.errorCorrectionLevel">
              <el-option
                v-for="item in ErrorCorrectionLevel"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
  <div>
  <p style="text-align: center;">Разные шаблоны для дизайна QR-кода</p>
    <templates-q-r @set-q-r="setTemplate"/>
  </div>
</div>
</template>

<script lang="ts" setup>
import QRCodeStyling from "qr-code-styling";
import { onMounted, watch, ref, useTemplateRef, shallowRef } from "vue";
import { DotsStyle,CornersSquareStyle,CornersDotStyle,ErrorCorrectionLevel,Mode,DownloadQR } from "../interfaceQR";
import type { QRCode } from "../interfaceQR";

definePageMeta({
  middleware: 'auth'
})

const qrCodeTemplate = useTemplateRef("qrCodeTemplate");
const inputRef = shallowRef();
const activeNames = ref(['1'])
const downloadQRMode = ref(DownloadQR.png)
let qrCode:QRCodeStyling;
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
    type: DotsStyle.square,
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
const setTemplate = (qr: QRCodeData): void => {
  qrData.value = qr;
  qrCode?.update(qrData.value);
};

const handleFileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        qrData.value.image = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }
};

const cancelImage = (): void => {
  qrData.value.image = "";
  if (inputRef.value) {
    inputRef.value.value = "";
  }
  qrCode.update({ image: "" });
};
const downloadQR = (): void => {
  qrCode.download({
    name: 'qr',
    extension: downloadQRMode.value
  });
};

onMounted(() => {
  if (qrCodeTemplate.value) {
    qrCode = new QRCodeStyling(qrData.value);
    qrCode.append(qrCodeTemplate.value);
  }
});

watch(qrData.value, (newVal: QRCodeData) => {
  qrCode.update(newVal);
}, { deep: true });
</script>

<style scoped>
.createQr_main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.qr-code {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
}

.createQr_main__qrDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.createQr_main__qrDiv__download {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  flex-wrap: wrap;
}

.demo-collapse {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}


@media screen and (max-width: 768px) {
  .createQr_main {
    padding: 10px;
  }
  
  .createQr_main__qrDiv {
    position: static;
    margin-top: 20px;
  }
  
  .demo-collapse {
    padding: 10px;
    min-width: unset;
  }
  
  .el-collapse {
    width: 100%;
  }
  
  .el-form-item {
    margin-bottom: 15px;
  }
}


@media screen and (min-width: 769px) and (max-width: 1024px) {
  .createQr_main {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .createQr_main__qrDiv {
    width: 45%;
    position: static;
  }
  
  .demo-collapse {
    width: 50%;
  }
}


@media screen and (min-width: 1025px) {
  .createQr_main {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .createQr_main__qrDiv {
    position: sticky;
    top: 100px;
    left: 5%;
    width: 30%;
  }
  
  .demo-collapse {
    width: 65%;
  }
}


@media screen and (max-width: 480px) {
  .el-collapse-item__header,
  .el-form-item__label {
    font-size: 14px;
  }
  
  .el-input,
  .el-select,
  .el-button {
    width: 100% !important;
  }
  
  .createQr_main__qrDiv__download {
    flex-direction: column;
  }
}
</style>
