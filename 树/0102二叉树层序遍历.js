function levelOrder(head) {
  const result = []
  if(!head) {
    return result
  }
  let queue = [head]
  while (queue.length) {
    const length = queue.length
    let temp = []
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      temp.push(node.val)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
    }
    result.push(temp)
  }
  return result
}

module.exports={levelOrder}
