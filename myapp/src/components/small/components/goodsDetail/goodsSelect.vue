<template>
  <div id="goodsSelect">
    <div class="Quit" @click="handle"></div>
    <div class="goodsIntro">
      <div class="goodsMain">
        <div class="goodsPic">
          <img src="@/assets/small/goodsDetail/goods_pic.png" alt>
        </div>
        <div class="goodsInfo">
          <h1>「多头玫瑰」| 4枝，黄色、橙色、粉色、红...</h1>
          <h2>¥10.45</h2>
        </div>
      </div>
      <div class="border"></div>
      <div class="Kind">
        <h3>规格:</h3>
        <ul>
          <li>
            <label><input type="radio" name="kind">黄色系 (4枝)</label>
          </li>
          <li>
            <label><input type="radio" name="kind">黄色系 (4枝)</label>
          </li>
          <li>
            <label><input type="radio" name="kind">黄色系 (4枝)</label>
          </li>
          <li>
            <label><input type="radio" name="kind">黄色系 (4枝)</label>
          </li>
          <li>
            <label><input type="radio" name="kind">黄色系 (4枝)</label>
          </li>
        </ul>
      </div>
      <div class="border"></div>
      <div class="numSelect">
        <h3>购买数量:</h3>
        <div class="goodsNum">
          <button>-</button>
          <input type="text" value="1">
          <button>+</button>
        </div>
      </div>
    </div>
    <div class="selectFooter">
      <router-link :to="select?'/submitOrder':''" class="toOk" >确定</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props:["select"],
    methods:{
        handle(){
            this.$emit("handleQuit")
        }
    }
};
</script>
<style lang="scss" scoped>
.slide-enter,.slide-leave-to{
  transform: translateY(100%);
}
.slide-enter-active,.slide-leave-active{
  transition: all 300ms
}
#goodsSelect {
  position: absolute;
  left: 0;
  bottom: 0;
  background: #f7f7f7;
  width: 100%;
  z-index: 11;
  .border {
    width: 100%;
    height: 0.01rem;
    background: rgba(206, 206, 206, 1);
    margin: 0.22rem 0 0.19rem;
  }
  .selectFooter {
    width: 100%;
    height: 1rem;
    background: rgba(227, 88, 66, 1);
    margin-top: 0.22rem;
    text-align: center;
    a {
      width:100%;
      height:100%;
      display: block;
      font-size: 32px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
    }
  }
  .Quit {
    width: 0.4rem;
    height: 0.4rem;
    background: url(../../../../../src/assets/small/goodsDetail/quit.png);
    position: absolute;
    right: 0.24rem;
    top: 0.14rem;
  }
  .goodsIntro {
    width: 100%;
    background: #fff;
    padding: 0.19rem 0 0.31rem 0.31rem;
    .goodsMain {
      display: flex;
      .goodsPic {
        width: 1.42rem;
        height: 1.42rem;
        margin-top: -0.5rem;
      }
      .goodsInfo {
        margin-left: 0.14rem;
        h1 {
          font-size: 0.24rem;
          font-family: PingFangSC-Light;
          font-weight: 300;
          color: rgba(10, 10, 10, 1);
        }
        h2 {
          margin-top: 0.21rem;
          font-size: 0.26rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(227, 88, 66, 1);
        }
      }
    }
    h3 {
      font-size: 0.24rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(10, 10, 10, 1);
    }
    .Kind {
      ul {
        display: flex;
        margin-top: 0.21rem;
        flex-wrap: wrap;
        li {
          padding: 0.16rem 0.25rem 0.14rem 0.21rem;
          border: 0.01rem solid rgba(206, 206, 206, 1);
          border-radius: 0.04rem;
          margin: 0 0.22rem 0.16rem 0;
          font-size: 0.24rem;
          font-family: PingFangSC-Light;
          font-weight: 300;
          color: rgba(10, 10, 10, 1);
        }
      }
    }
    .numSelect {
      display: flex;
      margin-top: 0.25rem;
      position: relative;
      .goodsNum {
        position: absolute;
        bottom: -0.12rem;
        right: 0.35rem;
        height: 0.53rem;
        border: 0.01rem solid rgba(224, 224, 224, 1);
        border-radius: 0.02rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: rgba(150, 150, 154, 1);
        text-align: center;
        button {
          font-size: 0.24rem;
          width: 0.66rem;
          height: 0.53rem;
          background: rgba(244, 244, 244, 1);
          border: 0.01rem solid rgba(224, 224, 224, 1);
          border-radius: 0.02rem;
        }
        input {
          font-size: 0.24rem;
          width: 0.66rem;
          height: 0.4rem;
          border: none;
           text-align: center;
        }
      }
    }
  }
}
</style>



