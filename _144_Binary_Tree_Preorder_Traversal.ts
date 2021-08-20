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


function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  preorder(root, result);
  return result;
};

function preorder(root: TreeNode, result: number[]): void {
  if (root === null) return;

  result.push(root.val);
  preorder(root.left, result);
  preorder(root.right, result);
}

function postorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  preorder(root, result);
  return result;
};

function postorder(root: TreeNode, result: number[]): void {
  if (root === null) return;

  
  postorder(root.left, result);
  postorder(root.right, result);
  result.push(root.val);
}

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

console.log(preorderTraversal(n0));