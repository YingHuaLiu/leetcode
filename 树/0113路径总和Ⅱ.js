// dfs
var pathSum = function (root, targetSum) {
  let res = [], path = [];
  dfs(root, targetSum, path, res);
  return res;
};

function dfs(root, target, path, res) {
  if(!root) {
    return;
  }
  path.push(root.val);
  if(target === root.val && !root.left && !root.right) {
    res.push(path.slice());
  }
  dfs(root.left, target - root.val, path, res);
  dfs(root.right, target - root.val, path, res);
  path.pop();
}

// bfs
var pathSum = function (root, targetSum) {
  if(!root) {
    return [];
  }
  let map = new Map(), queue = [[root, root.val]], res = [];
  while (queue.length) {
    let [node, sum] = queue.shift();
    if(!node.left && !node.right) {
      if(sum === targetSum) {
        res.push(getPath(node, map));
      }
    } else {
      if(node.left) {
        map.set(node.left, node);
        queue.push([node.left, sum + node.left.val]);
      }
      if(node.right) {
        map.set(node.right, node);
        queue.push([node.right, sum + node.right.val]);
      }
    }
  }
  return res;
};

function getPath(root, map) {
  let path = [];
  while (root) {
    path.unshift(root.val);
    root = map.get(root);
  }
  return path;
}
