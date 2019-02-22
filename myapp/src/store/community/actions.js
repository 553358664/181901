import axios from "../../lib";
export default {
    //花友圈获得数据
  handleArticle({
    commit,state
  }) {
    let uId= localStorage.getItem("userId")
    axios({
        method: "post",
        url: "http://10.9.30.235:8080/community/article/friends",
        data:{
          userId:uId,
          pageIndex:state.pageIndexF,
          pageSize:10
        }
      })
      .then((data) => {
        console.log(data)
        commit("handleArticle", data.friendsArticleList)
      })
  },
  //下拉获取数据
  handleGoodsUpdate({dispatch}){
    dispatch("handleArticle")
  },
  handleNearUpdate({dispatch}){
    dispatch("handleNearItems")
  },
  //附近获得数据
  handleNearItems({
    commit,state
  }) {
    let uId= localStorage.getItem("userId")
    axios({
        method: "post",
        url: "http://10.9.30.235:8080/community/article/nearby",
        data:{
          userId:uId,
          pageIndex:state.pageIndexN,
          pageSize:10
        }
      })
      .then((data) => {
        commit("handleNearItems",data.nearbyArticleList)
      })
  },
  handleDraft({commit},num){
    axios({
      method:"post",
      url:"/friendsArticle?"+num
    })
  },
  //花友圈点赞获得的数据
  handlePraiseF({commit,dispatch},data) {
    let uId= localStorage.getItem("userId")
    if(uId){
      axios({
        method:"post",
        url:'http://10.9.30.235:8080/community/article/praise',
        data:{
          articleId:data.articleId,
          userId :data.userId
        }
      })
      .then((params) => {
        console.log(params.praiseShow)
        commit("handlePraiseF",params)      
      })
    }else{
      commit("handlePraiseF")
    }    
  },
  //附近点赞
  handlePraiseN({commit,dispatch},data) {
    let uId= localStorage.getItem("userId")
    if(uId){
      axios({
        method:"post",
        url:'http://10.9.30.235:8080/community/article/praise',
        data:{
          articleId:data.articleId,
          userId :data.userId
        }
      })
      .then((params) => {
        commit("handlePraiseN",params)
      })
    }else{
      commit("handlePraiseN")
    }    
  },
  //上传文章
  handlepublish({commit}, params) {
    axios({
      method: "post",
      url: "http://10.9.30.235:8080/community/article/publish",
      data:{
        articleContent:params.content,
        articleTitle:params.title,
        userId:params.userId
      }
    })
    .then((data)=>{
      commit("handlepublish",data)
    })
  },
  //用户搜索输入时获取相关的内容
  handleTouchUp({commit},params){
    let uId= localStorage.getItem("userId")
    
    axios.post('http://10.9.30.235:8080/community/search/search',{
      fuzzyQuery:params,
      uId:uId
    })
    .then((data)=>{

        commit("handleTouchUp",data.search)
    })
  },
  handleHistory({commit}){
    let uId= localStorage.getItem("userId")
    if(uId){
      axios.post('http://10.9.30.235:8080/community/search/history',{
        userId:uId
      })
      .then((data)=>{
        commit("handleHistory",data.searchHistory)
      })
    }   
  },
  handleHot({commit}){
    axios.post('http://10.9.30.235:8080/community/search/hot')
    .then((data)=>{
      commit("handleHot",data.searchHot)
    })
  },
  handleDel({commit}){
    commit("handleDel")
  },
  //搜索文章
  handleSearch({commit},params){
    let uId= localStorage.getItem("userId")
    axios({
        method:"post",
        url:"http://10.9.30.235:8080/community/search/result",
        data:{
          userId :uId,
          articleTitle:params
        }
    })
    .then((data)=>{  
      console.log(data)
        data.searchResult.map((item)=>{
            item.speard = false;
        })
        
        commit("handleSearch",data.searchResult);  
    })
  },
  //文章详情
  handleSearchAt({commit},params){
    axios({
        method:"post",
        url:"http://10.9.30.235:8080/community/article/article",
        data:{
          articleId:params.articleId,
          userId:params.userId
        }
    })
    .then((data)=>{  
      data.map((item)=>{
        item.speard = false
      })
      commit("handleSearchAt",data);  
    })
  },
  changespeard({commit}){
    commit("changespeard")
  },
    attentionList({commit}){
      let uId= localStorage.getItem("userId")
        axios({
          method:"post",
            url:"http://10.9.30.235:8080/community/article/attention",
            data:{
              pageIndex:1,
              pageSize:1,
              userId:uId
            }
        })
        .then((data)=>{   
          // console.log(data)      
          commit("attentionList",data.attentionArticleList)
        })
    }
}
