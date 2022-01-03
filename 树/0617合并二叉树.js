/** 官方题解中有错：需要深拷贝节点  **/
function copy(root) {
  if(!root) {
    return null;
  }
  let newNode = new TreeNode(root.val);
  newNode.left = copy(root.left);
  newNode.right = copy(root.right);
  return newNode;
}

// 1.dfs
var mergeTrees = function (root1, root2) {
  if(!root1) {
    return copy(root2);
  }
  if(!root2) {
    return copy(root1);
  }
  let root = new TreeNode(root1.val + root2.val);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
  return root;
};

// 2.bfs
var mergeTrees = function (root1, root2) {
  if(!root1) {
    return copy(root2);
  }
  if(!root2) {
    return copy(root1);
  }
  let root = new TreeNode(root1.val + root2.val);
  let queue1 = [[root1, root2]];
  let queue2 = [root];
  while (queue1.length) {
    let length = queue1.length;
    for (let i = 0; i < length; i++) {
      let [node1, node2] = queue1.shift();
      let node = queue2.shift();
      if(node1.left || node2.left) {
        if(!node1.left) {
          node.left = copy(node2.left);
        } else if(!node2.left) {
          node.left = copy(node1.left);
        } else {
          let left = new TreeNode(node1.left.val + node2.left.val);
          node.left = left;
          queue2.push(left);
          queue1.push([node1.left, node2.left]);
        }
      }
      if(node1.right || node2.right) {
        if(!node1.right) {
          node.right = copy(node2.right);
        } else if(!node2.right) {
          node.right = copy(node1.right);
        } else {
          let right = new TreeNode(node1.right.val + node2.right.val);
          node.right = right;
          queue2.push(right);
          queue1.push([node1.right, node2.right]);
        }
      }
    }
  }
  return root;
};
