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
                <li>
                    <div class="cover">
                        <img src="../../../assets/my/yq/wd_wz_tp@2x.png"/>
                    </div>
                    <div class="describe">
                        南蛇藤，其植株姿态优美，茎、蔓、叶、果都具有较高的观赏价值，是城市垂直绿化的优良树种...   
                    </div>
                    <div class="more">
                        展开全部
                    </div>
                </li>
                <li>
                    <div class="cover">
                        <img src="../../../assets/my/yq/wd_wz_tp@2x.png"/>
                    </div>
                    <div class="describe">
                        南蛇藤，其植株姿态优美，茎、蔓、叶、果都具有较高的观赏价值，是城市垂直绿化的优良树种...   
                    </div>
                    <div class="more">
                        展开全部
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
    mounted() {
        this.scroll = new BScroll(this.$refs.myarticleWrapper, {
            pullUpLoad: true,
            hasVerticalScroll: true
        });
        this.scroll.on("pullingUp", () => {});
        console.log(this.scroll);
  }
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
            height:92%;
            >ul>li{
                margin-top: .2rem;
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