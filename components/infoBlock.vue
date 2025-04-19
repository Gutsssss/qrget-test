<template>
  <div style="display: flex;justify-content: center;">
    <el-card style="max-width: 900px;text-align: center;">
      <template #header><h1 style="text-align: center;font-size: 40px;">{{ $t('info.service') }}</h1></template>
      <p style="font-size: 20px">
        {{ $t('info.1block') }}
      </p>
      <hr />
      <p style="font-size: 20px">
        {{ $t('info.2block') }}
      </p>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
</style>
