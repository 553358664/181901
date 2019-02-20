import axios from "../../lib";
export default {
    //花友圈获得数据
  handleArticle({
    commit,state
  }) {
    axios({
        method: "post",
        url: "/community/article/friends",
        data:{
          PageIndex:state.pageIndex,
          PageSize:10
        }
      })
      .then((data) => {
        commit("handleArticle", data)
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
    axios({
        method: "post",
        url: "/community/article/nearby",
        data:{
          PageIndex:state.pageIndexN,
          PageSize:10
        }
      })
      .then((data) => {
        commit("handleNearItems", data)
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
        url:'/community/article/praise',
        data:{
          articleId:data.articleId,
          userId :data.userId
        }
      })
      .then((params) => {
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
        url:'/community/article/praise',
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
      url: "/community/article/publish",
      data:{
        articleContent:params.content,
        articleTitle:params.title,
        userId:params.userId
      }
    })
    .then((data)=>{
      console.log(data)
      commit("handlepublish",data)
    })
  },
  //用户搜索输入时获取相关的内容
  handleTouchUp({commit},params){
    axios.post('/community/search/search',{
        list:params
    })
    .then((data)=>{
        commit("handleTouchUp",data)
    })
  },
  handleHistory({commit}){
    let uId= localStorage.getItem("userId")
    if(uId){
      axios.post('/community/search/history')
      .then((data)=>{
        commit("handleHistory",data)
      })
    }   
  },
  handleHot({commit}){
    axios.post('/community/search/hot')
    .then((data)=>{
      commit("handleHot",data)
    })
  },
  handleDel({commit}){
    commit("handleDel")
  },
  //搜索文章
  handleSearch({commit},params){
    axios({
        method:"post",
        url:"/community/search/result",
        data:{
          fuzzyQuery:params
        }
    })
    .then((data)=>{  
        data.map((item)=>{
            item.speard = false;
        })
        commit("handleSearch",data);  
    })
  },
  //文章详情
  handleSearchAt({commit},params){
    axios({
        method:"post",
        url:"/community/article/article",
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
        axios({
          method:"get",
            url:"/myattention"
        })
        .then((data)=>{         
          console.log(data.data);
          commit("attentionList",data.data)
        })
    }
}
