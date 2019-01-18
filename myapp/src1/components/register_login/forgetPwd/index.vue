<template>
  <div id="welcomeHome">
    <div class="welcomeContent">
      <WelcomeLogo-com></WelcomeLogo-com>
      <RegisterForm-com></RegisterForm-com>
     
    </div>
  </div>
</template>
<script>
import WelcomeLogo from "./components/welcomeLogo.vue";
import RegisterForm from "./components/registerForm.vue";
export default {
  components: {
    "WelcomeLogo-com": WelcomeLogo,
    "RegisterForm-com":RegisterForm,
    
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
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: .9rem;
    .welcomeLogo {
      width: 1.96rem;
      height: 2.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: .2rem;
      background: url(../../../assets/welogreg/welcome/dlzc_logo@2x.png) no-repeat;
       background-size: 100% 100%;
      .welcomeImg {
        width: 100%;
        height: 100%;

        /*img {
          width: 100%;
          height: 100%;
        }*/
      }
     }
  }
}
</style>