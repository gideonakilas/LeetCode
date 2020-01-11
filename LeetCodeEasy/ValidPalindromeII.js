/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] != s[j]) {
            return isPalindrome(i + 1, j, s) || isPalindrome(i, j - 1, s)
        }
        i++;
        j--;
    }
    return true;
};

function isPalindrome(i, j, s) {

    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;

}

console.log(validPalindrome("abbca"));