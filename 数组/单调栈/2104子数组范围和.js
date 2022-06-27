var subArrayRanges = function (nums) {
  let min = getCount(nums, true);
  let max = getCount(nums, false);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += (max[i] - min[i]) * nums[i];
  }
  return res;
};

function getCount(nums, isMin) {
  const res = [], stack = [];
  for (let i = -1; i <= nums.length; i++) {
    if(isMin) {
      while (stack.length && getElement(nums, stack[stack.length - 1], isMin) > getElement(nums, i, isMin)) {
        let peek = stack.pop();
        res[peek] = (peek - stack[stack.length - 1]) * (i - peek);
      }
    } else {
      while (stack.length && getElement(nums, stack[stack.length - 1], isMin) < getElement(nums, i, isMin)) {
        let peek = stack.pop();
        res[peek] = (peek - stack[stack.length - 1]) * (i - peek);
      }
    }
    stack.push(i);
  }
  return res;
}

function getElement(nums, index, isMin) {
  if(index === -1 || index === nums.length) {
    return isMin ? -Infinity : Infinity;
  }
  return nums[index];
}

console.log(subArrayRanges([1, 2, 3]));
