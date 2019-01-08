<template>
    <div class="myClassify">
        <ul>
            <li v-for="(item,index) in myNavs">
                <router-link :to="{name:item.name}">
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
                    name:"follow",
                    title:"关注",
                    icon:'../../../static/my/icon_wd_gz@2x.png'
                    
                },
                {
                    name:"fans",
                    title:"粉丝",
                    icon:'../../../static/my/icon_wd_fs@2x.png'
                },
                {
                    name:"collection",
                    title:"收藏",
                    icon:'../../../static/my/icon_wd_shoucang@2x.png'
                   
                },
                {
                    name:"draft ",
                    title:"草稿",
                    icon:'../../../static/my/icon_wd_cg@2x.png'
                    
                    
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
        font-size: .24rem;
    }
</style>


