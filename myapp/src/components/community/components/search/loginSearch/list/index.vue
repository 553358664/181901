<template>
    <div class="searchList">
          <ul class="searchMain">
              <li class="searchCentent">张</li>
              <li class="searchCentent">王</li>
              <li class="searchCentent">里</li>
          </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .searchMain{
        width:100%;
        overflow: hidden;
        zoom:1;
        .searchCentent{
            width:100%;
            height:.9rem;
            box-shadow:.01rem .02rem .04rem 0rem rgba(0, 0, 0, 0.06);
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(254,114,104,1);
            line-height:.9rem;
            padding-left:.3rem
        }
    }
</style>
