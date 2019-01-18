import axios from "axios";
export default {
    //wjl hccs
	handleLoad({commit},state){
		    axios({
					url:"/api/mock/5c3465e17db0f179db202941/example/flower"
				})
				.then((data)=>{
					/*this.result = data.data.data;
					this.flowerName = data.data.data2;*/
					commit("handleModify", data);
				})
	},
	handleUpdate({commit},state){
		    axios({
					url:"/api/mock/5c3465e17db0f179db202941/example/flower"
				})
				.then((data)=>{
					/*this.result = data.data.data;
					this.flowerName = data.data.data2;*/
					commit("handleMod",data);
				})
	},
	//商城首页
	handleDiscount({ commit, state }) {
		axios({
				method:"post",
				url:"/ma/mock/5c3c71fa1152b70f833d9d60/example/small"
		})
		.then((data) => {
			console.log(data)
		})
			.catch((err) => {
			console.log(err)
		})
	}
}
