class TimeMap {
    constructor() {
        this.map = new Map();
    }
    
    set(key, value, timestamp) {
        if(!this.map.has(key)) {
           this.map.set(key, {});
        }
        
        this.map.get(key)[timestamp] = value;
    }
    
    get(key, timestamp) {
        if(!this.map.has(key)) {
           return "";
        }
        const curr = this.map.get(key);
        for(let i=timestamp; i>=0; i--) {
            if(curr[i] != null) {
                return curr[i]
            }
        }
        
        return "";
    }
}