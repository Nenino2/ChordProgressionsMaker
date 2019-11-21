function getChords(precedentChord) {
    switch (precedentChord) {
        case 'I':
            return ['II', 'III', 'IV', 'V', 'VI', 'VII'];
        case 'II':
            return ['V', 'VII'];
        case 'III':
            return ['II', 'IV', 'VI'];
        case 'IV':
            return ['I', 'II', 'V', 'VII'];
        case 'V':
            return ['I', 'IV', 'VI'];
        case 'VI':
            return ['II', 'III', 'IV'];
        case 'VII':
            return ['I', 'V'];
        default:
            return ['I'];
    }
}

export default getChords;
