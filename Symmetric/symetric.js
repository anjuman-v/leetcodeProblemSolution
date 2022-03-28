/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var root = [1,2,2,3,4,4,3]
var isSymmetric = function(root) {
   let res = true;
    function helper(node1, node2){
        if(!node1 && !node2){
            return;
        }
        if(!node1 || !node2 || node1.val !== node2.val){
            res = false;
            return;
           
           }
        helper(node1.left, node2.right);
        helper(node1.right, node2.left);
    }
    helper(root, root)
    return res
};