// 利用快排的思想,pivot就是1
var sortColors = function (nums) {
  let l = 0, mid = 0, r = nums.length - 1;

  while (mid <= r) {
    if(nums[mid] === 1) {
      mid++;
    } else if(nums[mid] === 0) {
      [nums[l], nums[mid]] = [nums[mid], nums[l]];
      l++;
      mid++;
    } else {
      [nums[r], nums[mid]] = [nums[mid], nums[r]];
      r--;
    }
  }
};
