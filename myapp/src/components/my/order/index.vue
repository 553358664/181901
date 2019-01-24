<template>
  <div class="order">
    <div class="head">
      <router-link to="my" class="back">
        <div>
          <img src="../../../assets/my/yq/icon_wd_jt@2x.png">
        </div>
      </router-link>
      <div class="title">我的订单</div>
      <div></div>
    </div>
    <ul class="orderlist">
      <li v-for="(item,index) in navs" 
        :class="activeIndex == index?'active':''"
        @click="handleToggle(index),viewstatechange(index+1)"
        >
        <span>{{item.title}}</span>
      </li>
    </ul>
    <orderlist-com></orderlist-com>
  </div>
</template>
<script>
import Orderlist from "./components";
import Vuex from "vuex";
import BScroll from "better-scroll";

export default {
    computed: {
        ...Vuex.mapState({
            //订单可视状态
            viewState:state=>state.Mylist.viewState
        })
    },
    methods:{
        handleToggle(index){
            this.activeIndex = index;
        },
        ...Vuex.mapMutations({
            viewstatechange:"Mylist/viewstatechange"
        })
    },
    components:{
        "orderlist-com":Orderlist
    },
    data(){
        return {
            activeIndex:0,
            navs:[
                {
                    title:"待支付",
                },
                {
                    title:"待发货",
                },
                {
                    title:"待收货",
                },
                {
                    title:"待评价",
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

.order {
  width: 100%;
  height: 100%;
  background: #efefec;
  overflow: hidden;
  .head {
    z-index: 10;
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0 0.64rem;
    height: 0.88rem;
    font-size: 0.32rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-family: PingFang-SC-Medium;
      font-weight: bold;
      color: rgba(10, 10, 10, 1);
    }
  }
  .orderlist {
    position: fixed;
    z-index: 2;
    width: 100%;
    margin-top: 0.89rem;
    margin-bottom: 0.01rem;

    display: flex;
    justify-content: space-around;
    background: white;
    li {
      height: 0.7rem;
      line-height: 0.7rem;
      width: 25%;
      text-align: center;
      border-bottom: 2px solide white;
    }
    .active{
    border-bottom: 2px solid rgba(244,76,54,1);
    color:rgba(244,76,54,1);
    }
  }
}
</style>