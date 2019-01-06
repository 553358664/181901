<template>
  <div id="header">
      <a class="action" href="">新品推荐</a>
      <a href="">限时特惠</a>
      <a href="">鲜花订购</a>
      <a href="">花边小物</a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: .88rem;
  background: rgba(252, 253, 248, 1);
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 .8rem;
    a{
        font-size:.24rem;
        font-weight:bold;
        color:rgba(0,0,0,1);
    }
    .action{
        color:rgba(244,76,54,1)
    }
}
</style>



