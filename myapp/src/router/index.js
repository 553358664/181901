import Vue from 'vue'
import Router from 'vue-router'
import community from "../components/community";
import My from "../components/my";
import sMall from "../components/small";
import sCar from "../components/scar";

<<<<<<< HEAD
import Attention from"../components/community/components/attention";
import Friends from"../components/community/components/friends";
import Nearby from"../components/community/components/nearby";

=======
//my二级页面路由
import PersonalInfo from "../components/my/personalInfo";
import Follow from "../components/my/follow"
>>>>>>> liuna

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
