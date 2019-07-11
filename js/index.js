import getData from './getData';
import Vue from 'vue/dist/vue';

window.vueistance = new Vue({
  el: '#app',
  data: {
    cards: [{chord_HTML: 'Please Wait'}],
    recentCards: []
  },
  created() {
    this.setCards();
  },
  methods: {
    setCards(s = '') {
      getData(s).then(data => {
        const cards = data.slice(0, 10);
        console.log(cards);
        this.cards = cards;
      });
    },
    selectCard(card = {}) {
      this.recentCards.push(card);
      this.setCards(card.child_path);
    }
  }
});
