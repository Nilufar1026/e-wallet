<template>
<form @submit.prevent="addCardToData">
    <div class="cardinfo">
        <label for="cardnum">CARD NUMBER</label>
        <input type="text" class="info-number" 
            placeholder="xxxx xxxx xxxx xxxx" 
            v-model="form.number"
            @input= "formNum"
            @keypress="onlyNumber"
            maxlength="16"
        >
        <label for="name">CARDHOLDER NAME</label>
        <input type="text" class="info-name" 
            v-model="form.holder"
            @input= "formHolder"
        >
        <div class="info-date">
            <div class="month">
                <label for="validmonth" class="validmonth">
                    VALIDMONTH
                </label>
                <input type="text" class="info-month"
                    v-model="form.validMonth"
                    @input= "formMonth"
                    maxlength="2"
                    :max="12"
                    @keypress="onlyNumber"
                >
            </div>
            <div class="year">
                <label for="validYear" class="validYear">
                    VALIDYEAR
                </label>
                <input type="text" class="info-year"
                    v-model="form.validYear"
                    @input= "formYear"
                    maxlength="2"
                    :max="31"
                    @keypress="onlyNumber"
                    placeholder="Last two numbers"> 
            </div>
        </div>
        <label for="ccv">CCV</label>
        <input type="text" class="ccv">
        <label for="VENDOR">VENDOR</label>
        <select name="vendor" v-model="form.vendor" @change="selectVendor">
            <option value="vendor-bitcoin">BITCOIN</option>
            <option value="vendor-blockchain">BLOCKCHAIN</option>
            <option value="vendor-evil">EVIL</option>
            <option value="vendor-ninja">NINJA</option>
        </select>
        <button>ADD CARD</button>
    </div>
</form>


</template>

<script>

export default {
    data() {return {
      form: {
        id: "",
        number: "",
        holder: "",
        vendor: "",
        validMonth: "",
        validDay: "",
      }
    }},
    

    
    methods:{
        formNum() { 
        this.$root.form.number = this.form.number},
        onlyNumber ($event) {
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
            }
        },
        formHolder() {this.$root.form.holder= this.form.holder},
        formMonth() {this.$root.form.validMonth=this.form.validMonth},
        formYear() {this.$root.form.validYear=this.form.validYear},
        selectVendor() {this.$root.form.vendor = this.form.vendor},
        addCardToData() {
            this.form.id = (Date.now()).toString()
            this.$root.addCard(this.form)
            this.$router.push("/")
        } 
    }
}
</script>

<style scoped>
.cardinfo{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
label{
    align-self: self-start;
    margin-left: 55px;
    margin-top: 10px;
    margin-bottom: 8px;
}
input ,select{
    width: 400px;
    height: 50px;
    border-radius: 10px;
    font-size: 15px;
}

input.info-month,input.info-year{
    width: 175px;

}
.info-date{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
}
.month,.year{
    display: flex;
    flex-direction: column;
}
.validYear,.validmonth{
    margin-left: 10px;
}
button{
    margin:30px auto 30px auto;
    width:400px ;
    height: 50px;
    background-color: black;
    color: white;
    border-radius: 10px;
}
</style>