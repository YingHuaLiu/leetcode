// https://leetcode-cn.com/problems/find-peak-element/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-qva7v/
var findPeakElement = function (nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let m = (l + r) >> 1;
    if(nums[m] > nums[m + 1]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};
