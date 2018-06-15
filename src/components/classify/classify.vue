<template>
 <div class="classify">
     <top-nav  message="分类" class="TopNav"></top-nav>
     <el-tabs v-model=" activeName2" @tab-click="handleClick" :tab-position="tabPosition" class="tabs" >
    <el-tab-pane  name="first">
        <div slot="label" class="redBox">公司注册</div>公司注册
    </el-tab-pane>
   
     <el-tab-pane label="代理记账" name="second">代理记账</el-tab-pane>
    <el-tab-pane label="商标注册" name="third">商标注册</el-tab-pane>
    <el-tab-pane label="工商变更" name="fourth">工商变更</el-tab-pane>
    <el-tab-pane label="商标相关" name="five">商标相关</el-tab-pane>
    <el-tab-pane label="补差服务" name="six">补差服务</el-tab-pane>
  </el-tabs> 

   <!-- <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs> -->
  <footer-nav></footer-nav>
 </div>
</template>
<script>
import topNav from '../topNav/topNav.vue'
import footerNav from '../footerNav'
  export default {
      name:'classify',
    data() {
      return {
        activeName2: 'first',
        tabPosition: 'left'
      };
    },
    components:{
        topNav,
        footerNav
    },
    methods: {
      handleClick() {
        // console.log(tab, event);
      }
    }
  };
</script>
<style >
    html,body{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .classify{
        display: flex;
        flex-direction: column;
         height: 100%;
    }
    .redBox{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
   .classify .el-tabs__active-bar{
       background: #FFD942;
   }
   .classify .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after{
       left: 0;
   }
   .classify .el-tabs__item:hover,.classify .el-tabs__item.is-active{
       color: #333;
   }
   .classify .el-tabs__nav{
       z-index: 0
   }
   .classify .el-tabs__nav-wrap::after{
       background: #fff;
   }
    .tabs,.classify{
       
        background: #F4F4F4;
    }
    .tabs{
        height: 100%;
        overflow: auto;
        flex: 1;
    }
    
    .el-tabs__item.is-active{
        background: white;
    }
 
    .el-tabs--left.el-tabs--card .el-tabs__nav{
        border: 0
    }
   .classify .el-tabs--left.el-tabs--card .el-tabs__item.is-left{
        border: 0;
    }
    .classify .el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{
        border: 0;
    }
    .classify .el-tabs--card>.el-tabs__header .el-tabs__nav{
        border: 0;
    }
    .classify .el-tabs--card>.el-tabs__header{
        border: 0;
    }
    .classify .el-tabs--left.el-tabs--card .el-tabs__item.is-left:first-child{
        border: 0;
    }
    .classify .el-tabs__content{
        height: 100%;
        background: white;
        padding-left: 12px;
        overflow: auto;
    }
    .classify .el-tabs--left .el-tabs__header.is-left{
        margin-right: 0;

    }
    .classify .el-tabs--left, .el-tabs--right{
        overflow: auto;
    }
</style>



