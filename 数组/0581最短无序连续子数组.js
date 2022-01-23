var findUnsortedSubarray = function (nums) {
  let length = nums.length;
  let left, right = -1;
  let min = Number.MAX_VALUE, max = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    if(max <= nums[i]) {
      max = nums[i];
    } else {
      right = i;
    }

    if(min >= nums[length - i - 1]) {
      min = nums[length - i - 1];
    } else {
      left = length - i - 1;
    }
  }
  return right === -1 ? 0 : right - left + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
