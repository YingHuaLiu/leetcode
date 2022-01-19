// 1.回溯
var findTargetSumWays = function (nums, target) {
  let res = 0;

  function dfs(start, cur) {
    if(cur === target && start === nums.length) {
      res++;
      return;
    }
    if(start === nums.length) {
      return;
    }
    dfs(start + 1, cur + nums[start]);
    dfs(start + 1, cur - nums[start]);
  }

  dfs(0, 0);
  return res;
};

// 2.01背包
// dp[i][j]表示前i个数凑成j-maxSum的方法数
// 核心：j可以为负数
var findTargetSumWays = function (nums, target) {
  // 计算nums加起来的最大值，因为很有可能前面会有连续的减，造成dp第二维是负数
  let maxSum = nums.reduce((a, b) => a + b, 0);
  // 如果target比所有加起来还大，那么肯定凑不到
  if(target > maxSum || target < -maxSum) {
    return 0;
  }
  // 第二维分成了-maxSum~0和0~maxSum
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(2 * maxSum + 1).fill(0));
  // 初始化：前0个数凑成0的方法数为1
  dp[0][maxSum] = 1;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j <= 2 * maxSum; j++) {
      // 注意不能越界
      if(j - nums[i - 1] >= 0) {
        dp[i][j] += dp[i - 1][j - nums[i - 1]];
      }
      if(j + nums[i - 1] <= 2 * maxSum) {
        dp[i][j] += dp[i - 1][j + nums[i - 1]];
      }
    }
  }
  return dp[nums.length][maxSum + target];
};
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));



