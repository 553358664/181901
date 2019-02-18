import axios from "axios";
export default {
  handleSCar({
    commit
  }) {
    axios({
        method: "get",
        url: "/scar",
        data: {}
      })
      .then((data) => {
        commit("handleSCarM", data.data)
      })
  },
  handleAddSCar({
    commit
  }, params) {
    axios({
        method: "post",
        url: "http://localhost:53000/data",
        data: {
          goodsId : params.goodsId,
          goodsName: params.goodsName,
          goodsPrice: params.goodsPrice,
          goodsOldPrice: params.goodsOldPrice,
          goodsNum: params.num,
          goodsImg: params.goodsImg,
          goodsSize: params.goodsSize,
        }
      })
      .then((data) => {
  
      })
  },
  handleToOrder({ commit,  state, rootState }) {
    rootState.small.goodsSelect = [];
    state.sCarList.map((item) => {
        if (item.flagCheck) {
         rootState.small.goodsSelect.push(item)
      }
  })
}
}
