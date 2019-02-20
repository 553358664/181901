<template>
  <div class="wrapper" ref="newsWrapper">
    <ul class="content ful">
      <li v-for="(item,index) in myList">
        <mt-cell-swipe  :right="delButton">
          <router-link :to="{name:router}">
            <span class="headpic">
              <img :src="item.headPic">
            </span>
          </router-link>
          <p>
            <span class="username">{{item.username}}</span>
            <span class="speak">{{item.speak}}</span>
          </p>
        </mt-cell-swipe>
        <!-- <div class="line"></div> -->
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue"
import Vuex from "vuex";
import BScroll from "better-scroll";
// 引入全部组件 
import Mint from 'mint-ui'; 
import 'mint-ui/lib/style.css'
Vue.use(Mint); 
// 按需引入部分组件 
import { CellSwipe } from 'mint-ui'; 
Vue.component(CellSwipe.name, CellSwipe);

export default {
    mounted(){
        this.scroll = new BScroll(this.$refs.newsWrapper,{
            scrollY:true,
            click:true
        })
        console.log(this.scroll);
    },
    created(){
        this.$store.dispatch("my/handleGet")
         this.delButton = [        
             {          
                content: '删除',style: { background: 'red', color: '#fff' },          
                handler: () => this.$messagebox('确认要删除此条消息和聊天记录吗？')       
             }     
              ];

    },
    computed:{
        ...Vuex.mapState({
            myList:state=>state.my.myList
        })
    },
    data(){
         return {  
             router:'chatbox',     
        }
    }
}
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
  padding: 0 0.24rem;
  width: 100%;
  height: max-content;
  background: #fcfcfa;
}
.wrapper > .content > li {
  width: 100%;
  height: 1.6rem;
    .headpic {
      float: left;
      margin-top: 0.1rem;
      margin-right:.4rem;
    }
    p {
      width: 85%;
      float: right;
      .username {
        display: block;
        color: #0a0a0a;
        font-size: 0.32rem;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      .speak {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #96969a;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.26rem;
      }
  }
  .line {
    height: 0.02rem;
    width: 85%;
    float: right;
    background: #eeeeee;
    margin-bottom: 0;
  }
}
</style>


