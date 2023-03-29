<template>
    <div class="main">
        <div class="text">
            {{ModelCard}}
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default{
    name:"myHead",
    props:["ModelCard"]
}

</script>

<style>
.main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text{
    margin: 10px;
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
    font-family: "FZSongHei-B07S";
}
.line{
    width: 95%;
    height: 1px;
    background-color: rgba(65, 65, 65, 0.1) ; 
    box-shadow: 0 1px 0 0 rgba(65, 65, 65, 0.1);

}
</style>