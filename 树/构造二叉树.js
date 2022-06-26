const { TreeNode } = require('./Tools');

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

//先序，中序构造二叉树
function buildTreeByPreAndIn(preorder, inorder) {
  return buildTreeByPreAndInHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

function buildTreeByPreAndInHelper(preorder, pStart, pEnd, inorder, iStart, iEnd) {
  //递归的第一步：递归终止条件，避免死循环
  if(pStart > pEnd || iStart > iEnd) {
    return null;
  }
  //重建根节点
  let treeNode = new TreeNode(preorder[pStart]);
  let gap = 0;  //index找到根节点在中序遍历的位置
  while (inorder[iStart + gap] !== treeNode.val) {
    gap++;
  }
  //重建左子树
  treeNode.left = buildTreeByPreAndInHelper(preorder, pStart + 1, pStart + gap, inorder, iStart, iStart + gap - 1);
  //重建右子树
  treeNode.right = buildTreeByPreAndInHelper(preorder, pStart + gap + 1, pEnd, inorder, iStart + gap + 1, iEnd);

  return treeNode;
}

// 中后序遍历
function buildTreeByInAndPost(inorder, postorder) {
  return buildTreeByInAndPostHelper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
}

function buildTreeByInAndPostHelper(inorder, iStart, iEnd, postorder, pStart, pEnd) {
  if(iEnd < iStart || pEnd < pStart) {
    return null;
  }

  //重建根节点
  let root = new TreeNode(postorder[pEnd]);
  let gap = 0;  //index找到根节点在中序遍历的位置
  while (inorder[iStart + gap] !== root.val) {
    gap++;
  }

  root.left = buildTreeByInAndPostHelper(inorder, iStart, iStart + gap - 1, postorder, pStart, pStart + gap - 1);
  root.right = buildTreeByInAndPostHelper(inorder, iStart + gap + 1, iEnd, postorder, pStart + gap, pEnd - 1);

  return root;
}

module.exports = { buildTreeByPreAndIn, buildTreeByInAndPost };

// console.log(buildTreeByPreAndIn(preorder, inorder));
