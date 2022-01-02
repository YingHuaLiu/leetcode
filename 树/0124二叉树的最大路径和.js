const maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;

  const dfs = function (root) {
    if(!root) {
      return 0;
    }
    //计算左边分支最大值，左边分支如果为负数还不如不选择
    let left = Math.max(0, dfs(root.left));
    //计算右边分支最大值，右边分支如果为负数还不如不选择
    let right = Math.max(0, dfs(root.right));
    //left->root->right 作为路径与已经计算过历史最大值做比较
    let val = root.val + left + right;
    max = Math.max(max, val);

    // 返回经过root的单边最大分支给root的父节点计算使用
    return val + Math.max(left, right);
  };

  dfs(root);
  return max;
};
