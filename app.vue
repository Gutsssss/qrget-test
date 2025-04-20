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
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
