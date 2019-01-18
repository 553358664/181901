export default {
  //ma 主页楼梯导航
  handleNewTop(state, params) {

    state.scrollHeight.push(params)
  },
  handleOtherTop(state, params) {
    //params -= 840;
    params *= .87
    state.scrollHeight.push(params)
  },
  handleDiscountTop(state, params) {
    //params -= 500
    params *= .35
    state.scrollHeight.push(params)
  },
  handleFlowerTop(state, params) {
    //params -= 500
    params *= .74
    state.scrollHeight.push(params)
  },
  //wjl hccs
  handleModify(state, params) {

    state.result = params.data.data;
    state.flowerName = params.data.data2;
  },
  handleMod(state, params) {
    state.result = [...state.result, ...params.data];
    state.flowerName = params.data2;
  },
  //商城
  handleDiscountM(state, params) {
    state.discount = params
  },
  handleDetailM(state, params) {
    state.goodsDetail = params[0]
  },
  handleSelect(state, params) {
    state.goodsSelect = []
    state.goodsSelect.push(params)
    console.log(state.goodsSelect)
  },
  handleReduce(state, index) {
    if (state.goodsSelect[index].goodsNum <= 1) {
      state.goodsSelect[index].goodsNum=1
    } else {
      state.goodsSelect[index].goodsNum--
    }
  },
  handleAdd(state, index) {
    state.goodsSelect[index].goodsNum++;
  },
  handleSCarM(state, params) {
    state.ScarList = params
    console.log(state.ScarList)
  },
}
