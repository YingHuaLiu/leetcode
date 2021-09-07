function postOrder(root) {
  let res = []
  let stack = []
  let pre = null
  while (root || stack.length) {
    //沿左子树一直往下搜索，直至出现没有左子树的结点
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    // 遍历最左子节点的右子树（右子树存在&&未访问过）
    if(root.right && root.right !== pre) {
      stack.push(root)
      root = root.right
    } else {
      // 此时node的左右子树应均已完成访问
      res.push(root.val)
      // 避免重复访问右子树[记录当前节点便于下一步对比]
      pre = root
      // 避免重复访问左子树[设空节点]
      root = null
    }
  }
  return res
}
