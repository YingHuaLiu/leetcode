// 1. 前序递归遍历，传递lower和upper给每个节点
const isValidBST = function (root) {
  const dfs = function (root, lower, upper) {
    if(!root) {
      return true;
    }
    if(root.val <= lower || root.val >= upper) {
      return false;
    }
    return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper);
  };

  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

// 2.中序迭代，因为中序遍历二叉搜索树正好是递增的，如果某个值比上一个节点小，那么一定不是BST
const isValidBST = function (root) {
  let stack = [];
  // 保存上一次遍历到的节点值
  let preVal = Number.MIN_SAFE_INTEGER;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();

    // 中序遍历逻辑
    if(root.val <= preVal) {
      return false;
    }
    preVal = root.val;

    root = root.right;
  }
  return true;
};

// 3. 中序递归
const isValidBST = function (root) {
  let preVal = Number.MIN_SAFE_INTEGER, signal = true;
  const dfs = function (root) {
    if(!root) {
      return;
    }
    if(!signal) {
      return;
    }
    dfs(root.left);

    if(root.val <= preVal) {
      signal = false;
      return;
    }
    preVal = root.val;

    dfs(root.right);
  };
  dfs(root);
  return signal;
};
