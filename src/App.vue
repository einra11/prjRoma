<template>
  <div>
    <div class="wrapper">
      <app-order></app-order>
    </div>

  </div>
</template>

<script>

import appOrders from './components/App-orders.vue';

export default {
  data () {
    return {

    }
  },
  components:{
    'app-order':appOrders
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
html{
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
  height: 140%;
}
body{
  margin: 0 auto;
  font-family:'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}
.wrapper{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}

</style>
