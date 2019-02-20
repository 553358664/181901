<template>
  <div class="draft">
    <div class="header">
      <img class="back" :src="back" @click="handleback()">
      <p class="info-middle">草稿箱</p>
    </div>

    <div class="content">
      <img class="draftimg" :src="draftimg">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleback() {
      this.$router.back();
    }
  },
  data() {
    return {
      back: require("@/assets/my/icon_wd_jt@2x.png"),
      draftimg: require("@/assets/my/cgx.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.draft {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 0.98rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #fcfcfa;
    padding: 0 0.24rem;
    margin-bottom: 3.9rem;
    position: fixed;
    z-index: 10;
    .back {
      width: 0.34rem;
      height: 0.34rem;
      margin-right: 2.7rem;
    }
    p {
      font-size: 0.32rem;
    }
  }

  .content {
    width: 100%;
    height:10rem;
    padding-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>