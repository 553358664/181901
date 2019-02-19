<template>
    <div class="nearby wrapper" ref="homeWrapper">
        <ul class="content nearbyUl">
            
            <li class="nearbyLi" v-for="(item,index) in nearItems" :key="index">
                <router-link :to="{name:'searchArticle'}">
                <div class="nearbyImg" @click="handleSearch(item.articleId)">
                   <img :src="item.articleCover" alt=""> 
                </div> 
                </router-link>
                <div class="nearbyBox">
                    <p class="nearbyP">                      
                    {{item.articleTitle}}
                    </p>
                    <div class="nearbyUser">
                        <div class="uerImg">
                           <img :src="item.userPhoto" alt>
                        </div> 
                        <p class="userName">{{item.userName}}</p>  
                        <div class="userPraise">
                            <div class="praiseImg" @click="handlePraiseN(item.articleId,userId)">
                                <img
                                    src="../../../../assets\community\qiu/content_icon_like.png"
                                    alt
                                    v-if="item.praiseShow"
                                >
                                <img src="../../../../assets\community\qiu\content_icon-like2.png" alt v-else>
                            </div>
                            <span class="praiseNum">{{item.praiseCount}}</span>
                        </div>                     
                    </div>
                </div>            
            </li>
            
        </ul>
    </div>
</template>


<script>
import Vuex from "Vuex"
import BScroll from "better-scroll";
export default {
    created(){
       this.handleNearItems()
    },
    watch: {
    nearItems(newVal,oldVal){
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
    computed: {
    //获得附近中的文章数据
    ...Vuex.mapState({
        nearItems: state => state.community.nearItems,
        userId:state => state.community.userId,
        yn:state => state.community.yn
    })
  },
  methods:{
    ...Vuex.mapActions({
      handleNearItems: "community/handleNearItems",
      handleGoodsUpdate:"community/handleNearUpdate",
      handlePraiseN:"community/handlePraiseN"
    })
  },
  mounted(){
     if (!this.scroll) {
      this.scroll = new BScroll(this.$refs.homeWrapper, {
        click: true,
        pullUpLoad: true,
        hasVerticalScroll: true,
        probeType:2
      });
    }
    this.scroll.on("pullingUp", () => {
      this.handleGoodsUpdate();
    });
  }
}
</script>
<style scoped lang="scss">
.nearby{
    background:#EEEEEE;
    width:100%;
    height:100%;
    overflow:hidden;
   .nearbyUl{
        overflow: hidden;
        zoom:1;  
        padding-bottom:3.2rem; 
        .nearbyLi{
            margin:1% 0 0 1%;
            width:48%;
            float:left;
            .nearbyImg{
                width:100%;
                img{
                    width:100%;
                }
            }
        .nearbyBox{
                width:100%;
                height:1.74rem;
                background:rgba(252,252,250,1);
                border-radius:0px 0px 10px 10px;
                .nearbyP{
                    margin-left:5.8%;
                    padding-top:2.64%;
                    width:79.9%;
                    height:.75rem;
                    font-size:.26rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:50;
                    color:rgba(13,13,12,1);
                    line-height:.39rem;
                }
                .nearbyUser{
                    padding-left:5.8%;
                    padding-top:10.64%;
                    height:.87rem;
                    .uerImg{
                        float:left;
                        margin-right:.1rem;
                    }
                    .userName{
                        float:left;
                        font-size:.2rem;
                        font-family:PingFang-SC-Regular;
                        font-weight:400;
                        color:rgba(43,43,41,1);
                    }
                    .userPraise{
                        float:right;
                        margin-right:.32rem;
                        display: flex;
                        justify-content: center;
                            img {
                                width: 0.31rem;
                                height: 0.27rem;
                            }
                        .praiseNum{
                            margin-left:.1rem;
                            font-size:.20rem;
                            font-family:PingFang-SC-Regular;
                            font-weight:400;
                            color:rgba(43,43,41,1);
                        }
                    }
                }
            }
        }
    }
    
}
    

    
</style>
