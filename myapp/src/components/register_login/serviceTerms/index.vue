<template>
	<div class="serTer">
	
		<div class="serContent">
			<div class="top">用户注册协议</div>
	        <div class="pContent">
	            <p>一、总则</p>
	                1.1 花7的所有权和运营权归深圳市永兴元科技有限公司所有。<br>
	                1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与花7之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。<br>
	                1.3 本协议则可由花7随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。<br>
	            <p>二、服务内容</p>
	                2.1 花7的具体内容由本站根据实际情况提供。<br>
	                2.2 本站仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。<br>
	            <p>三、用户帐号</p>
	                3.1 经本站注册系统完成注册程序并通过身份认证的用户即成为正式用户，可以获得本站规定用户所应享有的一切权限；未经认证仅享有本站规定的部分会员权限。花7有权对会员的权限设计进行变更。<br>
	                3.2 用户只能按照注册要求使用手机号码。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。<br>
	        </div>
    </div>
		</div>
	</div>
</template>
<script>
import ServiceTerms from "./components/serviceTerms.vue"
export default {
    components:{
    	"ServiceTerms-com":ServiceTerms
    }
}
</script>
<style lang="scss" scoped>
.serTer{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	.serContent{
		height: 100%;
		width: 80%;
		.top{
			font-size: .32rem;
			
		}
		.pContent{
			font-size: .28rem;
		}
	}
}
</style>