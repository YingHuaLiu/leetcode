function preOrder2(node) {
  let res = [];
  let stack = [];
  let cur = node;
  while (stack.length || cur) {
    while(cur){
      res.push(cur.val);
      stack.push(cur);
      cur=cur.left;
    }
    if(stack.length) {
      cur = stack.pop();
      cur = cur.right;
    }
  }
  return res;
}

