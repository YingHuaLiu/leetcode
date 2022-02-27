// 优化前：用map来储存当前节点选中和不选中的情况
const rob = root => {
  // 当前节点选中
  const f = new Map();
  // 当前节点不选中
  const g = new Map();

  dfs(root);
  return Math.max(f.get(root), g.get(root));

  // 后序遍历，这样可以遍历完左右节点再计算父节点的值
  function dfs(node) {
    if(!node) {
      return null;
    }
    dfs(node.left);
    dfs(node.right);
    // 当前节点选中时，f(node)=node.val+g(node.left)+g(node.right)
    f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
    // 当前节点不选中时，子节点可以选中或者不选中，g(node)=max{f(node.left),g(node.left)}+max{f(node.right),g(node.right)}
    g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0));
  }
};

// 优化后，类似跳台阶，只需要dfs返回当前节点选中和不选中状态的值，不需要存储整个树的Map
const rob = root => {
  const dfs = node => {
    if(!node) {
      return [0, 0];
    }
    const [lSelected, lNotSelected] = dfs(node.left);
    const [rSelected, rNotSelected] = dfs(node.right);
    const selected = node.val + lNotSelected + rNotSelected;
    const notSelected = Math.max(lSelected, lNotSelected) + Math.max(rSelected, rNotSelected);
    return [selected, notSelected];
  };
  const [l, r] = dfs(root);
  return Math.max(l, r);
};
