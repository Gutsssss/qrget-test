<template>
  <el-card style="margin-left: auto; margin-right: auto;">
    <template #header>
      <p style="text-align: center;">Тут вы можете настроить пробный QR-код</p>
    </template>
    <div class="fast_main">
      <div ref="qrCodeTemplateDiv" class="qr-code"><span /></div>
      <create-form>
        <el-form-item label="Data">
          <el-input v-model="localData" type="textarea" />
        </el-form-item>
        <el-form-item label="Image File">
          <input
            ref="inputRef"
            type="file"
            node="image"
            @change="uploadFile"
          >
          <el-button @click="clearImage">Cancel</el-button>
        </el-form-item>
        <el-form-item label="Width">
          <el-input 
            type="number" 
            min="300" 
            max="1000" 
            :value="width" 
            @input="handleWidthChange" 
          />
        </el-form-item>
        <el-form-item label="Height">
          <el-input 
            type="number" 
            min="300" 
            max="1000" 
            :value="qrData.height" 
            @input="handleHeightChange" 
          />
        </el-form-item>
        <el-form-item label="Margin">
          <el-input 
            type="number" 
            min="0" 
            max="50" 
            :value="qrData.imageOptions.margin" 
            @input="handleMarginChange" 
          />
        </el-form-item>
      </create-form>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import QRCodeStyling from "qr-code-styling";


const props = defineProps({
  qrData: {
    type: Object,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['update:width', 'update:qrData']);

const qrCodeTemplateDiv = ref(null);
const inputRef = ref(null);
const localData = ref(props.qrData.data);
let qrCode:unknown = null;

const handleWidthChange = (value:number) => {
  emit('update:width', Number(value));
  updateQRCode({ ...props.qrData, width: Number(value) });
};

const handleHeightChange = (value) => {
  updateQRCode({ 
    ...props.qrData, 
    height: Number(value) 
  });
};

const handleMarginChange = (value) => {
  updateQRCode({
    ...props.qrData,
    imageOptions: {
      ...props.qrData.imageOptions,
      margin: Number(value)
    }
  });
};

const uploadFile = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      updateQRCode({
        ...props.qrData,
        image: e.target.result
      });
    };
    reader.readAsDataURL(file);
  }
};

const clearImage = () => {
  updateQRCode({
    ...props.qrData,
    image: undefined
  });
  if (inputRef.value) {
    inputRef.value.value = '';
  }
};

const updateQRCode = (newData) => {
  emit('update:qrData', newData);
  if (qrCode) {
    qrCode.update(newData);
  }
};

onMounted(() => {
  qrCode = new QRCodeStyling({
    ...props.qrData,
    width: props.width,
    height: props.qrData.height
  });
  qrCode.append(qrCodeTemplateDiv.value);
});

watch(() => props.qrData, (newVal) => {
  if (qrCode) {
    qrCode.update(newVal);
  }
}, { deep: true });

watch(localData, (newVal) => {
  updateQRCode({
    ...props.qrData,
    data: newVal
  });
});
</script>

<style scoped>
.fast_main {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>