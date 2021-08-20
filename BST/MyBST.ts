import TreeNode from './TreeNode';

class MyBST {
  public mRoot: TreeNode;

  insert(root: TreeNode, value: number): TreeNode {
    let newTreeNode: TreeNode = new TreeNode(value);
    //TH1
    if (root === undefined) {
      root = newTreeNode;
    } else {
      let tem: TreeNode = root;
      while (true) {
        if (tem.val < value) {
          if (tem.right === null) {
            tem.right = newTreeNode;
            break;
          } else {
            tem = tem.right;
          }
        } else {
          if (tem.left === null) {
            tem.left = newTreeNode;
            break;
          } else {
            tem = tem.left;
          }
        }
      }
    }
    return root;
  }
}

let mybst = new MyBST();
mybst.mRoot = mybst.insert(mybst.mRoot, 5);
mybst.mRoot = mybst.insert(mybst.mRoot, 6);
mybst.mRoot = mybst.insert(mybst.mRoot, 1);
mybst.mRoot = mybst.insert(mybst.mRoot, 3);
mybst.mRoot = mybst.insert(mybst.mRoot, 0);
mybst.mRoot = mybst.insert(mybst.mRoot, 2);
mybst.mRoot = mybst.insert(mybst.mRoot, 7);
console.log('Done');