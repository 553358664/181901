<template>
  <div class="searchList">
    
      <ul class="searchMain">
         <router-link :to="{name:'searchArticle'}">      
          <li class="searchCentent" v-for="(item,index) in list" :key="index" @click="handleSearch(item)">         
            {{item}}              
          </li>
        </router-link>
      </ul>   
        <history-com/>   
        <hot-com/>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      list: state => state.community.fuzzyQuery
    })
  },
  components: {
    "history-com": () => import("./history"),
    "hot-com": () => import("./hot")
  },
  methods:{
    ...Vuex.mapActions({
      handleSearch:"community/handleSearch"
    })
  }
};
</script>
<style scoped lang="scss">
.searchMain {
  width: 100%;
  overflow: hidden;
  zoom: 1;
  .searchCentent {
    width: 100%;
    height: 0.9rem;
    box-shadow: 0.01rem 0.02rem 0.04rem 0rem rgba(0, 0, 0, 0.06);
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(254, 114, 104, 1);
    line-height: 0.9rem;
    padding-left: 0.3rem;
  }
}
</style>
