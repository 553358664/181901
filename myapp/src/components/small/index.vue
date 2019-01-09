<template>
  <div id="shopHome">
    <Header-com></Header-com>
    <div class="wrapper" ref="shopHomeWrapper">
      <div class="content">
        <New-com></New-com>
        <div class="border"></div>
        <Nav-com></Nav-com>
        <div class="border"></div>
        <Other-com></Other-com>
        <div class="border"></div>
        <Discount-com></Discount-com>
        <div class="border border2"></div>
        <FlowerOrder-com></FlowerOrder-com>
        <div class="border"></div>
        <Slogan-com></Slogan-com>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/shopHome/header";
import New from "./components/shopHome/new";
import Nav from "./components/shopHome/nav";
import Other from "./components/shopHome/other";
import Discount from "./components/shopHome/discount";
import FlowerOrder from "./components/shopHome/flowerorder";
import Slogan from "./components/shopHome/slogan";
import BScroll from "better-scroll";
export default {
  components: {
    "Header-com": Header,
    "New-com": New,
    "Nav-com": Nav,
    "Other-com": Other,
    "Discount-com": Discount,
    "FlowerOrder-com": FlowerOrder,
    "Slogan-com": Slogan
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.shopHomeWrapper)
  }
};
</script>
<style lang="scss">
#shopHome {
  height: 100%;
  >.wrapper{
    height:100%;
    position:fixed;
    top:.88rem;
    width:100%;
    >.content{
      padding-bottom: 1.9rem;
    }
  }
  .border {
    width: 7.02rem;
    height: .01rem;
    background: rgba(150, 150, 154, 1);
    margin: 0.4rem auto;
  }
  h1 {
    font-size: 0.34rem;
    font-weight: bold;
    color: rgba(10, 10, 10, 1);
    margin-bottom: 0.39rem;
  }
  .border2 {
    margin-top: 0.24rem;
  }
}
</style>


