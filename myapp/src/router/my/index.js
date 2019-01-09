//my部分的二级页面路由
//个人信息 关注 粉丝 收藏 草稿 
import My from "../../components/my"
import PersonalInfo from "../../components/my/personalInfo";
import Follow from "../../components/my/follow";
import Fans from "../../components/my/fans";
import Collection from "../../components/my/collection";
import Details from "../../components/my/details";
import News from "../../components/my/news";
import Chatbox from "../../components/my/chatbox";

export default (
    [
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
        {
          path:"news",
          name:"news",
          component:News
        },
        {
          path:"chatbox",
          name:"chatbox",
          component:Chatbox
        },
        //my部分的三级级页面路由：详细信息
        {
          path:"details",
          name:"details",
          component:Details
        },
    ]
)