function preOrder2(root) {
  if(!root) {
    return;
  }
  let res = [];
  let stack = [];
  stack.push(root);
  let cur;
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    if(cur.right) {
      stack.push(cur.right);
    }
    if(cur.left) {
      stack.push(cur.left);
    }
  }
  return res;
}

