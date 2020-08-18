<template>
  <div class="top">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div style='display: flex;justify-content: center;color: rgba(9,20,80,0.9);font-size: 20px;' >六十六</div>
      </div>
      <div class="text"></div>
      <div class="btn">
        <el-button @click="toMain()" style="font-weight: bold;">我们走</el-button>
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
      let tiper = new Tiper(document.querySelector(".text"))
      tiper.beginTyping(); //Begins typing with default text and config.
      
      tiper.options= {
        hesitation: 1,
        pauseOnSpace: true,
        pauseTimeout: 600,
        showCaret: true,
      }
      tiper.beginTyping();
      tiper.line("我于杀戮之中绽放，亦如黎明中的花朵");
    },
    methods: {
        toMain: function() {
            this.$router.push({name: 'Main'})
        }
    }
};
</script>

<style scoped>
.top {
  display: flex;justify-content: center;
  animation: move 1s both;
}
.text {
  font-size: 18px;
  font-weight: bold;
  color: darkorange;
  display: flex;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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