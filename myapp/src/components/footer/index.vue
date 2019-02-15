<template>
    <div id="footer">
        <router-link :to="{name:this.publish}">
            <img src="../../assets/community/qiu/hover.png" class="friendsPoint" v-drap="this.flag">
        </router-link>
        <ul>
            <li v-for="(item,index) in navs" :key="index">
                <router-link :to="{name:item.name}">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    directives: {
    //浮点的拖拽
    drap(el) {
      el.addEventListener("touchstart", function(e) {
        let disX = e.targetTouches[0].clientX - el.offsetLeft;
        let disY = e.targetTouches[0].clientY - el.offsetTop;
        function handleMove(e) {
          let x = e.targetTouches[0].clientX - disX;
          let y = e.targetTouches[0].clientY - disY;
          let l = Math.max(Math.min(e.targetTouches[0].pageX-e.targetTouches[0].radiusX/2,x),0)
          el.style.left = l + "px";
          el.style.top = y + "px";
        }
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("touchend", function() {
          document.removeEventListener("touchmove", handleMove);
        });
      });
    }
  },
    data(){
        return {
            publish: "publish",
            flag :true,
            navs:[
                {
                    name:"community",
                    title:"社区",
                    icon:"&#xe677;"
                },
                {
                    name:"small",
                    title:"商城",
                    icon:"&#xe7f9;"
                },
                {
                    name:"scar",
                    title:"购物车",
                    icon:"&#xe60c;"
                },
                {
                    name:"my",
                    title:"我的",
                    icon:"&#xe8a0;"
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    $color:#F44C36;
    .friendsPoint {
    z-index: 999;
    position: absolute; /*定位*/
    top:-2rem;
    right: 0;
    height: 0.84rem;
    width: 0.84rem;
  }
    #footer{
        position: relative;
        width: 100%;
        height: .98rem;
        position: fixed;
        left: 0;
        bottom:0;
    }
     #footer>ul{
         display: flex;
         justify-content: space-between;
         background:#EFEFEC;
     }
    #footer>ul,#footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
     #footer>ul>li>a>i{
         font-size: .38rem;
     }
   a{
        font-size: .24rem;
        font-family:PingFang-SC-Medium;
        font-weight:SC-Medium;
        font-weight:500;
        color:rgba(8,8,8,1);
    }
    #footer>ul>li>.router-link-active{
        color: $color;
    }
</style>
