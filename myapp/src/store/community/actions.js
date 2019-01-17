import axios from "../../lib";

export default {
    //花友圈获得数据
  handleArticle({
    commit
  }) {
    axios({
        method: "get",
        url: "/article"
      })
      .then((data) => {
        commit("handleArticle", data)
      })
  },
  //附近获得数据
  handleNearItems({
    commit
  }) {
    axios({
        method: "get",
        url: "/article"
      })
      .then((data) => {
        commit("handleNearItems", data)
      })
  },
  //点赞获得的数据
  handlePraise({
    commit,
    dispatch
  }, {
    id,
    praise
  }) {
    axios.get('/article?+articleId=' + id)
      .then((data) => {
        dispatch("handleArticle")
      })
  },
  //上传文章
  handlepublish({
    commit
  }, params) {
    axios({
      method: "get",
      url: "article?"
    })
  },
  //搜索文章
  handleSearch({commit}, params) {
    axios.post('/search',{
      fuzzyQuery:params
    })
    .then((data)=>{
      commit("handleSearch",data)
    })
  },
  //用户搜索输入时获取相关的内容
  handleTouchUp({commit},params){
    axios.post('/list',{
        list:params
    })
    .then((data)=>{
        commit("handleTouchUp",data)
    })
  }
}






// export default {
//     handleArticle({commit},){
//         axios({
//             method:"get",
//             url:"http://localhost:3000/text"
//         })
//         .then((data)=>{
//             commit("handleArticle",data)
//         })
//     },
//     handleNearItems({commit}){
//         axios({
//             method:"get",
//             url:"http://localhost:3000/text"
//         })
//         .then((data)=>{
//             commit("handleNearItems",data)
//         })
//     },
//     handlePraise({commit,dispatch},index){
//         axios({
//             method:"patch",

//             // headers:{
//             //     "Content-type":"application/X-www-form-urlencoded"
//             // },

//             url:"http://localhost:3000/text/"+index,
//             data:{
//                 "show":true
//             }

//         })
//         .then((data)=>{
//             // data.show =!data.show
//             console.log(data)
//             dispatch("handleArticle")
//         })
//     }
//     // handlePicShow({commit,dispatch},params){
//     //     axios({
//     //         method:"get",
//     //         url:"http://localhost:3000/text",
//     //     })
//     //     .then((data)=>{
//     //         data[params].show=!data[params].show
//     //         dispatch("handleArticle",data)
//     //     })
//     // } 
// }
