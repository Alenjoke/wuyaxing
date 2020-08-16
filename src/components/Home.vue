<template>
  <div class="top">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div style='display: flex;justify-content: center;' >欢迎!</div>
      </div>
      <div>{{ content }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            content: '这是内容'
        }
    }
};
</script>

<style scoped>
.top {
display: flex;justify-content: center;
animation: move 2s both;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

@keyframes move 
{
0%{margin-top: 0px;}
100%{margin-top: 200px;}
}
</style>