<template>
  <div id="shopHome">
    <Header-com @Move="handleMove" :scrollT="scrollToggle"></Header-com>
    <div class="wrapper" ref="shopHomeWrapper">
      <div class="content">
        <router-view/>
        <New-com></New-com>
        <div class="border1"></div>
        <Nav-com></Nav-com>
        <div class="border1"></div>
        <Market-com></Market-com>    
        <div class="border"></div>
        <Discount-com></Discount-com>
        <div class="border border2"></div>
        <FlowerOrder-com></FlowerOrder-com>
        <div class="border"></div>
        <Other-com ref="other"></Other-com>
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
import Market from "./components/shopHome/market";
import Other from "./components/shopHome/other";
import Discount from "./components/shopHome/discount";
import FlowerOrder from "./components/shopHome/flowerorder";
import Slogan from "./components/shopHome/slogan";
import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
  components: {
    "Header-com": Header,
    "New-com": New,
    "Nav-com": Nav,
    "Other-com": Other,
    "Discount-com": Discount,
    "FlowerOrder-com": FlowerOrder,
    "Slogan-com": Slogan,
    "Market-com":Market
  },
  data(){
    return{
      scrollToggle:""
    }
  },
   computed: {
    ...Vuex.mapState({
      scrollHeight: state => 
      state.small.scrollHeight,
    })
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.shopHomeWrapper, {
      pullUpLoad: true,
      click: true,
      probeType: 3
    });
    this.scroll.on("scroll",({x,y})=>{
      this.scrollToggle=y
    })
  },
  methods: {
    handleMove(index) {
      this.scrollIndex = index;
      this.scroll.scrollTo(0, -this.scrollHeight[index],1000);
    },
  },
 
};
</script>
<style lang="scss">
#shopHome {
  height: 100%;
  > .wrapper {
    height: 100%;
    position: fixed;
    top: 0.88rem;
    width: 100%;
    > .content {
      padding-bottom: 1.9rem;
    }
  }
  .border {
    width: 7.02rem;
    height: 0.02rem;
    background: rgba(150, 150, 154, 1);
    margin: 0.4rem auto;
  }
  .border1{
    width: 7.02rem;
    height: 0.01rem;
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


