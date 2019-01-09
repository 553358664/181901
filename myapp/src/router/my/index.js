//my部分的二级页面路由
//个人信息 关注 粉丝 收藏 草稿 
import My from "../../components/my"
import PersonalInfo from "../../components/my/personalInfo";
import Follow from "../../components/my/follow";
//my部分的二级页面路由
//个人信息 关注 粉丝 收藏 草稿 
import Fans from "../../components/my/fans";
import Collection from "../../components/my/collection";
import Details from "../../components/my/details";
import sMall from "../../components/small";
import sCar  from "../../components/scar";

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
)