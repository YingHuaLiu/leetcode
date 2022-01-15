// https://leetcode-cn.com/problems/maximum-product-subarray/solution/hua-jie-suan-fa-152-cheng-ji-zui-da-zi-xu-lie-by-g/
var maxProduct = function (nums) {
  if(!nums.length || nums.length === 1) {
    return nums;
  }
  // imax表示以当前节点为终结节点的最大连续子序列乘积
  // imin表示以当前节点为终结节点的最小连续子序列乘积
  // 由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin
  let max = nums[0], imax = nums[0], imin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 当负数出现时则imax与imin进行交换再进行下一步计算
    if(nums[i] < 0) {
      [imax, imin] = [imin, imax];
    }
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);
    max = Math.max(imax, max);
  }
  return max;
};
