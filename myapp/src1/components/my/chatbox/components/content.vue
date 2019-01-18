<template>
  <div class="wrapper">
    <ul class="content">
      <li v-for="(item,index) in messageList">
        <!-- <img :src="headPic"/> -->
        <img
          :src="(item.isSelf?'headPic':'headPic')"
          :class="'img'+(item.isSelf?'right':'left')">
        
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
export default {
  data() {
    return {
      //输入数据，双向绑定
      inputVal: "",
      //聊天窗口的内容
      messageList: [],
      headPic: require("@/assets/my/wd_fs_tx1@2x.png"),
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
        // //接入图灵机器人接口
        // axios({
        //     method: "post",
        //     url:"api/openapi/api/v2",
        //     data: {
        //         "perception": {
        //             "inputText": {
        //             "text": "附近的酒店"
        //             },
        //             "userInfo": {
        //             "apiKey": "430a4686bbbb417f891a24ccf16728ca"
        //             }
        //         }
        //     }
        // }).then(data => {
        //     console.log(data);
        // });
        this.inputVal = ""; //最后清除文本框
        }
      }
    };
</script>

<style lang="scss" scoped>
.content {
  font-size: 0.22rem;
  width: 100%;
  height: 100%;
  padding: 0.24rem;
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
}

.content li img.imgright {
  float: right;
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


