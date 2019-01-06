<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in navs" :key="index">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs:[
                {
                    name:"community",
                    title:"社区",
                    icon:"&#xe677;"
                },
                {
                    name:"small",
                    title:"商城",
                    icon:"&#xe7f9;"
                },
                {
                    name:"scar",
                    title:"购物车",
                    icon:"&#xe60c;"
                },
                {
                    name:"my",
                    title:"我的",
                    icon:"&#xe8a0;"
                }
            ]
        }
    }
}
</script>

<style scoped>
   
    #footer{
        width: 100%;
        height: .98rem;
        position: fixed;
        left: 0;
        bottom:0;
    }
     #footer>ul{
         display: flex;
         justify-content: space-between;
         background:#EFEFEC;
     }
    #footer>ul,#footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
     #footer>ul>li>a>i{
         font-size: .38rem;
     }
    #footer>ul>li>a>span{
        font-size: .23rem;
        font-family:PingFang-SC-Medium;
        font-weight:SC-Medium;
    }
    #footer>ul>li>.router-link-active{
        color: #F44C36;
    }
</style>
