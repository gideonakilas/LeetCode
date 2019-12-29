/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const set = new Set();
    
    while (n !== 1 && !set.has(n)) {
      set.add(n);
      n = toSquareSum(n);
    }
    
    return n === 1;
  };
  
  const toSquareSum = n => {
    let result = 0;
    
    while (n) {
      result += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    
    return result;
  }


  console.log(isHappy(2));