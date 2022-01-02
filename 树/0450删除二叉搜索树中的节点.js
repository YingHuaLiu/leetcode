/**
 * 如果 key > root.val，说明要删除的节点在右子树，root.right = deleteNode(root.right, key)。
 * 如果 key < root.val，说明要删除的节点在左子树，root.left = deleteNode(root.left, key)。
 * 如果 key == root.val，则该节点就是我们要删除的节点，则：
 *  如果该节点是叶子节点，则直接删除它：root = null。
 *  如果该节点不是叶子节点且有右节点，则用它的后继节点的值替代 root.val = successor.val，然后删除后继节点。
 *  如果该节点不是叶子节点且只有左节点，则用它的前驱节点的值替代 root.val = predecessor.val，然后删除前驱节点。
 * 返回 root。
 */
const deleteNode = function (root, key) {
  if(!root) {
    return null;
  }
  if(root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if(root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if(!root.left && !root.right) {
      root = null;
    } else if(root.right) {
      let nextVal = findNextVal(root);
      root.val = nextVal;
      root.right = deleteNode(root.right, nextVal);
    } else {
      let preVal = findPreVal(root);
      root.val = preVal;
      root.left = deleteNode(root.left, preVal);
    }
  }
  return root;
};
const findPreVal = function (root) {
  root = root.left;
  while (root.right) {
    root = root.right;
  }
  return root.val;
};
const findNextVal = function (root) {
  root = root.right;
  while (root.left) {
    root = root.left;
  }
  return root.val;
};
