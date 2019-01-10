export default {
    handleNewTop(state, params) {
        
        state.scrollHeight.push(params)
    },
    handleOtherTop(state,params) {
        params -= 840;
        state.scrollHeight.push(params)
    },
    handleDiscountTop(state,params) {
        params -= 500
        state.scrollHeight.push(params)
    },
    handleFlowerTop(state, params) {
        params -= 500
        state.scrollHeight.push(params)
    }
}