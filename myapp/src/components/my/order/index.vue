<template>
    <div class="order">
        <div class="head">
            <router-link to="my" class="back">
                <div><img src="../../../assets/my/yq/icon_wd_jt@2x.png"></div>
            </router-link>
            <div class="title">我的订单</div>
            <div></div>
        </div>
        <ul class="orderlist">
            <li v-for="(item,index) in navs" :key="index">
                <router-link :to="{name:item.name}">
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    components:{
        
    },
     data(){
        return {
            navs:[
                {
                    name:"/myorder/nopaid",
                    title:"待支付",
                },
                {
                    name:"/myorder/nosend",
                    title:"待发货",
                },
                {
                    name:"/myorder/noreceive",
                    title:"待收货",
                },
                {
                    name:"/myorder/nocomment",
                    title:"待评价",
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .order{
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
        .orderlist{
            margin-top: .89rem;
            margin-bottom: .01rem;
        
            display: flex;
            justify-content: space-around;
            background: white;
            li{
                height: .7rem;
                line-height: .7rem;
                width: 25%;
                text-align: center;
                a{
                    font-size:28px;
                    font-family:PingFang-SC-Medium;
                    font-weight:bold;
                    color:rgba(44,44,44,1);
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                .router-link-active{
                    border-bottom: 2px solid rgba(244,76,54,1);
                }
            }
            
        }
    }
</style>