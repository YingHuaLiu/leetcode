// 和《另一棵树的子树》不同的点：子结构可以是树的一部分，不一定就是子树
// 例如：[10,12,6,8]是[10,12,6,8,3,11]的子结构，但不是子树
var isSubStructure = function (A, B) {
  if(!B || !A) {
    return false;
  }
  return isSame(A, B) || isSubStructure(A.right, B) || isSubStructure(A.left, B);
};

function isSame(a, b) {
  // 核心：只要b为空，那么当前节点算是子结构
  if(!b) {
    return true;
  }
  // 核心：如果a为空，b不为空，那么肯定b肯定不是子结构
  if(!a) {
    return false;
  }
  if(a.val !== b.val) {
    return false;
  }
  return isSame(a.left, b.left) && isSame(a.right, b.right);
}
