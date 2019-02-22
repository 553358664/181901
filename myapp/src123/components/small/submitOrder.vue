<template>
  <div id="submitOrder">
    <mt-popup v-model="flag" class="pay" position="bottom">
      <h1>在线支付</h1>
      <div>
        <h2>
          <div class="payPic">
            <img src="@/assets/scar/zfb.png">
          </div>
          <h3>支付宝</h3>
        </h2>
        <h2>
          <div class="payPic">
            <img src="@/assets/scar/wx.png">
          </div>
          <h3>微信支付</h3>
        </h2>
      </div>
      <router-link to="/payOk">
        确认付款
        <span>{{result|price}}</span>
      </router-link>
    </mt-popup>
    <Header-com></Header-com>
    <div class="wrapper" ref="sOrderWrapper">
      <div class="content">
        <Address-com></Address-com>
        <OrderMain-com></OrderMain-com>
        <Express-com></Express-com>
        <Message-com></Message-com>
      </div>
    </div>
    <div class="sOrderFooter">
      <a @click="handleSubmit">提交订单</a>
      <div>
        合计:
        <span class="TotalPrice">{{result|price}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/goodsDetail/header";
import BScroll from "better-scroll";
import orderMain from "./components/submitOrder/orderMain";
import address from "./components/submitOrder/address";
import express from "./components/submitOrder/express";
import message from "./components/submitOrder/message";
import Vue from "vue";
import Vuex from "vuex";
import { Popup } from "mint-ui";
Vue.component(Popup.name, Popup);
export default {
  data() {
    return {
      flag: false
    };
  },
  computed:{
       ...Vuex.mapGetters({
      result:"small/result"
    })
  },
  components: {
    "Header-com": Header,
    "OrderMain-com": orderMain,
    "Address-com": address,
    "Express-com": express,
    "Message-com": message
  },
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.sOrderWrapper, {
      pullUpLoad: true,
      click: true
    });
  },
  methods: {
    handleSubmit() {
      this.flag = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.pay {
  background: rgba(252, 252, 250, 1);
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 5.28rem;
  padding: 0 0.22rem 0.12rem;
  h1 {
    font-size: .32rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(10, 10, 10, 1);
    margin: 0.4rem 0 0.97rem;
    text-align: center;
  }
  a {
    width: 7.03rem;
    height: 0.8rem;
    background: #f44c36;
    border-radius: 10px;
    position: absolute;
    left: 0.22rem;
    bottom: 0;
    font-size: 0.32rem;
    text-align: center;
    font-family: PingFang-SC-Medium;
    font-weight: bold;
    color: rgba(254, 254, 254, 1);
    line-height: 0.8rem;
    margin: 0 auto;
  }
  div {
    display: flex;
    justify-content: space-around;
    h2 {
      text-align: center;
      .payPic {
        width: 1.24rem;
        height: 1.1rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
       h3 {
          font-size: .32rem;
          font-family: PingFang-SC-Regular;
          font-weight: bold;
          color: rgba(10, 10, 10, 1);
          margin-top:.07rem;
        }
    }
  }
}
.sOrderFooter {
  height: 0.92rem;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #fcfcfa;
  div {
    float: right;
    text-align: center;
    line-height: 0.92rem;
    font-size: 0.24rem;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    margin-right: 0.19rem;
    color: rgba(10, 10, 10, 1);
    .TotalPrice {
      font-size: 0.34rem;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(244, 76, 54, 1);
    }
  }
  a {
    float: right;
    width: 1.98rem;
    background: rgba(244, 76, 54, 1);
    font-size: 0.28rem;
    font-family: PingFang-SC-Medium;
    font-weight: bold;
    color: rgba(252, 252, 250, 1);
    line-height: 0.92rem;
    text-align: center;
  }
}
#submitOrder {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  .wrapper {
    width: 100%;
    position: fixed;
    top: 0.88rem;
    height: 100%;
    .content {
      padding-bottom: 1.6rem;
    }
  }
}
</style>



