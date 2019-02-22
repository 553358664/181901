//5 欢迎
import Welcome from "../../components/register_login";
//6 注册页面路由
import Register from "../../components/register_login/register";
//7 登录页面路由
import Login from "../../components/register_login/login";      //注册页面二级路由=>用户服务条款
import ServiceTerms from "../../components/register_login/serviceTerms"

//登录页面路由=>忘记密码
import ForgetPwd from "../../components/register_login/ForgetPwd";

export default (
    [
        {
              path:"/welcome",
              name:"welcome",
              component:Welcome,
              meta:{
                flag:false,
                requireAuth:false
              }
            },
            {
              path:"/register",
              name:"register",
              component:Register,
              meta:{
                flag:false,
                requireAuth:false
              }
            },
            {
              path:"/login",
              name:"login",
              component:Login,
              meta:{
                flag:false,
                requireAuth:false
              }
            },
            //注册页面二级路由=>用户服务条款
            {
              path:"/serviceTerms",
              name:"/serviceTerms",
              component:ServiceTerms,
              meta:{
                flag:false,
                requireAuth:false
              }
            },
            //登录页面二级路由=>忘记密码
            {
              
              path:"/forgetPwd",
              name:"/forgetPwd",
              component:ForgetPwd,
              meta:{
                flag:false,
                requireAuth:false
              }
            }  
    ]
)