<template>
  <div class="user">
    <div class="top">
      <div class="headimg">
          <slot name="userImg" class="portrait"></slot>  
      </div>
      <slot name="userName" class="topname"></slot>
      <div class="space"></div>
      <div class="attention">已关注</div>
    </div>
    <div class="bottom">
      <slot name="coverImg" class="cover"></slot>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {

};
</script>
<style scoped lang='scss'>
.user {
  width: 100%;
  background: white;
  .top {
    width: 100%;
    height: 1.1rem;
    display: flex;
    align-items: center;
    .headimg {
      width: 0.68rem;
      height: 0.68rem;
      border-radius: 50%;
      margin-left: 0.32rem;
      .portrait {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .topname {
      margin-left: 0.19rem;
      height: 0.28rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(13, 13, 12, 1);
    }
    .space {
      flex: 1;
    }
    .attention {
      width: 2.08rem;
      height: 0.54rem;
      background: rgba(196, 212, 44, 1);
      border-radius: 0.27rem;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 0.54rem;
      text-align: center;
      margin-right: 0.32rem;
    }
  }
  .bottom{
      width: 100%;
      height: 8.56rem;
      .cover{
          width: 100%;
          height: 100%;
      }
  }
}
</style>