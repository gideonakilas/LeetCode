/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {

    let set = new Set(to_delete);
    let remaining = new Array();

    function removingNodes(root, set, remaining) {
        if (root == null) return null;
        root.left = removingNodes(root.left, set, remaining);
        root.right = removingNodes(root.right, set, remaining);

        //We are currently at the bottom of Tree traversing through all nodes
        if (set.has(root.val)) {
            if (root.left != null) remaining.push(root.left);
            if (root.right != null) remaining.push(root.right);

            return null;
        }
        return root;

    }
    removingNodes(root, set, remaining);
    if (!set.has(root.val)) {
        remaining.push(root);
    }
    return remaining;



};