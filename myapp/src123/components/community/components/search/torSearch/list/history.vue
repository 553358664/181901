<template>
  <div class="searchHis">
    <div class="searchRecord">
      <p>历史纪录</p>
      <img src="../../../../../../assets/community/qiu/del.png" alt @click="handleDel()">
    </div>
    <ul class="searchMain">
      <li class="searchList" v-for="(item,index) in my" :key="index" ref="list" @click="handleSearch(item.Record)">
        <router-link :to="{name:'searchArticle'}">
          {{item.Record}}
        </router-link>
      </li>        
    </ul>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created(){
    this.handleHistory()
  },
  computed: {
    ...Vuex.mapState({
      my: state => state.community.my
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleHistory:"community/handleHistory",
      handleSearch: "community/handleSearch",
      handleDel:"community/handleDel"
    })
  }
};
</script>
<style scoped lang="scss">
.searchHis {
  margin-top: 0.1rem;
  min-height: 19.11%;
  max-height: 27%;
  width: 100%;
  background: #fcfcfa;
  overflow: hidden;
  .searchRecord {
    width: 100%;
    height: auto;
    padding: 3.4% 4% 0 4%;
    display: flex;
    justify-content: space-between;
    p {
      width: 1.1rem;
      font-size: 0.26rem;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(7, 7, 7, 1);
    }
    img {
      width: 0.34rem;
      height: 0.39rem;
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