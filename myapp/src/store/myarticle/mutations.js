export default {
    handleAtList(state,params){
        state.articleList = params;
    },
    changespeard(state,params){
        state.articleList[params].speard = !state.articleList[params].speard
    }
}