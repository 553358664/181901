<template>
  <div id="goodsDetail">
    <transition name="fade">
      <Mask-com v-show="flag"></Mask-com>
    </transition>
    <Header-com></Header-com>
    <div class="wrapper" ref="detailsWrapper">
      <div class="content">
        <div class="goods">
          <img :src="goodsDetail.goodsImg" alt>
        </div>
        <GoodsShow-com></GoodsShow-com>
        <GoodsSlogan-com></GoodsSlogan-com>
        <div class="detail">
          <img src="@/assets/small/goodsDetail/details.png" alt>
        </div>
      </div>
    </div>
    <transition name="slide">
      <GoodsSelect-com v-show="flag" @handleQuit="handleQuit" :select="flagButton"></GoodsSelect-com>
    </transition>
    <div id="goodsFooter">
      <a to="/" class="toShopCar" @click="handleCar">加入购物车</a>
      <a class="toOrder" @click="handleOrder">立即购买</a>
    </div>
  </div>
</template>
<script>
 import Vuex from "vuex";
import Header from "./components/goodsDetail/header";
import GoodsShow from "./components/goodsDetail/goodsShow";
import GoodsSlogan from "./components/goodsDetail/goodsSlogan";
import GoodsSelect from "./components/goodsDetail/goodsSelect";
import Mask from "./components/goodsDetail/mask";
import BScroll from "better-scroll";
export default {
  components: {
    "Header-com": Header,
    "GoodsShow-com": GoodsShow,
    "GoodsSlogan-com": GoodsSlogan,
    "GoodsSelect-com": GoodsSelect,
    "Mask-com": Mask
  },
  computed:{
        ...Vuex.mapState({
            goodsDetail:state=>state.small.goodsDetail,
        })
    },
  data(){
    return{
      flagButton:"",
       flag: false,
       id:""
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.detailsWrapper, {
      pullUpLoad: true,
      click: true
    });
  },
  created(){
    this.handleDetail(this.$route.params.id)
    this.$on("handle1",this.handleClick);
    this.$on("handle2",this.handleClick);
  },
  methods: {
    handleQuit() {
      this.flag = false;
    },
    handleClick() {
      this.flag = true;
    },
    handleCar(){
      this.flagButton=false;
      this.$emit("handle1",this.flagButton)
    },
    handleOrder(){
      this.flagButton=true;
      this.$emit("handle2",this.flagButton)
    },
     ...Vuex.mapActions({
            handleDetail:"small/handleDetail"
        })
  }
};
</script>
<style lang="scss" scoped>
#goodsDetail {
  height: 100%;
  .wrapper {
    position: fixed;
    top: 0.88rem;
    height: 100%;
    .content {
      padding-bottom: 1.6rem;
    }
  }
  .goods {
    width: 100%;
    height: 6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
#goodsFooter {
  position: fixed;
  width: 100%;
  height: 1rem;
  left: 0;
  bottom: 0;
  display: flex;
  a {
    font-size: .32rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fcfcfc;
    line-height: 1rem;
    text-align: center;
  }
  .toShopCar {
    width: 50%;
    background: rgba(227, 153, 66, 1);
  }
  .toOrder {
    width: 50%;
    background: rgba(244, 76, 54, 1);
    
  }
}
</style>



