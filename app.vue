<template>
  <div class="main">
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
localStorage.getItem('lang')
</script>
<style>
.main {
  height: 100vh;
}
</style>
