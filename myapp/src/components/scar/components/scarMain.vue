<template>
  <div id="sCarMain">
    <div class="shopName">
      <img src="@/assets/small/submitOrder/icon_shop.png" alt>
      花7的店
    </div>
    <ul class="order">
      <!-- <mt-checklist v-model="value" :options="options"></mt-checklist> -->
      <li>
        <div class="goodsItem">
          <div class="check" :class="flagCheck?'noBorder':''" @click="handleCheck">
            <img src="@/assets/scar/check.png" v-show="flagCheck" alt>
          </div>
          <div class="goods">
            <div class="goodsPic">
            <img src alt>
          </div>
          <div class="left">
            <div class="goodsName">「单头康乃馨」|10枝，粉色、红色、橙fdasafsdfdsa</div>
            <div class="goodsKind">红色（10枝）</div>
          </div>
          <div class="right">
            <div class="goodsPrice">{{39.60|price}}</div>
            <div class="goodsOldPrice">{{39.60|price}}</div>
            <div class="goodsNum">{{3|num}}</div>
          </div>
          </div>
        </div>
        <div class="count">
          <div class="changeNum">
            <button>-</button>
            <input type="text" value="1">
            <button>+</button>
          </div>
          <h2>
            小计:
            <span class="countPrice">{{39.60|countPrice(3)}}</span>
          </h2>
        </div>
      </li>
       <li>
        <div class="goodsItem">
          <div class="check" :class="flagCheck?'noBorder':''" @click="handleCheck">
            <img src="@/assets/scar/check.png" v-show="flagCheck" alt>
          </div>
          <div class="goods">
            <div class="goodsPic">
            <img src alt>
          </div>
          <div class="left">
            <div class="goodsName">「单头康乃馨」|10枝，粉色、红色、橙fdasafsdfdsa</div>
            <div class="goodsKind">红色（10枝）</div>
          </div>
          <div class="right">
            <div class="goodsPrice">{{39.60|price}}</div>
            <div class="goodsOldPrice">{{39.60|price}}</div>
            <div class="goodsNum">{{3|num}}</div>
          </div>
          </div>
        </div>
        <div class="count">
          <div class="changeNum">
            <button>-</button>
            <input type="text" value="1">
            <button>+</button>
          </div>
          <h2>
            小计:
            <span class="countPrice">{{39.60|countPrice(3)}}</span>
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
export default {
  data() {
    return {
      /* value: [],
      //checklist设置
      options: [
        {
          label: "选项A",
          value: "A",
        },
        {
          label: "选项B",
          value: "B",
        },
        {
          label: "选项C",
          value: "C"
        },
        {
          label: "选项D",
          value: "D"
        }
      ] */
      flagCheck:false
    };
  },
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    },
    num(val) {
      return "×" + val;
    },
    countPrice(p, n) {
      return "￥" + Number(n * p).toFixed(2);
    }
  },
  methods:{
    handleCheck(){
      this.flagCheck=!this.flagCheck
    }
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
#sCarMain {
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
    width:100%;
    margin-bottom: 0.37rem;
  }
  .goodsItem{
    display:flex;
    justify-content: space-around;
  }
  .check{
    display:inline-block;
      width:.39rem;
      height:.33rem;
      border-radius: 50%;
      background:#fff;
      margin-top:.65rem;
      margin-right:.1rem;
      border:1px solid #777;
      img{
        width:100%;
        height:100%;
      }
    }
    .noBorder{
    border:none;
  }
  .goods {
    display: flex;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(150, 150, 154, 1);
    font-size: 0.2rem;
    background: #f7f7f7;
    padding: 0.1rem 0.27rem 0.1rem 0;
    .goodsPic {
      img {
        width: 1.63rem;
        height: 1.62rem;
        background: #ff0;
      }
    }
    .left {
      margin-left: 0.14rem;
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



