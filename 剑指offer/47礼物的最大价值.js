// 用回溯dfs开销会非常大，只能用dp
var maxValue = function (grid) {
  let m = grid.length, n = grid[0].length;
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[m][n]
};

// 优化成一维
var maxValue = function (grid) {
  let m = grid.length, n = grid[0].length;
  let dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[j] = Math.max(dp[j], dp[j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[n]
};
