var find132pattern = function (nums) {
  if(nums.length < 3) {
    return false;
  }
  // 单调栈
  let stack = [], k = -Number.MAX_VALUE;
  // 从右往左遍历
  for (let i = nums.length - 1; i >= 0; i--) {
    // 如果当前值小于k，说明已经找出i和k，并且j是stack中的元素
    if(nums[i] < k) {
      return true;
    }
    // 当前还没有找到i
    // 并且nums[i]大于栈顶元素，无法保持单调递减栈了
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      k = Math.max(k, stack.pop());
    }
    // 在保证栈顶元素比nums[i]大后，推入栈
    stack.push(nums[i])
  }
  return false
};
