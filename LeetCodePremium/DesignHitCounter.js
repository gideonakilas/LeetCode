var HitCounter = function() {
    this.count = new Array(300).fill(0);
    this.timer = new Array(300).fill(0);
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    let index = timestamp % 300;
    if(timestamp === this.timer[index]) {
        this.count[index] = this.count[index]+1;
    }
    else
        {
            this.count[index] = 1;
            this.timer[index] = timestamp;
        }
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let counter =0;
    for(let i=0; i<300; i++) {
        if(timestamp - this.timer[i] < 300) {
            counter+= this.count[i];
        }
    }
    return counter;
};