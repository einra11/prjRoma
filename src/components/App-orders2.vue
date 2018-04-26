<template>
  <div>
      <div class="wrapper">
          <router-link to="/" class="title back">Go back?</router-link>
          <h1 class="title">Dine-In Choose Items!</h1>
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
                        <li><button type="button" @click="totalPrice-=ordrd.price, deleteArray(key)"class="xBtn">X</button> {{ordrd.name}} : &#x20B1; {{ordrd.price}}</li>
                      </ul>
                    </div>
                  </section>
                  <button type="button" name="button" class="chck">Check-out</button>
          </div>
        </section>
        <!-- insert Here! -->
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
            {itemId:"6",itemName:"MF Armor",itemPrice:160, itemImg:""},
            {itemId:"7",itemName:"Moon Armor",itemPrice:160, itemImg:""},
            {itemId:"8",itemName:"Sun Armor",itemPrice:160, itemImg:""},
            {itemId:"9",itemName:"Cloud Armor",itemPrice:160, itemImg:""}

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

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.items{
  display: flex;
  background: #ffff;
  flex-wrap: wrap;
  min-width: 200px;
  padding: 0;
  justify-content: center;
  padding-bottom: 5px;
  height: 400px;
  overflow: auto;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.5);
  width: 460px;
}
.box{
  max-height: 250px;
  min-width: 200px;
  margin: 5px;
  display: flex;
  flex-flow: column;
  color: #fff;
  text-align: center;
  background: #9649CB;
  flex-grow: 0;
  border-radius: 5px;
}
.four{
  width: 300px;
  max-width: 500px;
  background: #ffff;
  display: flex;
  flex-flow: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  height: 320px;
}
.counter{
  max-height: 400px;
  margin:0;
  flex-grow: 0;
}
img{
  width: 100%;
  max-width: 200px;
  max-height: 140px;
  border-radius: 5px;
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
  height: 185px;
}
.orderedContainer .contentItems{
  background: #E9F1DF;
  color:#222;
  width: 290px;
  margin-bottom: 10px;
  overflow: auto;
  max-height: 100px;
}
.title{
  //background: #95B229;
  background:#F37720;

  margin: 0;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  text-decoration: none;
  text-align: center;
  width:100%;
}
.back{
    width:20%;
    margin-top:40px;
    margin-bottom: 10;
    background: dodgerblue;
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
.mapa{
  margin-top:0;
  margin-bottom: 0px;;
  background: white;
  max-height: 350px;
  justify-content: center;
  border-top: 1px solid;
}
.topSection{
  margin-top: 0;
  margin-bottom:0;
  height: 50px;
  padding: 0;
}
.xBtn{
    border: 0;
    border-radius: 3px;
}
.xBtn:hover{
    background: dodgerblue;
}
</style>
