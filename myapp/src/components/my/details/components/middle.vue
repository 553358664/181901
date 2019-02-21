<template>
    <div class="middle">
        <div class="middle-info">
            <span><img :src="headPic"/></span>
            <div class="middle-info-r">
                <span v-model="username">{{username}}</span>
                <span>ID号：{{myList.ID}}</span>
                <span>地址：{{myList.adress}}</span>
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
/**
 * 
 *  created () {
       this.Observer.$on("two",(val)=>{
           this.name = val;
       })
    },
 */
import Vuex from "vuex";
export default {
    created(){
        this.$store.dispatch("my/handleGet")    
        this.username=this.$route.params.name;
        this.headPic = this.$route.params.src;
    },
    computed:{
        ...Vuex.mapState({
            myList:state=>state.my.myList
        })
    },
    data(){
        return{
            headPic:require("@/assets/my/wd_gz_tx1@2x.png"),
            username:'绿豆', 
            ID:'73937482',
            adress:'北京，朝阳区',
            iconRight:require('@/assets/my/icon_grxx_jt@2x.png')
        }
    }
}
</script>

<style lang="scss" scoped>
    .middle{
        width:100%;
        height:2.6rem;
        background:#FCFCFA ;        
        padding:.24rem 0 .14rem .24rem;
    }
    .middle-info{
        width:100%;
        height:1.6rem;
    }
    .middle-info-r>span:first-child{
        font-size: .34rem;
        color:#0A0A0A 
    }
    .middle-info>span>img{
        display:inline-block;
        width:1.2rem;
        height:1.2rem;
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
        margin-top:.3rem;
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
    .middleTag p{
        font-size:.28rem;
    }
    .middleTag>img{
        width:.24rem;
        height:.24rem;
    }
</style>


