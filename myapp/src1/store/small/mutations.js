export default {
    //ma 主页楼梯导航
    handleNewTop(state, params) {
        
        state.scrollHeight.push(params)
    },
    handleOtherTop(state,params) {
        //params -= 840;
        params*=.87
        state.scrollHeight.push(params)
    },
    handleDiscountTop(state,params) {
        //params -= 500
        params*=.35
        state.scrollHeight.push(params)
    },
    handleFlowerTop(state, params) {
        //params -= 500
        params*=.74
        state.scrollHeight.push(params)
    },
    //wjl hccs
    handleModify(state,params){
		state.result=params.data;
		state.flowerName=params.data2;
	},
	handleMod(state,params){
		state.result=[...state.result,...params.data];
		state.flowerName=params.data2;
	}
}