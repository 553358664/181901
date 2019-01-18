<template>
  <div id="goodsShow">
    <div class="left">
      <span class="price">{{9.90|price}}</span><span class="point">.</span>
      <span class="priceDecimal">{{9.90|priceDecimal}}</span>
      <div class="group">
        <span class="oldPrice">{{49.00|oldPrice}}</span>
        <span>5人拼团价</span>
      </div>
    </div>
    <div class="right">
      <p>距结束仅</p>
      <div>
          <span class="day time">{{1|time}}</span>天
          <span class="hour time">{{12|time}}</span>时
          <span class="minute time">{{28|time}}</span>分
          <span class="second time">{{6|time}}</span>秒
      </div>
    </div>
  </div>
</template>
<script>
export default {
    filters:{
        price(val){
            val=Number(val).toFixed(2);
            let arr=val.split(".");
            return "￥"+arr[0]
        },
        priceDecimal(val){
            val=Number(val).toFixed(2);
            let arr=val.split(".");
            return arr[1]
        },
        oldPrice(val){
            val=Number(val).toFixed(2);
            return "￥"+val
        },
        time(val){
            if(val<10){
                val="0"+val
            }
            return val
        }
    }
};
</script>
<style lang="scss" scoped>
#goodsShow {
  width: 100%;
  height: 1.2rem;
  background: #f44c36;
  color:#f9eff0;
  font-weight: 400;
  display: flex;
  padding:.15rem .25rem 0;
  justify-content: space-between;
  font-family: PingFangSC-Regular;
  font-size:.28rem;
  .left{
      .price{
          font-size:.44rem;
      }
      .point{
          margin-right: .05rem;
      }
      .oldPrice{
          text-decoration: line-through;
          margin-right:.1rem;
      }
  }
  .right{
      div{
          display: flex;
           margin-top:.2rem;
           .time{
          width:.35rem;
          height:.35rem;
          line-height: .35rem;
          display: block;
          background:#f9eff0;
          color:#151515;
          text-align:center;
      }
      }
     
  }
}
</style>



