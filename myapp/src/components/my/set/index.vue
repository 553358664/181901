<template>
    <div class="Setset">
        <div class="Sethead">
            <router-link to="my" class="Setback">
                <div><img src="../../../assets/my/yq/icon_wd_jt@2x.png"></div>
            </router-link>
            <div class="Settitle">设置</div>
            <div></div>
        </div>
        <div class="SetmyList">
            <ul>
                <li>
                    <div class="Setlistleft">开启位置</div>
                    <div class="Setlistright"> <Switch-com v-model="flag"></Switch-com> </div>
                </li>
                <router-link to="updatepw">
                <li>
                    <div class="Setlistleft">账号与安全</div>
                    <div class="Setlistright">
                        <img src="../../../assets/my/yq/icon_grxx_jt @3x.png">
                    </div>
                </li>
                </router-link>
                <router-link to="opinion">
                <li>
                    <div class="Setlistleft">意见反馈</div>
                    <div class="Setlistright">
                        <img src="../../../assets/my/yq/icon_grxx_jt @3x.png">
                    </div>
                </li>
                </router-link>
                <li @click="handdle()">
                    <div class="Setlistleft">检查更新</div>
                    <div class="Setlistright">花7 1.0</div>
                </li>
            </ul>
        </div>
        <router-link to="/"><div class="quit" v-show="username!==''?testing:!testing">退出当前账号</div></router-link>
        <router-link to="/login"><div class="testlogin"  v-show="username==''?testing:!testing">请登录</div></router-link>
    </div>
</template>


<script>
import Vue from 'vue';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
import { Switch,Toast } from 'mint-ui';
Vue.component("Switch-com", Switch);
export default {
    created(){
       let  arr=JSON.parse(localStorage.getItem("username"));
       console.log(arr);
       if(arr){
           this.username=arr;
       }else{
           this.username=""
       }
    },
    data(){
        return{
            flag:true,
             testing:"true",
            username:""
        }
    },
    methods:{
        handdle(){
            Toast({
                message:"嘤嘤嘤~ 已是最新版本哦 QAQ~~",
                duration: 3000
            })
        }
    }
}
</script>


<style lang="scss" scoped>
    .Setset{
        width: 100%;
        height:100%;
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
    .SetmyList{
        width: 100%;
        height:7.16rem;
        padding: .32rem .64rem;       
    }
    .SetmyList>ul{
        width: 100%;
        height: 100%;
    }
    .SetmyList>ul,.myList>ul>li{
        width:100%;
        height:1rem;
        line-height: 1rem;
        border-bottom: 1px solid #E2E2E2;
    }
    .SetmyList ul li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:.28rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(44,44,44,1);
        .listright{
            img{
                width: .24rem;
                height: .24rem;
            }
        }
    }
    .quit,.testlogin{
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