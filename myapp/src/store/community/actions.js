import axios from "../../lib";

export default {
    handleArticle({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/text"
        })
        .then((data)=>{
            commit("handleArticle",data)
        })
    },
    handleNearItems({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/text"
        })
        .then((data)=>{
            commit("handleNearItems",data)
        })
    },
    handlePicShow({commit,dispatch},params){
        axios({
            method:"get",
            url:"http://localhost:3000/text",
        })
        .then((data)=>{
            data[params].show=!data[params].show
            // dispatch("handleArticle",data)
            // console.log(data[params].show)
        })
    } 
}