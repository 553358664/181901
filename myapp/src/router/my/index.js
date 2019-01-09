//my部分的二级页面路由
//个人信息 关注 粉丝 收藏 草稿 
import My from "../../components/my"
import PersonalInfo from "../../components/my/personalInfo";
import Follow from "../../components/my/follow";
//my部分的二级页面路由
//个人信息 关注 粉丝 收藏 草稿 
import Fans from "../../components/my/fans";
import Collection from "../../components/my/collection";

import Details from "../../components/my/details"
import sMall from "../../components/small"
import sCar from "../../components/scar"

//消息 文章 订单 好友 设置
import Mymessage from "../../components/my/message"
import Myarticle from "../../components/my/article"
import Myorder from "../../components/my/order"
import Myfriends from "../../components/my/friends"
import Myset from "../../components/my/set"

//订单下的子路由
import Nocomment from "../../components/my/order/components/nocomment.vue"
import Noreceive from "../../components/my/order/components/noreceive.vue"
import Nopaid from "../../components/my/order/components/nopaid.vue"
import Nosend from "../../components/my/order/components/nosend.vue"





export default (
  [
    //my路由
    {
      path: "/my",
      name: "my",
      component: My,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    //my部分的二级页面路由
    {
      path: "personalInfo",
      name: "personalInfo",
      component: PersonalInfo
    },
    {
      path: "/my",
      name: "my",
      component: My,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    //my部分的二级页面路由
    {
      path: "personalInfo",
      name: "personalInfo",
      component: PersonalInfo
    },
    {
      path: "follow",
      name: "follow",
      component: Follow
    },
    {
      path: "fans",
      name: "fans",
      component: Fans
    },
    {
      path: "collection",
      name: "collection",
      component: Collection
    },
    //my部分的三级级页面路由：详细信息
    {
      path: "details",
      name: "details",
      component: Details
    },

    {
      path: "/small",
      name: "small",
      component: sMall,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    {
      path: "/scar",
      name: "scar",
      component: sCar,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    //消息 文章 订单 好友 设置
    {
      path:"/mymessage",
      name:"mymessage",
      component:Mymessage,
      meta:{
        flag: true,
        requireAuth: true
      }
    },
    {
      path:"/myarticle",
      name:"myarticle",
      component:Myarticle,
      meta:{
        flag:false,
        requireAuth: true
      }
    },
    {
      //默认子路由为待支付
      path:"/myorder",
      name:"myorder",
      component:Myorder,
      redirect:"/nopaid",
      meta:{
        flag: false,
        requireAuth: true
      },
      children:[
        {
          name:"/myorder/nocomment",
          path:"/nocomment",
          component:Nocomment
        },
        {
          name:"/myorder/noreceive",
          path:"/noreceive",
          component:Noreceive
        },
        {
          name:"/myorder/nopaid",
          path:"/nopaid",
          component:Nopaid
        },
        {
          name:"/myorder/nosend",
          path:"/nosend",
          component:Nosend
        }
      ]
    },
    {
      path:"/myfriends",
      name:"myfriends",
      component:Myfriends,
      meta:{
        flag: true,
        requireAuth: true
      }
    },
    {
      path:"/myset",
      name:"myset",
      component:Myset,
      meta:{
        flag:false,
        requireAuth: true
      }
    }
  ]
)
