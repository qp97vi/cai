<template>
    <div>
        <top-nav message="消息"></top-nav>
        <router-link tag="div" class="bigBox" to="./newsReady">
            <div class="box">
                <div class="titleBox">
                    <div class="title">确认收单</div>
                    <div class="timer">2018-05-28 12:30</div>
                </div>
                <div class="cont">
                    税期即将开始，请贵公司协助准备（销售单据、采购单据、费用单据等）给您的专属财税顾问。
                </div>
                <div class="bottom">
                    查看详情
                </div>
            </div>
        </router-link>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
import topNav from '../topNav/topNav.vue'
import footerNav from '../../components/footerNav'
export default {
    name:"message",
    components:{
        topNav,
        footerNav
    }
}
</script>
<style scoped>
    .box{
     border: 1px solid #ccc;
     border-radius: 0.8vw;
    }
    .bigBox{
        padding: 0 4.3vw;
        margin-top: 2vw;
    }
    .titleBox{
        display: flex;
        justify-content: space-between;
        padding: 0 3.5vw;
        padding-top: 4.3vw;
        padding-bottom: 2vw;
    }
    .title{
        color: #333333;
    }
    .timer{
        color: #999999;
    }
    .cont{
        color: #888888;
         padding: 0 3.5vw;
         line-height: 6.7vw;
    }
    .bottom{
        margin-top: 3vw;
        color: #FF5252;
         padding: 0 3.5vw;
         margin-bottom: 2vw;
        
    }
</style>


