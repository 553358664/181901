// import Vue from 'vue'
// import Router from 'vue-router'
import community from "../../components/community";
//1.社区的二及页面
//关注
import Attention from"../../components/community/components/attention";
//花友圈
import Friends from"../../components/community/components/friends";
//附近
import Nearby from"../../components/community/components/nearby";
//查找
import Search from"../../components/community/components/search";
// Vue.use(Router)
export default(
    [
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
      }
   ] 
)