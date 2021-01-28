<template>
  <div class="home">
    <Top :head="head" :title="title"/>
    <Card :id="cardId" 
    :number="cardNumber" 
    :holder="cardHolder" 
    :validMonth="expiryMonth" 
    :validYear="expiryYear" 
    :vendor="vendor"/>
    <CardStack />
    <button @click="()=>$router.push('Addcard')">
    ADD NEW CARD
    </button>
    
    
  


  </div>
</template>

<script>

import Top from "@/components/Top.vue"
import CardStack from "@/components/CardStack.vue"
import Card from "@/components/Card.vue"
export default {
  components:{CardStack,Card,Top},
  data(){return{
    head: "E-WALLET",
    title: "ACTIVE CARD",
  }},
  computed: {
    cardNumber() {
      return this.$root.activeCard[0].number
    },
    cardHolder() {
      return this.$root.activeCard[0].holder
    },
    expiryMonth() {
      return this.$root.activeCard[0].validMonth
    },
    expiryYear() {
      return this.$root.activeCard[0].validYear
    },
    vendor() {
      return this.$root.activeCard[0].vendor;
    },
    cardId() {
      return this.$root.activeCard[0].id;
    }
  }
  
}

</script>
<style scoped>
.home{
    max-width: 600px;
    margin: auto;
    margin-top: 0;
    display: flex;
    flex-direction: column;
}
button{
    border-radius: 10px;
    width: 300px;
    margin: auto ;
    cursor: pointer;
    height: 80px;
    margin-top: 250px;
    
}    
</style>
