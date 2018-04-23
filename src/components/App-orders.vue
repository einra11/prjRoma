<template>
  <div>
      <h1>Hello World!</h1>
      <div class="wrapper">
        <section class="items">
          <div class="box one">
          </div>
          <div class="box two">
          </div>
          <div class="box three">
          </div>
          <div class="box one">
          </div>
        </section>
        <section class="counter">
          <div class="box four">
          </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.wrapper{
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
}
.items{
  display: flex;
  background: #E9F1DF;
  margin-right: 10px;
  max-width: 500px;
  flex-wrap: wrap;
}
.box{
  height:200px;
  min-width: 200px;
  flex-grow: 1;
}
.one{
  background: purple;
}
.two{
  background: yellow;
}
.three{
  background: orange;
}
.four{
  height: 500px;
  width: 300px;
  max-width: 500px;
  background: green;
}
</style>
