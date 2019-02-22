<template>
  <div id="goodsSlogan">
    <h1>{{goodsDetail.name}}</h1>
    <h2>{{goodsDetail.description}}</h2>
  </div>
</template>
<script>
 import Vuex from "vuex";
export default {
   computed:{
        ...Vuex.mapState({
            goodsDetail:state=>state.small.goodsDetail
        })
    },
};
</script>
<style lang="scss" scoped>
#goodsSlogan {
  background:#fcfcfa;
  padding: 0.25rem;
  h1 {
    font-size: 0.34rem;
    font-weight: blod;
  }
  h2 {
    margin:.15rem  0 .6rem;
    font-size: 0.28rem;
    font-weight: 500;
  }
}
</style>



