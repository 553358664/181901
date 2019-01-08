<template>
  <div id="welcomeHome">
    <div class="welcomeContent">
      <WelcomeLogo-com></WelcomeLogo-com>
      <LoginForm-com></LoginForm-com>
      <ToRegister-com></ToRegister-com>
    </div>
  </div>
</template>
<script>
import WelcomeLogo from "./components/welcomeLogo.vue";
import LoginForm from "./components/loginForm.vue";
import ToRegister from "./components/toRegister.vue";
export default {
  components: {
    "WelcomeLogo-com": WelcomeLogo,
    "LoginForm-com":LoginForm,
    "ToRegister-com":ToRegister
  }
};
</script>
<style lang="scss" scoped>

#welcomeHome {
  width: 100%;
  height: 100%;
  background: #c2c2c2;
  
  .welcomeContent {
    width: 100%;
    height: 100%;
    background: url(../../../assets/welogreg/welcome/dlzc_bj@2x.png) no-repeat;
    //  background-size: 150% 150%;
    // background-position: 10rem 10rem;
    display: flex;
    flex-direction: column;
    
   .welcomeLogo {
      width: 100%;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: .36rem;
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