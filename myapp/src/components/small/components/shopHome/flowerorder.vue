<template>
  <div id="flowerorder">
    <h1>鲜花订购</h1>
    <h2>
      <span></span>
      Nature
      自然系列
    </h2>
    <h3>每周一花的小幸福，新用户送花瓶</h3>
    <div class="flowers">
      <a href>
        <img src alt>
        <div>
          <h4>Nature自然系列 | 混合版</h4>
          <h5>简单易打理，新手收花必备</h5>
          <h6>99元/4束</h6>
        </div>
      </a>
      <a href>
        <img src alt>
        <div>
          <h4>Nature自然系列 | 混合版</h4>
          <h5>简单易打理，新手收花必备</h5>
          <h6>99元/4束</h6>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#flowerorder {
  padding: 0 0.24rem;
  h1 {
    margin-bottom: 0.4rem;
  }
  h2 {
    font-size: 0.28rem;
    font-weight: 500;
    color: rgba(10, 10, 10, 1);
    span {
      display: inline-block;
      width: 2px;
      height: 28px;
      background: #f44c36;
    }
  }
  h3 {
    font-size: 0.22rem;
    margin: 0.2rem 0 0.38rem;
    font-weight: 500;
    color: rgba(10, 10, 10, 1);
  }
  .flowers {
    display: flex;
    justify-content: space-between;
    a {
      display: blcok;
      width: 3.4rem;
      height: 6rem;
      text-align: center;
    }
    img {
      width: 3.42rem;
      height: 3.42rem;
      background: #ff0;
    }
    h4 {
      margin-top: 0.8rem;
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(10, 10, 10, 1);
    }
    h5 {
      margin: 0.16rem 0 0.15rem;
      font-size: 0.22rem;
      font-weight: 500;
      color: rgba(10, 10, 10, 1);
    }
    h6 {
      font-size: .22rem;
      font-weight: 500;
      color: rgba(244, 76, 54, 1);
    }
  }
}
</style>

