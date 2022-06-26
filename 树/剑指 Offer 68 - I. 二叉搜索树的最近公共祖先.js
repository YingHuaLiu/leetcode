// 和普通二叉树不同，二叉搜索树是有顺序的，祖先节点一定是介于p q值之间
// 我们只要向下遍历找到第一个介于p和q中间的节点就是最近祖先节点
var lowestCommonAncestor = function (root, p, q) {
  while (true) {
    // 如果pq都小于当前节点，那么肯定在节点左边
    if(p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if(p.val > root.val && q.val > root.val) {
      // 如果pq都大于当前节点，那么肯定在节点左边
      root = root.right;
    } else {
      return root;
    }
  }
};
