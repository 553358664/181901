<template>
  <div id="submitOrder">
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
      <a href>提交订单</a>
      <div>
        合计:
        <span class="TotalPrice">{{39.60|price}}</span>
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
export default {
  components: {
    "Header-com": Header,
    "OrderMain-com":orderMain,
    "Address-com":address,
    "Express-com":express,
    "Message-com":message
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
  }
};
</script>
<style lang="scss" scoped>
.sOrderFooter {
  height: 0.92rem;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background:#FCFCFA;
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
  width:100%;
  height: 100%;
  background:#f7f7f7;
  .wrapper {
    width:100%;
    position: fixed;
    top: 0.88rem;
    height: 100%;
    .content {
      padding-bottom: 1.6rem;
    }
  }
}
</style>



