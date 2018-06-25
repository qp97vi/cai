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
         
     {{title}}
             <img src="../assets/images/index/arrow_d.png" alt="" srcset="">
         </router-link>
         
        </div>
    
        <aa></aa>
        <div class="titleBox">
          <div class="title">
            <img src="../assets/images/index/title1.png" alt="" srcset="">
            <ul>
              <li><a> 代办公司注册多少钱，价格费用是多少？</a></li>
            </ul>
          </div>
        </div>
        <div class="commodityBox">
				<ul>
					<li class="li1" :style="li1">
						<a >
							<h5>公司名称核准</h5>
							<p>免费核名</p>
						</a>
					</li>
					<li class="li2" :style="li2">
						<a >
							<h5>商标查询</h5>
							<p>与商标局数据同步</p>
						</a>
					</li>
				</ul>
			</div>
      <div class="bigTitleBox">
				<h6>热门推荐</h6>
				<div class="line1"></div>
				<h6>一站式企业服务</h6>
			</div>
      <div class="ware">
				<ul>
					<li>
						
							<img src="../assets/images/index/caidada.png" alt="">
							<div class="rightBox">
								<h3 class="title">内资有限公司</h3>
								<div class="title3">在线提交材料，助您快速实现创业梦</div>
								<div class="price">0元起</div>
							</div>
					
					</li>
					<li>
						<a >
							<img src="../assets/images/index/caidada.png" alt="">
							<div class="rightBox">
								<h3 class="title">零申报企业（一年）</h3>
								<div class="title3">降低招聘全职会计成本,有效防范财务风险</div>
								<div class="price">999元起/年</div>
							</div>
						</a>
					</li>
					<li>
						<a >
							<img src="../assets/images/index/caidada.png" alt="">
							<div class="rightBox">
								<h3 class="title">普通商标注册一个</h3>
								<div class="title3">专人专办,24小时内申报,3个工作日内下...</div>
								<div class="price">599元起</div>
							</div>
						</a>
					</li>
					<li>
						<a >
							<img src="../assets/images/index/caidada.png" alt="">
							<div class="rightBox">
								<h3 class="title">外资公司变更</h3>
								<div class="title3">全称线上服务，财大大为你高效解决问题</div>
								<div class="price">500元起</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
      <div class="partner">
				<h6>合作伙伴</h6>
				<ul>
					 <li class="li1" :style="li1"></li>
		               <li class="li2" :style="li2"></li>
		               <li class="li3" :style="li3"></li>
		               <li class="li4" :style="li4"></li>
		               <li class="li5" :style="li5"></li>
		               <li class="li6" :style="li6"></li>
		               <li class="li7" :style="li7"></li>
		               <li class="li8" :style="li8"></li>
		               <li class="li9" :style="li9"></li>
		               <li class="li10" :style="li10"></li>
		               <li class="li11" :style="li11"></li>
		               <li class="li12" :style="li12"></li>
				</ul>
			</div>
      <div class="service">
				<h6>服务承诺</h6>
				<ul class="serviceBox">
					<li>
						<a href="javascript:void(0)"><img src="../assets/images/index/quality.png" alt="" srcset=""><span>品质保证</span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="../assets/images/index/goldService.png" alt="" srcset=""><span>金牌服务</span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="../assets/images/index/privacy.png" alt="" srcset=""><span>信息保密</span></a>
					</li>
					<li>
						<a href="javascript:void(0)"><img src="../assets/images/index/afterSale.png" alt="" srcset=""><span>售后无忧</span></a>
					</li>
				</ul>
			</div>
      <div class="logoBox">
				<img src="../assets/images/index/logo.png" alt="">
						<p>闽ICP备15017480号</p>
			</div>
        <footer-nav></footer-nav>
  </div>
 
</template>

<script>

