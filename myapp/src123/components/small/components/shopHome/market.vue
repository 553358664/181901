<template>
  <div id="market" ref="discount">
    <div class="wrapper" ref="dicountWrapper">
      <div class="marketGoods content">
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/meigui.png" alt>
          <h2>玫瑰</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/baihe.png" alt>
          <h2>百合</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/kangnaixin.png" alt>
          <h2>康乃馨</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/xiuqiu.png" alt>
          <h2>绣球</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/lanhua.png" alt>
          <h2>兰花</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/ju.png" alt>
          <h2>菊花</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/xiangrikui.png" alt>
          <h2>向日葵</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/lamei.png" alt>
          <h2>腊梅</h2>
        </router-link>
        
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.dicountWrapper, {
      scrollX: true
    });
  },
};
</script>
<style lang="scss" scoped>
#market {
  margin-left: 0.26rem;
  font-family: PingFang-SC-Regular;
  .marketGoods {
    width: max-content;
    display: flex;
    a {
      margin-right: 0.22rem;
    }
    img {
      width: 1.5rem;
      height:1.5rem;
    }
    h2 {
      font-size: 0.24rem;
      font-size: 0.24rem;
      font-weight: 400;
      color: rgba(10, 10, 10, 1);
      margin-top: 0.25rem;
      text-align:center;
    }
    h3 {
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(244, 76, 54, 1);
    }
  }
}
</style>



