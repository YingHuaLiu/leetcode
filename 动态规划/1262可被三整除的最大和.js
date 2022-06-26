function maxSumDivThree(nums) {
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(3).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -Number.MAX_VALUE;
  dp[0][2] = -Number.MAX_VALUE;
  for (let i = 1; i <= nums.length; i++) {
    let val = nums[i - 1] % 3;
    if(val === 0) {
      dp[i][0] = dp[i - 1][0] + nums[i - 1];
      dp[i][1] = dp[i - 1][1] + nums[i - 1];
      dp[i][2] = dp[i - 1][2] + nums[i - 1];
    } else if(val === 1) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] + nums[i - 1]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + nums[i - 1]);
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + nums[i - 1]);
    } else if(val === 2) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + nums[i - 1]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2] + nums[i - 1]);
      dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][0] + nums[i - 1]);
    }
  }
  return dp[nums.length][0]
}
