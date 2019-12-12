var Logger = function() {
    this.loggerTracker = new Map()
};

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(this.loggerTracker.has(message)){
    let timeStamp = this.loggerTracker.get(message);
    let current = timestamp - timeStamp;
    
    if(current >= 10){
    this.loggerTracker.delete(message);
    this.loggerTracker.set(message,timestamp);
    return true;
    }
        return false;
    }
    else {
        this.loggerTracker.set(message, timestamp);
    return true;
    }
}
    