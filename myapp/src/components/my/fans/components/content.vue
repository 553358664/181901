<template>
    <div class="wrapper" ref="fansWrapper">
         <ul class="content">
            <li v-for="(item,index) in fans">               
                 <div>
                    <router-link :to="{name:'details'}">
                        <span><img :src="item.headPic"/></span>                                            
                        <span>{{item.username}}</span>                     
                    </router-link>   
                    <p><a href="#">关注</a></p> 
                 </div>
                <div class="line"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
     mounted(){
        this.scroll = new BScroll(this.$refs.fansWrapper,{
            scrollY:true
        })
        console.log(this.scroll);
    },
     data(){
        return {          
            fans:[
                {
                    headPic:require("@/assets/my/wd_fs_tx1@2x.png"),
                    username:'决明子',                   
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx2@2x.png"),
                    username:'梅子黄时雨',
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx3@2x.png"),
                    username:'曼殊沙华', 
                },
                {
                   headPic:require("@/assets/my/wd_fs_tx4@2x.png"),
                   username:'满天星',
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx1@2x.png"),
                    username:'决明子',                   
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx2@2x.png"),
                    username:'梅子黄时雨',
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx3@2x.png"),
                    username:'曼殊沙华', 
                },
                {
                   headPic:require("@/assets/my/wd_fs_tx4@2x.png"),
                   username:'满天星',
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx1@2x.png"),
                    username:'决明子',                   
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx2@2x.png"),
                    username:'梅子黄时雨',
                },
                {
                    headPic:require("@/assets/my/wd_fs_tx3@2x.png"),
                    username:'曼殊沙华', 
                },
                {
                   headPic:require("@/assets/my/wd_fs_tx4@2x.png"),
                   username:'满天星',
                }
            ]
            
        }
    }
}
</script>

<style lang="scss" scoped>
     .wrapper{
        width:100%;
        height:100%;
        background:#FCFCFA;
        font-size:.30rem;
        position:fixed;
        top:1.1rem;
    }
   .wrapper>.content{
        padding:0 .24rem;
        width: 100%;
        height: max-content;
        background:#FCFCFA;
    }
    .wrapper>.content>li{
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
    }
    .wrapper>.content>li>div{
        width:100%;
        height:1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
     .wrapper>.content>li>div>a>span:first-child{
        display:inline-block;
        margin-right:.2rem;
        vertical-align: middle;
    }

    .wrapper>.content>li>div>a>img,.wrapper>.content>li>div>a>span{
        display: inline-block;
    }  
    .wrapper>.content>li>div>p>a{
        display:inline-block;
        width:1.5rem;
        height:.48rem;
        line-height: .48rem;
        text-align: center;
        background:#F44C36;
        color: #EEEEEE;
        border-radius: .5rem;
    }
   .wrapper>.content>li>.line{
        height:.02rem;
        width:85%;
        float:right;
        background:#EEEEEE;
    }


</style>


