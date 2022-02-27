var isSymmetric = function (root) {
  if(!root) {
    return true;
  }
  return isSameNode(root.left, root.right);
};

function isSameNode(node1, node2) {
  if(!node1 && !node2) {
    return true;
  }
  if(!node1 || !node2) {
    return false;
  }
  if(node1.val !== node2.val) {
    return false;
  }
  return isSameNode(node1.left, node2.right) && isSameNode(node1.right, node2.left);
}
