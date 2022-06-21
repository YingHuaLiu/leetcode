const { TreeNode } = require('../../Tools');
// 1. 前序序列化
const serialize = (root) => {
  let res = [];

  // 前序遍历
  const preOrder = (root) => {
    if(!root) {
      return;
    }
    res.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };
  preOrder(root);

  return res.join(' ');
};


// 根据前序反序列化
const deserialize = (str) => {
  if(!str.length) {
    return null;
  }
  const list = str.split(' ');
  return preOrderDeserialize(list, 0, list.length - 1);
};

// 由前序遍历构造二叉搜索树，利用左子树比根节点小、右子树比根节点大的特性
const preOrderDeserialize = (list, l, r) => {
  if(l > r) {
    return null;
  }
  let root = new TreeNode(list[l]);
  let k = l + 1;
  while (k <= r && list[k] < list[l]) {
    k++;
  }
  root.left = preOrderDeserialize(list, l + 1, k - 1);
  root.right = preOrderDeserialize(list, k, r);
  return root;
};

console.log(deserialize('2 1'));
console.log(serialize(deserialize('2 1')));
