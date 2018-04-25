<template>
  <div>
      <h1 class="title">Choose Items!</h1>
      <div class="wrapper">
        <!-- Populate this items through ur DB using V-for, add button related to the ordered -->
        <section class="items">
          <div class="box" v-for="items in avItems">
            <img src="../assets/imgIcon.png" alt="">
            <h3>{{items.itemName}}: &#x20B1;{{items.itemPrice}}</h3>
            <button type="button" name="button" class="chck" @click="addItem(items.itemName, items.itemPrice) , totalPrice+=items.itemPrice">Add to Cart</button>
          </div>
        </section>
        <section class="counter">
          <div class="four">
            <!-- calculate total every time user add pizza-->
                  <section class="total">
                    <h1>Total : &#x20B1; {{totalPrice}}</h1>
                  </section>
                  <section class="orderedContainer">
                    <!-- Need to apply V-for, for the list ordered, make add function -->
                    <h2>Ordered</h2>
                    <div class="contentItems">
                      <ul v-for="(ordrd, key) in counterClc.itemsOrdered">
                        <li><button type="button" @click="totalPrice-=ordrd.price, deleteArray(key)">X</button> {{ordrd.name}} : &#x20B1; {{ordrd.price}}</li>
                      </ul>
                    </div>
                  </section>
                  <button type="button" name="button" class="chck">Check-out</button>
          </div>
        </section>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        avItems:[
            {itemId:"1",itemName:"Gucci Armor",itemPrice:240, itemImg:""},
            {itemId:"2",itemName:"MansNotH Armor",itemPrice:330, itemImg:""},
            {itemId:"3",itemName:"Canada Armor",itemPrice:160, itemImg:""},
            {itemId:"4",itemName:"Germany Armor",itemPrice:160, itemImg:""},
            {itemId:"5",itemName:"STFU Armor",itemPrice:160, itemImg:""},
            {itemId:"6",itemName:"MF Armor",itemPrice:160, itemImg:""}
        ],
        counterClc:{
            itemQnty:null,
            itemsOrdered:[]
        },
        totalPrice:0.0,
    }
  },
  methods:{
    addItem:function(name, price){
      this.counterClc.itemsOrdered.push({name,price});
      console.log(this.counterClc.itemsOrdered)
    },
    deleteArray: function(index) {
        this.$delete(this.counterClc.itemsOrdered, index);
      },
    postDate:function(){

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
  background: #1F2041;
  flex-wrap: wrap;
  min-width: 200px;
  justify-content: center;
  margin-right: 10px;
}
.box{
  max-height: 250px;
  min-width: 200px;
  margin: 10px;
  display: flex;
  flex-flow: column;
  color: #fff;
  text-align: center;
  background: #9649CB;
  flex-grow: 0;
  border-radius: 5px;
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
  border-radius: 5px;
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
  width: 290px;
  margin-bottom: 10px;
}
.title{
  background: #36B1BF;
  margin-bottom: 0;
  padding: 5px;
  color: #fff;
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
}
.chck:hover{
  background: #3cb0fd;
  text-decoration: none;
}
.box .chck{
    font-size: 18px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius: 5px;
}
</style>
