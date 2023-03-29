<template>
  <div class="common-layout">
    <div class="Header">标题</div>
    <div class="Main">
      <div class="upper">
        <div class="left">
          <div class="head">
            <MyHead :ModelCard="Card.Model" />
          </div>
          <el-radio-group v-model="ModelSelected">
            <el-radio :label="item.label" :key="item.key" v-for="item in Models" border>{{ item.name }}</el-radio>
          </el-radio-group>
        </div>
        <div class="middle">
          <MyLogo />
        </div>
        <div class="right">
          <div class="top">
          </div>
          <div class="end">
            <PieChart />
          </div>
        </div>
      </div>
      <div class="lower">
        <div class="lleft">
          <el-button type="primary" @click="JumpToNew" plain>查看训练进度</el-button>
          <!-- <MyPercentage :Percentage="Percentage" /> -->
        </div>
        <div class="lmiddle">
          图表
        </div>
        <div class="lright">
          图表
          <LrightC />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import LrightC from "./components/lrightChart.vue"
import PieChart from "./components/pieChart.vue"
import MyHead from "./components/myHead.vue"
import MyPercentage from "./components/myPercentage.vue"
import MyLogo from "./components/myLogo.vue"
import { ref, reactive } from "vue"
import axios from "axios"


export default {

  components: {
    LrightC,
    PieChart,
    MyHead,
    MyPercentage,
    MyLogo,

  },
  setup() {

    let ModelSelected = ref("1");
    const Models = [
      { name: "aaa", label: 1, key: 1 },
      { name: "bbb", label: 2, key: 2 },
      { name: "ccc", label: 3, key: 3 }
    ];
    const Card = reactive({
      Model: "模型选择",
      Text: "文字说明",
      Percentage: "进度条",
      Table: "表单",
      BarChart: "柱状图",
      PieChart: "饼图"
    })
    let Percentage = ref("90");

    
    

    //跳转（----axios--demo）
    function JumpToNew() {
      /* window.open("https://www.baidu.com/","_blak") */
      
      /* const { spawn } = window.require('child_process');
    
      const PythonShell = window.require('python-shell');

      // 使用 Child Process 执行 Python 脚本
      const pythonProcess = spawn('python', ['script.py']);

      pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      // 使用 Python Shell 执行 Python 脚本
      let options = {
        // 指定 Python 脚本路径
        pythonPath: '../minist_demo/demo.py',
        // 指定 Python 脚本文件路径
        scriptPath: '../minist_demo/',
        // 传递参数
        args: [1, 2]
      };
      PythonShell.run('script.py', options, function (err, results) {
        if (err) throw err;
        console.log('results:', results);
      }); */
      //axios请求,axios.这里填方法(一般是post或者get，对应你后台设置的方法)，路径这个api
      axios.get('api/hello',{
      //请求体内容
      params:{
        data:"adadadadadaadad"
      }
    }).then((res)=>{
      //请求成功后执行的函数s
      console.log(res)
    }
    ,(err)=>{
      //请求失败后执行的函数
      console.log(err)
    })
    }

    //回车提交表单
    


    return {
      ModelSelected,
      Card,
      Percentage,
      JumpToNew
    }
  }

}




</script>

<style scoped>
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(247, 247, 247);

}

.Header {
  height: 8%;
  background-color: white;

}

.Main {
  padding: 1%;
  display: flex;
  flex-direction: column;
  height: 90%;
}

.upper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 65%;

}

.lower {
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  width: 100%;
  height: 30%;

}

::v-deep .el-radio-group {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
  overflow: hidden;
}

::v-deep .el-radio.is-bordered {
  margin-right: 0;
  margin-top: 10px;

}

.left {
  width: 25%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)
}

.middle {
  width: 50%;
  background-color: white;
  margin-left: 1%;
  margin-right: 1%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.right {
  width: 25%;
  display: flex;
  flex-direction: column;

}

.lleft {
  width: 25%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.lmiddle {
  width: 50%;
  background-color: white;
  margin-left: 1%;
  margin-right: 1%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.lright {
  width: 25%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  ;

}

.top {
  height: 50%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.end {
  margin-top: 4%;
  height: 50%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.head {
  width: 100%;
  height: 10%;
}
</style>
