<template>
    <div @click="$emit('setQR')">
        <div ref="qrCodeTemplate" class="qr-code"><span /></div>
    </div>
</template>

<script setup lang="ts">
import QRCodeStyling from "qr-code-styling";
import { onMounted, useTemplateRef} from "vue";


const qrCodeTemplate = useTemplateRef("qrCodeTemplate");
defineEmits(['setQR'])
const props = defineProps({
    qr:{
        type:Object
    },
})
let qrCode;
onMounted(() => {
  qrCode = new QRCodeStyling(props.qr);
  qrCode.append(qrCodeTemplate.value as HTMLDivElement);
});
</script>

<style scoped>

</style>