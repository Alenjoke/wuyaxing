<template>
  <div class="top">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div style='display: flex;justify-content: center;' >欢迎!</div>
      </div>
      <div id="test"></div>
      <div class="btn">
        <el-button>Let's go!</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Tiper from "tiper-js"
import '../../node_modules/tiper-js/lib/tiper-js.css'

export default {
    name: 'Home',
    data() {
        return {
            content: '这是内容'
        }
    },
    mounted: function() {
      let tiper = new Tiper(document.getElementById('test'))
      tiper.beginTyping(); //Begins typing with default text and config.
      
      tiper.options= {
        pauseTimeout: 500,
        hesitation: 0.5
      }
      tiper.beginTyping();
      tiper.line("我于杀戮之中绽放，亦如黎明中的花朵");
    }
};
</script>

<style scoped>
.top {
  display: flex;justify-content: center;
  animation: move 1s both;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.btn {
  margin-top: 30px;
  justify-content: center;
  display: flex;
  animation: showBtn 1s 2s both;
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
70%{margin-top: 200px;}
100%{margin-top: 180px;}
}

@keyframes showBtn {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
</style>