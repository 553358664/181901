<template>
    <div class="content">
         <ul>
            <li v-for="(item,index) in fans">               
                <router-link :to="{}">                                       
                    <div>
                        <span><img :src="item.headPic"/></span>
                        <span>{{item.username}}</span>                     
                    </div>
                    <p><a href="#">关注</a></p>                                    
                </router-link>
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
        width:100%;
        padding:0 .24rem;
        background:#FCFCFA;
        font-size:.30rem;
    }
    .content>ul{
        width: 100%;
        height:100%;
    }
    .content>ul>li,.content>ul>li>a{
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
    }
    .content>ul>li>a{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .content>ul>li>a>img,.content>ul>li>a>span{
        display: inline-block;
    }
    .content>ul>li>a>div{
        width:70%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .content>ul>li>a>div>span{
        margin-right:.2rem;
    }   
    .content>ul>li>a>p>a{
        display:inline-block;
        width:1.5rem;
        height:.48rem;
        line-height: .48rem;
        background:#F44C36 ;
        text-align: center;
        color:#FCFCFA ;
        border-radius: .5rem;
    }
   .content>ul>li>.line{
        height:.02rem;
        width:85%;
        float:right;
        background:#EEEEEE;
    }


</style>


