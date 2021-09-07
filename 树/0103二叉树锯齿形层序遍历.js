// 类似于层序遍历，但需要额外声明一个信号量表示是否折行
function zigzagLevelOrder(head) {
  const result = []
  if(!head) {
    return result
  }
  let queue = [head]
  let sign = true
  while (queue.length) {
    const length = queue.length
    let temp = []
    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      if(sign) {
        temp.push(node.val)
      } else {
        temp.unshift(node.val)
      }
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right) {
        queue.push(node.right)
      }
    }
    sign = !sign
    result.push(temp)
  }
  return result
}
