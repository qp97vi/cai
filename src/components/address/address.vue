<template>
    <div>
        <top-nav message="城市切换"></top-nav>
        <div class="content">
            <div class="top">当前定位城市</div>
            <div class="labelBox">
                <div class="label">
                    <div class="label1"  :style="label1">深圳</div>
                </div>
               
            </div>
            <div class="top1">已开通城市</div>
            <div class="title">
                <div class="label" v-for="item in items1" :key="item.id" @click="a(item.name)">
                    {{item.name}}
                </div>
            </div>
           
            
        </div>
    </div>
</template>
<script>
import topNav from '../topNav/topNav.vue'
export default {
    name:'address1',
   
    data(){
        return{

       
            items1:[
                {
                    id:1,
                    name:"厦门"
                },
                {
                    id:2,
                    name:"深圳"
                },
                {
                    id:3,
                    name:"广州"
                },
                {
                    id:4,
                    name:"中山"
                },
                {
                    id:5,
                    name:"东莞"
                },
                {
                    id:6,
                    name:"昆明"
                },
                {
                    id:7,
                    name:"杭州"
                },
                {
                    id:8,
                    name:"福州"
                },
                {
                    id:9,
                    name:"重庆"
                },
                {
                    id:10,
                    name:"苏州"
                },
                {
                    id:11,
                    name:"嘉兴"
                },
                {
                    id:12,
                    name:"常州"
                }
            ]
      }
    },
    
    components:{
        topNav
    },
    methods:{
        a(a){
           
         this.$router.push({name:'index', query: { userId:a }})
         
        }
    }
}
</script>
<style scoped>
    .content{
        display: flex;
        flex-direction: column;
        background: #f4f4f4;
        height: 100%

    }
    .label1{
       display: flex;
       align-items: center;
       justify-content: center;
         width: 27.7vw;
        height:8.5vw;
        background: url(../../assets/images/cityChange/address.png) no-repeat 4vw center;
        background-size: 2.7vw 3.7vw;
    }
    .top,.top1{
        color: #888888;
        padding: 0 4.3vw;
    }
    .label{
        width: 27.7vw;
        height:8.5vw;
        background: white; 
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3.2vw;
        
       
    }
    .labelBox{
        padding: 0 4.3vw;
    }
    .title{
        display: flex;
        flex-wrap: wrap;
        padding: 0 4.3vw;
        justify-content: space-between
    }
</style>

