"use strict";
exports.__esModule = true;
var TreeNode_1 = require("./TreeNode");
var MyBinaryTree = /** @class */ (function () {
    function MyBinaryTree() {
    }
    MyBinaryTree.prototype.init = function () {
        var no = new TreeNode_1["default"](0);
        var n1 = new TreeNode_1["default"](1);
        var n2 = new TreeNode_1["default"](2);
        var n3 = new TreeNode_1["default"](3);
        var n4 = new TreeNode_1["default"](4);
        var n5 = new TreeNode_1["default"](5);
        no.left = n1;
        no.right = n2;
        n1.left = n3;
        n1.right = n4;
        n2.right = n5;
        this.root = no;
    };
    return MyBinaryTree;
}());
var bst = new MyBinaryTree();
bst.init();
console.log('Done');
