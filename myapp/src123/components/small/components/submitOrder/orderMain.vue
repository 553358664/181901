<template>
  <div id="orderMain">
    <div class="shopName">
      <img src="@/assets/small/submitOrder/icon_shop.png" alt>
      花7的店
    </div>
    <ul class="order">
     <li v-for="(item,index) in goods">
        <div class="goods">
          <div class="goodsPic">
            <img :src="item.goodsImg">
          </div>
          <div class="left">
            <div class="goodsName">{{item.goodsName}}</div>
            <div class="goodsKind">{{item.goodsSize}}</div>
          </div>
          <div class="right">
            <div class="goodsPrice">{{item.goodsPrice|price}}</div>
            <div class="goodsOldPrice">{{item.goodsOldPrice|price}}</div>
            <div class="goodsNum">{{item.goodsNum|num}}</div>
          </div>
        </div>
        <div class="count">
          <div class="changeNum">
            <button @click="handleReduce(index)">-</button>
            <input type="text" :value="item.goodsNum">
            <button @click="handleAdd(index)">+</button>
          </div>
          <h2>
            小计:
            <span class="countPrice">{{item.goodsNum|countPrice(item.goodsPrice)}}</span>
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed:{
    ...Vuex.mapState({
      goods:state=>state.small.goodsSelect
    })
  },
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    },
    num(val) {
      return "×" + val;
    },
    countPrice(n,p) {
      return "￥" + (Number(n * p*10)/10).toFixed(2);
    }
  },
  methods:{
    ...Vuex.mapMutations({
        handleReduce:"small/handleReduce",
        handleAdd:"small/handleAdd"
    })
  }
};
</script>
<style lang="scss" scoped>
.changeNum {
        vertical-align: bottom;
        height: 0.33rem;
        border-radius: 0.02rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: rgba(150, 150, 154, 1);
        text-align: center;
        button {
          font-size: 0.24rem;
          width: 0.46rem;
          height: 0.33rem;
          background: rgba(244, 244, 244, 1);
          border: none;
          border-radius: 0.02rem;
        }
        input {
          font-size: 0.24rem;
          width: 0.46rem;
          height: 0.3rem;
          border: none;
           text-align: center;
        }
      }
#orderMain {
  width: 100%;
  background: #fff;
  padding: 0.31rem 0 0.31rem 0.26rem;
  .shopName {
    margin-bottom: 0.34rem;
    img {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      vertical-align: bottom;
    }
  }
  .order li {
    margin-bottom: 0.37rem;
  }
  .goods {
    display: flex;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(150, 150, 154, 1);
    font-size: 0.2rem;
    background: #f7f7f7;
    padding: 0.1rem 0.27rem 0.1rem 0;
    img {
      width: 1.63rem;
      height: 1.62rem;
      background: #ff0;
    }
    .left {
      margin-left: 0.14rem;
      height: 100%;
      width:6rem;
      .goodsName {
        font-size: 0.22rem;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(10, 10, 10, 1);
        margin-bottom: 0.1rem;
      }
    }
    .right {
      .goodsOldPrice {
        margin-top: 0.23rem;
        text-decoration: line-through;
      }
      .goodsNum {
        margin-top: 0.59rem;
        text-align: right;
        font-size: 0.22rem;
      }
    }
  }
  .count {
    margin-top: 0.18rem;
    display: flex;
    padding-right: 0.27rem;
    justify-content: flex-end;
    line-height: 0.27rem;    
    h1 {
      font-size: 0.2rem;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(150, 150, 154, 1);
    }
    h2 {
      font-size: 0.24rem;
      font-family: PingFang-SC-Regular;
      font-weight: bold;
      color: rgba(10, 10, 10, 1);
      margin-left: 0.24rem;
      .countPrice {
        font-size: 0.26rem;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(244, 76, 54, 1);
      }
    }
  }
}
</style>



