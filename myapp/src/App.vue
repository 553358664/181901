<template>
  <div id="app">
    <router-view class="router"/>
    <Footer-com/>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    "Footer-com":Footer
  }
}
</script>

<style scoper lang="scss">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .router{
    flex:1;
  }
}
</style>
