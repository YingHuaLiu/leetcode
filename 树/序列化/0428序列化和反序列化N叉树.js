function TreeNode(val) {
  this.val = val;
  this.children = [];
}

// dfs
function serialize(root) {
  if(!root) {
    return '';
  }
  const res = [];
  dfs(root);
  return res.join(' ');

  function dfs(root) {
    if(!root) {
      return;
    }
    res.push(root.val);
    res.push(root.children.length);
    for (const child of root.children) {
      dfs(child, res);
    }
  }
}

function deserialize(str) {
  if(!str.length) {
    return null;
  }
  const queue = str.split(' ');
  return buildTree(queue);

  function buildTree(queue) {
    const root = new TreeNode(queue.shift());
    const length = queue.shift();
    for (let i = 0; i < length; i++) {
      root.children.push(buildTree(queue));
    }
    return root;
  }
}

console.log(deserialize('a 3 b 3 e 0 f 0 g 0 c 0 d 1 h 0'));
