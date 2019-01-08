<template>
  <div id="welcomeHome">
    <div class="welcomeContent">
      <WelcomeLogo-com></WelcomeLogo-com>
      <RegisterForm-com></RegisterForm-com>
      <Terms-com></Terms-com>
    </div>
  </div>
</template>
<script>
import WelcomeLogo from "./components/welcomeLogo.vue";
import RegisterForm from "./components/registerForm.vue";
import Terms from "./components/terms.vue";
export default {
  components: {
    "WelcomeLogo-com": WelcomeLogo,
    "RegisterForm-com":RegisterForm,
    "Terms-com":Terms
  }
};
</script>
<style lang="scss" scoped>
//»¶Ó­Ò³Ãæ
#welcomeHome {
  width: 100%;
  height: 100%;
  background: #c2c2c2;
  //»¶Ó­Ò³ÃæÄÚÈÝ
  .welcomeContent {
    width: 100%;
    height: 100%;
    background: url(../../../assets/welogreg/welcome/dlzc_bj@2x.png) no-repeat;
    //  background-size: 150% 150%;
    // background-position: 10rem 10rem;
    display: flex;
    flex-direction: column;
    //»¶Ó­Ò³Ãælogo
    .welcomeLogo {
      width: 100%;
      height: 3.5rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: .2rem;
      .welcomeImg {
        width: 1.96rem;
        height: 2.6rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
   
  }
}
</style>