<template>
  <div class="friendsOuter" ref="out">
    <div class="friends wrapper" ref="homeWrapper">     
      <ul class="content friendsUl">   
        <li class="friendsLi" v-for="(item,index) in article" :key="index">
          <router-link :to="{name:'searchArticle'}">
          <div class="friendsImg" @click="handleSearchAt(item.articleId)">
            <img :src="item.articleCover" alt>
          </div>
          </router-link>
          <div class="friendsBox">
            <p class="friendsP">{{item.articleTitle}}</p>
            <div class="friendsUser">
              <div class="uerImg">
                <img :src="item.userPhoto" alt>
              </div>
              <p class="userName">{{item.userName}}</p>
              <div class="userPraise">
                <div class="praiseImg" @click="handlePraiseF({articleId:item.articleId,userId:userId})">
                  <img
                    src="../../../../assets\community\qiu/content_icon-like2.png"
                    alt
                    v-if="item.praiseShow"
                  >
                  <img src="../../../../assets\community\qiu\content_icon_like.png" alt v-else>
                </div>
                <span class="praiseNum">{{item.praiseCount}}</span>
              </div>
            </div>
          </div>
        </li>        
      </ul>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    created(){
        // this.handleArticle()
    },
  computed: {
    //获取花友圈的数据
    ...Vuex.mapState({
      article: state => state.community.articleListA,
      userId:state => state.community.userId,
      yn:state => state.community.yn
    })
  },
  watch: {
    article(newVal,oldVal){
      this.scroll.finishPullUp();
      this.scroll.refresh();
    },
    yn(newVal,oldVal){     
      if(newVal>=0){
        return
      }
      else{
        this.$router.push("/register")
      }
    }
  },
  data() {
    return {
      flag: true
    };
  },
  methods: {
    ...Vuex.mapActions({
      handleArticle: "community/handleArticle",
      handlePraiseF: "community/handlePraiseF",
      handleGoodsUpdate:"community/handleGoodsUpdate",
      handleSearchAt:"community/handleSearchAt"
    })
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.homeWrapper, {
        click: true,
        pullUpLoad: true,
        hasVerticalScroll: true,
        probeType:2
      });
    }
    this.scroll.on("pullingUp", () => {
      this.u();
    });
  }
};
</script>
<style scoped lang="scss">
.friendsOuter {
  height: 100%;
}
.friends {
  background: #eeeeee;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .friendsUl {
    overflow: hidden;
    zoom: 1;
    padding-bottom: 3rem;
    .friendsLi {
      margin: 1% 0 0 1%;
      width: 48%;
      float: left;
      .friendsImg {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .friendsBox {
        width: 100%;
        height: 1.74rem;
        background: rgba(252, 252, 250, 1);
        border-radius: 0px 0px 10px 10px;
        .friendsP {
          margin-left: 5.8%;
          padding-top: 2.64%;
          width: 79.9%;
          height: 0.75rem;
          font-size: 0.26rem;
          font-family: PingFang-SC-Medium;
          font-weight: 50;
          color: rgba(13, 13, 12, 1);
          line-height: 0.39rem;
        }
        .friendsUser {
          padding-left: 5.8%;
          padding-top: 10.64%;
          height: 0.87rem;
          .uerImg {
            float: left;
            margin-right: 0.1rem;
            img {
              widows: 0.31rem;
              height: 0.27rem;
            }
          }
          .userName {
            float: left;
            font-size: 0.2rem;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: rgba(43, 43, 41, 1);
          }
          .userPraise {
            float: right;
            margin-right: 0.32rem;
            display: flex;
            justify-content: center;
            img {
              width: 0.31rem;
              height: 0.27rem;
            }
            .praiseNum {
              margin-left: 0.1rem;
              font-size: 0.2rem;
              font-family: PingFang-SC-Regular;
              font-weight: 400;
              color: rgba(43, 43, 41, 1);
            }
          }
        }
      }
    }
  }
}
</style>
