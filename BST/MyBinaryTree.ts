import TreeNode from './TreeNode';

class MyBinaryTree {
  private root: TreeNode;

  constructor() {
  }

  init(): void {
    let no: TreeNode = new TreeNode(0);
    let n1: TreeNode = new TreeNode(1);
    let n2: TreeNode = new TreeNode(2);
    let n3: TreeNode = new TreeNode(3);
    let n4: TreeNode = new TreeNode(4);
    let n5: TreeNode = new TreeNode(5);
    no.left = n1;
    no.right = n2;
    n1.left = n3;
    n1.right = n4;
    n2.right = n5;

    this.root = no;
  }
}

let bst = new MyBinaryTree();
bst.init();
console.log('Done');