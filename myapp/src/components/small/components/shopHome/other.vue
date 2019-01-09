<template>
  <div id="other">
    <h1>花边小屋</h1>
    <div class="otherNav">
      <a href>
        <img src="@/assets/small/shopHome/other_1.png" alt>
      </a>
      <a href>
        <img src="@/assets/small/shopHome/other_2.png" alt>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#other {
  h1 {
    margin-left:.25rem
  }
  .otherNav {
    padding: 0 0.23rem;
    display:flex;
    justify-content: space-between;
    a{
      width:3.42rem;
      height:1.12rem;
      img{
        width:100%;
        height:100%;
      }
    }
  }
}
</style>



