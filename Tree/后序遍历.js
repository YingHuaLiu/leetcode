function postOrder(root) {
  let res = [];
  if(!root) {
    return res;
  }
  let stack = [];
  let pre = null;
  while (root || stack.length) {
    //沿左子树一直往下搜索，直至出现没有左子树的结点
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if(root.right === null || root.right === pre) {
      res.push(root.val);
      pre = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return res;
}
function postOrder2(root) {
  let res = [];
  if(!root) {
    return res;
  }
  let stack = [];
  while (root || stack.length) {
    while(root){
      res.push(root.val);
      stack.push(root)
      root=root.right;
    }
    root=stack.pop();
    root=root.left;
  }
  res.reverse();
  return res;
}
