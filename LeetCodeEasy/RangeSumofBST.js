/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    ans = 0;
    dfs(root, L, R);
    return ans;
};
function dfs(node, L, R) {
    if (node != null) {
        if (L <= node.val && node.val <= R)
            ans += node.val;
        if (L < node.val)
            dfs(node.left, L, R);
        if (node.val < R)
            dfs(node.right, L, R);
    }
}

console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15));