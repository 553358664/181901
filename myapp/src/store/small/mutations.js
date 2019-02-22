export default {
  //ma 主页楼梯导航
  handleNewTop(state, params) {
    state.scrollHeight=[]
    state.scrollHeight.push(params)
  },
  handleOtherTop(state, params) {
    //params -= 840;
    params *= .87
    state.scrollHeight.push(params)
  },
  handleDiscountTop(state, params) {
    //params -= 500
    params *= .7
    state.scrollHeight.push(params)
  },
  handleFlowerTop(state, params) {
    //params -= 500
    params *= .72
    state.scrollHeight.push(params)
  },
  //wjl hccs
  handleModify(state, params) {

    state.result = params.data;
    state.flowerName = params.data2;
  },
  handleMod(state, params) {
    state.result = [...state.result, ...params.data];
    state.flowerName = params.data2;
  },
  //商城
  handleDiscountM(state, params) {
    state.discount = params
  },
  handleNature1(state, params) {
    state.series1 = params
  },
  handleNature2(state, params) {
    state.series2 = params
  },
  handleNature3(state, params) {
    state.series3 = params
  },
  handleNature4(state, params) {
    state.series4 = params
  },
  handleDetailM(state, params) {
    state.goodsDetail = params
  },
  handleSelect(state, params) {
    state.goodsSelect = []
    state.goodsSelect.push(params)
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
  },
}
