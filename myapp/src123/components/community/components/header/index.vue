<template>
  <div class="fs">
    <!-- 功能区 -->
    <div class="header">
      <div class="top">
        <ul>
          <li v-for="(item,index) in navs" :key="index">
            <router-link :to="{name:item.name}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="search">
        <router-link :to="{name:search}">
          <input type="text" class="search-input" value="大家都在看“烈焰柔情一品红”" @click="handleS()">
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      navs: [
        {
          name: "attention",
          title: "关注"
        },
        {
          name: "friends",
          title: "花友圈"
        },
        {
          name: "nearby",
          title: "附近"
        }
      ],
      search: "search",
      flag: true
    };
  },
  methods: {
    handleS() {

      // localStorage.age="songyuhua");
      // localStorage.setItem("adr","songyuhua");
      // localStorage.setItem("ooo","songyuhua");

      // Cookies.set("userName","zhang");
    }
  }
};
</script>

<style scoped lang="scss">
$color: #fcfcfa;
.fs {
  width: 100%;
  height: 100%;
  background: $color;
  .header {
    height: 1.78rem;
    box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.06);
    .top {
      height: 0.87rem;
      width: 3.3rem;
      margin: 0 auto;
      padding-top: 0.39rem;
      ul {
        height: 0.48rem;
        display: flex;
        justify-content: space-between;
        li {
          font-size: 0.32rem;
          a {
            display: block;
            height: 0.48rem;
          }
          .router-link-active {
            color: #0a0a0a;
            font-weight: bold;
            border-bottom: 0.05rem solid #f44c36;
          }
        }
      }
    }
    .search {
      width: 7.04rem;
      height: 0.76rem;
      margin: 0.2rem auto;
      padding-bottom: 0.12rem;
      .search-input {
        width: 100%;
        height: 0.64rem;
        background: rgba(238, 238, 238, 1);
        border-radius: 0.32rem;
        border: 0;
        padding-left: 0.3rem;
        text-align: center;
        font-size: 0.26rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(10, 10, 10, 1);
        opacity: 0.8;
      }
    }
  }
}
</style>
