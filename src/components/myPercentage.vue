<template>
    <div class="main">
        <div class="uppera">
            <el-button type="primary" plain>left</el-button>
            <el-button type="primary" plain>right</el-button>
        </div>
        <div class="lowera">
            <div class="content">
                当前进度:
            </div>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="Percentage" ></el-progress>
        </div>
    </div>
</template>

<script>
export default{
    name:"myPercentage",
    props:["Percentage"]
}

</script>

<style>
.main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.uppera{
    padding-top: 10px;
    padding-bottom: 10px;
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.lowera{
    height: 50%;
    width: 90%;
}

.content{
    margin-bottom: 10px;
}
</style>