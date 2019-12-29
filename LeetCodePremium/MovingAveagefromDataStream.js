/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.window = new Array();
    this.size = size;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    let sum = 0;
    if (this.window.length >= this.size) {
        this.window.shift();
    }
    this.window.push(val)
    for (i in this.window) sum += this.window[i];
    return sum / this.window.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */