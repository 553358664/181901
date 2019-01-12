// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
//拖拽组件
// import VueDnd from "awe-dnd"
//修改全局mint-ui的scss文件
import "./common/css/my-mint.scss";
import axios from "axios"
import "./common/css/reset.css";
import "./common/css/iconfont/iconfont.css";
import "../node_modules/swiper/dist/css/swiper.min.css";
import "./common/js/flexble";
//请求的拦截
axios.interceptors.request.use((config)=>{
  if(config.method == "post"){
    config.data = qs.stringify(config.data);
    
  }
  return config;
})

//响应的拦截
axios.interceptors.response.use((res)=>{
  if(res.status){
    return res.data
  }
})
// import "../node_modules/touchjs/dist/touch-0.2.14.js"
Vue.config.productionTip = false
// Vue.use(VueDnd)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
