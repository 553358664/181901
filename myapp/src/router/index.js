import Vue from 'vue'
import Router from 'vue-router'
import community from "../components/community";
import My from "../components/my";
import sMall from "../components/small";
import sCar from "../components/scar";

import Attention from"../components/community/components/attention";
import Friends from"../components/community/components/friends";
import Nearby from"../components/community/components/nearby";


//一级页面
//1，社区
import community from "./community"
// import community from "../components/community";
// //2.我的
import My from "./my";
// import My from "../components/my";
//3.商城
import sMall from "./sMall"
// import sMall from "../components/small";
//4.购物车
import sCar from "./scar";
//5登陆注册
import regLog from "./regLog"

Vue.use(Router)

export default new Router({
  routes: [].concat(community,My,sMall,sCar,regLog)
})
