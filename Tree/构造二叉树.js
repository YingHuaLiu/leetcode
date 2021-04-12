const { TreeNode } = require('./Tools');

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

//先序，中序构造二叉树
function buildTreeByPreAndIn(preorder, pStart, pEnd, inorder, iStart, iEnd) {
  //递归的第一步：递归终止条件，避免死循环
  if(pStart > pEnd || iStart > iEnd) {
    return null;
  }
  //重建根节点
  let treeNode = new TreeNode(preorder[pStart]);
  let index = 0;  //index找到根节点在中序遍历的位置
  while (inorder[iStart + index] !== treeNode.val) {
    index++;
  }
  //重建左子树
  treeNode.left = buildTreeByPreAndIn(preorder, pStart + 1, pStart + index, inorder, iStart, iStart + index - 1);
  //重建右子树
  treeNode.right = buildTreeByPreAndIn(preorder, pStart + index + 1, pEnd, inorder, iStart + index + 1, iEnd);

  return treeNode;
}

console.log(buildTreeByPreAndIn(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1));

// 中后序遍历
function buildTreeByInAndPost(inorder, iStart, iEnd, postorder, pStart, pEnd) {
  if(iEnd < iStart || pEnd < pStart) {
    return null;
  }

  //重建根节点
  let root = new TreeNode(postorder[pEnd]);
  let index = 0;  //index找到根节点在中序遍历的位置
  while (inorder[index] !== root.no) {
    index++;
  }

  root.left = buildTreeByInAndPost(inorder, iStart, index - 1, postorder, pStart, pStart + index - iStart - 1);
  root.right = buildTreeByInAndPost(inorder, index + 1, iEnd, postorder, pStart + index - iStart, pEnd - 1);

  return root;
}

