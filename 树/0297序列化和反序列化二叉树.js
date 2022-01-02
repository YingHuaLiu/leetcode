const { TreeNode } = require('./Tools');

// 1. 层序序列化
const serialize1 = root => {
  if(!root) {
    return '#';
  }
  let queue = [root], res = [];
  while (queue.length) {
    let temp = queue.shift();
    if(temp) {
      res.push(temp.val);
      queue.push(temp.left);
      queue.push(temp.right);
    } else {
      res.push('#');
    }
  }
  // 把末尾的#删掉
  // while (res[res.length - 1] === '#') {
  //     res.pop();
  // }
  return res.join(' ');
};
const deserialize1 = (str) => {
  if(!str.length) {
    return null;
  }
  let arr = str.split(' ');
  let root = new TreeNode(arr[0]);
  let queue = [root];
  for (let i = 1; i < arr.length; i++) {
    let temp = queue.shift();
    if(arr[i] !== '#') {
      let left = new TreeNode(arr[i]);
      temp.left = left;
      queue.push(left);
    }
    if(arr[++i] !== '#') {
      let right = new TreeNode(arr[i]);
      temp.right = right;
      queue.push(right);
    }
  }
  return root;
};
// console.log(deserialize1('1 2 3 # # 4 5'));
// console.log(serialize1(deserialize1('1 2 3 # # 4 5')));

// 2. 前序dfs序列化
const serialize2 = root => {
  if(!root) {
    return '#';
  }
  return root.val + ' ' + serialize2(root.left) + ' ' + serialize2(root.right);
};
const deserialize2 = str => {
  return dfs(str.split(' '));
};
const dfs = arr => {
  let val = arr.shift();
  if(val === '#') {
    return null;
  }
  let root = new TreeNode(val);
  root.left = dfs(arr);
  root.right = dfs(arr);
  return root;
};
console.log(serialize2(deserialize2('1 2 # # 3 4 # # 5 # #')));

