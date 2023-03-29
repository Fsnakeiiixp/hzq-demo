<template>
    <div class="main">
        <div class="logotop">

        </div>
        <div class="logobottom">
            <div class="logobottomleft">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" v-model="textarea">
                </el-input>
            </div>
            <div class="logobottomright">

            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{
            textarea:"" 
        }
    }
}
</script>

<style>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.logotop {
    width: 100%;
    height: 50%;
}

.logobottom {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
}

.logobottomleft{
    padding-left: 10px;
    width: 50%;
    height: 100%;
}

.logobottomright{
    width: 50%;
    height: 100%;
}
</style>