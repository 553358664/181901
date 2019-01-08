<template>
    <div class="clause">
       <p>注册即表示我已同意</p>
       
       <p>《
       	<router-link to="/serviceTerms">花7服务条款页</router-link>》
       	</p>
       
             
        
           
       
    </div>
</template>

<script>
export default {
   
}
</script>

<style  lang="scss" scoped>
 .clause{
     height: .24rem;
     width: 100%;
     display: flex;
     justify-content: center;
     p:nth-child(1){
        width:2.2rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        font-size: .24rem;
        line-height: .24rem;
        color: #fefefe;
        
     }
     p:nth-child(2){
     	width: 2.5rem;
     	font-size: .24rem;
	    line-height: .24rem;
	    height: 100%;
	    color: #dc9e93;
	    display: flex;
	    justify-content: flex-start;
     	a{
	        height: 100%;
	        width: 1.58rem;
	        color: #dc9e93;
	        text-decoration: underline;
	        
	
	    }
     }
     
 }
</style>