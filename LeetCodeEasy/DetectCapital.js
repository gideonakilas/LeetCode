/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let count = 0;
    let index = word[0] == word[0].toUpperCase();
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) count++;
    }
    return count == word.length || (count == 1 && index) || count == 0;

};