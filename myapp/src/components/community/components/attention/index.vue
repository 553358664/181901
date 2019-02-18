<template>
  <div class="attention wrapper" ref="attentionWrapper">
    <keep-alive class="keepalive content">
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>
                                                   
<script>
import Exit from "./exit"; //存在关注
import None from "./none"; //不存在关注
import BScroll from "better-scroll";

export default {
  components: {
    "Exit-com": Exit,
    "None-com": None
  },
  data() {
    return {
      comName: "None-com"
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.attentionWrapper, {
      //只有设置成true pullingUp才能使用
      pullUpLoad: true,
      hasVerticalScroll: true
    });
    this.scroll.on("pullingUp", () => {});
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  background:rgba(239,239,236,1);
}
</style>