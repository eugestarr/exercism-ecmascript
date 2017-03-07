export default class Transcriptor {
    constructor () {
        this.map = {"G":"C","C":"G","T":"A","A":"U"};
    }

    toRna (input) {
        let output = [], m;
        input = input.split('');
        input.map(el => {
            if (!(m = this.map[el]))
                throw new Error('Invalid input DNA.');
            output.push(m);
        });
        return output.join('');
    }
}