// 快慢指针
var sortedListToBST = function (head) {
  return buildTree(head, null);
};

function buildTree(left, right) {
  if(left === right) {
    return null;
  }

  let mid = getMidNode(left, right);

  // 中间值为根节点
  let root = new TreeNode(mid.val);
  root.left = buildTree(left, mid);
  root.right = buildTree(mid.next, right);

  return root;
}

function getMidNode(left, right) {
  // 快慢指针搜索中间节点
  let fast = left, slow = left;
  while (fast !== right && fast.next !== right) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
