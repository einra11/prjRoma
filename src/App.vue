<template>
  <div>
    <div class="wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import appOrders from './components/App-orders.vue';
import appFront from './components/App-front.vue';

export default {
  data () {
    return {

    }
  },
  components:{
    'app-order':appOrders,
    'app-front':appFront
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
html{
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
  height: 100%;
}
body{
  margin: 0 auto;
  font-family:'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}
.wrapper{
    max-width: 960px;
    margin: 0 auto;
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
