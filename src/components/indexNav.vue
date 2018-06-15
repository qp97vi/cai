<template>
<div>
  
        <div class="header">
         
          <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide><img src="../assets/images/index/banner.png" alt="" srcset=""></swiper-slide>
    <swiper-slide><img src="../assets/images/index/banner.png" alt="" srcset=""></swiper-slide>
    <swiper-slide><img src="../assets/images/index/banner.png" alt="" srcset=""></swiper-slide>
    <swiper-slide><img src="../assets/images/index/banner.png" alt="" srcset=""></swiper-slide>
    <swiper-slide><img src="../assets/images/index/banner.png" alt="" srcset=""></swiper-slide>
    <swiper-slide><img src="../assets/images/index/banner.png" alt="" srcset=""></swiper-slide>
    <swiper-slide><img src="../assets/images/index/banner.png" alt="" srcset=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
    
  </swiper>
          
          <router-link tag="div" to="./address" class="address"  >
         
     {{a}}
             <img src="../assets/images/index/arrow_d.png" alt="" srcset="">
         </router-link>
         
        </div>
    
        <aa></aa>
        <footer-nav></footer-nav>
  </div>
 
</template>

<script>

import aa from './aa/aa'
import footerNav from './footerNav.vue'

export default {
  name: 'indexNav',
  props: {
    msg: String
  },
  data(){
    return{
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay:true
        },
      a:'',
      
    }
  },
  computed:{
    count () {
      return this.$store.state.test
    }
  },
   components:{
    aa,
    footerNav
  },
  methods:{
    callback(){

    },
  
  },
  created(){

   this.a=this.$route.query.userId;
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.footer1{
 margin: 0 12vw;
  display: flex;
  flex-direction: column;
}
.header{
  position: relative;
}
.header img{
  width: 100%;
  height:50.1vw;
}
.address{
  z-index: 11;
  position: absolute;
  top: 5.3vw;
  left: 4.3vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #333333;
  font-size: 3.2vw;
  width: 14.1vw;
  height: 5.9vw;
  border-radius: 2.9vw;
  background: white;
  opacity: 0.6;
 
}
.address img{
  width: 2.7vw;
  height: 1.3vw;
}

.classifyNav1,.classifyNav2{
  
  padding-left:  9.9vw;
 font-size: 3.2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.classifyNav1 .tab,.classifyNav2 .tab{
  color: #333333;
  margin-right: 9.1vw;
}
.classifyNav1 img,.classifyNav2 img{
  width: 12vw;
  height: 12vw;
}
.classifyNav2,.classifyNav1{
  margin-top: 5.3vw;
}
.tab{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.router-link{
  color: #333333;
  text-decoration: none;
}
.router-link-active {
  color: #333333;
    text-decoration: none;
}
</style>