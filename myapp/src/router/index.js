import Vue from 'vue'
import Router from 'vue-router'
import community from "../components/community";
import My from "../components/my";
import sMall from "../components/small";
import sCar from "../components/scar";

import Attention from"../components/community/components/attention";
import Friends from"../components/community/components/friends";
import Nearby from"../components/community/components/nearby";

//my部分的二级页面路由
//个人信息 关注 粉丝 收藏 草稿 
import PersonalInfo from "../components/my/personalInfo";
import Follow from "../components/my/follow";
import Fans from "../components/my/fans";
import Collection from "../components/my/collection";
import Details from "../components/my/details"

Vue.use(Router)

export default new Router({
  routes: [
    //社区的路由默认为花友圈
    {
      path: '/',
      redirect:"/community"
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
          component:Attention
        },
        {
          path:"friends",
          name:"friends",
          component:Friends
        },
        {
          path:"nearby",
          name:"nearby",
          component:Nearby
        }
      ]
    },
    //my路由
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        flag:true,
        requireAuth:true
      }  
    },
      //my部分的二级页面路由
      {
        path:"personalInfo",
        name:"personalInfo",
        component:PersonalInfo
      },
      {
        path:"follow",
        name:"follow",
        component:Follow
      },
      {
        path:"fans",
        name:"fans",
        component:Fans
      },
      {
        path:"collection",
        name:"collection",
        component:Collection
      },
      //my部分的三级级页面路由：详细信息
      {
        path:"details",
        name:"details",
        component:Details
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
    

  ]
})
