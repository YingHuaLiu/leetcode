// http://www.noobyard.com/article/p-wuxtunam-ua.html
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

  return first;
};
