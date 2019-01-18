<template>
  <div class="article">
    <div class="describe1">
      <span class="describe1span">看我做的最火辣的花束，热烈奔放，秀色可餐，颜值爆表</span>
    </div>
    <div class="describe2">
      <div class="fabulous">
        <div class="fabulousimg">
          <img src="../../../../../../assets/community/yq/btn_icon_like@2x.png">
        </div>
        <span class="fabulousnum">9999</span>
      </div>
      <div class="collection">
        <div class="collectionimg">
          <img src="../../../../../../assets/community/yq/btn_icon_shoucang@2x.png">
        </div>
        <span class="collectionnum">9999</span>
      </div>
      <div class="comment">
        <div class="commentimg">
          <img src="../../../../../../assets/community/yq/btn_icon_pinglun@2x.png">
        </div>
        <span class="commentnum">9999</span>
      </div>
    </div>
    <!-- 是否存在评论 -->
    <div class="exit" v-show="flag">
        <ul>
            <li><span class="commenter">八阿哥：</span><span class="content">小哥哥菊花不会痛吗</span></li>
            <li><span class="commenter">齐德龙东强：</span><span class="content">一楼你知道的太多了</span></li>
            <li class="more">查看更多评论</li>
        </ul>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="leftimg">
          <img src="../../../../../../assets/community/yq/btn_icon_shuxie@2x.png">
        </div>
        <div class="writecomment">写点评论</div>
      </div>
      <div class="right">
        <span class="data">12-12</span>
        <span class="time">12:12</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      flag:true,
    };
  }
};
</script>

<style scoped lang='scss'>
.article {
  background: white;
  .describe1 {
    width: 6.42rem;
    height: 0.75rem;
    margin: 0 auto;
        .describe1span{
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(13, 13, 12, 1);
        line-height: 0.48rem;
        }
  }
  .describe2{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 1rem;
      width: 6.66rem;
      margin: 0 auto;
      >div{
        display: flex;
        >span{
          align-self: flex-start;
          width:56px;
          height:19px;
          font-size:24px;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(93,93,92,1);
        }
      }
      .fabulous{
        margin-right: .3rem;
      }
      .collection{
        margin-right: .3rem;
      }
  }
  .exit{
    width:6.66rem;
    margin: 0 auto;
    background:rgba(236,236,236,1);
    border-radius:10px;
    >ul{
      display: flex;
      flex-wrap: wrap;
      >li{
        width: 100%;
        height: .23rem;
        margin: .15rem 0 .15rem .13rem
      }
      .commenter{
        height:.23rem;
        font-size:.24rem;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(13,13,12,1);
      }
      .content,.more{
        height:.23rem;
        font-size:.24rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(93,93,92,1);
      }
    }
  }
  .bottom{
    display: flex;
    height: 1.4rem;
    justify-content: space-between;
    align-items: center;
    width: 6.66rem;
    margin:0 auto;
    font-size:24px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(93,93,92,1);
    .left{
      display: flex;
      .leftimg{
        width: .26rem;
        height:.36rem;
        >img{
          width: 100%;
          height: 100%;
        }
      }
      .writecomment{
        margin-left: .1rem;
      }
    }
  }
}
</style>