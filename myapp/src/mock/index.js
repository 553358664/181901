/*
    Mock.mock(url,type,cb|temp)
    url:请求的地址
    type:请求的类型
    cb回调
    temp  数据

*/

import Api from "../api/community/friends";
import Mock from "mockjs"
// 获取数据
Mock.mock(/\/article/,"get",Api.article)

//修改数据
// Mock.mock(/\/ModifyShop/,"post",Api.modifyShop)
import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";

//获取文章数据
Mock.mock(/\/article/,"get",ApiArticle.article)
Mock.mock(/\/mylist/,"get",ApiMylist.myList)