import aa from './aa/aa'
import footerNav from './footerNav.vue'
import { mapState } from "vuex";
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
    },
    ...mapState(["title"]),
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
.titleBox{
  -webkit-box-shadow: 0px 1vw 1.8vw #EEEEEE;
  -moz-box-shadow: 0px 1vw 1.8vw #EEEEEE;
  -ms-box-shadow: 0px 1vw 1.8vw #EEEEEE;
  -o-box-shadow: 0px 1vw 1.8vw #EEEEEE;
  box-shadow: 0px 1vw 1.8vw #EEEEEE;
}
.title{
  display: flex;
  margin-left: 10.1vw;
  margin-top: 6.7vw;
  padding-bottom: 5.1vw;
  
}
.title img{
  width: 16vw;
  height: 4.5vw;
}
.title ul{
  list-style: none;
  font-size: 3.5vw;
  color: #666;
}
.commodityBox{
  margin-top: 3.6vw;
}
.commodityBox li{
      float: left;
    width: 44.8vw;
    height: 21.3vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.commodityBox ul{
      overflow: hidden;
    margin-left: 4.3vw;
}
.commodityBox .li1{
  background:url(../assets/images/index/regCompany.png) no-repeat center center;
  background-size: 44.8vw 21.3vw;
    margin-right: 2.4vw;
}
.commodityBox .li2{
  background:url(../assets/images/index/tradeSearch.png) no-repeat center center;
      background-size: 44.8vw 21.3vw;
}
.bigTitleBox{
      overflow: hidden;
    margin-left: 4.3vw;
    margin-top: 7.5vw;
    display: flex;
    align-items: center;
}
.bigTitleBox h6:nth-of-type(1){
      font-size: 5.9vw;
    font-weight: normal;
}
.bigTitleBox h6, .bigTitleBox .line1{
  float: left;
}
.bigTitleBox .line1{
      background: #999999;
    font-size: 4.3vw;
    width: 0.3vw;
    height: 5.3vw;
    margin-left: 1.3vw;
    margin-right: 1.3vw;
}
.bigTitleBox h6:nth-of-type(2){
      color: #999999;
    font-size: 4.3vw;
    font-weight: normal;
}
.ware{
  margin-left: 4.3vw;
    margin-top: 1.9vw;
}
.ware ul{
  list-style: none;
}
.ware li{
      overflow: hidden;
    border-bottom: 0.2vw solid #eeeeee;
    margin-right: 4.3vw;
}
.ware img{
      width: 26.7vw;
    height: 20vw;
    float: left;
    margin-bottom: 3.2vw;
    margin-top: 3.2vw;
}
.ware .rightBox{
      width: 62.3vw;
    float: left;
    margin-left: 2.4vw;
}
.ware .title{
  display: inline-block;
    width: 50.9vw;
    height: 4vw;
    line-height: 4vw;
    color: #333333;
    font-size: 4.3vw;
    margin-top: 4.5vw;
    font-weight: normal;
    margin-left: 0;
}
.ware .title3{
      font-size: 3.5vw;
    color: #888888;
    width: 62.5vw;
    padding-top: 2.1vw;
    letter-spacing: -0.1vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ware .price{
      color: #FF5252;
    font-size: 3.7vw;
    font-weight: normal;
    margin-top: 4vw;
    font-family: Arial;
}
.partner{
      margin-left: 4.3vw;
    margin-top: 7.5vw;
    margin-right: 4.3vw;
}
.partner h6, .service h6{
      color: #333333;
    font-size: 5.9vw;
    font-weight: normal;
}
.partner ul{
  list-style: none;
      margin-top: 4.8vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.partner li{
      width: 22.1vw;
    height: 9.6vw;
    border: 0.2vw solid #eeeeee;
     
}
.partner .li1{
  border-right: 0;
    border-bottom: 0;
    background: url(../assets/images/index/logo_03.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li2{
  border-right: 0;
   border-right: 0;
    border-bottom: 0;
    background: url(../assets/images/index/logo_05.png) no-repeat center center;
   background-size: 20.2vw 7.7vw;
}
.partner .li3{
      border-right: 0;
    border-bottom: 0;
    background: url(../assets/images/index/logo_07.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li4{
      border-bottom: 0;
    background: url(../assets/images/index/logo_09.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li5{
  border-right: 0;
    border-bottom: 0;
    background: url(../assets/images/index/logo_15.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li6{
  border-right: 0;
    border-bottom: 0;
    background: url(../assets/images/index/logo_17.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li7{
      border-right: 0;
    border-bottom: 0;
    background: url(../assets/images/index/logo_26.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li8{
      border-bottom: 0;
    background: url(../assets/images/index/logo_20.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li9{
      border-right: 0;
    background: url(../assets/images/index/logo_25.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li10{
      border-right: 0;
    background: url(../assets/images/index/logo_27.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li11{
      border-right: 0;
    background: url(../assets/images/index/logo_28.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.partner .li12{
      background: url(../assets/images/index/logo_29.png) no-repeat center center;
    background-size: 20.2vw 7.7vw;
}
.service{
      margin-left: 4.3vw;
    margin-top: 8vw;
}
.serviceBox{
      overflow: hidden;
    margin-top: 5.3vw;
    margin-right: 9.7vw;
    margin-left: 5.3vw;
}
.serviceBox{
  list-style: none;
}
.serviceBox li{
      float: left;
}
.serviceBox a{
      display: inline-block;
    width: 15.9vw;
    text-align: center;
}
.serviceBox img{
      width: 10.7vw;
    height: 10.7vw;
    margin-left: 0.8vw;
}
.serviceBox span{
      display: inline-block;
    width: 15.9vw;
    font-size: 3.2vw;
    color: #666666;
}
.serviceBox li:nth-of-type(2){
      margin-left: 5.7vw;
    margin-right: 5.7vw;
}
.serviceBox li:nth-of-type(3){
      margin-right: 5.7vw;
}
.logoBox{
      text-align: center;
    margin-top: 8vw;
    margin-bottom: 13vw;
}
.logoBox img{
      width: 15.5vw;
    height: 6.9vw;
    display: inline-block;
}
.logoBox p{
  color: #666666;
    font-size: 3.2vw;
    margin-top: 1.9vw;
    margin-bottom: 3.5vw;
}
</style>