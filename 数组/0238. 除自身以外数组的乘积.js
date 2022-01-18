function productExceptSelf(nums) {
  // 先从左往右遍历，ans[i]表示nums[i]左边的乘积
  // 初始ans[0]为1，表示第一个数的左边的乘积为1
  let ans = [1];
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1];
  }
  // 然后从右往左遍历
  // 初始r=1表示最后一个数的右边乘积是1
  let r = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    // 因为ans[i]表示nums[i]左边的乘积,r表示右边的乘积，相乘的结果就是答案
    ans[i] *= r;
    // 当前nums[i]遍历完后，要把当前nums[i]乘给r，给下一个数使用
    r *= nums[i];
  }
  return ans;
}
