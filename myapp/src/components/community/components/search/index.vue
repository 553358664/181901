<template>
    <div class="search">
        <div class="seaHeader">
            <div class="searchImg">
                <img src="../../../../assets/community/qiu/back.png" alt="" @click="handleBack()">
            </div>
            <input type="text" class="searchText">
            <p class="searchTit">搜索</p>
        </div>      
        <list-com/>
    </div>
</template>
<script>

export default {
    components:{
        "list-com":()=>import("./components/list")
    },
  methods:{
      handleBack(){
          this.$router.back()
      }
  }
}
</script>
<style lang="scss" scoped>
    .seaHeader{
        width:100%;
        height:1.02rem;
        display: flex;
        justify-content: space-around;
        align-items:center;
box-shadow:.01rem .02rem .04rem 0rem rgba(0, 0, 0, 0.06);
        .searchImg{
            img{
            width:.22rem;
            height:.44rem;
            }
        }
        .searchText{
            width:5.45REM;
            height:.64rem;
            background:rgba(238,238,238,1);
            border-radius:.32rem;
            border:0
        }
        .searchTit{
            width:.56rem;
            height:.27rem;
            font-size:.28rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(7,7,7,1);
            margin-bottom:.13rem;
            margin-right:.12rem;
        }
    }
</style>
