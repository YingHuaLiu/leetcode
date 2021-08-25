// 迭代
var maxDepth = function (root) {
  if(!root) {
    return 0;
  }
  let queue = [];
  queue.push(root);
  let depth = 0;
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
    depth++;
  }
  return depth;
};
//递归
var maxDepth = (root) => {
  if(!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
