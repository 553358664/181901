<template>
  <div id="goodsShow">
    <div class="left">
      <span class="price">{{goodsDetail.goodsPrice|price}}</span>
      <span class="point">.</span>
      <span class="priceDecimal">{{goodsDetail.goodsPrice|priceDecimal}}</span>
      <div class="group">
        <span class="oldPrice">{{goodsDetail.goodsOldPrice|oldPrice}}</span>
        <span>5人拼团价</span>
      </div>
    </div>
    <div class="right">
      <p>距结束仅</p>
      <div>
        <span class="day time">{{d|time}}</span>天
        <span class="hour time">{{h|time}}</span>时
        <span class="minute time">{{m|time}}</span>分
        <span class="second time">{{s|time}}</span>秒
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      goodsDetail: state => state.small.goodsDetail
    })
  },
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      let arr = val.split(".");
      return "￥" + arr[0];
    },
    priceDecimal(val) {
      val = Number(val).toFixed(2);
      let arr = val.split(".");
      return arr[1];
    },
    oldPrice(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    },
    time(val) {
      if (val < 10) {
        val = "0" + val;
      }
      return val;
    }
  },
  data() {
    return {
      d: "",
      h: "",
      m: "",
      s: ""
    };
  },
  created() {
    this.showTime();
  },
  methods: {
    countDown() {
      let date = new Date();
      let now = date.getTime();
      let endDate = new Date("2019-2-17");
      let end = endDate.getTime();
      let time = end - now;
      this.d=Math.floor(time/1000/60/60/24);
      this.h=Math.floor(time/1000/60/60%24);
      this.m=Math.floor(time/1000/60%60);
      this.s=Math.floor(time/1000%60)
    },
    showTime(){
        setInterval(()=>{
            this.countDown()
        },1000)
    }
  }
};
</script>
<style lang="scss" scoped>
#goodsShow {
  width: 100%;
  height: 1.2rem;
  background: #f44c36;
  color: #f9eff0;
  font-weight: 400;
  display: flex;
  padding: 0.15rem 0.25rem 0;
  justify-content: space-between;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  .left {
    .price {
      font-size: 0.44rem;
    }
    .point {
      margin-right: 0.05rem;
    }
    .oldPrice {
      text-decoration: line-through;
      margin-right: 0.1rem;
    }
  }
  .right {
    div {
      display: flex;
      margin-top: 0.2rem;
      .time {
        width: 0.35rem;
        height: 0.35rem;
        line-height: 0.35rem;
        display: block;
        background: #f9eff0;
        color: #151515;
        text-align: center;
      }
    }
  }
}
</style>



