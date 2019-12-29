/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = [];
    
    function dive(node, depth){
        if(!node) return;
        
        if(!levels[depth]){
            levels[depth] = [];
        }
        console.log(depth, node.val)
        levels[depth].push(node.val);
        
        dive(node.left, depth+1)
        dive(node.right, depth+1)
 
    }
    dive(root, 0);
    
    return levels;
    
};