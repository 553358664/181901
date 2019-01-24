<template>
  <div id="discount" ref="discount">
    <div class="wrapper" ref="dicountWrapper">
      <div class="marketGoods content">
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>玫瑰</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>百合</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>康乃馨</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>洋桔梗</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>玫瑰</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>百合</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>康乃馨</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>洋桔梗</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>玫瑰</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>百合</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>康乃馨</h2>
        </router-link>
        <router-link :to="{name:'hccs'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>洋桔梗</h2>
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
#discount {
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



