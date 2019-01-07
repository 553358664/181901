import Vue from 'vue'
import Router from 'vue-router'
import community from "../components/community";
import My from "../components/my";
import sMall from "../components/small";
import sCar from "../components/scar";

//my二级页面路由
import PersonalInfo from "../components/my/personalInfo";
import Follow from "../components/my/follow"

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
