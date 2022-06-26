// 空节点返回0；叶子结点返回1；如果当前节点不是平衡的，则返回-1，否则返回左右子树的最大深度+1
var isBalanced = function (root) {
  return dfs(root) !== -1;
};

function dfs(node) {
  if(!node) {
    return 0;
  }
  let leftDepth = dfs(node.left);
  if(leftDepth === -1) {
    return -1;
  }
  let rightDepth = dfs(node.right);
  if(rightDepth === -1) {
    return -1;
  }
  if(Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  }
  return Math.max(leftDepth, rightDepth) + 1;
}
