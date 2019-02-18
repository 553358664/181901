import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";

import Mock from "mockjs"
//获取文章数据
Mock.mock(/\/article/,"get",ApiArticle.article)
Mock.mock(/\/mylist/,"get",ApiMylist.myList)
