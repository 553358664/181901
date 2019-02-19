<template>
  <div class="exit">
    <ul class="exitcontent">
      <li v-for="(item,index) in attention">
        <User-com>
          <img class="portrait" slot="userImg" :src="item.userImg">
          <span  class="topname" slot="userName">{{item.userName}}</span>
          <img  class="cover" slot="coverImg" :src="item.coverImg">
        </User-com>
        <Article-com>
          <span class="describe1span" slot="content">{{item.content}}</span>
          <span class="fabulousnum" slot="Fabulous">{{item.Fabulous}}</span>
          <span class="collectionnum" slot="Collection">{{item.Collection}}</span>
          <span class="commentnum" slot="Forward">{{item.Forward}}</span>
          <span class="commenter" slot="commenter1">{{item.comment[0].name}}:</span>
          <span class="content" slot="comment1">{{item.comment[0].cctent}}</span>
          <span class="commenter" slot="commenter2">{{item.comment[1].name}}:</span>
          <span class="content" slot="comment2">{{item.comment[1].cctent}}</span>
          <span class="commenter" slot="commenter3">{{item.comment[2].name}}:</span>
          <span class="content" slot="comment3">{{item.comment[2].cctent}}</span>
          <span class="data" slot="createTime1">{{item.createTime1}}</span>
          <span class="data" slot="createTime2">{{item.createTime2}}</span>
        </Article-com>
      </li>
    </ul>
  </div>
</template>
                                                   
<script>
import axios from "axios";
import Vuex from "vuex";
import User from "./components/user";
import Article from "./components/article";
export default {
  computed: {
    ...Vuex.mapState({
        //相关关注内容
        attention:state=>state.community.attention
    })
  },
  components: {
    "User-com": User,
    "Article-com": Article
  },
  created(){
    this.handleattention();
  },
  methods:{
    ...Vuex.mapActions({
      handleattention:"community/attentionList"
    })
  }
};
</script>
<style lang="scss" scoped>
.exit {
  padding-bottom:2.7rem;
  .exitcontent {
    margin: 0.05rem 0;
    li{
      margin:.1rem 0;
    }
  }
}

</style>