var increasingTriplet = function (nums) {
  let arr1 = [], arr2 = [];
  arr1[0] = nums[0];
  // 记录每个元素左边的最小值
  for (let i = 1; i < nums.length; i++) {
    arr1[i] = Math.min(arr1[i - 1], nums[i]);
  }
  // 记录每个元素右边的最小值
  arr2[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    arr2[i] = Math.max(arr2[i + 1], nums[i]);
  }

  for (let i = 1; i < nums.length - 1; i++) {
    if(nums[i] > arr1[i] && nums[i] < arr2[i]) {
      return true;
    }
  }
  return false;
};
