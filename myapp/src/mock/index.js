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

//获取文章数据
Mock.mock(/\/article/,"post",ApiArticle.article)
Mock.mock(/\/mylist/,"get",ApiMylist.myList)


