export default {
    handleGoodsList(state,params){
        state.goodsList = params;
    },
    viewstatechange(state,params){
        state.viewState = params;
    },
    changevp(state,params){
        state.viewp[params-1] = true;
    },
    checkchange(state,params){
        state.goodsList[params].checkflag = !state.goodsList[params].checkflag;       
    }
}