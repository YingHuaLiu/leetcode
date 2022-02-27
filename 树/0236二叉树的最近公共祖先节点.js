// 递归：后序遍历自底向上，遇到p返回p，遇到q返回q，都没遇到返回空
//优化：可以用全局变量来保存是否已经找到公共节点，找到了就不需要递归其他子树了

function lowestCommonAncestor(root, p, q) {
  if(!root || root === p || root === q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if(left && right) {
    return root;
  }
  return left || right;
}

// 存储父节点：需要掌握
function lowestCommonAncestor(root, p, q) {
  let map = new Map();
  let set = new Set();

  dfs(root);
  while (p) {
    set.add(p);
    p = map.get(p);
  }
  while (q) {
    if(set.has(q)) {
      return q;
    }
    q = map.get(q);
  }

  function dfs(root) {
    if(root.left) {
      map.set(root.left, root);
      dfs(root.left);
    }
    if(root.right) {
      map.set(root.right, root);
      dfs(root.right);
    }
  }
}

