<template>
    <div class="Setset">
        <div class="Sethead">
            <router-link to="myset" class="Setback">
                <div><img src="../../../assets/my/yq/icon_wd_jt@2x.png"></div>
            </router-link>
            <div class="Settitle">意见反馈</div>
            <div></div>
        </div>
        <div class="addOpinion">
            <textarea class="text" placeholder="请输入遇到的问题或建议. . ."></textarea>
        </div>
        <div class="telnum">
            <div>联系电话</div>
            <input type="text" placeholder="选填，便于我们联系你">
        </div>
        <router-link to="/"><div class="quit">提交</div></router-link>
    </div>
</template>


<script>
// export default {
//     data(){
//   }
// }
</script>

<style lang="scss" scoped>
    .Setset{
        width: 100%;
        height:100%;
        background:#f7f7f7;
        .Sethead{
            padding: 0 .64rem;
            height: .88rem;
            font-size:.32rem;
            background: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .Settitle{
                font-family:PingFang-SC-Medium;
                font-weight:bold;
                color:rgba(10,10,10,1);             
            }
        }
    }
    .Setmintui-back{
        color:yellow;
        font-size:.32rem;
    }
    .addOpinion{
        margin-bottom: .19rem;
        background: white;
        .text{
            width: 100%;
            padding: 0.6rem .64rem;
            font-size:.28rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(92,92,92,1);
            min-height: 3rem;
            border: none;
            outline: none;
        }
    }
    .telnum{
        width: 100%;
        padding:0 0.64rem;
        background: white;
        height: .9rem;
        display: flex;
        align-items: center;
        >div{
            font-size:.28rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(44,44,44,1);
        }
        >input{
            margin-left: 1.1rem;
            border: none;
            outline: none;
            font-size:.28rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(144,144,144,1);
        }
    }
    .quit{
        width: 100%;
        height: .98rem;
        background:rgba(244,76,54,1);
        font-size:32px;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(255,254,254,1);
        line-height: .98rem;
        text-align: center;
        position:fixed;
        bottom: 0;
    }
</style>