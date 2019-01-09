<template>
  <div id="header">
    <a class="action">新品推荐</a>
    <a>限时特惠</a>
    <a>鲜花订购</a>
    <a>花边小物</a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index:11;
  height: 0.88rem;
  background: rgba(252, 253, 248, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  a {
    font-size: 0.24rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }
  .action {
    color: rgba(244, 76, 54, 1);
  }
}
</style>



