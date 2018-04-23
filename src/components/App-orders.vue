<template>
  <div>
      <h1 class="title">Choose Items!</h1>
      <div class="wrapper">
        <!-- Populate this items through ur DB using V-for, add button related to the ordered -->
        <section class="items">
          <div class="box one">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 1</h2>
            <button type="button" name="button">Add to Cart</button>
          </div>
          <div class="box two">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 2</h2>
            <button type="button" name="button">Add to Cart</button>
          </div>
          <div class="box two">
            <img src="../assets/imgIcon.png" alt="">
            <h2>Item 2</h2>
            <button type="button" name="button">Add to Cart</button>
          </div>
        </section>
        <section class="counter">
          <div class="four">
            <!-- calculate total every time user add pizza-->
                  <section class="total">
                    <h1>Total : &#x20B1; 999999</h1>
                  </section>
                  <section class="orderedContainer">
                    <!-- Need to apply V-for, for the list ordered, make add function -->
                    <h2>Ordered</h2>
                    <div class="contentItems">
                      <ul>
                        <li><button type="button" name="button">X</button> Level 1 Gucci Armor</li>
                        <li><button type="button" name="button">X</button> Level 1 Gucci Armor</li>
                        <li><button type="button" name="button">X</button> Level 1 Gucci Armor</li>
                        <li><button type="button" name="button">X</button> Level 1 Gucci Armor</li>
                        <li><button type="button" name="button">X</button> Level 1 Gucci Armor</li>
                      </ul>
                    </div>
                  </section>
                  <button type="button" name="button">Check-out</button>
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
  background: #F2385A;
  flex-wrap: wrap;
  min-width: 200px;
  justify-content: center;
}
.box{
  max-height: 250px;
  min-width: 200px;
  margin: 10px;
  display: flex;
  flex-flow: column;
  color: #222;
  text-align: center;
  background: #8FCFDB;
  flex-grow: 0;
}
.four{
  height: 500px;
  width: 300px;
  max-width: 500px;
  background: #E9F1DF;
  display: flex;
  flex-flow: column;
}
.counter{
  margin:0;
}
img{
  width: 100%;
  max-width: 200px;
  max-height: 140px;
}
.box button{

}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
  padding: 3px;
}
.total{
  background: purple;
  color: #fff;
  padding: 5px;
  margin: 0;
  text-align: center;
}
.orderedContainer{
  background:#F5A503;
  color: #fff;
  padding: 5px;
}
.orderedContainer .contentItems{
  background: #E9F1DF;
  color:#222;
  width: 200px;
  margin-bottom: 10px;
}
.title{
  background: #36B1BF;
  margin-bottom: 0;
  padding: 5px;
  color: #fff;
}
</style>
