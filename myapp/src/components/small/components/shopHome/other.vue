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
import Vue from "vue";
export default {
  data() {
    return {
      otherTop: ""
    };
  },
  mounted() {
   /*  this.$nextTick(()=>{
       this.otherTop = this.$refs.other.offsetTop;
    console.log(this.otherTop)
    this.handleOtherTop(this.otherTop)
    }) */
    setTimeout(()=>{
       this.otherTop = this.$refs.other.offsetTop;
    this.handleOtherTop(this.otherTop)
    },300)
   
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



