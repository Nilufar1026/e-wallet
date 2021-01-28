<template>
  <div class="wrapper">
    <Top :head="head" :title="title"/>
    <Card 
    :id="formId" 
    :number= "formNum" 
    :holder= "formHolder" 
    :validMonth= "formMonth" 
    :validYear= "formYear" 
    :vendor= "formVendor"/>
    <CardForm />
    
  </div>
</template>

<script>
import Top from "@/components/Top.vue"
import Card from "@/components/Card.vue"
import CardForm from "@/components/CardForm.vue"
export default {
  components:{Top,Card,CardForm},
  data(){return{
    head: "ADD A NEW BANK CARD",
    title: "NEW CARD",
  }},
  computed: {
   formNum() {
      return this.$root.form.number
    },
    formHolder() {
      return this.$root.form.holder
    },
    formMonth() {
      return this.$root.form.validMonth
    },
    formYear() {
      return this.$root.form.validYear
    },
    formVendor() {
      return this.$root.form.vendor;
    },
    formId() {
      return this.$root.form.id;
    }
  }
}
</script>
<style scoped>
.wrapper{
  width: 500px;
  margin: auto;
  border:2px solid rgb(207, 204, 204);
}


</style>
