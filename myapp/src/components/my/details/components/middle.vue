<template>
    <div class="middle">
        <div class="middle-info">
            <span><img :src="headPic"/></span>
            <div class="middle-info-r">
                <span>{{username}}</span>
                <span>ID号：{{id}}</span>
                <span>地址：{{adress}}</span>
            </div>
            <div class="line"></div>
        </div>

        <div class="middleTag">
            <p>备注和标签：</p>
            <img :src="iconRight"/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headPic:require("@/assets/my/wd_gz_tx1@2x.png"),
            username:'绿豆', 
            id:'73937482',
            adress:'北京，朝阳区',
            iconRight:require('@/assets/my/icon_grxx_jt@2x.png')
        }
    }
}
</script>

<style lang="scss" scoped>
    .middle{
        width:100%;
        height:2.4rem;
        background:#FCFCFA ;        
        padding:.24rem 0 .14rem .24rem;
    }
    .middle-info{
        width:100%;
        height:1.4rem;
    }
    .middle-info-r>span:first-child{
        font-size: .32rem;
        color:#0A0A0A 
    }
    .middle-info-r>span:nth-of-type(2),.middle-info-r>span:nth-of-type(3){
        font-size: .26rem;
        color:#96969A 
    }
    .line{
        width:100%;
        height:.02rem;
        float:right;
        background:#D6D6D6;
        margin-top:.2rem;
    }
    .middle-info>span{
        float: left;
    }
    .middle-info-r{
        width:80%;
        float: right;
    }
    .middle-info-r>span{
        display: block;
    }
    .middleTag{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right:.24rem;
        height:.6rem;
        line-height: .6rem;
    }
</style>


