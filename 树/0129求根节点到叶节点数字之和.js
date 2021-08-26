const { buildTreeByPreAndIn } = require('./构造二叉树');

function sumNumbers(root) {
  return helper(root, 0);
}

function helper(root, preSum) {
  if(!root) {
    return 0;
  }
  const sum = preSum * 10 + root.val;
  if(!root.left && !root.right) {
    return sum;
  }
  return help(root.left, sum) + help(root.right, sum);
}

const root = buildTreeByPreAndIn([1, 2, 3], [2, 1, 3]);
console.log(sumNumbers(root));
