<template>
  <div id="sCar">
    <Header-com></Header-com>
    <div class="wrapper" ref="sCarWrapper">
      <div class="content">
        <ScarMain-com></ScarMain-com>
      </div>
    </div>
    <div class="sCarFooter">
      <div class="compute">
        合计:
        <span class="TotalPrice">{{result|price}}</span>
      </div>
      <div class="close" @click="handleToOrder()">
        <router-link :to="ifChecked?'/submitOrder':''">结算</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import Header from "../small/components/goodsDetail/header";
import BScroll from "better-scroll";
import ScarMain from "./components/scarMain";
export default {
  components: {
    "Header-com": Header,
    "ScarMain-com": ScarMain
  },
  data() {
    return {
      flagEnter: false
    };
  },
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    }
  },
  computed: {
    ...Vuex.mapGetters({
      result: "scar/result"
    }),
    ...Vuex.mapState({
      sCarList: state => state.scar.sCarList,
      ifChecked:state => state.scar.ifChecked,
    })
  },
  created() {
    this.handleSCar();
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.sCarWrapper, {
      pullUpLoad: true,
      click: true
    });
  },
  methods: {
    ...Vuex.mapActions({
      handleSCar: "scar/handleSCar",
      handleToOrder: "scar/handleToOrder"
    }),
    ...Vuex.mapMutations({}),
   
  }
};
</script>
<style lang="scss" scoped>
.sCarFooter {
  height: 0.92rem;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0.88rem;
  display: flex;
  background: #fcfcfa;
  justify-content: flex-end;
  .compute {
    width: 2.5rem;
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
  .close {
    width: 1.98rem;
    height: 0.92rem;
    a {
      display: block;
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
}
#sCar {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  .wrapper {
    width: 100%;
    position: fixed;
    top: 0.88rem;
    height: 100%;
    .content {
      padding-bottom: 2.6rem;
    }
  }
}
</style>
