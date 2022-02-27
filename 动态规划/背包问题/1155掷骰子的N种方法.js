// 01背包问题
// n是物品数，k是物品价值，target是背包容量
// dp[i][j]表示前i个骰子凑成和为j的组合数
// 每个骰子可以取1~k的值，转移成前i-1个骰子凑成j-k的组合数的总和
// dp[i][j]=dp[i-1][j-1]+dp[i-1][j-2]+...+dp[i-1][j-k]
var numRollsToTarget = function (n, k, target) {
  let dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  // 枚举物品组（每个骰子）
  for (let i = 1; i <= n; i++) {
    // 枚举背包容量（所掷得的总点数）
    for (let j = 0; j <= target; j++) {
      // 枚举决策（当前骰子所掷得的点数）
      for (let m = 1; m <= k; m++) {
        if(j >= m) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - m]) % (1e9 + 7);
        }
      }
    }
  }
  return dp[n][target];
};

// 优化成一维
var numRollsToTarget = function (n, k, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = target; j >= 0; j--) {
      // 核心：每次遍历j都要重置为0
      dp[j] = 0;
      for (let m = 1; m <= k; m++) {
        if(j >= m) {
          dp[j] = (dp[j] + dp[j - m]) % (1e9 + 7);
        }
      }
    }
  }
  console.log(dp);
  return dp[target];
};
numRollsToTarget(30,30,500)
