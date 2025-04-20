<template>
  <div class="page">
    <el-menu mode="horizontal" >
      <el-menu-item index="1"
        ><nuxt-link class="navRef" to="/">{{$t('nav.page1')}}</nuxt-link></el-menu-item
      >
      <el-menu-item index="2"
        ><nuxt-link class="navRef" to="/create">{{$t('nav.page2')}}</nuxt-link></el-menu-item
      >
      <el-menu-item index="3"><nuxt-link class="navRef" to="/feedback">Свзяь с нами</nuxt-link></el-menu-item>
      <el-menu-item v-if="auth == null" index="4"
        ><nuxt-link class="navRef" to="/login">{{$t('nav.page3')}}</nuxt-link>
        </el-menu-item>
        <el-menu-item v-else-if="auth != null" index="4"
        ><el-button @click="handleLogOut">
          Выйти
        </el-button>
        </el-menu-item>
        
        <el-menu-item style="display: flex;justify-content: center;">
        <el-button @click="useChangeLocale('ru')">RU</el-button>
        <el-button @click="useChangeLocale('en')">EN</el-button>
      </el-menu-item>
    </el-menu>
    <slot class="content" />
    <!-- <footer class="footer">
      <el-divider />
    </footer> -->
  </div>
</template>

<script setup lang="ts">
import { useFirebase } from '~/composables/useFirebase';
import { ref } from 'vue';
const {locale,setLocale} = useI18n()
const {logout} = useFirebase()

const handleLogOut = async () => {
    logout()
    localStorage.removeItem('loginKey')
    localStorage.removeItem('user')
    await navigateTo('/')
    location.reload()
} 


const useChangeLocale = (val:"ru"|"en") => {
  setLocale(val);
  localStorage.setItem("lang",locale.value)
};
const auth = ref(localStorage.getItem('loginKey'))

</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 20px;
}
.content {
  flex: 1; /* Занимает всё доступное пространство */
}
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
