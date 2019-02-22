<template>
    <div class="myClassify">
        <ul>
            <li v-for="(item,index) in myNavs" :key="index">
                <router-link :to="{name:item.router}">
                    <img :src="item.icon"/>
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
            myNavs:[
                {
                    router:"follow",
                    title:"关注",
                    icon:require('../../../assets/my/icon_wd_gz@2x.png')
                    
                },
                {
                    router:"fans",
                    title:"粉丝",
                    icon:require('../../../assets/my/icon_wd_fs@2x.png')
                },
                {
                    router:"collection",
                    title:"收藏",
                    icon:require('../../../assets/my/icon_wd_shoucang@2x.png')
                   
                },
                {
                    
                    router:"draft",
                    title:"草稿",
                    icon:require('../../../assets/my/icon_wd_cg@2x.png')
                            
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .myClassify{
        width: 100%;
        height: 1rem;
    }
     .myClassify>ul{
         display: flex;
         justify-content: space-between;
     }
    .myClassify>ul,.myClassify>ul>li,.myClassify>ul>li>a{
        width: 100%;
        height: 100%;
    }
   .myClassify>ul>li>a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
     .myClassify>ul>li>a>img{
         width:0.5rem;
         height:0.5rem;
     }
    .myClassify>ul>li>a>span{
        font-size: .3rem;
         color:#515151 ;
    }
   
</style>


