<template>
<div>
    <div class="box" 
    :class="backGroundColor"
    @click="clickCard">
        <img class="chip-dark" src="@/assets/img/chip-dark.svg">
        <img v-if="vendor === 'vendor-bitcoin' " 
        class="vendor" src="@/assets/img/vendor-bitcoin.svg"/>
        <img v-else-if="vendor === 'vendor-blockchain' " 
        class="vendor" src="@/assets/img/vendor-blockchain.svg"/>
        <img v-else-if="vendor === 'vendor-evil' " 
        class="vendor" src="@/assets/img/vendor-evil.svg"/>
        <img v-else-if="vendor === 'vendor-ninja' " 
        class="vendor" src="@/assets/img/vendor-ninja.svg"/>
        <h1 class="card-number">{{ number }}</h1>
        <div class="card-info">
            <div class="card-name">
                <p>CARDHOLDER NAME</p>
                <p class="card-holderName">
                {{ holder }} 
                </p> 
            </div>
            <div class="card-date">
                <p>VALID THRU</p>
                <p class="card-monthYear">
                {{validMonth}}/{{validYear}}
                </p>
            </div>
        </div> 
    </div>
    
</div>
</template>

<script>


export default {
    props: {
    number: String,
    holder: String,
    validMonth:String,
    validYear: String,
    vendor: String,
    id: String, 
  },
  methods: {
    clickCard() {
      this.$root.getCard(this.id);

    }
  },
  computed: {
    backGroundColor() {
      if (this.vendor === "vendor-bitcoin") {
        return "color-bitcoin"
      }
      else if (this.vendor === "vendor-blockchain") {
        return "color-blockchain"
      }
      else if (this.vendor === "vendor-evil") {
        return "color-evil"
      }
      else if (this.vendor === "vendor-ninja") {
        return "color-ninja"
      }
      else {
        return "color-grey"
      }
    }
  }
}
</script>

<style scoped>
.box{
    border:1px solid black;
    height:240px;
    width: 400px;
    margin: -10px auto 10px auto;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 2px 4px 18px 5px;
    color: currentColor;
    opacity: 0.8;
}

img.chip-dark{
    margin-top: 10px;
    margin-right: 250px;
}
img.icon{
    margin-top: 7px;
    margin-right: 0px;
}
.card-number{
    font-size: 20px;
}
.card-info{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: -10px;
}
.card-number{
    font-size: 30px;
}
.color-bitcoin {
  background-color: #ffb43f;
}
.color-blockchain {
  background-color: #8051E5;
  color: white;
}
.color-ninja {
  background-color: #2f2f2f;
  color: white;
}
.color-evil {
  background-color: #DD2f4e;
  color: white;
}
.color-grey {
background: #d8d8d8;
}
</style>