/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let length = nums.length;
    
    for(let i=0; i< nums.length; i++){
        length+=i;
        length-=nums[i];
    }
   return length;
    
};

console.log(missingNumber([3,0,1]));