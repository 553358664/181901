<template>
  <div id="orderMain">
    <div class="shopName">
      <img src="@/assets/small/submitOrder/icon_shop.png" alt>
      花7的店
    </div>

    <ul class="order">
      <li>
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
        <div class="count">
          <h1>
          总共<span class="countNum">3</span>件商品
          </h1>
          <h2>
            小计:
            <span class="countPrice">{{39.60|countPrice(3)}}</span>
          </h2>
        </div>
      </li>
      <li>
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
        <div class="count">
          <h1>
          总共<span class="countNum">3</span>件商品
          </h1>
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
export default {
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    },
    num(val) {
      return "×" + val;
    },
    countPrice(p, n) {
      return "￥"+Number(n * p).toFixed(2);
    }
  }
};
</script>
<style lang="scss" scoped>
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
    margin-top:.18rem;
    display: flex;
    padding-right:.27rem;
    justify-content: flex-end;
    line-height:.27rem;
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
      margin-left:.24rem;
      .countPrice {
        font-size: .26rem;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(244, 76, 54, 1);
      }
    }
  }
}
</style>



