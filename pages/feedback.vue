<template>
  <div class="feedback_main">
  <p style="font-size: 25px;">{{ $t('feedbackForm.title') }}</p>
    <el-form
      ref="ruleFormRef"
      style="max-width: 900px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
    >
      <el-form-item :label="$t('feedbackForm.name')" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item :label="$t('feedbackForm.time')" style="min-width: 700px;" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              v-model="ruleForm.date1"
              disabled
              type="date"
              aria-label="Pick a date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item :label="$t('feedbackForm.using')" prop="location">
        <el-segmented v-model="ruleForm.location" :options="locationOptions" />
      </el-form-item>
      <el-form-item :label="$t('feedbackForm.feedback')" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from 'element-plus'
definePageMeta({
  middleware: 'auth'
})

interface RuleForm {
  name: string | null;
  date1: string | Date;
  location: string;
  desc: string;
}

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: localStorage.getItem('user'),
  date1: new Date(),
  location: "",
  desc: "",
});

const locationOptions = ["Self", "Company"];

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  location: [
    {
      required: true,
      message: "Please select a location",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
    message: 'Your feedback has been sent',
    type: 'success',
  })
  
  formEl.resetFields()
    } else {
        ElMessage({
    message: `Fields are not valid`,
    type: 'error',
  })
  console.log(fields)
    }
  });
  
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

</script>
<style scoped>
.feedback_main {
  display: flex;
  margin-top: 20px;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.feedback_main > p {
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
}

.el-form {
  width: 100%;
  max-width: 900px;
  padding: 0 15px;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-input,
.el-textarea,
.el-date-picker,
.el-segmented {
  width: 100%;
}

.el-button {
  margin-right: 10px;
}


@media screen and (max-width: 768px) {
  .feedback_main {
    margin-top: 10px;
    padding: 10px;
  }
  
  .feedback_main > p {
    font-size: 20px;
  }
  
  .el-form {
    padding: 0;
  }
  
  .el-form-item {
    margin-bottom: 15px;
  }
  
  .el-form-item__label {
    text-align: left;
    margin-bottom: 5px;
    display: block;
    width: 100% !important;
  }
  
  .el-form-item__content {
    margin-left: 0 !important;
  }
  
  .el-col-11 {
    width: 100%;
  }
  
  .el-button {
    width: 100%;
    margin-bottom: 10px;
    margin-right: 0;
  }
}


@media screen and (min-width: 769px) and (max-width: 1024px) {
  .el-form {
    max-width: 700px;
  }
}


@media screen and (max-width: 480px) {
  .feedback_main > p {
    font-size: 18px;
  }
  
  .el-segmented {
    display: flex;
    flex-direction: column;
  }
  
  .el-segmented :deep(.el-segmented-item) {
    margin-bottom: 5px;
  }
}
</style>
