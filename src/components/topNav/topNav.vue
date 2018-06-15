<template>
    <div class="topNav">{{message}}</div>
</template>
<script>
export default {
    name:"topNav",
   props:["message"]
   
}
</script>

<style scoped>
    .topNav{
        width: 100%;
       
        background: #ffffff;
        height:10.7vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #cccccc;
        flex-shrink: 0;
    }
</style>

