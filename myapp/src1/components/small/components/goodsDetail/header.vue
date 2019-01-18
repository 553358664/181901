<template>
  <div id="header">
    <div @click="handleBack">
      <img src="@/assets/small/goodsDetail/back.png" alt>
    </div>
    <p>花7</p>
  </div>
</template>
<script>
export default {
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
};
</script>
<style lang="scss" scoped>
#header {
  position:fixed;
  left:0;
  top:0;
  background:#fff;
  z-index:20;
  height: 0.88rem;
  width: 100%;
  display: flex;
  align-items: center;
  div {
      position:absolute;
    left: 0.31rem;
    img {
      width: 0.22rem;
      height: 0.36rem;
    }
  }
  p {
      margin:0 auto;
      font-size: 0.32rem;
      font-weight: 500;
      color: rgba(10, 10, 10, 1);
    }
}
</style>



