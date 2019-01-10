<template>
  <div class="friendsOuter" ref="out">
    <router-link :to="{name:publish}">
      <img src="../../../../assets/community/qiu/hover.png" class="friendsPoint" v-drap="flag">
    </router-link>
    <div class="friends wrapper" ref="homeWrapper">
      <ul class="content friendsUl">
        <li class="friendsLi">
          <div class="friendsImg">
            <img src="../../../../assets/community/qiu/img_1.png" alt>
          </div>
          <div class="friendsBox">
            <p class="friendsP">以爱之名—紫色爱丽丝，愿你收获希望和</p>
            <div class="friendsUser">
              <div class="uerImg">
                <img src="../../../../assets\community\qiu\content_icon-like2.png" alt>
              </div>
              <p class="userName">啊哈</p>
              <p class="userPraise">
                <img src="../../../../assets\community\qiu\content_icon-like2.png" alt>
                <span class="praiseNum">9999</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
// import Vue from "vue";
import Vuex from "vuex";
import BScroll from "better-scroll";
// import { Header } from "mint-ui";
// Vue.component(Header.name, Header);
// import "mint-ui/lib/style.css";
export default {
  created() {
    //请求花友圈中的文章数据
    //    this.handleArticle()

  },
  directives: {
    drap(el, { val }) {
      el.addEventListener("touchstart", function(e) {         
        let disX = e.targetTouches[0].clientX - el.offsetLeft;
        let disY = e.targetTouches[0].clientY - el.offsetTop;
        function handleMove(e) {
          let x = e.targetTouches[0].clientX - disX;
          let y = e.targetTouches[0].clientY - disY;
          el.style.left = x/100 + "rem";
          el.style.top = y/100 + "rem";
        }
        document.addEventListener("touchmove", handleMove);
        
        document.addEventListener("touchend", function() {
          document.removeEventListener("touchmove", handleMove);
        });
      });
    }
  },
  computed: {
    //获得花友圈中的文章数据
    ...Vuex.mapState({
      article: state => state.community.articleList
    })
  },
  data() {
    return {
      publish: "publish",
      flag: true
    };
  },
  methods: {
    ...Vuex.mapActions({
      handleArticle: "community/handleArticle"
    })
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.homeWrapper, {
      click: true,
      pullUpLoad: true,
      hasVerticalScroll: true
    });
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
          width: 78.9%;
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
