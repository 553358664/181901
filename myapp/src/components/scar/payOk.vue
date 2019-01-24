<template>
  <div id="payOk">
    <Header-com></Header-com>
    <div class="ok">
      <div class="okPic">
        <img src="@/assets/scar/payOk.png">
      </div>
      <p>支付成功</p>
    </div>
    <router-link to="/small">完成</router-link>
  </div>
</template>
<script>
import Header from "../small/components/goodsDetail/header";
export default {
  components: {
    "Header-com": Header
  }
};
</script>
<style lang="scss" scoped>
#payOk {
  .ok {
    margin-top: 2.8rem;
    text-align: center;
    .okPic {
        width:1.6rem;
        height:1.6rem;
        display: inline-block;
      img {
        
        width:100%;
        height:100%
      }
    }

    p {
      margin-top: 0.73rem;
      font-size: 0.32rem;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(10, 10, 10, 1);
    }
  }
  a {
    width: 7.03rem;
    height: 0.8rem;
    background: #f44c36;
    border-radius: 10px;
    position: absolute;
    left: 0.22rem;
    top: 7.26rem;
    font-size: 0.32rem;
    text-align: center;
    font-family: PingFang-SC-Medium;
    font-weight: bold;
    color: rgba(254, 254, 254, 1);
    line-height: 0.8rem;
    margin: 0 auto;
  }
}
</style>


