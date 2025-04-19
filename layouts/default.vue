<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item index="1"
        ><nuxt-link class="navRef" to="/">About</nuxt-link></el-menu-item
      >
      <el-menu-item index="2"
        ><nuxt-link class="navRef" to="/create">Create</nuxt-link></el-menu-item
      >
    </el-menu>
    <slot />
    <footer class="footer">
      <el-divider />
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background-color: white;
  right: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 30px;
  font-size: 19px;
  font-weight: bold;
  color: #000000;
}
</style>
