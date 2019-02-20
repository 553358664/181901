<template>
  <div class="draftContent">
    <ul class="draftMain">
      <li class="draftList" v-for="(item,index) in list" :key="index" @click="handleDraft()">{{item.content}}</li>
    </ul>
  </div>
</template>
<script>

import Vuex from "vuex";
export default {
  created() {
    this.handleContent();
  },
  computed: {
    ...Vuex.mapState({
      list: state => state.Mydraft.list
    })
  },
  methods: {
    //请求数据
    ...Vuex.mapActions({
      handleContent: "Mydraft/handleContent"
    }),
    handleDraft(){
      
    }
  }
};
</script>
<style lang="scss">
.draftContent {
  width: 100%;
  padding-top: 0.98rem;
  .draftMain {
    width: 100%;
    .draftList {
      height: 0.98rem;
      background: #fff;
      border-bottom: 0.03rem solid #ccc;
      font-size: 0.36rem;
      font-family: PingFang-SC-Regular;
      line-height: 0.98rem;
      padding-left: 0.4rem;
    }
  }
}
</style>
