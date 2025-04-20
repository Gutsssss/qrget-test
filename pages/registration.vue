<template>
    <div class="main_login">
        <el-form class="regAndLogForm">
            <el-form-item>
                <el-input :placeholder="$t('registration.email')"/>
            </el-form-item>
            <el-form-item>
                <el-input :placeholder="$t('registration.password')"/>
            </el-form-item>
            <el-form-item>
                <el-input :placeholder="$t('registration.re-enter')"/>
            </el-form-item>
            <el-form-item>
            <el-button type="primary">{{ $t('nav.page4') }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main_login{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>