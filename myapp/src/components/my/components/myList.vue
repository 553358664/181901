<template>
    <div class="myList">
         <ul>
            <li v-for="(item,index) in myLists">
                <router-link :to="{}">
                   <img class="icon-left" :src="item.icon"/>
                   <span>{{item.title}}</span>
                   <img class="icon-right" src="static/my/icon_grxx_jt @2x.png"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            myLists:[
                {                   
                    icon:'../../../static/my/icon_wd_gwc@2x.png',
                    title:"购物车"
                },
                {
                    icon:'../../../static/my/icon_wd_wz@2x.png',
                    title:"我发表的文章",                  
                },
                {
                    icon:'../../../static/my/icon_wd_dd@2x.png',
                    title:"我的订单"
                },
                {
                    icon:'../../../static/my/icon_wd_hy@2x.png',
                    title:"我的好友"                    
                },
                {
                    icon:'../../../static/my/icon_wd_sz@2x.png',
                    title:"设置"                  
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .myList{
        width: 100%;
        height:7.16rem;
        padding: .32rem .64rem;       
    }
    .myList>ul{
        width: 100%;
        height: 100%;
    }
    .myList>ul,.myList>ul>li,.myList>ul>li>a{
        width:100%;
        height:1rem;
        line-height: 1rem;
        border-bottom: 1px solid #ccc;
    }
    .myList>ul>li>a{
        display: flex;
        justify-content: space-around;
        align-items: center
    }
   
    .myList>ul>li>a>span{
        align-items: center;
        width:88%
    }
</style>


