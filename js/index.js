import getData from './getData';
import Vue from 'vue/dist/vue.min.js';

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
          return getData(this.recentCards[this.recentCards.length - 1].chord_ID);
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
