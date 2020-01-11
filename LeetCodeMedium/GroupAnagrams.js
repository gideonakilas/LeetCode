/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let hash = {}
    for (let i = 0; i < strs.length; i++) {
        let temp = strs[i].split("").sort();
        if (!hash[temp]) hash[temp] = [strs[i]];
        else hash[temp].push(strs[i]);
    }


    return Object.values(hash);

};