import axios from "axios";
//模拟数据
export default {
    handleGet({commit}){
        axios({
            method:"post",
            url:"/my/mock/5c37efe8c0c3ac784264cd1c/example/my",
        })
        .then((data)=>{
            commit("handleGet",data.data.data)
        })
    }
}