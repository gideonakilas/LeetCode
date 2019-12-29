/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    let strob = {
    '6': '9',
    '9': '6',
    '1': '1',
    '0': '0',
    '8': '8',
    }
    let l = 0;
    let r = num.length-1;
    while (l < r){
        let lval = strob[num[l]];
        let rval = num[r];
        if(lval && rval == lval){
        l++;
        r--;
        }
        else return false;
    }
    return true;
};

console.log(isStrobogrammatic('1001'));