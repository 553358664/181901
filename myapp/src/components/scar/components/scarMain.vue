<template>
  <div id="sCarMain">
    <div class="shopName">
      <div class="check" :class="checkAll?'noBorder':''" @click="handleCheckAll(),ifChecked()">
            <img src="@/assets/scar/check.png" v-show="checkAll">
          </div>
      <div class="shopPic"><img src="@/assets/small/submitOrder/icon_shop.png" alt></div>
      花7的店
    </div>
    <ul class="order">
      <!-- <mt-checklist v-model="value" :options="options"></mt-checklist> -->
      <li v-for="(item,index) in sCarList">
        <div class="goodsItem">
          <div class="check" :class="item.flagCheck?'noBorder':''" @click="handleCheck(index),ifChecked()">
            <img src="@/assets/scar/check.png" v-show="item.flagCheck" alt>
          </div>
          <div class="goods">
            <div class="goodsPic">
            <img :src=item.goodsImg>
          </div>
          <div class="left">
            <div class="goodsName">{{item.goodsName}}</div>
            <div class="goodsKind">{{item.goodsSize}}</div>
          </div>
          <div class="right">
            <div class="goodsPrice">{{item.goodsPrice|price}}</div>
            <div class="goodsOldPrice">{{item.goodsOldPrice|price}}</div>
            <div class="goodsNum">{{item.goodsNum |num}}</div>
          </div>
          </div>
        </div>
        <div class="count">
          <div>

          </div>
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
/* import Vue from "vue";
import { Checklist } from "mint-ui";
Vue.component(Checklist.name, Checklist); */
import Vuex from "vuex";
export default {
  updated(){
  this.ifChecked()
  },
  computed:{
    ...Vuex.mapState({
      sCarList:state=>state.scar.sCarList,
      checkAll:state=>state.scar.checkAll
    }),
  },
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    },
    num(val) {
      return "×" + val;
    },
    countPrice(n, p) {
      return "￥" + Number(n * p).toFixed(2);
    }
  },
  methods:{
    ...Vuex.mapMutations({
        handleReduce:"scar/handleReduce",
        handleAdd:"scar/handleAdd",
        handleCheck:"scar/handleCheck",
        handleCheckAll:"scar/handleCheckAll",
        ifChecked:"scar/ifChecked"
    })
  }
};
</script>
<style lang="scss" scoped>
 .check{
    display:inline-block;
      width:.33rem;
      height:.33rem;
      border-radius: 50%;
      background:#fff;
      margin-top:.65rem;
      margin-right:.1rem;
      border:.02rem solid #777;
      vertical-align: bottom;
      img{
        width:100%;
        height:100%;
      }
    }
   .noBorder{
    border:none;
    }
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
#sCarMain {
  width: 100%;
  background: #fff;
  padding: 0.31rem 0 0.31rem 0.26rem;
  .shopName {
    margin-bottom: 0.34rem;
    
    .shopPic {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      vertical-align: bottom;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .order li {
    width:100%;
    margin-bottom: 0.37rem;
  }
  .goodsItem{
    display:flex;
  }
  .goods {
    display: flex;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(150, 150, 154, 1);
    font-size: 0.2rem;
    background: #f7f7f7;
    padding: 0.1rem 0.27rem 0.1rem 0;
    width:7rem;
    .goodsPic {
      img {
        width: 1.63rem;
        height: 1.62rem;
        background: #ff0;
      }
    }
    .left {
      margin-left: 0.14rem;
      width:3.8rem;
      height: 100%;
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



