function eraseOverlapIntervals(intervals){
if(intervals.length === 0) return 0;
let count = 1
// Input: [[1,2],[2,3],[3,4],[1,3]]
intervals.sort((a,b) => a[0]-b[0])
console.log(intervals);
// Input: [[1,2],[1,3],[2,3],[3,4]]

let end = intervals[0][1]; // 3
for(let i=1; i< intervals.length; i++){

    
    const interval = intervals[i]; // [2,3]
    const intervalStart = interval[0]; //2
    const intervalEnd = interval[1]; // 3

    if(intervalStart < end){
        count += 1;
        end = Math.min(intervalEnd, end);
    }
    else{
        end = intervalEnd;
    }
    return count;
}

}
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
// Example 2:

// Input: [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
// Example 3:

// Input: [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]))