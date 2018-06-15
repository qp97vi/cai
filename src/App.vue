<template>
  <div id="app">

  
  
  
 
    <router-view class="section"></router-view>
  
  
  </div>
</template>

<script>
import indexNav from './components/indexNav.vue'



export default {
  name: 'app',
  components: {
   indexNav,
  
  }
}
</script>

<style>
html,body{
  display: flex;
  flex-direction: column;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.section{
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
