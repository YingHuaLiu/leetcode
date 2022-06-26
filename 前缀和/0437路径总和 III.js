const { buildTreeByPreAndIn } = require('../树/构造二叉树');

// 前缀和，用hashmap存储从根节点到各个节点的路径和
function pathSum(root, targetSum) {
  if(!root) {
    return 0;
  }
  let map = new Map(), res = 0;
  map.set(0, 1);

  dfs(root, root.val);
  return res;

  function dfs(root, curSum) {
    // map保存的是从根节点到各个节点的前缀和，curSum是从根节点到当前节点的路径和
    // curSum包括了中间的某个节点到当前节点正好凑成了target
    if(map.has(curSum - targetSum)) {
      res += map.get(curSum - targetSum);
    }
    map.set(curSum, (map.get(curSum) || 0) + 1);
    root.left && dfs(root.left, curSum + root.left.val);
    root.right && dfs(root.right, curSum + root.right.val);
    // 回溯，防止对其他同层的节点产生影响
    map.set(curSum, map.get(curSum) - 1);
  }
}

// 笨比方法，把每个节点当作根节点进行遍历
var pathSum = function (root, targetSum) {
  if(!root) {
    return 0;
  }
  let res = 0;

  // 这个函数专门用来前序遍历所有节点
  function dfs(root) {
    if(!root) {
      return;
    }
    // 以当前节点为根向下遍历
    dfs_cur(root, root.val);
    dfs(root.left);
    dfs(root.right);
  }

  // 这个函数用来以root为根节点计算sum
  function dfs_cur(root, curSum) {
    if(curSum === targetSum) {
      res++;
    }
    root.left && dfs_cur(root.left, curSum + root.left.val);
    root.right && dfs_cur(root.right, curSum + root.right.val);
  }

  dfs(root);
  return res;
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
const root = buildTreeByPreAndIn(preorder, inorder);
console.log(pathSum(root, 35));

