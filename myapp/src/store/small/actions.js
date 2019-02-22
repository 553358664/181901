import axios from "axios";
export default {
    //wjl hccs
	handleLoad({commit,state}){
		    axios({
					url:"/api/mock/5c3465e17db0f179db202941/example/flower"
				})
				.then((data)=>{
					this.result = data.data.data;
					this.flowerName = data.data.data2;
					commit("handleModify", data);
				})
	},
	// handleUpdate({commit,state}){
	// 	    axios({
	// 				url:"/api/mock/5c3465e17db0f179db202941/example/flower"
	// 			})
	// 			.then((data) => {

	// 				this.result = data.data.data;
	// 				this.flowerName = data.data.data2;
					
	// 			})
	// },
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
			method: "post",
			url: "http://10.9.30.238:8080/flower7-mall/findGoodsList",
			data: {
				model_id:1,
			}
		})
			.then((data) => {
				commit("handleDiscountM",data)
			})
	},
	handleNature1({ commit, state },params) {
		axios({
			method: "post",
			url: "http://10.9.30.238:8080/flower7-mall/findSeries",
			data: {
				model_id:2,
				series:params
			}
		})
			.then((data) => {
				commit("handleNature1",data)
			})
	},
	handleNature2({ commit, state },params) {
		axios({
			method: "post",
			url: "http://10.9.30.238:8080/flower7-mall/findSeries",
			data: {
				model_id:2,
				series:params
			}
		})
			.then((data) => {
				commit("handleNature2",data)
			})
	},
	handleNature3({ commit, state },params) {
		axios({
			method: "post",
			url: "http://10.9.30.238:8080/flower7-mall/findSeries",
			data: {
				model_id:2,
				series:params
			}
		})
			.then((data) => {
				commit("handleNature3",data)
			})
	},
	handleNature4({ commit, state },params) {
		axios({
			method: "post",
			url: "http://10.9.30.238:8080/flower7-mall/findSeries",
			data: {
				model_id:2,
				series:params
			}
		})
			.then((data) => {
				commit("handleNature4",data)
			})
	},
	handleDetail({ commit, state }, params) {
	
		axios({
			method: "post",
			url: "http://10.9.30.238:8080/flower7-mall/findGoodsById",
			 data: {
				id:params
			} 
		})
			.then((data) => {
				commit("handleDetailM",data)
			})
	},
}
