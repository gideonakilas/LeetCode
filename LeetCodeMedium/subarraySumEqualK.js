var subarraySum = function(nums, k) {
    const map = {0: 1}
     let sum = 0, count = 0
     nums.forEach(num => {
         sum += num
         if(map[sum-k]) { count += map[sum-k] } 
          // not count++, because [0,0,0] for example, [0] [0,0], [0,0,0] is added. in other words. we added existing combination + new combination, sort of like dynamic programming. 
         map[sum] = (map[sum] || 0) + 1
     })
     console.log(map)
     return count
 };

 console.log(subarraySum([1,1,1], 2));