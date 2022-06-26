var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      let j = nums[i] - 1;
      [nums[j], nums[i]] = [nums[i], nums[j]];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
firstMissingPositive([7, 8, 9, 11, 12]);
