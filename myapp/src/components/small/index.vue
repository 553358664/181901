<template>
  <div id="shopHome">
    <Header-com></Header-com>
    <New-com></New-com>
    <div class="border"></div>
    <Nav-com></Nav-com>
    <div class="border"></div>
    <Other-com></Other-com>
    <div class="border"></div>
    <Discount-com></Discount-com>
    <div class="border border2"></div>
    <FlowerOrder-com></FlowerOrder-com>
  </div>
</template>
<script>
import Header from "./components/shopHome/header";
import New from "./components/shopHome/new";
import Nav from "./components/shopHome/nav";
import Other from "./components/shopHome/other";
import Discount from "./components/shopHome/discount";
import FlowerOrder from "./components/shopHome/flowerorder";
export default {
  components: {
    "Header-com": Header,
    "New-com": New,
    "Nav-com": Nav,
    "Other-com": Other,
    "Discount-com":Discount,
    "FlowerOrder-com":FlowerOrder
  }
};
</script>
<style lang="scss">
#shopHome {
    height:100%;
    overflow: auto;
    padding-bottom:.98rem;
  .border {
    width: 702px;
    height: 1px;
    background: rgba(150, 150, 154, 1);
    margin: 0.4rem auto;
  }
  h1{
    font-size: 0.34rem;
    font-weight: bold;
    color: rgba(10, 10, 10, 1);
    margin-bottom: 0.39rem;
  }
  .border2{
      margin-top:.24rem;
  }
}
</style>


