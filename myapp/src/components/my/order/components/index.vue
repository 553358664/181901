<template>
    <div class="wrraper total" ref="myarticleWrapper">
    <div class="ordershow content">
        <div v-for="(item,index) in goodsList"
             v-if="item.state==viewState?true:false"
        >
            <div class="stateshow" >
                <div class="stateshowleft">
                    <div class="checkimg"
                        v-if="item.state==1?true:false"
                        @click="checkchange()"
                    >
                        <img src="../../../../assets/my/yq/icon_wddd_yuan@2x.png"
                            v-if="!checkstate"
                        >
                        <img src="../../../../assets/my/yq/icon_dd_dzf@2x.png"
                            v-if="checkstate"
                        >
                    </div>
                    <div class="shopimg">
                        <img src="../../../../assets/my/yq/icon_dd_dp@2x.png">
                    </div>
                    <div class="shopinfo">
                        <span>
                            花7的店
                        </span>
                    </div>
                </div>
                <div class="stateshowright">
                    <span v-if="item.state==1">
                        等待买家付款
                    </span>
                    <span v-else-if="item.state==2">
                        买家已付款
                    </span>
                    <span v-else-if="item.state==3">
                        买家已发货
                    </span>
                    <span v-else-if="item.state==4">
                       交易成功
                    </span>
                </div>
            </div>
            <div class="datashow">
                <div class="shopcover">
                    <img src="../../../../assets/my/yq/wd_dd_sp1@2x.png">
                </div>
                <div class="detailinfo">
                    <div class="describe">
                        <div class="shopnameleft">┌</div>
                        <span class="shopname">{{item.shopname}}</span>
                        <div class="shopnameright">┘</div>
                        <div class="interval">|</div> 
                        <span class="shopdes">{{item.shopdirec}}</span>
                    </div>
                    <div class="shopcolor">
                        <span class="shopcolordata">{{item.fications}}</span>
                    </div>
                    <div class="shopnum">
                        <span class="shopprice">￥{{item.price}}</span>
                        <span class="shopcount">x{{item.count}}</span>
                    </div>
                </div>
            </div>
            <div class="moneyshow">
                <div class="moneycount">
                    共 <span class="moneycountdata">{{item.count}}</span> 件商品
                </div>
                <div class="totalmoney">
                    合计: ￥ <span class="totalmoneydata">{{item.count|price(item.price)}}</span>
                </div>
            </div>
            <div class="options">
                <div class="space"></div>
                <div class="s1cancellist" 
                    v-if="item.state==1? true : false"
                    >取消订单</div>    
                <div class="s1paynow"
                    v-if="item.state==1? true : false"
                    >立即支付</div>
                <div class="s2sendnow"
                    v-if="item.state==2? true : false"
                    >提醒发货</div>
                <div class="s3logistics"
                    v-if="item.state==3? true : false"
                    >查看物流</div>
                <div class="s3extend"
                    v-if="item.state==3? true : false"
                    >延长收货</div>
                <div class="s3confirm"
                    v-if="item.state==3? true : false"
                    >确认收货</div>
                <div class="s4logistics"
                    v-if="item.state==4? true : false"
                    >查看物流</div>
                <div class="s4sell"
                    v-if="item.state==4? true : false"
                    >卖了换钱</div>
                <div class="s4comment"
                    v-if="item.state==4? true : false"
                    >立即评价</div>
            </div>                           
        </div>                        
    </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";

