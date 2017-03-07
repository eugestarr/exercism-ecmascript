export default class Transcriptor {
    constructor () {
        this.map = {"G":"C","C":"G","T":"A","A":"U"};
    }

    toRna (input) {
        let output = [], pair;
        return input.split('').map(el => {
            if (!(pair = this.map[el]))
                throw new Error('Invalid input DNA.');
            return pair;
        }).join('');
    }
}