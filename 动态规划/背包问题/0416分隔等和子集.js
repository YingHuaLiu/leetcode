var canPartition = function (nums) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  // 如果和是奇数肯定不行
  if(sum % 2 !== 0) {
    return false;
  }
  sum /= 2;
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(sum + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      // 背包容量不足，不能装入第 i 个物品
      if(j < nums[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        // 背包容量足，可以选择装入或不装入背包
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[nums.length][sum];
};

// 优化成一维
var canPartition = function (nums) {
  let sum = nums.reduce((pre, cur) => pre + cur, 0);
  // 如果和是奇数肯定不行
  if(sum % 2 !== 0) {
    return false;
  }
  sum /= 2;
  let dp = new Array(sum + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = sum; j >= nums[i - 1]; j--) {
      dp[j] = dp[j] || dp[j - nums[i - 1]];
    }
  }
  return dp[sum];
};
console.log(canPartition([1, 2, 5]));
