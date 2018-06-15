<template>
  <div class="footer">
    <router-link class="Nav" to="./index" @click="sort" activeClass="a"><img src="../assets/images/index/home_click.png" alt="" srcset="">首页</router-link>
      <router-link class="Nav" to="./classify" @click="sort"  activeClass="a"><img src="../assets/images/index/ordering.png" alt="" srcset=""> 分类</router-link>
    <router-link class="Nav" to="./news" @click="sort"  activeClass="a"><img src="../assets/images/index/message.png" alt="" srcset="">消息</router-link>
    <router-link class="Nav" to="./message" @click="sort"  activeClass="a"> <img src="../assets/images/index/mine.png" alt="" srcset="">个人中心</router-link>
  </div>
</template>

<script>
export default {
  name: 'footerNav',
  props: {
    msg: String
  },
  data(){
    return{
         yellow:true,
    }
   
  },
  methods:{
     sort(){

     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  display: flex;
  justify-content: space-around;
 
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1vw 1.3vw #EEEEEE;
  flex-shrink: 0;
}
.Nav{
  text-decoration: none;
  color: #000000;
   padding-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: url(../assets/images/index/home_click.png) no-repeat center top;
  background-size: 5.9vw 5.9vw; */
}
.Nav img{
  width: 5.9vw;
  height: 5.9vw;
}
.router-link{
  text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
.a{
  color: #ccc;
}
.footer{
  background: white;
  font-size: 2.9vw;
}
</style>