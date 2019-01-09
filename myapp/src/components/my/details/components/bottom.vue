<template>
    <div class="bottom">
         <div class="bottomPage1">
            <p>个人主页</p>
            <img :src="iconRight"/>
        </div>
        <div class="line"></div>
        <div class="bottomPage2">
            <p>更多</p>
            <img :src="iconRight"/>
        </div>
    </div>
</template>

<script>
export default {
     data(){
        return{
            iconRight:require('@/assets/my/icon_grxx_jt@2x.png')
        }
    }
}
</script>

<style lang="scss" scoped>
    .bottom{       
        padding:.24rem 0 .24rem .24rem;
        margin-top: .2rem;
        background:#FCFCFA ;
        height:2.2rem;
    }
    .bottomPage1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:1rem;
        padding-right:.24rem;
    }
    .bottomPage2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:.8rem;
        padding-right:.24rem;
    }
    .line{
        width:100%;
        height:.02rem;
        float:right;
        background:#D6D6D6;
    }
</style>


