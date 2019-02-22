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
        <router-link
          v-for="(item,index) in series1"
          :key="item.id"
          :to="'/goodsDetail/'+item.id"
          class="flowersSmall flowersBig"
        >
          <img :src="item.img">
          <div>
            <h4>{{item.name}}</h4>
            <h5>{{item.description}}</h5>
            <h6>{{item.discountPrice|price}}</h6>
          </div>
        </router-link>
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
        <router-link
          v-for="(item,index) in series2"
          :key="item.id"
          :to="'/goodsDetail/'+item.id"
          class="flowersSmall flowersBig"
        >
          <img :src="item.img">
          <div>
            <h4>{{item.name}}</h4>
            <h5>{{item.description}}</h5>
            <h6>{{item.discountPrice|price}}</h6>
          </div>
        </router-link>
      </div>
    </div>
    <div class="Delicate">
      <h2>
        <span></span>
        小巧精致桌花系列
      </h2>
      <h3>古灵精怪小时髦*大异其趣</h3>
       <div class="flowers"> 
        <router-link
          v-for="(item,index) in series3"
          :key="item.id"
          :to="'/goodsDetail/'+item.id"
          class="flowersSmall"
        >
          <img :src="item.img">
          <div>
            <h4>{{item.name}}</h4>
            <h5>{{item.description}}</h5>
            <h6>{{item.discountPrice|price}}</h6>
          </div>
        </router-link>
      </div>
    </div>
    <div class="Overseas">
      <h2>
        <span></span>
        海外风情
      </h2>
      <h3>精选全球进口花束，低成本享用进口花材</h3>
      <div class="flowers"> 
        <router-link
          v-for="(item,index) in series4"
          :key="item.id"
          :to="'/goodsDetail/'+item.id"
          class="flowersSmall"
        >
          <img :src="item.img">
          <div>
            <h4>{{item.name}}</h4>
            <h5>{{item.description}}</h5>
            <h6>{{item.discountPrice|price}}</h6>
          </div>
        </router-link>
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
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    }
  },
  computed: {
    ...Vuex.mapState({
      discount: state => state.small.discount,
      series1: state => state.small.series1,
      series2: state => state.small.series2,
      series3: state => state.small.series3,
      series4: state => state.small.series4,
    })
  },
  mounted() {
     setTimeout(()=>{
        this.flowerTop = this.$refs.flower.offsetTop;
        his.handleFlowerTop(this.flowerTop);
    },900)
   
    //console.log(this.flowerTop)
  },
  created() {
    this.handleNature1(1);
    this.handleNature2(2);
    this.handleNature3(3);
    this.handleNature4(4);
  },
  methods: {
    ...Vuex.mapMutations({
      handleFlowerTop: "small/handleFlowerTop"
    }),
    ...Vuex.mapActions({
      handleNature1: "small/handleNature1",
      handleNature2: "small/handleNature2",
      handleNature3: "small/handleNature3",
      handleNature4: "small/handleNature4",
    })
  }
};
</script>
<style lang="scss" scoped>
#flowerorder {
  padding: 0 0.24rem;
  h2 {
    margin-top: 0.4rem;
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
    .flowersBig{
      &:first-of-type {
        width: 100%;
        background: #e5e5e5;
        img {
          width: 100%;
          height: 3.02rem;
          margin-bottom: 0.23rem;
        }
        div {
          width: 7.02rem;
          height: 2.7rem;
          margin-top: 0;
          background: rgba(252, 252, 250, 1);
          border-radius: 0.1rem;
          padding-top: 0.53rem;
        }
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
    
  }
}
</style>

