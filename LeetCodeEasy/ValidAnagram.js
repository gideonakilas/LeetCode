/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {};
    
    for(let i=0; i< s.length; i++) {
    if(hash[s[i]]){
        hash[s[i]] += 1;
    } else {
        hash[s[i]] = 1;
    }
    }
    for(let i=0; i< t.length; i++) {
      if(hash[t[i]]){
        hash[t[i]] -= 1;
    } else {
        return false;
    }
    }
    for(letters in hash){
        if(hash[letters] != 0) return false;
    }
    return true;
};


console.log(isAnagram("anagram", "nagaram"))