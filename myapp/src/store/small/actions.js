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
	}
}
