var findLengthOfLCIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
    max = Math.max(dp[i], max);
  }
  return max;
};
