<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item index="1"
        ><nuxt-link class="navRef" to="/">{{$t('nav.page1')}}</nuxt-link></el-menu-item
      >
      <el-menu-item index="2"
        ><nuxt-link class="navRef" to="/create">{{$t('nav.page2')}}</nuxt-link></el-menu-item
      >
      <el-menu-item style="display: flex;justify-content: center;">
        <el-button @click="useChangeLocale('ru')">RU</el-button>
        <el-button @click="useChangeLocale('en')">EN</el-button>
      </el-menu-item>
    </el-menu>
    <slot />
    <footer class="footer">
      <el-divider />
    </footer>
  </div>
</template>

<script setup lang="ts">
const {locale,setLocale} = useI18n()
const useChangeLocale = (val:"ru"|"en") => {
  setLocale(val);
  localStorage.setItem("lang",locale.value)
};
</script>

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
