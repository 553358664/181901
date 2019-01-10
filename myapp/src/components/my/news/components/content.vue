<template>
     <div class="wrapper" ref="newsWrapper">
         <ul class="content ful">
            <li v-for="(item,index) in follows">
                         <router-link :to="{name:'chatbox'}"> 
                             <span class="headpic"><img :src="item.headPic"/></span>
                             <p>
                                <span class="username">{{item.username}}<em></em></span> 
                                <span class="speak">{{item.speak}}</span>       
                             </p> 
                         </router-link>
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
        this.scroll = new BScroll(this.$refs.newsWrapper,{
            scrollY:true
        })
        console.log(this.scroll);
    },
    data(){
         return {       
            follows:[
                {
                    headPic:require("@/assets/my/wd_gz_tx1@2x.png"),
                    username:'绿豆',
                    speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'                   
                },
                {
                    headPic:require("@/assets/my/wd_gz_tx2@2x.png"),
                    username:'燕麦粥',
                    speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'   
                },
                {
                    headPic:require("@/assets/my/wd_gz_tx3@2x.png"),
                    username:'柠檬',
                    speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'    
                },
                {
                   headPic:require("@/assets/my/wd_gz_tx4@2x.png"),
                   username:'核桃酥', 
                   speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'   
                },
                {
                    headPic:require("@/assets/my/wd_gz_tx3@2x.png"),
                    username:'柠檬',
                    speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'    
                },
                {
                   headPic:require("@/assets/my/wd_gz_tx4@2x.png"),
                   username:'核桃酥',
                   speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'    
                },
                {
                    headPic:require("@/assets/my/wd_gz_tx3@2x.png"),
                    username:'柠檬',
                    speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'    
                },
                {
                   headPic:require("@/assets/my/wd_gz_tx4@2x.png"),
                   username:'核桃酥',
                   speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'    
                },
                {
                    headPic:require("@/assets/my/wd_gz_tx3@2x.png"),
                    username:'柠檬', 
                    speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'   
                },
                {
                   headPic:require("@/assets/my/wd_gz_tx4@2x.png"),
                   username:'核桃酥', 
                   speak:'绿蚁新醅酒，红泥小火炉，晚来天欲雪，能饮一杯无'   
                },
                
            ],
        }
    }
}
</script>

<style lang="scss">
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
        height:1.6rem;
        a{
            width:100%;
            height:1.6rem; 
            .headpic{
                width:15%;
                float:left;
                margin-top:.1rem;
            }
            p{
                width:85%;
                float:right;
                .username{
                    display: block;
                    color:#0A0A0A;
                    font-size:.32rem;
                    height:.6rem;
                    line-height: .6rem;
                }
                .speak{
                    display: block;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    color:#96969A ;
                    height:.6rem;
                    line-height: .6rem; 
                    font-size:.26rem;
                }
            }
        }
        .line{
        height:.02rem;
        width:85%;
        float:right;
        background:#EEEEEE;
        margin-bottom: 0;
    }
       
        
       
    }
    
</style>


