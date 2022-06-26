var maxAlternatingSum = function (nums) {
  let dp = new Array(nums.length).fill(0).map(() => new Array(2).fill(0));
  // dp[i][0] 表示0~i长度为偶数的子序列的最大交替和
  // dp[i][1] 表示0~i长度为奇数的子序列的最大交替和
  // 初始化：dp[0][0]长度为1，不能为偶数，所以赋值最小值
  dp[0][0] = -Number.MAX_VALUE;
  dp[0][1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    /**
     * 以 i 处结尾时长度为偶数的最大交替和dp[i][0]：
     *
     * 不用当前元素，为 dp[i - 1][1]
     * 可以接在上一个奇数序列后，减去当前元素 dp[i - 1][0] - nums[i])
     */
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - nums[i]);
    /**
     * 以 i 处结尾时长度为奇数的最大交替和dp[i][0]：
     *
     * 不用当前元素，为 dp[i - 1][0]
     * 可用当前元素直接作为新的子序列 nums[i]
     * 可以接在上一个偶数序列后，追加当前元素 dp[i - 1][1] + nums[i])
     */
    dp[i][1] = Math.max(dp[i - 1][1], Math.max(dp[i - 1][0] + nums[i], nums[i]));
  }
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
};
