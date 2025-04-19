<template>
  <div style="display: flex; justify-content: center">
    <el-card style="max-width: 900px" class="main__card">
      <template #header
        ><h1 style="text-align: center; font-size: 40px">
          {{$t('howItWorks.title')}}
        </h1></template
      >
      <p>
        {{$t('howItWorks.firstBlock')}}
        <nuxt-link class="navRef" to="/create" style="font-size: 20px;">ссылке</nuxt-link>
      </p>
      <p>
        {{$t('howItWorks.secondBlock')}}
      </p>
      <p>
        {{$t('howItWorks.thirdBlock')}}
      </p>
      <p>
        {{$t('howItWorks.foreBlock')}}
      </p>
      <p>
        {{$t('howItWorks.fiveBlock')}}
      </p>
      <p>
        {{$t('howItWorks.sixBlock')}}
      </p>
    </el-card>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main__card p {
  font-size: 20px;
}
</style>
