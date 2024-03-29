const { buildTreeByPreAndIn } = require('./构造二叉树');

// 2. dfs,利用全局变量
var sumNumbers = function (root) {
  let sum = 0;
  const dfs = function (root, val) {
    if(!root) {
      return;
    }
    if(!root.left && !root.right) {
      sum += val * 10 + root.val;
      return;
    }
    val = val * 10 + root.val;
    dfs(root.left, val);
    dfs(root.right, val);
  };
  dfs(root, 0);
  return sum;
};

// 3.bfs
var sumNumbers = function (root) {
  if(!root) {
    return 0;
  }
  let sum = 0;
  let nodeQueue = [root], numQueue = [root.val];
  while (nodeQueue.length) {
    let length = nodeQueue.length;
    for (let i = 0; i < length; i++) {
      let node = nodeQueue.shift();
      let num = numQueue.shift();
      if(node.left) {
        nodeQueue.push(node.left);
        numQueue.push(num * 10 + node.left.val);
      }
      if(node.right) {
        nodeQueue.push(node.right);
        numQueue.push(num * 10 + node.right.val);
      }
      if(!node.left && !node.right) {
        sum += num;
      }
    }
  }
  return sum;
};
