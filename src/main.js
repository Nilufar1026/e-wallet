import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cards:[
        {
          id: "12345",
          holder: "Nilufar",
          number: "1234 5678 9101 1121",
          validMonth: "12",
          validYear: "5",
          vendor:"vendor-bitcoin",
        }, 
        {
          id: "12346",
          holder: "Arpat",
          number: "1234 5678 3456 1121",
          validMonth: "12",
          validYear: "19",
          vendor:"vendor-blockchain",
        },
        {
          id: "12347",
          holder: "Kaiser",
          number: "1234 2316 3456 1121",
          validMonth: "10",
          validYear: "19",
          vendor:"vendor-evil",
        },
        {
          id: "12348",
          holder: "Nadi",
          number: "1234 2316 3456 0928",
          validMonth: "07",
          validYear: "19",
          vendor:"vendor-ninja",
        }],
      activeCard: [
        {
          id: "12345",
          holder: "Nilufar",
          number: "1234 5678 9101 1121",
          validMonth: "12",
          validYear: "5",
          vendor:"vendor-bitcoin",
        }],
      form: {
        id: "",
        holder: "",
        number: "XXXX XXXX XXXX XXXX",
        validMonth: "",
        validYear: "",
        vendor:"",
      },
    };
  },
  methods: {
    addCard(item) {
      this.cards.push(item);
      this.getCard(item.id),
        (this.form.holder = ""),
        (this.form.number = ""),
        (this.form.vendor = ""),
        (this.form.validMonth = ""),
        (this.form.validYear = "");
    },
    getCard(id) {
      this.activeCard = this.cards.filter((card) => card.id === id);
    },
  },
  
  router,
  render: h => h(App)
}).$mount('#app')
