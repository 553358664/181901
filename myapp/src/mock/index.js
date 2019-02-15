/*
    Mock.mock(url,type,cb|temp)
    url:请求的地址
    type:请求的类型
    cb回调
    temp  数据

*/
import Mock from "mockjs"

import Api from "../api/community/friends";
import ApiSearch from "../api/community/search"

// 获取数据
Mock.mock(/\/friendsArticle/,"post",Api.article)
Mock.mock(/\/searchArticle/,"post",ApiSearch.search)
//修改数据
// Mock.mock(/\/ModifyShop/,"post",Api.modifyShop)
import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";
import ApiRegister from "../api/userinfo";

<<<<<<< HEAD
//获取文章数据
Mock.mock(/\/article/,"post",ApiArticle.article)
Mock.mock(/\/mylist/,"get",ApiMylist.myList)
=======
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
>>>>>>> master


Mock.mock(/\/userinfo/,"get",ApiRegister.userList)
Mock.mock(/\/register/,"post",ApiRegister.register)

 
