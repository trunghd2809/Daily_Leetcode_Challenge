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
class TreeNode {
 val: number
 left: TreeNode | null
 right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

// De Quy
function inorderTraversal(root: TreeNode | null): number[] {
  let arr : number[] = [];
  iLR(root, arr);
  return arr;
};

function iLR(root: TreeNode | null, arr: number[]) {
// B1 Dieu kien dung
  if (root === null) return root; 

  iLR(root.left, arr);
  arr.push(root.val);
  iLR(root.right, arr);
}

// Stack
// function inorderTraversal(root: TreeNode | null): number[] {
//   let nodes = [];
//   let stack = [];
     
//      while(root || stack.length > 0){
//        while(root){
//            stack.push(root)
//            root = root.left
//         }
       
//          root = stack.pop()
//          nodes.push(root.val)
//          root = root.right
//      }
//      return nodes
//  };

 let n0: TreeNode = new TreeNode(0);
 let n1: TreeNode = new TreeNode(1);
 let n2: TreeNode = new TreeNode(2);
 let n3: TreeNode = new TreeNode(3);
 let n4: TreeNode = new TreeNode(4);
 let n5: TreeNode = new TreeNode(5);
 let n6: TreeNode = new TreeNode(6);
 let n7: TreeNode = new TreeNode(7);

n0.left = n1; n0.right = n2;
n1.left = n3; n1.right = n4;
n4.left = n6; n4.right = n7;
n2.right = n5;

console.log(inorderTraversal(n0));