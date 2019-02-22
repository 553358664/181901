export default {
  handleSCarM(state, params) {
    state.sCarList = params
  },
  handleReduce(state, index) {
    if (state.sCarList[index].goodsNum <= 1) {
      state.sCarList[index].goodsNum = 1
    } else {
      state.sCarList[index].goodsNum--
    }
  },
  handleAdd(state, index) {
    state.sCarList[index].goodsNum++;
  },
  handleCheck(state, index) {
    state.sCarList[index].flagCheck = !state.sCarList[index].flagCheck;
    var flag = true;
    state.sCarList.map((item) => {
      if (!item.flagCheck) {
        flag = false;
      }
    })

    state.checkAll = flag;
  },
  handleCheckAll(state) {
    state.checkAll = !state.checkAll;
    state.sCarList.map((item) => {
      item.flagCheck = state.checkAll
    })
  },
  ifChecked(state) {
    /* state.sCarList.map((item) => {
      if (item.flagCheck) {
        return
      } */
      for(let i=0;i<state.sCarList.length;i++){
        if (state.sCarList[i].flagCheck) {
          state.ifChecked = true;
         return
       }
      }
      state.ifChecked=false;
  }
}
