import axios from "axios";
export default {
    //wjl hccs
	handleLoad({commit,state}){
		    axios({
					url:"/api/mock/5c3465e17db0f179db202941/example/flower"
				})
				.then((data)=>{
					/*this.result = data.data.data;
					this.flowerName = data.data.data2;*/
					commit("handleModify", data);
				})
	},
	handleUpdate({commit,state}){
		    axios({
					url:"/api/mock/5c3465e17db0f179db202941/example/flower"
				})
				.then((data) => {

					/*this.result = data.data.data;
					this.flowerName = data.data.data2;*/
					
				})
	},
	//商城首页
	/* handleDiscount({commit},state){
		axios({
			method:"post",
			url:"api/mock/5c3c71fa1152b70f833d9d60/example/small"
			})
			.then((data) => {
				console.log(data.data.data)
				commit("handleDiscountM",data.data.data)
			})
	}, */
	handleDiscount({ commit, state },params) {
		axios({
			method: "get",
			url: "http://localhost:3000/data",
		})
			.then((data) => {
				commit("handleDiscountM",data.data)
			})
	},
	handleDetail({ commit, state }, params) {
	
		axios({
			method: "get",
			url: "http://localhost:3000/data?goodsId="+params,
			data: {
				//goodsId=params
			}
		})
			.then((data) => {
				commit("handleDetailM",data.data)
			})
	},
}
