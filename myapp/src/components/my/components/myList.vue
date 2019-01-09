<template>
    <div class="myList">
         <ul>
            <li v-for="(item,index) in myLists">
                <router-link :to="{}">
                   <img class="icon-left" :src="item.icon"/>
                   <span>{{item.title}}</span>
                   <img class="icon-right" :src="iconRight" />
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
                    icon:require('@/assets/my/icon_wd_xx@2x.png'),
                    title:"消息"
                },
                {
                    icon:require('@/assets/my/icon_wd_wz@2x.png'),
                    title:"我发表的文章",                  
                },
                {
                    icon:require('@/assets/my/icon_wd_dd@2x.png'),
                    title:"我的订单"
                },
                {
                    icon:require('@/assets/my/icon_wd_hy@2x.png'),
                    title:"我的好友"                    
                },
                {
                    icon:require('@/assets/my/icon_wd_sz@2x.png'),
                    title:"设置"                  
                }
            ],
            iconRight:require('@/assets/my/icon_grxx_jt@2x.png')    
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
        border-bottom: 1px solid #E2E2E2 ;
    }
    .myList>ul>li>a{
        display: flex;
        justify-content: space-around;
        align-items: center
    }
   
    .myList>ul>li>a>span{
        align-items: center;
        width:88%;
        font-size:.28rem;
        color:#383838 ;
    }
</style>


