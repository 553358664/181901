<template>
  <div id="goodsSelect">
    <div class="Quit" @click="handle"></div>
    <div class="goodsIntro">
      <div class="goodsMain">
        <div class="goodsPic">
          <img :src="goodsDetail.img" alt>
        </div>
        <div class="goodsInfo">
          <h1>{{goodsDetail.name}}</h1>
          <h2>{{goodsDetail.price|price}}</h2>
        </div>
      </div>
      <div class="border"></div>
      <div class="Kind">
        <h3>规格:</h3>
        <ul>
          <label v-for="(item,index) in goodsDetail.colorList">
            <li :class="index==checkIndex?'active':''" @click="handleClick(index)">
              <input type="radio" name="kind">
              {{item}}
            </li>
          </label>
        </ul>
      </div>
      <div class="border"></div>
      <div class="numSelect">
        <h3>购买数量:</h3>
        <div class="goodsNum">
          <button @click=handleReduce>-</button>
          <input type="text" v-model="number">
          <button @click=handleAdd>+</button>
        </div>
      </div>
    </div>
    <div class="selectFooter" @click="handleOk">
      <router-link :to="select&&checkIndex>-1?'/submitOrder':''">确定</router-link>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      checkIndex: -1,
      number:1
    };
  },
  filters: {
    price(val) {
      val = Number(val).toFixed(2);
      return "￥" + val;
    }
  },
  props: ["select"],
  computed: {
    ...Vuex.mapState({
      goodsDetail: state => state.small.goodsDetail
    }),
  },
  methods: {
    handleReduce(){
      this.number--;
      if(this.number<=0){
        this.number=1
      }
    },
    handleAdd(){
      this.number++;
    },
    handle() {
      this.$emit("handleQuit");
    },
    handleClick(index) {
      this.checkIndex = index;
    },
    ...Vuex.mapMutations({
      handleSelect: "small/handleSelect",
    }),
    ...Vuex.mapActions({
      handleAddSCar:"scar/handleAddSCar"
    }),
    handleOk(index) {
      if(this.checkIndex==-1){
        return
      }
      if (!this.select) {
        this.handle();
        Toast({
          message: "已添加至购物车",
          position: "middle",
          duration: 1500
        });
      }
      var obj = {};
      obj.goodId = this.goodsDetail.id;
      obj.name = this.goodsDetail.name;
      obj.discountPrice = this.goodsDetail.discountPrice;
      obj.price = this.goodsDetail.price;
      obj.number = Number(this.number);
      obj.goodsImg = this.goodsDetail.img;
      obj.color = this.goodsDetail.colorList[this.checkIndex];
      //obj.kind=this.goodsDetail.goods
      if(this.select){
        this.handleSelect(obj);
      }else{
        this.handleAddSCar(obj)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 300ms;
}
#goodsSelect {
  position: absolute;
  left: 0;
  bottom: 0;
  background: #f7f7f7;
  width: 100%;
  z-index: 22;
  .border {
    width: 100%;
    height: 0.01rem;
    background: rgba(206, 206, 206, 1);
    margin: 0.22rem 0 0.19rem;
  }
  .selectFooter {
    width: 100%;
    height: 1rem;
    background: rgba(227, 88, 66, 1);
    margin-top: 0.22rem;
    text-align: center;
    a {
      width: 100%;
      height: 100%;
      display: block;
      font-size: 0.32rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
    }
  }
  .Quit {
    width: 0.4rem;
    height: 0.4rem;
    background: url(../../../../../src/assets/small/goodsDetail/quit.png);
    position: absolute;
    right: 0.24rem;
    top: 0.14rem;
    background-size: 100%;
  }
  .goodsIntro {
    width: 100%;
    background: #fff;
    padding: 0.19rem 0 0.31rem 0.31rem;
    .goodsMain {
      display: flex;
      .goodsPic {
        width: 1.42rem;
        height: 1.42rem;
        margin-top: -0.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .goodsInfo {
        margin-left: 0.14rem;
        h1 {
          font-size: 0.24rem;
          font-family: PingFangSC-Light;
          font-weight: 300;
          color: rgba(10, 10, 10, 1);
        }
        h2 {
          margin-top: 0.21rem;
          font-size: 0.26rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(227, 88, 66, 1);
        }
      }
    }
    h3 {
      font-size: 0.24rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(10, 10, 10, 1);
    }
    .Kind {
      ul {
        display: flex;
        margin-top: 0.21rem;
        flex-wrap: wrap;
        li {
          padding: 0.16rem 0.25rem 0.14rem 0.21rem;
          border: 0.01rem solid rgba(206, 206, 206, 1);
          border-radius: 0.04rem;
          margin: 0 0.22rem 0.16rem 0;
          font-size: 0.24rem;
          font-family: PingFangSC-Light;
          font-weight: 300;
          color: rgba(10, 10, 10, 1);
        }
        .active {
          border: 0.01rem solid #f00;
        }
      }
    }
    .numSelect {
      display: flex;
      margin-top: 0.25rem;
      position: relative;
      .goodsNum {
        position: absolute;
        bottom: -0.12rem;
        right: 0.35rem;
        height: 0.53rem;

        border-radius: 0.02rem;
        font-size: 0.24rem;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: rgba(150, 150, 154, 1);
        text-align: center;
        button {
          font-size: 0.24rem;
          width: 0.66rem;
          height: 0.53rem;
          background: rgba(244, 244, 244, 1);
          border: 0;
          border-radius: 0.02rem;
        }
        input {
          font-size: 0.24rem;
          width: 0.66rem;
          height: 0.4rem;
          border: none;
          text-align: center;
        }
      }
    }
  }
}
</style>



