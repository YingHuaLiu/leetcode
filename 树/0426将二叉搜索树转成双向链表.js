// http://www.noobyard.com/article/p-wuxtunam-ua.html
// 递归
const treeToDoublyList = function (root) {
  // 定义最左节点和最右节点
  let first, pre;

  const dfs = function (root) {
    if(!root) {
      return;
    }
    dfs(root.left);

    // 遍历到最左节点
    if(!first) {
      first = root;
      pre = root;
    } else { // 当前不是最左节点
      pre.right = root;
      root.left = pre;
      pre = root;
    }

    dfs(root.right);
  };
  dfs(root);

  pre.right = first;
  first.left = pre;

  // 返回的最左节点也就是最小节点
  return first;
};

// 迭代
var treeToDoublyList = function (root) {
  if(!root) {
    return root;
  }
  let stack = [], left, pre;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if(!left) {
      left = root;
      pre = root;
    } else {
      root.left = pre;
      pre.right = root;
      pre = root;
    }
    root = root.right;
  }
  pre.right = left;
  left.left = pre;
  return left;
};
