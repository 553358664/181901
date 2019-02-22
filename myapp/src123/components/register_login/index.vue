<template>
  <div id="welcomeHome">
    <div class="welcomeContent">
      <WelcomeLogo-com></WelcomeLogo-com>
      <LoginBtn-com></LoginBtn-com>
      <noLoginBtn-com></noLoginBtn-com>
    </div>
  </div>
</template>
<script>
import LoginBtn from "./components/loginBtn.vue";
import WelcomeLogo from "./components/welcomeLogo.vue";
import noLoginBtn from "./components/noLoginBtn.vue";
export default {
  components: {
    "WelcomeLogo-com": WelcomeLogo,
    "LoginBtn-com": LoginBtn,
    "noLoginBtn-com": noLoginBtn
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
    background: url(../../assets/welogreg/welcome/dlzc_bj@2x.png) no-repeat;
    background-size: 100% 100%;
    //  background-size: 150% 150%;
    // background-position: 10rem 10rem;
    display: flex;
    flex-direction: column;
    padding-top: 1.45rem;
    align-items: center;
    
    .welcomeLogo {
      width: 1.96rem;
      height: 2.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.26rem;
      background: url(../../assets/welogreg/welcome/dlzc_logo@2x.png) no-repeat;
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
   
    .toLogin{
      width: 100%;
      height: 1.8rem;
      display: flex;
      justify-content: center;
      margin-bottom: 3.5rem;
      
    }
    .noLoignBtn{
      height: 0.44rem;
      width: 100%;
     display: flex;
     justify-content: center;
    }
  }
}
</style>