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
    }
   
}