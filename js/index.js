import getData from './getData';
import Vue from 'vue/dist/vue.min.js';

window.vueistance = new Vue({
    el: '#app',
    data: {
        cards: [{ chord_HTML: 'Please Wait' }],
        recentCards: []
    },
    created() {
        this.setCards();
    },
    methods: {
        setCards(s = '') {
            getData(s)
                .then(data => {
                    if (data) {
                        return data;
                    } else {
                        return getData(this.recentCards[0].chord_ID);
                    }
                })
                .then(cards => {
                    cards = cards.filter(card => {
                        return card.probability > 0.1;
                    });
                    this.cards = cards;
                });
        },
        selectCard(card = {}) {
            this.recentCards.push(card);
            this.cards = { chord_HTML: 'Please Wait' };
            this.setCards(card.child_path);
        },
        upperCase(string = 'Please Wait') {
            return string.toUpperCase();
        }
    }
});
