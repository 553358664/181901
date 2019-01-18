<template>
  <div id="flowerorder" ref="flower">
    <h1>鲜花订购</h1>
    <div class="Nature">
      <h2>
        <span></span>
        Nature
        自然系列
      </h2>
      <h3>每周一花的小幸福，新用户送花瓶</h3>
      <div class="flowers">
        <a href class="flowersBig">
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
      </div>
    </div>
    <div class="Story">
      <h2>
        <span></span>
        Story
        主题系列
      </h2>
      <h3>有故事的主题花，含进口花材</h3>
      <div class="flowers">
        <a href class="flowersBig">
          <img src alt>
          <div>
            <h4>本周主题花 | 小红花</h4>
            <h5>旧的年尾，新的年初，我们都应该献给自己一束小红花</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
      </div>
    </div>
    <div class="Delicate">
      <h2>
        <span></span>
       小巧精致桌花系列
      </h2>
      <h3>古灵精怪小时髦*大异其趣</h3>
      <div class="flowers">
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
      </div>
    </div>
    <div class="Overseas">
      <h2>
        <span></span>
        海外风情
      </h2>
      <h3>精选全球进口花束，低成本享用进口花材</h3>
      <div class="flowers">
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
        <a class="flowersSmall" href>
          <img src alt>
          <div>
            <h4>Nature自然系列 | 混合版</h4>
            <h5>简单易打理，新手收花必备</h5>
            <h6>99元/4束</h6>
          </div>
        </a>
      </div>
    </div>
    
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
   data() {
    return {
      flowerTop: ""
    };
  },
  mounted(){
    this.flowerTop = this.$refs.flower.offsetTop;
    this.handleFlowerTop(this.flowerTop)
  },
    methods: {
    ...Vuex.mapMutations({
      handleFlowerTop: "small/handleFlowerTop"
    }),
  }
};
</script>
<style lang="scss" scoped>
#flowerorder {
  padding: 0 0.24rem;
  h2 {
    margin-top:.4rem;
    font-size: 0.28rem;
    font-weight: 500;
    color: rgba(10, 10, 10, 1);
    position: relative;
    margin-left: 0.06rem;
    span {
      position: absolute;
      display: inline-block;
      top: 0.05rem;
      left: -0.06rem;
      width: 0.02rem;
      height: 0.28rem;
      background: #f44c36;
    }
  }
  h3 {
    font-size: 0.22rem;
    margin: 0.2rem 0 0.38rem;
    font-weight: 500;
    color: rgba(10, 10, 10, 1);
  }
  .flowers {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .flowersSmall {
      width: 3.4rem;
      height: 6rem;
      background: rgba(252, 252, 250, 1);
      box-shadow: 0 0.04rem 0.1rem 0 rgba(0, 0, 0, 0.11);
      border-radius: 0.1rem;
      margin-top: 0.8rem;
      div {
        margin: 0.8rem auto;
        height: 0.98rem;
      }
    }
    a {
      display: block;
      text-align: center;
      img {
        width: 3.42rem;
        height: 3.42rem;
        background: #ff0;
      }
      h4 {
        font-size: 0.24rem;
        font-weight: 500;
        color: rgba(10, 10, 10, 1);
      }
      h5 {
        margin: 0.16rem 0 0.15rem;
        font-size: 0.22rem;
        font-weight: 500;
        color: rgba(10, 10, 10, 1);
      }
      h6 {
        font-size: 0.22rem;
        font-weight: 500;
        color: rgba(244, 76, 54, 1);
      }
    }
    .flowersBig {
      width: 100%;
      background: #e5e5e5;
      img {
        width: 100%;
        height: 3.02rem;
        margin-bottom: 0.23rem;
      }
      div {
        width: 7.02rem;
        height: 2rem;
        margin-top: 0;
        background: rgba(252, 252, 250, 1);
        border-radius: 0.1rem;
        padding-top: 0.53rem;
      }
    }
  }
}
</style>

