/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
    let results = [];
    helper(results, "", n, n);
    return results;

};

function helper(results, curr, left, right) {
    if (left < 0 || left > right) {
        return;
    }

    if (left == 0 && right == 0) {
        results.push(curr);
        return;
    }

    helper(results, curr + '(', left - 1, right);
    helper(results, curr + ")", left, right - 1);

}


console.log(generateParenthesis(2));