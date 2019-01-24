<template>
    <div class="Setset">
        <div class="Sethead">
            <router-link to="myorder" class="Setback">
                <div><img src="../../../../assets/my/yq/icon_wd_jt@2x.png"></div>
            </router-link>
            <div class="Settitle">发表评价</div>
            <div class="Release">发布</div>
        </div>
        <div class="descri">
            <div class="shopcover">
                <img @click="test()" src="../../../../assets/my/yq/wd_dd_sp1@2x.png">
            </div>
            <div class="descridiv">描述相符</div>
            <ul class="star">
                <li v-for="(item,index) in arr" @click="changeshopst(index)">
                    <img src="../../../../assets/my/yq/icon_wd_hongxing.png" v-show="shopstar>item">
                    <img src="../../../../assets/my/yq/icon_wd_shoucang@2x.png" v-show="shopstar<=item">
                </li>
            </ul>
            <span>非常好</span>
        </div>
        <textarea class="usercommet" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧"></textarea>
        <div class="withname">
            <div class="left" @click="changewithname()">
                <div class="nameimg">
                    <img src="../../../../assets/my/yq/icon_wddd_yuan@2x.png" v-show="!withname">
                    <img src="../../../../assets/my/yq/icon_dd_dzf@2x.png" v-show="withname">   
                </div>
                <div class="noname">匿名</div>
            </div>
            <div class="right">你的评价能帮助其他小伙伴呦</div>
        </div>
        <div class="shopstar">
            <div class="shopstar1">
                <div class="shopstarimg">
                    <img src="../../../../assets/my/yq/icon_dd_dp@2x.png">
                </div>
                <span>店铺评分</span>
            </div>
            <div class="shopstar2">
                <div class="stardes">物流服务</div>
                <ul class="starimg">
                    <li v-for="(item,index) in arr" @click="changeserverst(index)">
                        <img src="../../../../assets/my/yq/icon_wd_hongxing.png" v-show="serverstar>item">
                        <img src="../../../../assets/my/yq/icon_wd_shoucang@2x.png" v-show="serverstar<=item">
                    </li>
                </ul>
            </div>
            <div class="shopstar3">
                <div class="stardes">服务态度</div>
                <ul class="starimg">
                    <li v-for="(item,index) in arr" @click="changeaititudest(index)">
                        <img src="../../../../assets/my/yq/icon_wd_hongxing.png" v-show="aititudestar>item">
                        <img src="../../../../assets/my/yq/icon_wd_shoucang@2x.png" v-show="aititudestar<=item">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            //商品评价星级
            shopstar:5,

            //物流评价星级
            serverstar:5,

            //态度评价星级
            aititudestar:5,

            //是否实名评价
            withname:true,

            //五个星星
            arr:[0,1,2,3,4],
        }
    },
    methods: {
        changewithname(){
            this.withname = !this.withname;
        },
        changeshopst(index){
            this.shopstar = index + 1;
        },
        changeserverst(index){
            this.serverstar = index + 1;
        },
        changeaititudest(index){
            this.aititudestar = index + 1;
        }
    },
}
</script>

<style lang="scss" scoped>
    .Setset{
        width: 100%;
        height:100%;
        background:#f7f7f7;
        .Sethead{
            padding: 0 .64rem;
            height: .88rem;
            font-size:.32rem;
            background: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .Settitle{
                font-family:PingFang-SC-Medium;
                font-weight:bold;
                color:rgba(10,10,10,1);             
            }
        }
        .Release{
            font-size:.32rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(244,76,54,1);
        }
    }
    .descri{
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .64rem;
        background: white;
        .shopcover{
            width: .6rem;
            height: .6rem;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        .descridiv{
            font-size:.28rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(10,10,10,1);
        }
        ul{
            li{
                float: left;
                width: .35rem;
                height: .35rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        span{
            font-size:.28rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(90,90,90,1);
        }
    }
    .usercommet{
        padding: 0 .64rem;
        margin-top: .1rem;
        background: white;
        height: 4.3rem;
        width: 100%;
        border: none;
        outline: none;
        font-size:.28rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(90,90,90,1);
    }
    .withname{
        padding: 0 .64rem;
        height: .8rem;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
            display: flex;
            .nameimg{
                width: .28rem;
                height: .28rem;
                margin-right: .2rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .noname{
                font-size:.26rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(10,10,10,1);
            }
        }
        .right{
            font-size:.26rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(90,90,90,1);
        }
    }
    .shopstar{
        padding: 0 .64rem;
        height: 5rem;
        background: white;
        margin-top: .5rem;
        >div{
            height: .8rem;
            display: flex;
            align-items: center;
            ul{
                margin-left: .3rem;
                li{
                    float: left;
                    width: .35rem;
                    height: .35rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            }
        }
        .shopstar1{
            .shopstarimg{
                width: .26rem;
                height: .26rem;
                margin-right: .2rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            span{
                font-size:.3rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(10,10,10,1);
            }
        }
        .stardes{
            font-size:.3rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(45,45,45,1);
        }
        .starimg{
            display: flex;
            
        }
    }
</style>