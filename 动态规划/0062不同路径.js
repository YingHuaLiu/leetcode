// 因为dp[i][j]只能从上到下或者从左到右
// dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => [1]);
  for (let i = 1; i < n; i++) {
    dp[0][i] = 1;
  }
  // 初始化dp的边界都是1
  // 1 1 1 1 ...
  // 1 0 0 0 ...
  // 1 0 0 0 ...
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
