<template>
    <div class="content">
         <ul>
            <li v-for="(item,index) in contents">               
                <router-link :to="{}">    
                        <span class="classify">{{item.classify}}</span>                
                        <span>{{item.val}}
                            <img class="icon-right" src="static/my/icon_grxx_jt @2x.png"/>  
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
                    val:'图片'
                },
                {
                    classify:'昵称',
                    val:"小小爱花者",
                   
                },
                {
                    classify:'性别',
                    val:"男"
                },
                {
                   classify:'出生年月',
                    val:"2019-01-01"
                    
                },
                {
                    classify:'个性签名',
                    val:"设置属于自己的个性签名"
                   
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .content{
        width: 100%;
        height:7.16rem;  
    }
    .content>ul{
        width: 100%;
        height: 100%;
    }
    .content{
        font-size:.30rem;
    }
    .content>ul,.content>ul>li,.content>ul>li>a{
        width:100%;
        height:1.2rem;
        line-height: 1.2rem;
        border-bottom: 1px solid #ccc;
    }
    .content>ul>li>a{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    span,.icon-right{
        display: inline-block;
    }
  
    
</style>


