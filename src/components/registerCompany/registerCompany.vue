<template>
    <div>
        <common-bar top="注册公司"></common-bar>
        <div class="banner">
            <img src="../../assets/images/datail/banner.png" alt="">
        </div>
        <div class="wares">
            <!-- <div class="share"></div> -->
            <div class="priceBox">
                <span class="price">￥</span>
                <span class="price" id="zcgsPrice">0</span>
                <div class="delBox">
                    <div class="tips">
                         6月促销活动
                    </div>
                    <del id="zcgsOldPrice">500</del>
                </div>
            </div>
            <div class="detailTitle" id="brandDesc" style="margin-top:1.8vw">内资有限公司</div>
            <div class="details">工本费客户自行承担,助您快速实现创业梦</div>
        </div>
    </div>
</template>
<script>
import commonBar from "../commonBar/commonBar"
export default {
    name:"registerCompany",
    components:{
        commonBar
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
    .banner{
        height: 50.1vw;
    }
    .banner img{
            width: 100vw;
    height: 50.1vw;
    }
    .wares{
        margin: 0 4.3vw;
    position: relative;
    }
    .priceBox{
            overflow: hidden;
    padding-bottom: 2vw;
    }
    .wares .price{
            color: #FF5252;
    font-size: 5.3vw;
    margin-top: 3.2vw;
    display: inline-block;
    float: left;
    
    }
    .delBox{
            width: 18.7vw;
    height: 5.3vw;
    float: left;
    margin-left: 2.1vw;
    margin-top: 1.3vw;
    }
    .delBox .tips{
            text-align: center;
    height: 4.3vw;
    width: 19.1vw;
    color: #FFFFFF;
    line-height: 4.3vw;
    font-size: 2.7vw;
    margin-top: 0;
    /* background: url(../../images/product/sales.png) no-repeat center center;
    background-size: 19.1vw 4.3vw; */
    font-family: "PingFang";
    }
    .wares del{
            display: inline-block;
    color: #999999;
    font-size: 2.7vw;
    margin-top: 0.6vw;
    }
    .wares .detailTitle{
            color: #333333;
    font-size: 4.8vw;
    font-weight: 500;
    margin-top: 1.8vw;
    }
    .wares .details{
            color: #888888;
    margin-top: 2.1vw;
    font-size: 4vw;
    }
</style>

