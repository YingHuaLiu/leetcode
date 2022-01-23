// 1.中序遍历的逆序，递归
var convertBST = function (root) {
  if(!root) {
    return root;
  }
  let sum = 0;

  function dfs(root) {
    if(!root) {
      return;
    }
    dfs(root.right);
    sum += root.val;
    root.val = sum;
    dfs(root.left);
  }

  dfs(root);
  return root;
};

// 2.中序遍历的逆序，迭代法
var convertBST = function (root) {
  if(!root) {
    return root;
  }
  let sum = 0, stack = [];
  let cur = root;
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur);
      cur = cur.right;
    }
    cur = stack.pop();
    sum += cur.val;
    cur.val = sum;
    cur = cur.left;
  }

  return root;
};
