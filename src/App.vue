<template>
  <div id="app">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
