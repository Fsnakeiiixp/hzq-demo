<template>
    <div class="main" ref="chart">

    </div>
</template>

<script setup>
import {  onMounted, reactive, ref } from "@vue/runtime-core"
import * as echarts from 'echarts'

//1.通过vue3.x中的refs标签用法，获取到container容器实例
const chart = ref(null);
//2.定义在本vue实例中的echarts实例
let myEcharts = reactive({});
//4.定义好echarts的配置数据
let option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }, //X轴
    yAxis: { 
        type: 'value' 
    }, //Y轴
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
        }], //配置项
}

//初始化echarts实例方法
const init = ()=>{
    //3.初始化container容器
    myEcharts= echarts.init(chart.value);
    //5.传入数据
    myEcharts.setOption(option);
    //additional：图表大小自适应窗口大小变化
    window.onresize = ()=>{
        myEcharts.resize();
    }
}


//onMounted钩子函数
onMounted(()=>{
    //初始化echarts
    init();
})
</script>

<style>
.main{
    height: 100%;
    width: 100%;
}
</style>