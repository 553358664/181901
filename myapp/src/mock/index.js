import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";
import ApiDiscount from "../api/discount";
import ApiScar from "../api/scar"
import Mock from "mockjs"
//获取文章数据
Mock.mock(/\/article/,"get",ApiArticle.article)
Mock.mock(/\/mylist/, "get", ApiMylist.myList)
Mock.mock(/\/discount/, "post", ApiDiscount.discount)
Mock.mock(/\/find/,"get",ApiDiscount.find)
Mock.mock(/\/scar/,"get",ApiScar.scar)


 