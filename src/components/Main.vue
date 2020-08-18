<template>
  <el-container class="main_cont">
    <el-header class="title">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        style="width: 100%"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">备用</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="content">
        <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    },
    created() {
        this.$router.push({name: 'MainContent'})
    }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.title {
  background: white;
}
.content {
  background: rgb(236, 245, 255);
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>