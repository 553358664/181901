<template>
  <div id="new">
    <h2>新品推荐</h2>
    <h3><span>1</span>/<i>4</i></h3>
    <div class="banner">
        <img src="@/assets/small/shopHome/shangcheng_1@2x.png" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#new {
  h2 {
    margin: .11rem 0 0 .24rem;
    height: .33rem;
    font-size: .34rem;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }
  h3{
     width: 0.39rem;
    height: 0.23rem;
    font-weight: 500;
    color: #96969a;
    float:right;
    margin:.06rem .24rem .21rem 0;
    
    font-size:.28rem;
    
    span{
        color:rgba(0,0,0,1);
         font-size:.28rem;
    }
    i{
        font-style:normal;
        font-size:.22rem;
    }
  }
  
  .banner{
      height:3.84rem;
      margin-left:.26rem;
      width:100%;
      background:#ff0;
      margin-top:.5rem;
  }
}
</style>



