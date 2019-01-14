import axios from "../../lib";

export default {
    handleArticle({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/text"
        })
        .then((data)=>{
      
            commit("handleArticle",data.data)
        })
    },
    handleNearItems({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/text"
        })
        .then((data)=>{
            console.log(data)
            commit("handleNearItems",data.data)
        })
    }
    // handlePicShow({commit,dispatch},params){
    //     axios({
    //         method:"get",
    //         url:"http://localhost:3000/text",
    //     })
    //     .then((data)=>{
    //         data[params].show=!data[params].show
    //         dispatch("handleArticle",data)
    //     })
    // } 
}