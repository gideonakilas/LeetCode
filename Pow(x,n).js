/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n <  0){
    x = 1/x;
    n = -n;
    }
    return myFastPow(x, n);
};

let myFastPow = (x, n) =>{
    if(n == 0) return 1;
    
    if(n % 2 == 0){
    let y = myPow(x, n/2);
        return y *y;
    }
    else return x * myPow(x, n-1);
}