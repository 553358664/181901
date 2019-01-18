<template>
	<div id="hezi">
		
	
	<div class="serTer wrapper" ref="wwWrapper">
	
		<div class="serContent content"  >
			
	      
	       	
	     	
	        	<span class="top">用户注册协议</span> <br>
	            <span>一、总则</span>
	                <p>1.1 花7的所有权和运营权归xxxxxxxxxx所有。</p>
	                <p>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与花7之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。</p>
	                <p>1.3 本协议则可由花7随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</p>
	            <span>二、服务内容</span>
	                <p>2.1 花7的具体内容由本站根据实际情况提供。</p>
	                <p>2.2 本站仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。</p>
	            <span>三、用户帐号</span>
	                <p>3.1 用户只能按照注册要求使用手机号码。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。</p>
	                 
	                 <p>3.1 用户只能按照注册要求使用手机号码。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。</p>
	                 
	                 <p>3.1 用户只能按照注册要求使用手机号码。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。</p>
	                 <p>3.1 用户只能按照注册要求使用手机号码。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。</p>
	                 <p>3.1 用户只能按照注册要求使用手机号码。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。</p>
	                 
    <router-link to="/register">返回</router-link>
		</div>
	</div>
</div>
</template>
<script>
import BScroll from "better-scroll";

export default {
	mounted(){
		
	this.scroll = new BScroll(this.$refs.wwWrapper,{
            //只有设置成true pullingUp才能使用
            pullUpLoad:true,
            click:true,
            
        });
        console.log(this.scroll)
   }
	
}
</script>
<style lang="scss" scoped>
#hezi {
  height: 100%;
  >.wrapper{
    height:100%;
    position:fixed;
    top:.88rem;
    width:100%;
    >.content{
    	width: 100%;
      	padding: 10%;
      span{
      	width: 100%;
      	height: .5rem;
      	font-size: .4rem;
      	line-height: .5rem;
      	margin-bottom: .1rem;
      	
      }
      .top{
      	display: flex;
      	justify-content: center;
      }
      p{
      	width: 100%;
      	font-size: .34rem;
      	line-height: .5rem;
      	text-indent: .5rem;
      }
      a{
      	width: 100%;
      	height: .5rem;
      	font-size: .3rem;
      	display: flex;
      	justify-content: center;
      	align-items: center;
      	color: #ff7268;
      }
    }
  }
  
}
</style>