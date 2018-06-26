<template>
    <div>
        <div class="content">
         
             <div class="classifyNav1">
              <router-link to="./registerCompany" class="tab"><img src="../../assets/images/index/companyRegister.png" alt="" srcset="">公司注册</router-link>
              <router-link to="./keepAccount" class="tab"> <img src="../../assets/images/index/charge.png" alt="" srcset=""> 代理记账</router-link>
              <router-link to="./TrademarkRegister" class="tab"><img src="../../assets/images/index/tradeRegister.png" alt="" srcset=""> 商标注册</router-link>
              <router-link to="./businessChange" class="tab"><img src="../../assets/images/index/companyChange.png" alt="" srcset=""> 工商变更</router-link>
           </div>
           <div  class="classifyNav2">
              <router-link to="./TrademarkBand" class="tab"><img src="../../assets/images/index/tradeReal.png" alt="" srcset=""> 商标相关</router-link>
              <router-link to="./payment" class="tab"><img src="../../assets/images/index/panyment.png" alt="" srcset=""> 补差服务</router-link>
              <router-link to="./classify" class="tab"><img src="../../assets/images/index/classify.png" alt="" srcset=""> 全部分类</router-link>
               <router-link to="./classify" class="tab" ></router-link>
           </div>
          
            
          
        </div>
    </div>
</template>

<script>
export default {
  name: 'aa',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.classifyNav1,.classifyNav2{
  padding-left:  9.9vw;
  padding-right: 9.9vw;
 font-size: 3.2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.classifyNav1{
  justify-content: space-between;
}
.classifyNav1 .tab,.classifyNav2 .tab{
  color: #333333;
  /* margin-left:6.8vw; */
  text-decoration: none;
  width: 15.9vw;
}
.classifyNav2 .tab:nth-last-of-type(1){
  
}

.classifyNav1 img,.classifyNav2 img{
  width: 12vw;
  height: 12vw;
  margin-bottom: 2.1vw;
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
  text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
</style>
