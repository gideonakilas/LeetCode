/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, start=0, end = nums.length-1) {
    if(start<=end){
        let mid = Math.floor((start+end)/2);
        // console.log(mid, end)
        let root = new TreeNode(nums[mid]);
        root.left = sortedArrayToBST(nums, start, mid-1);
        root.right = sortedArrayToBST(nums, mid+1, end);
        return root;
    }
    return null;
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))