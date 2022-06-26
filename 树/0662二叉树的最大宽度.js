// bfs
function widthOfBinaryTree(root) {
  if(!root) {
    return 0;
  }
  // 注意题目是32位整数，有可能会越界，所以所有数字用bigint表示
  let res = 1n, queue = [{ node: root, pos: 0n }];
  while (queue.length) {
    let length = queue.length;
    const width = 1n + queue[queue.length - 1].pos - queue[0].pos;
    res = Math.max(Number(res), Number(width));
    for (let i = 0; i < length; i++) {
      let { node, pos } = queue.shift();
      if(node.left) {
        queue.push({ node: node.left, pos: pos * 2n });
      }
      if(node.right) {
        queue.push({ node: node.right, pos: pos * 2n + 1n });
      }
    }
  }
  return res;
}
