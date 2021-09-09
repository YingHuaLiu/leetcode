// 递归
var inorderTraversal = function (root) {
  let array = []

  function recursion(root) {
    if(!root) {
      return
    }
    recursion(root.left)
    array.push(root.val)
    recursion(root.right)
  }

  recursion(root)
  return array
}

// 迭代
var inorderTraversal = function (root) {
  let result = []
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }
  return result
}
