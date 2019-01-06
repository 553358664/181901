<template>
  <div id="shopHome">
      <Header-com></Header-com>
      <New-com></New-com>
  </div>
</template>
<script>
import Header from "./components/shopHome/header";
import New from "./components/shopHome/new";
export default {
    components:{
        "Header-com":Header,
        "New-com":New
    }
};
</script>
<style lang="scss" scoped>
</style>


