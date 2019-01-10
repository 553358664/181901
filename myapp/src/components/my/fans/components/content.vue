<template>
    <div class="content">
         <ul>
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
export default {
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
                    
                }
            ],
         iconRight:require('@/assets/my/icon_grxx_jt@2x.png')    
            
        }
    }
}
</script>

<style lang="scss" scoped>
     .content{
        padding:0 .24rem;
        width:100%;
        background:#FCFCFA;
        font-size:.30rem;
    }
    .content>ul{
        width: 100%;
        height: 100%;
    }
    .content>ul>li{
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
    }
    .content>ul>li>div{
        width:100%;
        height:1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
     .content>ul>li>div>a>span:first-child{
        display:inline-block;
        margin-right:.2rem;
        vertical-align: middle;
    }

    .content>ul>li>div>a>img,.content>ul>li>div>a>span{
        display: inline-block;
    }  
    .content>ul>li>div>p>a{
        display:inline-block;
        width:1.5rem;
        height:.48rem;
        line-height: .48rem;
        border:#F44C36 .01rem solid ;
        text-align: center;
        color:#F44C36;
        border-radius: .5rem;
    }
   .content>ul>li>.line{
        height:.02rem;
        width:85%;
        float:right;
        background:#EEEEEE;
    }


</style>


