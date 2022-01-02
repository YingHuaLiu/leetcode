// 1.dfs，先遍历右子树
var rightSideView = function (root) {
  const res = [];
  const dfs = function (root, depth) {
    if(!root) {
      return;
    }
    // 核心：如果当前深度等于res的长度，则说明当前层还没有节点放进去
    if(res.length === depth) {
      res.push(root.val);
    }
    dfs(root.right, depth + 1);
    dfs(root.left, depth + 1);
  };
  dfs(root, 0);

  return res;
};

// 2. bfs，太简单了，略
