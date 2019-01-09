<template>
  <div id="discount" class="wrapper" ref="dicountWrapper">
    <h1>限时特惠</h1>
    <div class="discountGoods content">
      <a href>
        <img src="@/assets/small/shopHome/nav_1.png" alt>
        <h2>9.9元包邮 | 心想事橙</h2>
        <h3>9.9元/束</h3>
      </a>
      <a href>
        <img src="@/assets/small/shopHome/nav_1.png" alt>
        <h2>9.9元包邮 | 心想事橙</h2>
        <h3>9.9元/束</h3>
      </a>
      <a href>
        <img src="@/assets/small/shopHome/nav_1.png" alt>
        <h2>9.9元包邮 | 心想事橙</h2>
        <h3>9.9元/束</h3>
      </a>
      <a href>
        <img src="@/assets/small/shopHome/nav_1.png" alt>
        <h2>9.9元包邮 | 心想事橙</h2>
        <h3>9.9元/束</h3>
      </a>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    updated(){
      if(!this.scroll){
        this.scroll=new BScroll(this.$refs.dicountWrapper,{scrollX:true})
      }
      console.log(this.scroll)
    }
};
</script>
<style lang="scss" scoped>
#discount {
  margin-left: 0.26rem;
  font-family: PingFang-SC-Regular;
  .discountGoods {
    width:max-content;
    display: flex;
    overflow:auto;
    a{
        margin-right:.22rem;
        
    }
    img {
      width: 2.42rem;
      height: 2.42rem;
    }
    h2 {
      font-size: 0.24rem;
      font-size: 0.24rem;
      font-weight: 400;
      color: rgba(10, 10, 10, 1);
      margin: 0.25rem 0 0.15rem;
    }
    h3 {
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(244, 76, 54, 1);
    }
  }
}
</style>



