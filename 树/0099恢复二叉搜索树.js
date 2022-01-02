// 1.递归中序遍历保存nums数组，然后遍历数组找出两个错误节点
const recoverTree = function (root) {
  let nums = [];
  inorder(root, nums);
  swapErrorNode(nums);
};
const inorder = function (root, nums) {
  if(!root) {
    return;
  }
  inorder(root.left, nums);
  nums.push(root);
  inorder(root.right, nums);
};
const swapErrorNode = function (nums) {
  let x, y;
  for (let i = 0; i < nums.length - 1; i++) {
    if(nums[i].val > nums[i + 1].val) {
      // 第一次遇到i节点大于i+1节点，则i节点必是错误节点
      if(!x) {
        x = nums[i];
      }
      // 最后一个错误节点要么紧跟在x后面，要么在后面遇到
      y = nums[i + 1];
    }
  }
  // 交换错误节点的值
  let temp = y.val;
  y.val = x.val;
  x.val = temp;
};

// 2.非递归中序遍历，用pre保存上一个遍历的节点，如果当前节点比pre节点小，则可能是错误节点
const recoverTree = function (root) {
  let stack = [], x, y, pre;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    if(pre && pre.val > node.val) {
      // 第一次遇到pre节点大于当前节点，则pre节点必是错误节点
      if(!x) {
        x = pre;
      }
      y = node;
    }
    pre = node;
    root = node.right;
  }
  // 交换错误节点的值
  let temp = y.val;
  y.val = x.val;
  x.val = temp;
};

// 3.morris中序遍历，太复杂了，有空再看
