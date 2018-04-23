<template>
  <div>
      <h1>Choose Items!</h1>
      <div class="wrapper">
        <section class="items">
          <div class="box one">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 1</h2>
            <button type="button" name="button">Add</button>
          </div>
          <div class="box two">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 2</h2>
            <button type="button" name="button">Add</button>
          </div>
          <div class="box three">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 3</h2>
            <button type="button" name="button">Add</button>
          </div>
          <div class="box one">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 4</h2>
            <button type="button" name="button">Add</button>
          </div>
          <div class="box one">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 5</h2>
            <button type="button" name="button">Add</button>
          </div>
          <div class="box one">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 6</h2>
            <button type="button" name="button">Add</button>
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
  background: #222;
  flex-wrap: wrap;
  min-width: 200px;
  justify-content: center;
}
.box{
  min-height: 200px;
  min-width: 200px;
  margin: 10px;
  display: flex;
  flex-flow: column;
  color: #222;
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
/*.counter{
  position: fixed;
  padding-top: 40px;
  margin-left: 700px;
}*/
img{
  width: 100%;
  max-width: 200px;
  max-height: 130px;
}
.box button{
}
</style>
