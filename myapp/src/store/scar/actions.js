import axios from "axios";
export default {
  handleSCar({
    commit
  }) {
    let uId = Number(localStorage.getItem("userId"))
    axios({
        method: "post",
        url: "http://10.9.30.238:8080/flower7-mall/findCartList",
        data: {
          userId: uId
        }
      })
      .then((data) => {
        commit("handleSCarM", data)
      })
  },
  handleAddSCar({
    commit
  }, params) {
    let uId = Number(localStorage.getItem("userId"))
    axios({
        method: "post",
        url: "http://10.9.30.238:8080/flower7-mall/addCart",
        data: {
          goodId: params.goodId,
          number: params.number,
          color: params.color,
          discountPrice: params.discountPrice,
          price: params.price,
          userId: uId
        }
      })
      .then((data) => {

      })
  },
  handleToOrder({
    commit,
    state,
    rootState
  }) {
    rootState.small.goodsSelect = [];
    state.sCarList.map((item) => {
      if (item.flagCheck) {
        rootState.small.goodsSelect.push(item)
      }
    })
  },
  handleAdd({
    commit,
    state
  }, index) {
    let id = state.sCarList[index].id
    let num = ++state.sCarList[index].number;
    axios({
        method: "post",
        url: "http://10.9.30.238:8080/flower7-mall/updateCartNumber",
        data: {
          id: id,
          number: num,
          //id: state.sCarList[index].id,
        }
      })
      .then((data) => {
        commit("handleAddM", data)
      })
  },
  handleDel({
    commit,
    state,
    dispatch
  }, index) {
    let id = state.sCarList[index].id
    axios({
        method: "post",
        url: "http://10.9.30.238:8080/flower7-mall/deleteCartById",
        data: {
          id: id,
          //id: state.sCarList[index].id,
        }
      })
      .then(() => {
        dispatch("handleSCar")
      })
  },
  handleReduce({
    commit,
    state
  }, index) {
    if (state.sCarList[index].number <= 1) {
      state.sCarList[index].number = 1
    } else {
      --state.sCarList[index].number
    }
    let id = state.sCarList[index].id
    let num = state.sCarList[index].number;
    axios({
        method: "post",
        url: "http://10.9.30.238:8080/flower7-mall/updateCartNumber",
        data: {
          number: num,
          //id: state.sCarList[index].id,
          id: id,
        }
      })
      .then((data) => {
        commit("handleReduceM", data)
      })
  },
  handleCheck({
    commit,
    state
  }, index) {
    state.sCarList[index].flagCheck = !(state.sCarList[index].flagCheck)
    let id = state.sCarList[index].id
    //let flagCheck = state.sCarList[index].flagCheck
    axios({
        method: "post",
        url: "http://10.9.30.238:8080/flower7-mall/updateCartFlag",
        data: {
          flagCheck: state.sCarList[index].flagCheck,
          id: id,
        }
      })
      .then((data) => {
        commit("handleCheckM", data)
      })
  },
  handleCartPay({
    commit,
    state,
    rootState
  }) {
    /*  let len = rootState.small.goodsSelect.length;
     let arr=[]
     for (let i = 0; i < len; i++){
       arr.push(rootState.small.goodsSelect[i].id)
     } */
    let uId = Number(localStorage.getItem("userId"))
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/flower7-mall/buyFromCart",
      data: {
        carts: JSON.stringify(rootState.small.goodsSelect),
        userId: uId
      }
    }).then(data => {
    })
  },
  handleJustBuy({
    commit,
    state,
    rootState
  }) {
    let uId = Number(localStorage.getItem("userId"))
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/flower7-mall/buy",
      data: {
        good: JSON.stringify(rootState.small.goodsSelect),
        userId: uId
      }
    }).then(data => {

    })
  },
  handleLeave({
    commit,
    state
  }) {
    let obj = [];
    for (let i = 0; i < state.sCarList.length; i++) {
      var obj2 = {};
      obj2.id = state.sCarList[i].id,
        obj2.flagCheck = state.sCarList[i].flagCheck
      obj.push(obj2)
    }
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/flower7-mall/updateCartAll",
      data: {
        obj: JSON.stringify(obj),
      }
    })
  }
  /* handleCheckAll(state) {
    state.checkAll = !state.checkAll;
    state.sCarList.map((item) => {
      item.flagCheck = state.checkAll
    })
    axios({
      method: "post",
      url: "http://10.9.30.238:8080/updateCartFlag",
      data: {
        flagCheck:state.sCarList[index].flagCheck,
        id: id,
      }
    })
      .then((data) => {
       
      })
  }, */

}
