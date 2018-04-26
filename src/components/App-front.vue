<template>
  <div>

      <div class="wrapper">
          <h1 class="title">Transaction Method</h1>
          <br>
          <hr width=460>
              <router-link to="/orders2" class="chck dine">Dine In</router-link>
              <router-link to="/orders" class="chck take">Take-Out</router-link>
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
body{
    text-align: center;
}
.wrapper{
    width: 500px;
    margin: 0 auto;
    background: #fff;
    padding: 10px;
    -webkit-box-shadow: 0px 1px 3px #666666;
    -moz-box-shadow: 0px 1px 3px #666666;
    box-shadow: 0px 1px 3px #666666;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content:center;
    display: flex;
    flex-flow:column;
    margin-top: 40px;
    padding-top:0;
    border-radius: 5px;
}
.chck{
  -webkit-box-shadow: 0px 1px 3px #666666;
  -moz-box-shadow: 0px 1px 3px #666666;
  box-shadow: 0px 1px 3px #666666;
  color: #ffffff;
  font-size: 30px;
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
    background: #95B229;
    margin-bottom: 0;
    padding: 10px;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    width:100%;
    border-radius: 0px 5px 5px 0px;
    font-size: 48px;

}
.dine{
    background:#ED242D;
}
.take{
    background:#F37720;
}
</style>
