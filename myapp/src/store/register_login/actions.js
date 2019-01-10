import axios from "../../lib";
export default{
	addUser({commit},user){
        axios({
            method:"post",
            url:"http://localhost:3000/userlist",
            data:user
        })
        .then((data)=>{
            commit("addUser",data)
        })
   },
   handleDel({commit,dispatch},index){
        axios({
            method:"delete",
            url:"http://localhost:3000/goods/"+index
        })
        .then(()=>{
            dispatch("handleGoodsList")
        })
    }
}
