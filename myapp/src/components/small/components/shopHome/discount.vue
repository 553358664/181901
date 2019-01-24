<template>
  <div id="discount" ref="discount">
    <h1>限时特惠</h1>
    <div class="wrapper" ref="dicountWrapper">
      <div class="discountGoods content">
            <router-link  v-for="(item,index) in discount" :key="item.id" :to="'/goodsDetail/'+item.goodsId">
              <img :src="item.goodsImg">
              <h2>{{item.goodsName}}</h2>
              <h3>{{item.goodsPrice|price}}</h3>
            </router-link>
        <!--  <router-link :to="{name:'goodsDetail'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>9.9元包邮 | 心想事橙</h2>
          <h3>9.9元/束</h3>
        </router-link>
        <router-link :to="{name:'goodsDetail'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>9.9元包邮 | 心想事橙</h2>
          <h3>9.9元/束</h3>
        </router-link>
        <router-link :to="{name:'goodsDetail'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>9.9元包邮 | 心想事橙</h2>
          <h3>9.9元/束</h3>
        </router-link>
        <router-link :to="{name:'goodsDetail'}">
          <img src="@/assets/small/shopHome/nav_1.png" alt>
          <h2>9.9元包邮 | 心想事橙</h2>
          <h3>9.9元/束</h3>
        </router-link>-->
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Vuex from "vuex";
export default {
  filters:{
    price(val){
            val=Number(val).toFixed(2);
            return "￥"+val
        },
  },
  data() {
    return {
      discountTop: ""
    };
  },
  computed:{
    ...Vuex.mapState({
      discount:state=>state.small.discount
    })
  },
  mounted() {
    this.discountTop = this.$refs.discount.offsetTop;
    this.handleDiscountTop(this.discountTop);
    this.scroll = new BScroll(this.$refs.dicountWrapper, {
      scrollX: true
    });
  },
  created() {
    this.handleDiscount();
  },
  methods: {
    ...Vuex.mapMutations({
      handleDiscountTop: "small/handleDiscountTop",
      handleGoods:"small/handleGoods"
    }),
    ...Vuex.mapActions({
      handleDiscount: "small/handleDiscount",
    })
  }
};
</script>
<style lang="scss" scoped>
#discount {
  margin-left: 0.26rem;
  font-family: PingFang-SC-Regular;
  .discountGoods {
    width: max-content;
     display: flex;
    a {
      margin-right: 0.22rem;
      text-align: center;
    }
    img {
      width: 2.42rem;
      height: 2.42rem;
    }
    h2 {
      font-size: 0.24rem;
      font-size: 0.24rem;
      font-weight: 400;
      color: rgba(10, 10, 10, 1);
      margin: 0.25rem 0 0.15rem;
    }
    h3 {
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(244, 76, 54, 1);
    }
  }
}
</style>



