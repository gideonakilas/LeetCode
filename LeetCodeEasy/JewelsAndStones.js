/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let hash = {};
     let count = 0;
     for(let i = 0; i < J.length; i++){
     if(hash[J[i]]) continue;
         else hash[J[i]] = 1;
     }
     
     for(let i = 0; i< S.length; i++){
     if(hash[S[i]]) count++;
     }
     return count;
 };