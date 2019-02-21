<template>
  <div class="exit">
    <ul class="exitcontent">
      <li v-for="(item,index) in attention" :key="index">
        <User-com>
          <img class="portrait" slot="userImg" :src="item.usePhoto">
          <span  class="topname" slot="userName">{{item.userName}}</span>
          <img  class="cover" slot="coverImg" :src="item.articleCover">
        </User-com>
        <Article-com>
          <span class="describe1span" slot="content">{{item.articleContent}}</span>
          <span class="fabulousnum" slot="Fabulous">{{item.praiseCount}}</span>
          <span class="collectionnum" slot="Collection">{{item.collectCount}}</span>
          <span class="commentnum" slot="Forward">{{item.commentCount}}</span>
          <div v-for="(i,d) in item.commentList" :key="d">
            <span class="commenter" slot="commenter1">{{i.userName}}:</span>
            <span class="content" slot="comment1">{{i.articleContent}}</span>
          </div>
          <!-- <span class="data" slot="createTime1">{{item.createTime1}}</span>
          <span class="data" slot="createTime2">{{item.createTime2}}</span> -->
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