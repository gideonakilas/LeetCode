/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    
    if (intervals.length === 0) {
        return 0;
    }
    
    intervals.sort((a,b) => {
        return a[0] - b[0];
    });
    
    var minEnd = []; 
    minEnd.push(intervals[0][1]);
    var rooms = 1;
    
    for (let i=1; i<intervals.length; i++) {
        
        if (intervals[i][0] < Math.min(...minEnd)) {
            rooms++;    
            minEnd.push(intervals[i][1]);
        } else {
            let idx = minEnd.indexOf(Math.min(...minEnd));
            minEnd[idx] = (intervals[i][1]);
        }
        
    }
    
    return rooms;
    
};

console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20]]));