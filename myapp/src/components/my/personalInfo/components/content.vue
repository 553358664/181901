<template>
    <div class="content">
         <ul>
            <li v-for="(item,index) in contents">               
                <router-link :to="{}">    
                        <span class="classify">{{item.classify}}</span>                
                        <span><img :src="item.headPic"/>
                            <img class="icon-right" :src="iconRight"/>  
                        </span>
                                        
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
     
    data(){
        return {          
            contents:[
                {
                    classify:'头像',
                    headPic:require('@/assets/my/wd_tx@2x.png')                 
                },
                {
                    classify:'昵称',
                    username:"小小爱花者",
                },
                {
                    classify:'性别',
                    sex:"男"
                },
                {
                   classify:'出生年月',
                    brith:"2019-01-01"
                    
                },
                {
                    classify:'个性签名',
                    autograph :"设置属于自己的个性签名"
                   
                }
            ],
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
    .content>ul,.content>ul>li,.content>ul>li>a{
        width:100%;
        height:1.4rem;
        line-height: 1.4rem;
        border-bottom: 1px solid #D6D6D6 ;
    }
    .content>ul>li>a{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    span,span>img,.icon-right{
        display: inline-block;
    }
    span>img{
        vertical-align: middle
    }
  
    
</style>


