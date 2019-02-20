<template>
  <div class="searchHot">
    <div class="searchFind">
      <p>大家都再找</p>
    </div>
    <ul class="searchMain">
      <li
        class="searchList"
        v-for="(item,index) in hot"
        :key="index"
        @click="handleSearch(item)"
      >
      <router-link :to="{name:'searchArticle'}">
      {{item}}
      </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
  created(){
    this.handleHot()
  },
  computed: {
    ...Vuex.mapState({
      hot: state => state.community.hot
    })
  },
  methods:{
      ...Vuex.mapActions({
          handleHot:"community/handleHot",
          handleSearch:"community/handleSearch"
      })
  }
};
</script>
<style scoped lang="scss">
.searchHot {
  margin-top: 0.1rem;
  min-height: 19.11%;
  max-height: 27%;
  width: 100%;
  background: #fcfcfa;
  overflow: hidden;
  .searchFind {
    width: 100%;
    height: auto;
    padding: 3.4% 4% 0 4%;
    display: flex;
    justify-content: space-between;
    p {
      width: 1.4rem;
      font-size: 0.26rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(7, 7, 7, 1);
    }
  }
  .searchMain {
    padding: 3.4% 8% 0 4%;
    overflow: hidden;
    .searchList {
      border: 0.01rem solid rgba(225, 228, 215, 1);
      border-radius: 0.31rem;
      float: left;
      min-height: 0.62rem;
      font-size: 0.26rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(43, 43, 43, 1);
      line-height: 0.62rem;
      padding: 0 0.2rem 0 0.2rem;
      margin-left: 0.23rem;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
