import Vue from 'vue'
import Router from 'vue-router'
//一级页面
//1，社区
import community from "../components/community";
//2.我的
import My from "../components/my";
//3.商城
import sMall from "../components/small";
//4。购物车
import sCar from "../components/scar";

//1.社区的二及页面
//关注
import Attention from"../components/community/components/attention";
//花友圈
import Friends from"../components/community/components/friends";
//附近
import Nearby from"../components/community/components/nearby";
//查找
import Search from"../components/community/components/search";

//my二级页面路由
import PersonalInfo from "../components/my/personalInfo";
import Follow from "../components/my/follow"

Vue.use(Router)

export default new Router({
  routes: [
    //社区的路由默认为花友圈
    {
      path: '/',
      redirect:"/community"
    },
    {
      path:'/search',
      name:'search',
      component:Search,
      meta:{
        flag:false
      }
    },
    {
      path:"/community",
      name:"community",
      component:community,
      redirect:'/community/friends',
      meta:{
        //是否拥有table栏
        flag:true,
        //是否需要登陆
        requireAuth:false
    },
      children:[

        {
          path:"attention",
          name:"attention",
          component:Attention,
          meta:{
            flag:true         
         }
        },
        {
          path:"friends",
          name:"friends",
          component:Friends,
          meta:{
             flag:true         
          }

        },
        {
          path:"nearby",
          name:"nearby",
          component:Nearby,
          meta:{
            flag:true         
         }
        }
      ]
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        flag:true,
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
    //my二级页面路由
    {
      path:"/personalInfo",
      name:"personalInfo",
      component:PersonalInfo
    },
    {
      path:"/follow",
      name:"follow",
      component:Follow
    }

  ]
})
