// dfs
var pathSum = function (root, targetSum) {
  const res = [];
  const dfs = function (root, sum, path) {
    if(!root) {
      return [];
    }
    sum += root.val;
    path.push(root.val);
    if(!root.left && !root.right && sum === targetSum) {
      res.push(path.slice());
    }
    dfs(root.left, sum, path);
    dfs(root.right, sum, path);
    // 核心：path在这出栈
    path.pop();
  };
  dfs(root, 0, []);
  return res;
};

// bfs
var pathSum = function (root, targetSum) {
  if(!root) {
    return [];
  }
  const res = [], queue1 = [root], queue2 = [0];
  // 记录每个子节点到父节点的映射
  let map = new Map();
  while (queue1.length) {
    let node = queue1.shift();
    let sum = queue2.shift() + node.val;
    if(!node.left && !node.right) {
      if(sum === targetSum) {
        getPath(node, res, map);
      }
    } else {
      if(node.left) {
        // 记录父子节点映射
        map.set(node.left, node);
        queue1.push(node.left);
        queue2.push(sum);
      }
      if(node.right) {
        // 记录父子节点映射
        map.set(node.right, node);
        queue1.push(node.right);
        queue2.push(sum);
      }
    }
  }
  return res;
};
// 获取叶子节点到根节点的路径
const getPath = (root, res, map) => {
  let path = [];
  while (root) {
    path.unshift(root.val);
    root = map.get(root);
  }
  res.push(path);
};
