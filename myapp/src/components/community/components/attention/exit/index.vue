<template>
  <div class="exit">
    <ul class="exitcontent">
      <li>
        <User-com/>
        <Article-com/>
      </li>
    </ul>
    <ul class="exitcontent">
      <li>
        <User-com/>
        <Article-com/>
      </li>
    </ul>
  </div>
</template>
                                                   
<script>
import Vuex from "vuex";
import User from "./components/user";
import Article from "./components/article";
export default {
  components: {
    "User-com": User,
    "Article-com": Article
  }
};
</script>
<style lang="scss" scoped>
.exit {
  .exitcontent {
    margin: 0.05rem 0;
  }
}
</style>