/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash = {};
    for(i in s){
        if(hash[s[i]]) {
          hash[s[i]]++;
        } else{
           hash[s[i]] = 1;
        }
    }
    for(i in t){
        if(hash[t[i]]) {
          hash[t[i]]--;
            if(hash[t[i]] < 0) return t[i];
        } else{
           return t[i];
        }
    }
};