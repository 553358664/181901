/*
    Mock.mock(url,type,cb|temp)
    url:请求的地址
    type:请求的类型
    cb回调
    temp  数据

*/
import Mock from "mockjs"
//修改数据
// Mock.mock(/\/ModifyShop/,"post",Api.modifyShop)

import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";
import ApiRegister from "../api/userinfo";
// import ApiMyAttention from "../api/attention";
import ApiMy from "../api/my";

//获取关注数据
// Mock.mock(/\/community\/article\/attention/, "post", ApiMyAttention.attention)
//获取粉丝 关注 个人信息 数据
Mock.mock(/\/my/, "get", ApiMy.my)
Mock.mock(/\/userinfo/,"get",ApiRegister.userList)
Mock.mock(/\/register/,"post",ApiRegister.register)
Mock.mock(/\/loginInfo/,"post",ApiRegister.loginInfo)
Mock.mock(/\/userAdd/,"post",ApiRegister.userAdd)
Mock.mock(/\/moCode/,"post",ApiRegister.moCode)
Mock.mock(/\/moInfo/,"post",ApiRegister.moInfo)
//获取文章数据
// Mock.mock(/\/article/,"get",ApiArticle.article)
// Mock.mock(/\/mylist/, "get", ApiMylist.myList)