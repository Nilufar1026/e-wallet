<template>
<div>
    
    <Card class="cardstack"
    v-for="card in cards"
        :key="card.id" 
        :card="card"
        :id="card.id" 
        :number="card.number" 
        :holder="card.holder" 
        :validMonth="card.validMonth"
        :validYear="card.validYear"
        :vendor="card.vendor"
    />
        
</div>
  
       
</template>

<script>
import Card from "@/components/Card.vue"
export default {
    components:{Card},
    computed: {
   cards(){
     return this.$root.cards
      // return this.$root.cards.filter(
      //   (element,index)=> index >=1 && 
      //   index<=this.$root.cards.length)
    }
  },
}

</script>

<style scoped>
.cardstack{
  margin: 40px auto -240px auto;
}

</style>