//https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--26/
// 1.类似于morris，每次将left节点的最右节点连接到当前节点的right节点
const flatten = function (root) {
  while (root) {
    // 当前节点有左子树
    if(root.left) {
      // 将temp遍历到left节点的最右节点（这个最右节点表示一直向right遍历，不需要到头后再看left节点有没有right节点）
      let temp = root.left;
      while (temp.right) {
        temp = temp.right;
      }
      // 将temp的right指针指向当前节点的right
      temp.right = root.right;
      // 将当前节点的right指针指向left,这样满足链表的顺序
      root.right = root.left;
      root.left = null;
      root = root.right;
    } else { // 当前节点没有左子树，就跳到right节点
      root = root.right;
    }
  }
};

// 2.先序遍历的逆序遍历，右子树->左子树->父
const flatten = function (root) {
  let pre = null;
  const dfs = function (root) {
    if(!root) {
      return;
    }
    dfs(root.right);
    dfs(root.left);
    root.right = pre;
    root.left = null;
    // pre记录上一次遍历的节点
    pre = root;
  };
  dfs(root);
};

// 3.方法二的非递归版本
const flatten = function (root) {
  let stack = [], pre = null;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.right;
    }
    let node = stack[stack.length - 1];
    // 如果节点没有左子树，或者pre遍历过了左子树
    if(!node.left || node.left === pre) {
      node = stack.pop();
      node.right = pre;
      node.left = null;
      pre = node;
    } else {
      root = node.left;
    }
  }
};

// 4.
const flatten = function (root) {

};
