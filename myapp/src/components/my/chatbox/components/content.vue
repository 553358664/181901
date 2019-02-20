<template>
  <div class="wrapper" ref="newsWrapper">
    <ul class="content">
      <li v-for="(item,index) in messageList">
        <!-- <img :src="headPic"/> -->
        <img
          :src="item.isSelf ? headPic:AI"
          :class="'img'+(item.isSelf ? 'right':'left')">
        
        <span :class="'span'+(item.isSelf?'right':'left')">{{item.message}}</span>
      </li>
    </ul>
    <div class="footer">
      <input type="text" v-model="inputVal" @keyup.enter="handleSend">
      <button @click="handleSend">发送</button>
    </div>
  </div>
</template>

<script>
/*
    一.定义聊天信息数组格式 
    二.获取自己输入内容,将内容渲染到页面
    三.获取机器人接口内容,也将内容渲染到页面                 
*/

import axios from "axios";
import Vue from "vue"
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  mounted(){
        this.scroll = new BScroll(this.$refs.newsWrapper,{
            scrollY:true,
            click:true
        })
        console.log(this.scroll);
    },
  data() {
    return {
      //输入数据，双向绑定
      inputVal: "",
      //聊天窗口的内容
      messageList: [],
      headPic: require("@/assets/my/wd_fs_tx1@2x.png"),
      AI:require("@/assets/my/qiuqiu.png"),
      data: {}
    };
  },
  methods: {
    handleSend() {
      // 二.获取自己输入内容,将内容渲染到页面
      this.messageList.push({
        message: this.inputVal,
        isSelf: true
      });
        //接入图灵机器人接口
        axios({
            method: "post",
            url:"/chat/openapi/api?key=430a4686bbbb417f891a24ccf16728ca&userid=1&info="+this.inputVal,
            // url:"/chat/openapi/api",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
                },
            // data:{
            //         "userid":"1",//添加id,实现上下文连贯
            //         "apikey":"2465e182e4154777a3a02da0ccaa6c88",
            //         "info":this.inputVal
            //     }
        }).then(data => {
            console.log(this.inputVal);
            // 三.获取机器人接口内容,也将内容渲染到页面
                            this.messageList.push({
                                message:data.data.text,
                                isSelf:false
                            })
        });
        this.inputVal = ""; //最后清除文本框
        }
      }
    };
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: #fcfcfa;
  font-size: 0.3rem;
  position: fixed;
  top: 1.1rem;
}
.wrapper > .content {
  font-size: 0.22rem;
  padding: 0 0.24rem;
  width: 100%;
  height: max-content;
  background: #fcfcfa;
}

.content > li {
  margin-top: 0.2rem;
  width: 100%;
  display: block;
  clear: both;
  overflow: hidden;
}

.content > li > img {
  float: left;
}

.content > li > span {
  background: #f44c36;
  padding: 0.3rem;
  border-radius: 0.2rem;
  float: left;
}

.content li img.imgleft {
  float: left;
  width:.6rem;
  height:.6rem;
  margin-right: .2rem;
}

.content li img.imgright {
  float: right;
  width:.6rem;
  height:.6rem;
  margin-left: .2rem;
}

.content li span.spanleft {
  float: left;
  background: #fff;
}

.content li span.spanright {
  float: right;
  background: #f44c36;
}

.footer {
  width: 100%;
  height: 1.04rem;
  background: #fcfcfa;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer > input {
  width: 5.54rem;
  height: 0.6rem;
  outline: none;
  border-radius: 0.3rem;
  font-size: 0.26rem;
}

.footer > button {
  display: inline-block;
  width: 1.2rem;
  height: 0.6rem;
  background: #fcfcfa;
  line-height: 0.6rem;
  outline: none;
  font-size: 0.26rem;
  cursor: pointer;
  text-align: center;
  border-radius: 0.1rem;
}
</style>


