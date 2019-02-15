<template>
  <div class="searchList">
    <router-link :to="{name:this.searchArticle}">
      <ul class="searchMain">       
        <li class="searchCentent" v-for="(item,index) in list" :key="index">
            {{item.articleTitle}}          
          </li>
      </ul>
    </router-link>
        <history-com/>   
        <hot-com/>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  created(){
    // console.log(this.list)
  },
  data(){
    return{
      searchArticle:"searchArticle"
    }
  },
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
    handleData(){
      
    }
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
