function moveZeroes(nums) {
  let left = 0, right = 0;
  while (right < nums.length) {
    // 类似于快排思想，将0作为pivot，把不为0的数放到右边
    if(nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
}
