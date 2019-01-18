// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
//修改全局mint-ui的scss文件
import "./common/css/my-mint.scss";

import "./common/css/reset.css";
import "./common/css/iconfont/iconfont.css";
import "../node_modules/swiper/dist/css/swiper.min.css";
import "./common/js/flexble";
<<<<<<< HEAD
// import "../node_modules/touchjs/dist/touch-0.2.14.js"
// Vue.config.productionTip = false
// Vue.use(VueDnd)


=======
import "./mock";


Vue.config.productionTip = false

>>>>>>> 72220bf217cf8ddee7ec5b3d5037c864a13ce3e0

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
