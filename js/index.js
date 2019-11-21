import getChords from './getChords';
import Vue from 'vue/dist/vue.min.js';

window.vueistance = new Vue({
    el: '#app',
    data: {
        recentChords: []
    },
    computed: {
        selectableChords() {
            return getChords(this.recentChords[this.recentChords.length - 1]);
        }
    },
    methods: {
        addChord(chord) {
            this.recentChords.push(chord);
        }
    }
});
