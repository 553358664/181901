import Vue from 'vue'
import Router from 'vue-router'
import community from "../components/community";
import My from "../components/my";
import sMall from "../components/small";
import sCar from "../components/scar";

//王金利 商城 调试路由
import jxhq from "../components/small/wang/jxhq";
import hccs from "../components/small/wang/hccs";
import hcyh from "../components/small/wang/hcyh";
import xptj from "../components/small/wang/xptj";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/community"
    },
    {
      path:"/community",
      name:"community",
      component:community,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
      path:"/small",
      name:"small",
      component:sMall,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    {
      path:"/scar",
      name:"scar",
      component:sCar,
      meta:{
        flag:true,
        requireAuth:true
      }
    },
    
    
    //王金利 商城 调试路由
    {
    	path:"/jxhq",
    	component:jxhq,
    	name:"jxhq",
    	meta:{
        flag:false,
        requireAuth:true
      }
    },
    {
    	path:"/hccs",
    	component:hccs,
    	name:"hccs"
    },
     {
    	path:"/hcyh",
    	component:hcyh,
    	name:"hcyh"
    },
    {
    	path:"/xptj",
    	component:xptj,
    	name:"xptj"
    }
  ]
})
