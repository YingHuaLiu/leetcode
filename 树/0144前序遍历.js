function preOrder2(root) {
  if(!root) {
    return
  }
  let res = []
  let stack = [root]
  while (stack.length) {
    let cur = stack.pop()
    res.push(cur.val)
    if(cur.right) {
      stack.push(cur.right)
    }
    if(cur.left) {
      stack.push(cur.left)
    }
  }
  return res
}

function preOrder(root) {
  const res = []

  function recursion(head) {
    if(!root) {
      return
    }
    res.push(head.val)
    recursion(head.left)
    recursion(head.right)
  }

  recursion(root)
  return res
}

