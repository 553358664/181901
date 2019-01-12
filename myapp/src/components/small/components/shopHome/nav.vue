<template>
  <div id="nav">
    <router-link  to="/xptj" class="ohter1">
      <h2>新年开运</h2>
      <h2>79元起还送2只花瓶</h2>
    </router-link>
    <router-link to="/hccs" class="ohter2">
      <h2>花材超市升级</h2>
      <h2>4.7元/束起 送手套花瓶</h2>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#nav {
  padding: 0 0.23rem;
  display: flex;
  justify-content: space-between;
  a {
    width: 3.42rem;
    height: 1.12rem;
    display: block;
    &:nth-of-type(1) {
      background: url(../../../../../src/assets/small/shopHome/nav_1.png);
    }
    &:nth-of-type(2) {
      background: url(../../../../../src/assets/small/shopHome/nav_2.png);
    }
  }
  h2 {
    font-weight: bold;
    color: rgba(244, 76, 54, 1);
  }
  .ohter1 {
    h2 {
      font-size: 0.24rem;
      margin-left: 0.66rem;
      &:nth-of-type(1) {
        margin-top: 0.26rem;
      }
      &:nth-of-type(2) {
        margin-bottom: 0.25rem;
      }
    }
  }
  .ohter2 {
    h2 {
      font-weight: bold;
      color: rgba(244, 76, 54, 1);
      margin-left: 0.59rem;
      &:nth-of-type(1) {
        margin-top: 0.26rem;
        font-size: 0.24rem;
      }
      &:nth-of-type(2) {
        margin-bottom: 0.25rem;
        font-size: 0.22rem;
        opacity: 0.88;
      }
    }
  }
}
</style>



