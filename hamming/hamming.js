export default class Hamming {
    compute (s1, s2) {
        if (s1.length !== s2.length)
            throw new Error('DNA strands must be of equal length.');
        let a1 = s1.split('');
        let a2 = s2.split('');
        return a1.filter((el, i) => el !== a2[i]).length;
    }
}