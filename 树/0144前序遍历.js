function preOrder(root) {
  let res = [];
  let stack = [];
  while (stack.length || root) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
}

function preOrder(root) {
  const res = [];

  function recursion(head) {
    if(!root) {
      return;
    }
    res.push(head.val);
    recursion(head.left);
    recursion(head.right);
  }

  recursion(root);
  return res;
}

