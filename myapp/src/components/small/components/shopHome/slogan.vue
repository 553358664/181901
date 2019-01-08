<template>
  <div id="slogan">
    <span></span>
      <p>一直幸福到底</p>
    <span></span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#slogan {
  width: 1.8rem;
  margin: 0 auto .23rem;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    width: .06rem;
    height: .06rem;
    background: rgba(153, 153, 153, 1);
    border-radius: 50%;
    margin-top:.13rem;
  }
  p {
      
    font-size: 0.24rem;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }
}
</style>
