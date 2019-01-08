<template>
  <div id="new">
    <h1>新品推荐</h1>
    <h3 class="swiper-pagination banner-pagination"></h3>
    <div class="banner">
      <div class="swiper-container banner-container" ref="banner">
        <div class="swiper-wrapper">
          <a class="swiper-slide">
            <img src="@/assets/small/shopHome/banner_1.png">
          </a>
          <a class="swiper-slide">
            <img src="@/assets/small/shopHome/banner_2.png">
          </a>
          <a class="swiper-slide">
            <img src="@/assets/small/shopHome/banner_3.png">
          </a>
          <a class="swiper-slide">
            <img src="@/assets/small/shopHome/banner_4.png">
          </a>
        </div>
      </div>
    </div>
    <h4>新年开运 | 79元起NEE</h4>
    <h5>旧的年尾，新的年初，奖励自己一束开运红花，还送花瓶</h5>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(this.$refs.banner, {
      loop: true,
      autoplay: {
        disableOnInteraction: false
      },
      preventClicks: false,
      pagination: {
        el: ".banner-pagination",
        type: "fraction"
      },
      formatFractionCurrent: function(number) {
        switch (number) {
          case 1:
            myNum = "1";
            break;
          case 2:
            myNum = "2";
            break;
          case 3:
            myNum = "3";
            break;
          default:
            myNum = number;
        }
        return myNum;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#new {
  position: relative;
  h1 {
    margin: 0.99rem 0 0 0.24rem;
  }
  .banner-pagination {
    position: absolute;
    font-weight: 500;
    z-index: 10;
    font-size: 0.22rem;
    left: 6.54rem;
    top: 0.58rem;
    width: 0.7rem;
    height: 0.3rem;
    font-family: PingFang-SC-Medium;
    color: rgba(0, 0, 0, 1);
  }

  .swiper-pagination-current {
  }
  .swiper-pagination-total {
    font-style: normal;
    font-size: 0.22rem;
  }
  h4 {
    margin: 0.21rem 0 0.15rem 0.23rem;
    font-size: 0.32rem;
    font-weight: bold;
    color: rgba(10, 10, 10, 1);
  }
  h5 {
    margin-left: 0.23rem;
    font-size: 0.22rem;
    font-weight: 500;
    color: rgba(10, 10, 10, 1);
  }
  .banner .banner-container {
    height: 3rem;
    margin-left: 0.26rem;
    width: 7.02rem;
    margin-top: 0.5rem;
  }

  .banner-container img {
    width: 100%;
    height: 100%;
  }
}
</style>



