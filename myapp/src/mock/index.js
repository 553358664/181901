import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";
import ApiRegister from "../api/userinfo";
import ApiMy from "../api/my";

import ApiDiscount from "../api/discount";
import ApiScar from "../api/scar"
import Mock from "mockjs"
//获取文章数据
Mock.mock(/\/article/,"get",ApiArticle.article)
Mock.mock(/\/mylist/, "get", ApiMylist.myList)
//商品数据
Mock.mock(/\/discount/, "post", ApiDiscount.discount)
Mock.mock(/\/find/,"get",ApiDiscount.find)
Mock.mock(/\/scar/,"get",ApiScar.scar)


Mock.mock(/\/userinfo/,"get",ApiRegister.userList)
Mock.mock(/\/register/,"post",ApiRegister.register)

//获取粉丝 关注 个人信息 数据
Mock.mock(/\/my/, "get", ApiMy.my)
 
