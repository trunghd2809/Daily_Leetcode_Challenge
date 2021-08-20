"use strict";
exports.__esModule = true;
var TreeNode_1 = require("./TreeNode");
var MyBST = /** @class */ (function () {
    function MyBST() {
    }
    MyBST.prototype.insert = function (root, value) {
        var newTreeNode = new TreeNode_1["default"](value);
        //TH1
        console.log('root', root);
        if (root === undefined) {
            root = newTreeNode;
        }
        else {
            var tem = root;
            while (true) {
                if (tem.val < value) {
                    if (tem.right === null) {
                        tem.right = newTreeNode;
                        break;
                    }
                    else {
                        tem = tem.right;
                    }
                }
                else {
                    if (tem.left === null) {
                        tem.left = newTreeNode;
                        break;
                    }
                    else {
                        tem = tem.left;
                    }
                }
            }
        }
        return root;
    };
    return MyBST;
}());
var mybst = new MyBST();
mybst.mRoot = mybst.insert(mybst.mRoot, 5);
mybst.mRoot = mybst.insert(mybst.mRoot, 6);
mybst.mRoot = mybst.insert(mybst.mRoot, 1);
mybst.mRoot = mybst.insert(mybst.mRoot, 3);
mybst.mRoot = mybst.insert(mybst.mRoot, 0);
mybst.mRoot = mybst.insert(mybst.mRoot, 2);
mybst.mRoot = mybst.insert(mybst.mRoot, 7);
console.log('Done');
