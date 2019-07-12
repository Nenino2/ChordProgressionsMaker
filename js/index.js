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
        if (data.length) {
          return data;
        } else {
          return getData() // TODO: this.recentCards[0].child_path as attribute 
        }
      }).then(cards => {
        cards = cards.slice(0, 10);
        this.cards = cards;
      });
    },
    selectCard(card = {}) {
      this.recentCards.push(card);
      this.cards = {chord_HTML: 'Please Wait'};
      this.setCards(card.child_path);
    },
    upperCase(string = 'Please Wait') {
      return string.toUpperCase();
    }
  }
});
