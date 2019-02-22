<template>
    <div class="content">
         <ul>
            <li> 
                <span>头像</span>                
                <span><img class="headPic" :src="headPic"/>
                    <img class="icon-right" :src="iconRight"/>  
                </span>
            </li>
             <li> 
                <span>昵称</span>                
                <span><i>{{contents.username}}</i>
                    <img class="icon-right" :src="iconRight"/>  
                </span>
            </li>
            <li> 
                <span>性别</span>                
                <span><i>{{contents.sex}}</i>
                    <img class="icon-right" :src="iconRight"/>  
                </span>
            </li>
            <li> 
                <span>出生年月</span>                
                <span><i>{{contents.time}}</i>
                    <img class="icon-right" :src="iconRight"/>  
                </span>
            </li>
            <li> 
                <span>个性签名</span>                
                <span><i>{{contents.autograph}}</i>
                    <img class="icon-right" :src="iconRight"/>  
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    created(){
        this.$store.dispatch("my/handleGet")     
    },
    computed:{
        ...Vuex.mapState({
            myList:state=>state.my.myList
        })
    },
    data(){
        return {          
            contents:{
                
                    headPic:require('@/assets/my/wd_tx@2x.png') ,                  
                    username:"小小爱花者",     
                    sex:"女",
                    brith:"1996-01-01",
                    autograph :"你笑起来真好看"        
            },
         headPic:require('@/assets/my/wd_tx@2x.png'),
         iconRight:require('@/assets/my/icon_grxx_jt@2x.png')    
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .content{
        width: 100%;
        height:7.16rem; 
        font-size:.30rem; 
    }
    .content>ul{
        width: 100%;
        height: 100%;
    }
    .content>ul,.content>ul>li{
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
        border-bottom: 1px solid #D6D6D6 ;
    }
    .content>ul>li{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .headPic{
        width:1.2rem;
        height:1.2rem;
    }
    span,span>img,.icon-right{
        display: inline-block;
    }
    span>.icon-right{
        width:.24rem;
        height:.24rem;
    }
    span>img{
        vertical-align: middle
    }
    span>i{
        font-size:.28rem;
        font-style: normal;
    }
  
    
</style>


