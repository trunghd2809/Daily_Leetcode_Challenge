/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function inorderTraversal(root) {
    var arr = [];
    iLR(root, arr);
    return arr;
}
;
function iLR(root, arr) {
    // B1 Dieu kien dung
    if (root === null) return root;

    // B2 De Quy
    iLR(root.left, arr);
    arr.push(root.val);
    iLR(root.right, arr);
}
var n0 = new TreeNode(0);
var n1 = new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);
var n6 = new TreeNode(6);
var n7 = new TreeNode(7);
n0.left = n1;
n0.right = n2;
n1.left = n3;
n1.right = n4;
n4.left = n6;
n4.right = n7;
n2.right = n5;
console.log(inorderTraversal(n0));
