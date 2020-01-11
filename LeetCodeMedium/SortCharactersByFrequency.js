/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = "";
    let charHash = new Map();

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!charHash.has(char)) charHash.set(char, 1);
        else charHash.set(char, charHash.get(char) + 1);

    }
    charHash = Array.from(charHash).sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < charHash.length; i++) {
        for (let j = 0; j < charHash[i][1]; j++) {
            freq = freq + charHash[i][0];
        }
    }

    return freq;
};

console.log(frequencySort('tree'));