/*
    Mock.mock(url,type,cb|temp)
    url:请求的地址
    type:请求的类型
    cb回调
    temp  数据

*/
import Mock from "mockjs"
//获取花友圈数据
import Apifriends from "../api/community/friends";
//获取附近数据
import Apinearby from "../api/community/nearby"
//获取搜索数据
import ApiSearch from "../api/community/search"
//获取点赞数据
import Apipraise from "../api/community/praise"
//获取搜索历史数据
import ApiHistory from "../api/community/searchHistory"
//获取搜索的热点
import ApiHot from "../api/community/searchHot"
//上传后的返回信息
import ApiPublish from "../api/community/publish"
//文章详情
import ApiArticleAt from "../api/community/articleAt"
//修改数据
// Mock.mock(/\/ModifyShop/,"post",Api.modifyShop)
import ApiArticle from "../api/article";
import ApiMylist from "../api/mylist";
import ApiRegister from "../api/userinfo";
import ApiMyAttention from "../api/attention";


import ApiDiscount from "../api/discount";
import ApiScar from "../api/scar"

// 获取首页花友圈数据
Mock.mock(/\/community\/article\/friends/,"post",Apifriends.article)
//获取附近的数据
Mock.mock(/\/community\/article\/nearby/,"post",Apinearby.article)
//点赞
Mock.mock(/\/community\/article\/praise/,"post",Apipraise.pariseRes)
//搜索历史
Mock.mock(/\/community\/search\/history/,"post",ApiHistory.history)
//搜索热点
Mock.mock(/\/community\/search\/hot/,"post",ApiHot.hot)
//动态实时搜索
Mock.mock(/\/community\/search\/search/,"post",ApiSearch.search)
//搜索结果
Mock.mock(/\/community\/search\/result/,"post",ApiSearch.search)
// 上传后的返回信息
Mock.mock(/\/community\/article\/publish/,"post",ApiPublish.publish)
Mock.mock(/\/community\/article\/article/,"post",ApiArticleAt.article)

//获取文章数据
Mock.mock(/\/article/,"get",ApiArticle.article)
Mock.mock(/\/mylist/, "get", ApiMylist.myList)

//获取关注数据
Mock.mock(/\/myattention/, "get", ApiMyAttention.attention)

//商品数据
Mock.mock(/\/discount/,"post", ApiDiscount.discount)
Mock.mock(/\/find/,"get",ApiDiscount.find)
Mock.mock(/\/scar/,"get",ApiScar.scar)

Mock.mock(/\/userinfo/,"get",ApiRegister.userList)
Mock.mock(/\/register/,"post",ApiRegister.register)
Mock.mock(/\/loginInfo/,"post",ApiRegister.loginInfo)
Mock.mock(/\/userAdd/,"post",ApiRegister.userAdd)
Mock.mock(/\/moCode/,"post",ApiRegister.moCode)
Mock.mock(/\/moInfo/,"post",ApiRegister.moInfo)