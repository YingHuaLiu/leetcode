// 滑动窗口
function minSubArrayLen(s, nums) {
  if(!nums.length) {
    return 0;
  }
  let l = 0, r = 0, res = Number.MAX_VALUE, sum = 0;
  while (r < nums.length) {
    sum += nums[r];
    while (sum >= s) {
      res = Math.min(res, r - l + 1);
      sum -= nums[l];
      l++;
    }
    r++;
  }
  return res === Number.MAX_VALUE ? 0 : res;
}
