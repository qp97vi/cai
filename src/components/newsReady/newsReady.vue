<template>
    <div>
        <top-nav message="消息"></top-nav>
        <div class="article">
            <div class="articleTop">
                <div class="title">代理记账服务</div>
                <div class="timer">2018-05-28 12:30</div>
            </div>
           <div class="content">
               您的代账服务将于35天后到期，推荐您及时续费，继续享受优质服务。您的代账服务将于35天后到期，推荐您及时续费，继续享受优质服务。您的代账服务将于35天后到期，推荐您及时续费，继续享受优质服务。您的代账服务将于35天后到期，推荐您及时续费，继续享受优质服务。您的代账服务将于35天后到期，推荐您及时续费，继续享受优质服务。
           </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import topNav from '../topNav/topNav.vue'
import footerNav from '../../components/footerNav'
export default {
    name:"newsReady",

    components:{
        topNav,
        footerNav
    }
}
</script>
<style scoped>
    .article{
        display: flex;
        flex-direction: column;
        padding: 0 7.5vw;
    }
    .articleTop{
        display: flex;
        justify-content: space-between;
        padding-top: 6.7vw;
        align-items: center;
        padding-bottom: 3vw;
    }
    .title{
        color: #333333;
    }
    .timer{
        color: #999999
    }
    .content{
        color: #888888;
        line-height: 7.5vw;
    }
    </style>
