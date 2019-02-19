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