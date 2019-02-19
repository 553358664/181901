<template>
  <div class="article">
    <div class="describe1">
      <slot name="content" class="describe1span"></slot>  
    </div>
    <div class="describe2">
      <div class="fabulous">
        <div class="fabulousimg">
          <img src="../../../../../../assets/community/yq/btn_icon_like@2x.png">
        </div>
        <slot name="Fabulous" class="describe1span"></slot>  
      </div>
      <div class="collection">
        <div class="collectionimg">
          <img src="../../../../../../assets/community/yq/btn_icon_shoucang@2x.png">
        </div>
        <slot name="Collection" class="describe1span"></slot>  
      </div>
      <div class="comment">
        <div class="commentimg">
          <img src="../../../../../../assets/community/yq/btn_icon_pinglun@2x.png">
        </div>
        <slot name="Forward" class="describe1span"></slot>  
      </div>
    </div>
    <!-- 是否存在评论 -->
    <div class="exit" v-show="flag">
        <ul>
            <li>
              <slot name="commenter1" class="commenter"></slot>
              <slot name="comment1" class="content"></slot>
            </li>
            <li>
              <slot name="commenter2" class="commenter"></slot>
              <slot name="comment2" class="content"></slot>
            </li>
            <li>
              <slot name="commenter3" class="commenter"></slot>
              <slot name="comment3" class="content"></slot>
            </li>   
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
        <slot name="createTime1" class="data"></slot>
        <slot name="createTime2" class="data"></slot>
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
        margin: .15rem 0 .15rem .13rem
      }
      .commenter{
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