// https://leetcode-cn.com/problems/count-complete-tree-nodes/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-iz5t/
// 技巧：满二叉树的结点数为：2^depth - 1
function countNodes(root) {
  if(!root) {
    return 0;
  }
  let left = getLeftDepth(root.left);
  let right = getRightDepth(root.right);
  if(left === right) { // 说明是满二叉树
    return 2 ** (left + 1) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
}

function getLeftDepth(root) {
  let depth = 0;
  while (root) {
    depth++;
    root = root.left;
  }
  return depth;
}
function getRightDepth(root) {
  let depth = 0;
  while (root) {
    depth++;
    root = root.right;
  }
  return depth;
}
