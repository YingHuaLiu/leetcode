var searchBST = function (root, val) {
  let cur = root
  while (cur) {
    if (val < cur.val) {
      cur = cur.left
    } else if (val > cur.val) {
      cur = cur.right
    } else {
      return cur
    }
  }
  return null
}