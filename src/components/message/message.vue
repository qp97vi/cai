<template>
    <div>
        <!-- <top-nav message="个人中心"></top-nav> -->
        <div class="content">
            <div class="top">
                <img src="../../assets/images/personal/ren.png" alt="" srcset="">
                <div>登录/注册</div>
            </div>
            <ul class="center">
                <router-link tag="li" to="" class="li1" :style="li1"><a href="">我的订单</a></router-link>
                <router-link tag="li" to="" class="li2" :style="li2"><a href="">购物车</a></router-link>
                <router-link tag="li" to="" class="li3" :style="li3"><a href="">办理进度</a></router-link>
                <router-link tag="li" to="" class="li4" :style="li4"><a href="">财务报表</a></router-link>
            </ul>
            <div class="bottom">
                <ul>
                     <router-link tag="li" to=""><a href="">我要补差</a></router-link>
                     <router-link tag="li" to=""><a href="">我要续费</a></router-link>
                     <router-link tag="li" to=""><a href="">我要推荐</a></router-link>
                     <router-link tag="li" to=""><a href="">我要反馈</a></router-link>
                </ul>
                <ul>
                     <router-link tag="li" to=""><a href="">在线咨询</a></router-link>
                     <router-link tag="li" to=""><a href="">客服热线</a></router-link>
                     <router-link tag="li" to=""><a href="">关于财大大</a></router-link>
                    
                </ul>
                <div class="button">退出登录</div>
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import topNav from '../topNav/topNav.vue'
import footerNav from '../../components/footerNav'
export default {
    name:"message",
    data(){
        return{
           li1:"li1",
           li2:"li2",
           li3:"li3",
           li4:"li4"
        }
    },
    components:{
        topNav,
        footerNav
    }
}
</script>
<style scoped>
.content{
    background: #F5F5F5;
    height: 100%
}
    .top{
        display: flex;
        align-items: center;
        color: #222222;
        font-size: 5.3vw;
        padding-left: 5.3vw;
        padding-top: 4.3vw;
        padding-bottom: 7.7vw;
        background: white;
    }
    .center li{
        display: flex;
        height: 12.8vw;
        align-items: flex-end;
        padding-bottom: 2vw;
    }
    .center{
        display: flex;
        justify-content: space-around;
        background: white;
        margin-bottom: 4vw;
    }
    .li1{
        background: url(../../assets/images/personal/pay.png) no-repeat center top;
        background-size: 5.9vw 5.9vw;
        
    }
    .li2{
        background: url(../../assets/images/personal/car.png) no-repeat center top;
        background-size: 5.9vw 5.9vw;
        
    }
    .li3{
        background: url(../../assets/images/personal/chart.png) no-repeat center top;
        background-size: 5.9vw 5.9vw;
        
    }
    .li4{
        background: url(../../assets/images/personal/develo.png) no-repeat center top;
        background-size: 5.9vw 5.9vw;
        
    }
    img{
        width: 16vw;
        height: 16vw;
    }
    a{
        text-decoration: none;
    }
    .center a{
        color: #333333;
        font-size: 3.5vw;
    }
    .bottom li a{
        color: #333333;
        padding-left: 3.2vw;
    }
    .bottom ul{
        padding: 0 4.3vw;
        margin-bottom: 4.3vw;
    }
    .bottom li{
        height: 13.3vw;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #cccccc;
        background: white;
    }
    .button{
        border: 0;
        background: white;
        color: #333333;
       
        display: flex;

        justify-content: center;
        align-items: center;
        margin: 0 4.3vw;
        height: 11.7vw;

    }
</style>


