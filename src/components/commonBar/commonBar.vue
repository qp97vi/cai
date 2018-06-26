<template>
   <div class="box">
        <div class="top" @click="isShowChange">
            <img src="../../assets/images/datail/arrow_left.png" alt="" srcset="" class="left" @click="topClick">
            <div class="btn">{{top}}
                <img src="../../assets/images/datail/arrowNav.png" alt="" srcset="" class="arrowNav">
            </div>
            <img src="../../assets/images/datail/car.png" alt="" srcset="" class="car">
        </div>
        <ul class="" v-if="isShow">
            <router-link to="./registerCompany" tag="li"><a>公司注册</a></router-link>
            <router-link to="./keepAccount" tag="li"><a>代理记账</a></router-link>
            <router-link to="./TrademarkRegister" tag="li"><a>商标注册</a></router-link>
            <router-link to="./businessChange" tag="li"><a>工商变更</a></router-link>
            <router-link to="./TrademarkBand" tag="li"><a>商标相关</a></router-link>
            <router-link to="./payment" tag="li"><a>补差服务</a></router-link>
        </ul>
   </div>
</template>

<script>
export default {
    name:"commonBar",
    props:["top"],
    data(){
       return{
           isShow:false,
       }
    },
    methods:{
       isShowChange:function(){
           this.isShow=!this.isShow
       },
       topClick:function(){
           this.$router.push({name:'index'})
       }
    }
}
</script>

<style scoped>
    .top{
        display: flex;
        justify-content: space-between;
        padding: 0 4.3vw;
        height: 10.7vw;
        align-items: center;
        border-bottom: 1px solid #ddd;
    }
    .left{
        width: 2.4vw;
        height: 4.8vw;
    }
    .car{
        width: 5.9vw;
        height: 5.6vw;
    }
    .arrowNav{
        width: 2.8vw;
        height: 1.5vw;
    }
    .btn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 4.5vw;
        color: #222;
        margin-right: -6vw;
    }
    ul{
           width: 100vw;
    
    font-size: 4.5vw;
    color: #222222;
    text-align: center;
    z-index: 10;
    background: white; 
    }
    li{
       
        border-bottom: 1px solid #DDDDDD;
    }
    li a{
            color: #222222;
    display: inline-block;
    height: 10.7vw;
    line-height: 10.7vw;
    text-decoration: none;
    }
</style>