export default {
    filters:{
        price(n,p){
            return n*(p*10)/10;
        }
    },
    data(){
        return{
            checkstate:true
        }
    },
    methods:{
        checkchange(){
            this.checkstate=!this.checkstate;
        },
        ...Vuex.mapActions({
            handleHomeData:"Mylist/handleGoodsList"
        })
    },
    computed: {
        ...Vuex.mapState({
            goodsList:state=>state.Mylist.goodsList,

            //订单可视状态
            viewState:state=>state.Mylist.viewState
        })
    },
    // created(){
    //     this.handleHomeData();
    // },
    updated() {
        this.scroll = new BScroll(this.$refs.myarticleWrapper, {
            pullUpLoad: true,
            hasVerticalScroll: true,
            click:true,
        });
        this.scroll.on("pullingUp", () => {});
   }
}
</script>
<style lang="scss" scoped>
    .total{
        height:88%;
        margin-top: 1.59rem;
    }
    .ordershow{
        width: 100%;
        height: max-content;
        background:#f7f7f7;
        margin: .01rem 0;
        .stateshow{
            display: flex;
            height: .81rem;
            justify-content: space-between;
            padding: 0 .31rem;
            align-items: center;
            background: white;
            .stateshowleft{
                display: flex;
                width: 2rem;
                justify-content: space-around;
                .checkimg{
                    width: .34rem;
                    height: .34rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .shopimg{
                    width: .34rem;
                    height: .34rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .shopinfo{
                    height:.26rem;
                    font-size:0.26rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:bold;
                    color:rgba(44,44,44,1);
                }
            }
            .stateshowright{
                width:1.47rem;
                height:.23rem;
                font-size:.24rem;
                font-family:PingFangSC-Regular;
                font-weight:bold;
                color:rgba(244,76,54,1);
            }
        }
        .datashow{
            width:100%;
            height:1.82rem;
            background:rgba(247,247,247,1);
            padding:0 0.5rem;
            >div{
                float: left;
            }
            .shopcover{
                width: 1.62rem;
                height: 1.62rem;
                margin: .1rem 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .detailinfo{
                width: 4.6rem;
                margin-left: .2rem;
                .describe{
                    font-size:.26rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:bold;
                    color:rgba(44,44,44,1);
                    height:.7rem;
                    margin-top: 27px;
                    >div,>span{
                        float: left;
                        height: 35px;
                    }
                    .shopnameleft,.shopnameright,.interval{
                        color:#96969A;
                        font-weight: normal;
                    }
                    .shopnameleft{
                        margin-top: -10px;                
                    }
                    .shopnameright{
                        padding-top:10px;                                        
                    }
                    .interval{
                        padding: 10px;
                    }
                    .shopdes{
                        float: none;
                    }
                }
                .shopcolor{
                    font-size:.2rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:bold;
                    color:rgba(150,150,154,1);
                }
                .shopnum{
                    display: flex;
                    justify-content: space-between;
                    margin-top: .15rem;
                    .shopprice{
                        font-size:.24rem;
                        font-family:PingFangSC-Regular;
                        font-weight:bold;
                        color:rgba(244,76,54,1);
                    }
                    .shopcount{
                        font-size:.2rem;
                        font-family:PingFang-SC-Regular;
                        font-weight:bold;
                        color:rgba(150,150,154,1);
                    }
                }
            }
        }
        .moneyshow{
            display: flex;
            height: .73rem;
            align-items: center;
            background: white;
            .moneycount{
                font-size:.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(44,44,44,1);
                margin-left:4rem;
            }
            .totalmoney{
                margin-left:.2rem;
                span{
                    font-size:.24rem;
                    font-family:PingFang-SC-Regular;
                    font-weight:bold;
                    color:rgba(44,44,44,1);
                }
            }
        }
        .options{
            height: .68rem;
            display: flex;
            align-items: center;
            margin-top: .02rem;
            background: white;
            >div{
                width:1.31rem;
                height:.41rem;
                border:1px solid rgba(191,191,191,1);
                border-radius:21px;
                text-align: center;
                line-height:.41rem;
                margin-right: .31rem;
            }
            .space{
                flex:1;
                border: none;
                
            }
            >div:last-child{
                color:rgba(244,76,54,1);
                border:1px solid rgba(244,76,54,1);
            }
        }
    }
</style>