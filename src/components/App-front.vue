<template>
  <div>
      <h1 class="title">Transaction Method</h1>
      <div class="wrapper">
              <!-- <button type="button" class="chck">Dine In</button> -->
              <router-link to="/orders2" class="chck">Dine In</router-link>
              <!-- <button type="button" class="chck">Take Out</button> -->
              <router-link to="/orders" class="chck">Take-Out</router-link>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 100%;
    margin: 0 auto;
    background: #fff;
    padding: 10px;
    -webkit-box-shadow: 0px 1px 3px #666666;
    -moz-box-shadow: 0px 1px 3px #666666;
    box-shadow: 0px 1px 3px #666666;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
}
.chck{
  -webkit-box-shadow: 0px 1px 3px #666666;
  -moz-box-shadow: 0px 1px 3px #666666;
  box-shadow: 0px 1px 3px #666666;
  color: #ffffff;
  font-size: 38px;
  background: #3498db;
  padding: 10px 10px 10px 10px;
  text-decoration: none;
  border: 0;
  margin: 10px;
}
.chck:hover{
  background: #3cb0fd;
  text-decoration: none;
}
.title{
    width: 100%;
    background: #95B229;
    margin-top:40px;
    margin-bottom: 0;
    padding: 10px;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
}
</style>
