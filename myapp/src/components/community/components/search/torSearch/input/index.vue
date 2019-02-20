<template>
  <div class="search">
    <div class="seaHeader">
      <div class="searchImg">
        <router-link :to="{name:this.back}">
        <img src="../../../../../../assets/community/qiu/back.png" alt>
        </router-link>
      </div>
      <input
        v-focus="flag"
        type="text"
        class="searchText"
        ref="searchInp"
        :placeholder="search"       
        v-model="search"
        @input="handleTouchUp(search)"
      >
      <p class="searchTit" @click="handleSearch(search)">
        <router-link :to="{name:'searchArticle'}">
        搜索
        </router-link>
        </p>
    </div>
  </div>
</template>
<script>
import axios from "../../../../../../lib";
import Vuex from "vuex"
export default {
  data() {
    return {
      search: "",
      flag: true,
      back:"friends"
    };
  },
  methods: {
    ...Vuex.mapActions({
      handleSearch : "community/handleSearch",
      handleTouchUp:"community/handleTouchUp"
    })
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  background: #fcfcfa;
}
.seaHeader {
  width: 100%;
  height: 1.02rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0.01rem 0.02rem 0.04rem 0rem rgba(0, 0, 0, 0.06);
  .searchImg {
    img {
      width: 0.22rem;
      height: 0.44rem;
    }
  }
  .searchText {
    width: 5.45rem;
    height: 0.64rem;
    background: rgba(238, 238, 238, 1);
    border-radius: 0.32rem;
    border: 0;
    text-align: center;
    font-size: 0.26rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(10, 10, 10, 1);
    opacity: 0.8;
    outline:none;
  }
  .searchTit {
    width: 0.56rem;
    height: 0.27rem;
    font-size: 0.28rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(7, 7, 7, 1);
    margin-bottom: 0.13rem;
    margin-right: 0.12rem;
  }
}
</style>
