<template>
  <div id="mask"></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#mask {
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: #000;
  position: absolute;
  left: 0;
  top: 0;
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 200ms;
  }
}
</style>



