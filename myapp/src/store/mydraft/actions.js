import axios from "../../lib";

export default {
    handleContent({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/text"
        })
        .then((data)=>{
            commit("handleContent",data)
        })
    }
   
}