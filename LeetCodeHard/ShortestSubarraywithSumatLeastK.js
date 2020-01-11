//ShortestSubarraywithSumatLeastK

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    let l= 0;
    let r = 0;
    let length = Number.MAX_VALUE;
    while(l < A.length){
    if(A[l] + A[r] == K) length = Math.min(length, l + r +1);
    else if (A[l] + A[r] > K || r == A.length-1) {
    l++;
    r= l+1;
    }
    r++;
    }
    
    console.log(length);
};