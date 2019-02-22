<template>
    <div class="publish">
        <!-- <img :src="pic" alt=""> -->
        <div class="seaHeader">
            <div class="publishImg">
                <img src="../../../../assets/community/qiu/back.png" alt="" @click="handleBack()" >
            </div>
            <p class="publishHeader" @click="handlepublishB()">
                发布</p>
        </div> 
        <div class="publishMain">
            <div contenteditable="true" class="publishTit" ref="title">{{publishTit}}</div>
            <div contenteditable="true" class="publishInp" ref="content">{{publishMain}}</div>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Toast } from 'mint-ui';
Vue.use(Mint);
    export default {
        data(){
            return{
                publishMain:"请输入",
                publishTit:"标题",
                userId:""
            }
        },
        methods:{
            ...Vuex.mapActions({
                handlepublish:"community/handlepublish"
            }),
            handleBack(){
                this.$router.back()
            },
            handlepublishB(){
                this.userId = localStorage.getItem("userId")
                this.handlepublish({title:this.$refs.title.innerHTML,content:this.$refs.content.innerHTML,userId:this.userId})                            
            },
        },
        computed:{
            ...Vuex.mapState({
                yn:state => state.community.yn,
                code:state => state.community.publishCode
            })
        },
        watch:{
            yn(newVal,oldVal){     
                if(newVal>=0){
                    return
                }
                else{
                    this.$router.push("/register")
                }
            },
            code(newVal,oldVal){
                if(newVal>=0){
                    Toast({
                        message:"已上传",
                        duration: 3000
                    })
                    this.$router.back()
                }else{
                     Toast({
                        message:"上传失败",
                        duration: 3000
                    })
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .publish{
        background:#FCFCFA;
        height:100%;
        .seaHeader{
            padding:0 4%;
            width:100%;
            height:1.02rem;
            display: flex;
            justify-content: space-between;
            align-items:center;
            box-shadow:.01rem .02rem .04rem 0rem rgba(0, 0, 0, 0.06);
            .publishImg{
                img{
                width:.22rem;
                height:.44rem;
                }
            }
            .publishText{
                width:5.45REM;
                height:.64rem;
            
            }
            .publishHeader{
                width:auto;
                height:.32rem;
                font-size:.32rem;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                color:rgba(7,7,7,1);
                margin-bottom:.13rem;
                margin-right:.12rem;
            }
        }
        .publishMain{
            height:100%;
            .publishTit{
                height:.7rem;
                border-bottom:1px solid rgba(7,7,7,1) ;
                font-family:PingFang-SC-Bold;
                font-weight:bold;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size:.32rem;
            }
            .publishInp{
                overflow:auto;
                border:0;
                min-height:18.7%;
                max-height:45%;
                width:100%;
                resize:none;
                background:#FCFCFA;
                padding:.3rem;
                font-size:.32rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(10,10,10,1);
                opacity:0.8;
            }
            .publichAdd{
                .pub-left{
                    float:left;
                    margin-left:.3rem;
                } 
                .publishPer{
                    width:2.2rem;
                    height:2.2rem;
                }               
               .publichAdd-son{
                   position: relative;
                   width:2.2rem;
                    height:2.2rem;
                    border:2px solid rgba(215,215,215,1);
                    .publichAdd-img{
                        position: absolute;
                        top:.6rem;
                        left:.6rem;
                    }
               } 
            }
        }
    }
    
</style>
