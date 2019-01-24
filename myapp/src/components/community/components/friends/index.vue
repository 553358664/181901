<template>
  <div class="friendsOuter" ref="out">
    <router-link :to="{name:this.publish}">
      <img src="../../../../assets/community/qiu/hover.png" class="friendsPoint" v-drap="this.flag">
    </router-link>
    <div class="friends wrapper" ref="homeWrapper">
      <ul class="content friendsUl">
        <li class="friendsLi" v-for="(item,index) in article" :key="index">
          <div class="friendsImg">
            <img :src="item.articleCover" alt>
          </div>
          <div class="friendsBox">
            <p class="friendsP">{{item.articleTitle}}</p>
            <div class="friendsUser">
              <div class="uerImg">
                <img src="../../../../assets\community\qiu\content_icon_like@2x.png" alt>
              </div>
              <p class="userName">{{item.username}}</p>
              <div class="userPraise">
                <div class="praiseImg" @click="handlePraise(item.artickeId,item.praise)">
                  <img
                    :src="item.userPhoto"
                    alt
                    v-if="item.show"
                  >
                  <img src="../../../../assets\community\qiu\content_icon_like@2x.png" alt v-else>
                </div>
                <span class="praiseNum">{{item.praise}}</span>
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
  created() {
    this.handleArticle();
  },
  computed: {
    //获取花友圈的数据
    ...Vuex.mapState({
      article: state => state.community.articleList
    })
  },

  directives: {
    //浮点的拖拽
    drap(el) {
      el.addEventListener("touchstart", function(e) {
        let disX = e.targetTouches[0].clientX - el.offsetLeft;
        let disY = e.targetTouches[0].clientY - el.offsetTop;
        function handleMove(e) {
          let x = e.targetTouches[0].clientX - disX;
          let y = e.targetTouches[0].clientY - disY;
          el.style.left = x + "px";
          el.style.top = y + "px";
        }
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("touchend", function() {
          document.removeEventListener("touchmove", handleMove);
        });
      });
    }
  },
  data() {
    return {
      publish: "publish",
      flag: true
    };
  },
  methods: {
    ...Vuex.mapActions({
      handleArticle: "community/handleArticle",
      handlePraise: "community/handlePraise"
    })
  },
  mounted() {
    if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.homeWrapper, {
        click: true,
        pullUpLoad: true,
        hasVerticalScroll: true
      });
    }
  }
};
</script>
<style scoped lang="scss">
.friendsOuter {
  height: 100%;
  .friendsPoint {
    z-index: 999;
    position: absolute; /*定位*/
    top: 50%;
    right: 0;
    height: 0.84rem;
    width: 0.84rem;
  }
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
    padding-bottom: 3.2rem;
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
