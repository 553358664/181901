<template>
  <div id="other" ref="other">
    <h1>花边小屋</h1>
    <div class="otherNav">
      <router-link to="/hcyh">
        <img src="@/assets/small/shopHome/other_1.png" alt>
      </router-link>
      <router-link to ="/jxhq">
        <img src="@/assets/small/shopHome/other_2.png" alt>
      </router-link>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      otherTop: ""
    };
  },
  mounted() {
    this.otherTop = this.$refs.other.offsetTop;
    this.handleOtherTop(this.otherTop)
  },
  methods: {
    ...Vuex.mapMutations({
      handleOtherTop: "small/handleOtherTop"
    }),
  }
};
</script>
<style lang="scss" scoped>
#other {
  h1 {
    margin-left: 0.25rem;
  }
  .otherNav {
    padding: 0 0.23rem;
    display: flex;
    justify-content: space-between;
    a {
      width: 3.42rem;
      height: 1.12rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>



