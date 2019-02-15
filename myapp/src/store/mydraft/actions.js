import axios from "../../lib";

export default {
    handleContent({commit}){
        axios({
            method:"post",
            url:"http://localhost:3000/draft"
        })
        .then((data)=>{
            commit("handleContent",data)
        })
    }
   
}