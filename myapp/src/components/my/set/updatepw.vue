<template>
    <div class="Setset">
        <div class="Sethead">
            <router-link to="myset" class="Setback">
                <div><img src="../../../assets/my/yq/icon_wd_jt@2x.png"></div>
            </router-link>
            <div class="Settitle">账号与安全</div>
            <div></div>
        </div>
        <div class="telnum">
            <div>请输入当前登录密码</div>
            <input type="password" placeholder="请输入当前登录密码">
        </div>
        <div class="telnum">
            <div>确认新密码</div>
            <input type="password" placeholder="确认新密码">
        </div>
        <div class="footer">
            必须是6-20个英文字母、数字或符号(除空格)，且字母、数字 和标点符号至少包含两种
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
            margin-left:.5rem;
            border: none;
            outline: none;
            font-size:.28rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(144,144,144,1);
        }
    }
    .telnum,.footer{
        margin: .1rem 0
    }
    .footer{
        width: 100%;
        padding:0 0.64rem;
        font-size:.24rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(87,87,87,1);
        line-height:.36rem;
    }
    .quit{
        width: 100%;
        height: .98rem;
        background:rgba(244,76,54,1);
        font-size:.32rem;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(255,254,254,1);
        line-height: .98rem;
        text-align: center;
        position:fixed;
        bottom: 0;
    }
</style>