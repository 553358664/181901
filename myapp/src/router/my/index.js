//my部分的二级页面路由
// 关注 粉丝 收藏 草稿 
import My from "../../components/my"
import Follow from "../../components/my/follow";
import Fans from "../../components/my/fans";
import Collection from "../../components/my/collection";
// import Draft from "../../components/my/draft";

//个人信息 详细信息
import PersonalInfo from "../../components/my/personalInfo";
import Details from "../../components/my/details"
import sMall from "../../components/small"
import sCar from "../../components/scar"

//消息 文章 订单 好友 设置
import Mymessage from "../../components/my/message"
import Myarticle from "../../components/my/article"
import Myorder from "../../components/my/order"
import Myfriends from "../../components/my/friends"
import Myset from "../../components/my/set"

//设置3级页面
import Opinion from "../../components/my/set/opinion"
import Updatepw from "../../components/my/set/updatepw.vue"

//立即评价
import Discuss from "../../components/my/order/components/discuss.vue"

//消息聊天框
import Chatbox from "../../components/my/chatbox"

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
      path: "personalInfo",
      name: "personalInfo",
      component: PersonalInfo
    },
    {
      path: "details",
      name: "details",
      component: Details
    },
    {
      path: "/chatbox",
      name: "chatbox",
      component: Chatbox,
      meta: {
        flag: false,
        requireAuth: true
      }
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
      path: "/mymessage",
      name: "mymessage",
      component: Mymessage,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    
    {
      path: "/myarticle",
      name: "myarticle",
      component: Myarticle,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/myorder",
      name: "myorder",
      component: Myorder,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/myfriends",
      name: "myfriends",
      component: Myfriends,
      meta: {
        flag: true,
        requireAuth: true
      }
    },
    {
      path: "/myset",
      name: "myset",
      component: Myset,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    //我的=>设置=>三级页面
    {
      path: "/opinion",
      name: "opinion",
      component: Opinion,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    {
      path: "/updatepw",
      name: "updatepw",
      component: Updatepw,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
    //立即评价
    {
      path: "/discuss",
      name: "discuss",
      component: Discuss,
      meta: {
        flag: false,
        requireAuth: true
      }
    },
  ]
)
