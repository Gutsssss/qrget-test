<template>
    <div class="main_login">
        <el-form class="regAndLogForm">
            <el-form-item>
                <el-input v-model="email" :placeholder="$t('login.email')"/>
            </el-form-item>
            <el-form-item>
                <el-input v-model="password" type="password" show-password  :placeholder="$t('login.password')"/>
            </el-form-item>
            <div style="display: flex; gap:10px">
            <el-form-item>
            <el-button type="primary" @click="handleLogin" >{{ $t('nav.page3') }}</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="loginWithGoogle"><Icon name="ion:logo-google" style="color: white"/></el-button>
            </el-form-item>
          </div>
        </el-form>
        
    </div>
</template>

<script setup lang="ts">
import { useFirebase } from '~/composables/useFirebase';

const {login,auth,googleLogin} = useFirebase()

const email = ref('')
const password = ref('')
const handleLogin = async () => {
  try {
    const userCredential = await login(email.value, password.value)
    console.log(userCredential)
    localStorage.setItem('user',userCredential.user.email)
    localStorage.setItem('loginKey',userCredential.user.uid)
  } catch (error) {
    console.error('Login error:', error)
  }
  await navigateTo('/')
  location.reload()
}
const loginWithGoogle = async () => {
  try {
    const result = await googleLogin()
    localStorage.setItem('user',result?.user.email)
    localStorage.setItem('loginKey',result?.user.uid)
  } catch (error) {
    alert(error)
  }
  await navigateTo('/')
  location.reload()
}
</script>

<style scoped>
.main_login{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>