<template>
  <div>
    <header-com></header-com>
    <list-com></list-com>
  </div>
</template>
<script>
export default {
  components: {
    "header-com": () => import("./header"),
    "list-com": () => import("./list")
  }
};
</script>
<style>
</style>
