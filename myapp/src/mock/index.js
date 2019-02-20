import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";
import ApiRegister from "../api/userinfo";

import Mock from "mockjs"
//获取文章数据
Mock.mock(/\/article/,"get",ApiArticle.article)
Mock.mock(/\/mylist/,"get",ApiMylist.myList)


Mock.mock(/\/userinfo/,"get",ApiRegister.userList)
Mock.mock(/\/register/,"post",ApiRegister.register)
Mock.mock(/\/loginInfo/,"post",ApiRegister.loginInfo)
Mock.mock(/\/userAdd/,"post",ApiRegister.userAdd)
