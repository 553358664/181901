import Vue from 'vue'
import Router from 'vue-router'
import community from "../components/community";
import My from "../components/my";
import sMall from "../components/small";
import sCar from "../components/scar";

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
    }
  ]
})
