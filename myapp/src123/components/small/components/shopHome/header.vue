<template>
  <div id="header">
    <a
      v-for="(item,index) in nav"
      :class="index==navIndex?'active':''"
      @click="handle(index)"
    >{{item}}</a>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      nav: ["新品推荐","限时特惠", "鲜花订购","花边小屋"],
      navIndex: 0
    };
  },
  computed: {
    ...Vuex.mapState({
      scrollHeight: state => state.small.scrollHeight
    })
  },
  props: ["scrollT"],
  watch: {
    scrollT(newval, oldval) {
      var scrollIndex=this.handleIndex(-newval);
      this.navIndex=scrollIndex
    }
  },
  methods: {
    handle(index) {
      this.navIndex = index;
       this.$emit("Move", index);
    },
    handleIndex(X) {
      var len = this.scrollHeight.length;
      for (var i = 0; i < len; i++) {
        if (X <= this.scrollHeight[i]-2) {
          break;
        }
      }
      if (i == 0) {
        i = 1;
      }
      return i-1;
    }
  }
}
</script>
<style lang="scss" scoped>
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 11;
  height: 0.88rem;
  background: #FCFCFA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  a {
    font-size: 0.24rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }
  .active {
    color: rgba(244, 76, 54, 1);
  }
}
</style>



