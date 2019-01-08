<template>
    <div class="noattention">
        <div class="naimg">
            <img src="../../../../../../assets/community/yq/kztai@2x.png"/>
        </div>
        <div class="nap1">还没有关注的人的分享哦</div>
        <div class="nap2">看看大家都在关注谁吧</div>
    </div>
</template>
                                                   
<script>
import Vuex from "vuex";
export default {
    
}
</script>
<style lang="scss" scoped>
    .noattention{
        margin-top: .05rem;
        width:100%;
        height:4.82rem;
        background:rgba(252,252,250,1);
        overflow: hidden;
        >div{
            margin:0 auto;
        }
        .naimg{
            margin-top: .82rem;
            width:1.68rem;
            height:.99rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .nap1{
            margin-top: .47rem;
            text-align: center;
            height:.3rem;
            font-size:.32rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(13,13,12,1);
        }
        .nap2{
            margin-top: .17rem;
            text-align: center;
            height:.27rem;
            font-size:.28rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(43,43,41,1);
        }

    }
</style>