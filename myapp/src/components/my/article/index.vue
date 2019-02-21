<template>
    <div class="article">
        <div class="head">
            <router-link to="my" class="back">
                <div><img src="../../../assets/my/yq/icon_wd_jt@2x.png"></div>
            </router-link>
            <div class="title">我的文章</div>
            <div></div>
        </div>
        <div class="myarticle wrraper" ref="myarticleWrapper">
            <ul class="content">
                <li v-for="(item,index) in articleList" :key="index">
                    <div class="cover">
                        <img :src="item.articleCover">
                    </div>
                    <div class="describe">
                        {{item.articleContent|Castration(item)}}  
                    </div>
                    <div class="more" v-if="item.articleContent.length>40" @click="speard(index)">
                        <span v-show="!item.speard">展开全部</span>
                        <span v-show="item.speard">收起内容</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
    filters:{
        Castration(c,i){
            if( c.length>40){
                if(i.speard==false){
                    return c.slice(0,40)+"..."
                }
                else{
                    return c
                }
            }
            else{
                return c
            }
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.myarticleWrapper, {
            pullUpLoad: true,
            hasVerticalScroll: true,
            click:true,
        });
        this.scroll.on("pullingUp", () => {});
        console.log(this.articleList)
    },
    created(){
        //模拟数据注释防止报错
        this.handleAtData();
        // console.log(this.handleAtData())
    },
    methods:{
        //获取文章数据
        ...Vuex.mapActions({
            handleAtData: "Myarticle/handleAtList",
        }),
        ...Vuex.mapMutations({
            speard:"Myarticle/changespeard"
        })
    },
    computed: {
        ...Vuex.mapState({
        //文章数据 [{},{}]
            articleList: state => state.Myarticle.articleList,
        })
    },
}
</script>


<style lang="scss" scoped>
    .article{
        width: 100%;
        height:100%;
        background:#EFEFEC;
        overflow: hidden;
        .head{
            z-index: 10;
            width: 100%;
            position: fixed;
            top: 0;
            padding: 0 .64rem;
            height: .88rem;
            font-size:.32rem;
            background: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title{
                font-family:PingFang-SC-Medium;
                font-weight:bold;
                color:rgba(10,10,10,1);        
            }
        }
        .myarticle{
            margin-top: .88rem;
            overflow: hidden;
            height:92%;
            >ul>li{
                margin-top: .2rem;
                padding-bottom: .2rem;
                background: white;
                .cover{
                    width: 100%;
                    height: 7.08rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .describe{
                    text-indent: 2em;
                    margin:.1rem auto;
                    width:6.89rem;
                    font-size:.28rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(13,13,12,1);
                    line-height:.48rem;
                }
                .more{
                    width:1rem;
                    height:.5rem;
                    line-height: .5rem;
                    font-size:.24rem;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(244,76,54,1);
                    margin-left: 6rem;
                }
            }
        }
    }
</style>