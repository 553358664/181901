<template>
    <div class="search">
        <div class="seaHeader">
        <div class="searchImg">
            <img src="../../../../../../assets/community/qiu/back.png" alt @click="handleBack() ">
        </div>
        <input
            v-focus
           
            type="text"
            class="searchText"
            ref="searchInp"
            :placeholder="search"
            @click="handleBlur()"
            :autofocus="autofocus"
        >
        <p class="searchTit" @click="handleSearch()">搜索</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      search: "大家都在看“烈焰柔情一品红”",
      autofocus: "autofocus"
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleBlur() {
      this.search = "";
    },
    handleSearch() {

    },

  },
  directives:{
      focus:{
          function (el) {
              el.focus()
          }
      }
  }
};
</script>
<style lang="scss" scoped>
.search {
  background: #fcfcfa;
}
.seaHeader {
  width: 100%;
  height: 1.02rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0.01rem 0.02rem 0.04rem 0rem rgba(0, 0, 0, 0.06);
  .searchImg {
    img {
      width: 0.22rem;
      height: 0.44rem;
    }
  }
  .searchText {
    width: 5.45rem;
    height: 0.64rem;
    background: rgba(238, 238, 238, 1);
    border-radius: 0.32rem;
    border: 0;
    text-align: center;
    font-size: 0.26rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(10, 10, 10, 1);
    opacity: 0.8;
  }
  .searchTit {
    width: 0.56rem;
    height: 0.27rem;
    font-size: 0.28rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(7, 7, 7, 1);
    margin-bottom: 0.13rem;
    margin-right: 0.12rem;
  }
}
</style>
