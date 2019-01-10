<template>
    <div class="content">
         <ul>
            <li v-for="(item,index) in collections">               
                <router-link :to="{}">                                       
                        <span><img :src="item.cover"/></span>
                        <div class="article">
                            <p class="title">{{item.title}}</p>
                            <p class="writin">{{item.writin}}</p>
                        </div>                              
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
     data(){
        return {          
            collections:[
                {
                    cover:require("@/assets/my/wd_sc_tp1@2x.png"),
                    title:'洋牡丹', 
                    writin:'原产于欧洲东南部和亚洲西南部。1596年英国人引入进行人工栽培，在园林和切花中很常见。现在各国多有栽培，荷兰、英国、法国、美国、日本等栽培较多，并且培育出许多切花和盆栽品种。'                  
                },
                {
                    cover:require("@/assets/my/wd_sc_tp2@2x.png"),
                    title:'大花惠兰', 
                    writin:'大花蕙兰又叫虎头兰、喜姆比兰和蝉兰。兰科、兰属植物。原产于印度、缅甸、泰国、越南和中国南部等地区的兰属(Cymbidium)中的一些附生性较强的大花种和主要以这些原种为亲本获得的人工杂交种。大花蕙兰，是对兰属中通过人工杂交培育出的、色泽艳丽、花朵硕大的品种的一个统称。' 
                   
                },
                {
                    cover:require("@/assets/my/wd_sc_tp3@2x.png"),
                    title:'吊钟海棠', 
                    writin:'吊钟海棠，被称为世界上最美的花，最高可达一米，在广东被人称为宝莲灯，开花时，开放的花朵如悬挂灯笼和吊钟，甚是漂亮，是南方花友极为喜爱的盆栽花卉之一，吊钟海棠只要产自南美洲的秘鲁热带地区，喜欢阳光充足，温暖湿润的环境，今天花花就来说说世界上最美的花儿。' 
                }
               
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .content{
        width:100%;
    }
    .content>ul{
        width: 100%;
        height: 100%;
        padding:.1rem;
    }
    .content>ul>li,.content>ul>li>a{
        width:100%;
        height:2.86rem;
        margin-top: .2rem;
        background:#FCFCFA ;
        border-radius: .2rem;             
    }
    .content>ul>li>a{
        padding:.24rem .24rem;
    }
    .content>ul>li>a{
        display: flex;
    }
    .content>ul>li>a>span{
        width:35%;
    }
    .content>ul>li>a>.article{
        padding-left:.3rem;
    }
    .content>ul>li>a>.article>.title{
        font-size: .32rem;
        margin-bottom: .15rem;
        color:#1B1B1B 
    }
    .content>ul>li>a>.article>.writin{
        font-size:.26rem;
        overflow: hidden;
        display:-webkit-box;
        -webkit-line-clamp:4;
        -webkit-box-orient: vertical;
    }

</style>


