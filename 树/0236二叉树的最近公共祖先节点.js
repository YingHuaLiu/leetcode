// 后序遍历自底向上，遇到p返回p，遇到q返回q，都没遇到返回空
//优化：可以用全局变量来保存是否已经找到公共节点，找到了就不需要递归其他子树了

function lowestCommonAncestor(root, p, q) {
  if(!root || root === p || root === q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if(left && right) {
    return root;
  }
  return left ? left : right;
}

