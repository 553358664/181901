import axios from "../../lib";

export default {
    //花友圈获得数据
  handleArticle({
    commit,state
  }) {
    axios({
        method: "post",
        url: "/friendsArticle",
        data:{
          PageIndex:JSON.stringify(state.pageindex),
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
  //附近获得数据
  handleNearItems({
    commit
  }) {
    axios({
        method: "post",
        url: "/friendsArticle"
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
  //点赞获得的数据
  handlePraise({commit,dispatch}, {id,praise}) {
    axios({
      method:"post",
      url:'/article',
      data:{
        
      }
    })
      .then((params) => {
        dispatch("handleArticle",params)
      })
  },
  //上传文章
  handlepublish({commit}, params) {
    axios({
      method: "post",
      url: "article",
      data:{
        content:params.content
      }
    })
  },
  //搜索文章
  handleSearch({commit}, params) {
    axios.post('/searchArticle',{
      fuzzyQuery:params
    })
    .then((data)=>{
      commit("handleSearch",data)
    })
  },
  //用户搜索输入时获取相关的内容
  handleTouchUp({commit},params){
    axios.post('/searchArticle',{
        list:params
    })
    .then((data)=>{
        commit("handleTouchUp",data)
    })
  }
}

