var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function preorderTraversal(root) {
    var result = [];
    preorder(root, result);
    return result;
}
;
function preorder(root, result) {
    if (root === null)
        return;
    console.log('root', root.val);
    preorder(root.left, result);
    preorder(root.right, result);
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
console.log(preorderTraversal(n0));
