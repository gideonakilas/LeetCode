/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let l = 0;
    let r = 2;
    let basket = [tree[0], tree[1]];
    let max = 0;
    while(l < tree.length){
        if(tree[r] == basket[0] || tree[r] == basket[1]){
            r++;
        } else {
            max = Math.max(max, r-l+1);
            l++;
            r = l + 1;
            basket = [tree[l], tree[r]];
        }
        if(r == tree.length-1) {
           if(l == tree.length -2) break;
            max = Math.max(max, r-l+1);
            l++;
            r=l+1;
        }
    }
    return max;
};

console.log(totalFruit([1,2,3,2,2]))