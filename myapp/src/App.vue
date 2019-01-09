<template>
  <div id="app">
    <router-view/>
    <Footer-com  v-show="this.$route.meta.flag"></Footer-com>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    "Footer-com":Footer,
  }
}
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
