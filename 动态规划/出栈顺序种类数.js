//用二维数组表示一个数对对应情况的序列种类数
function fn(n) {
  let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // dp[i][j]表示入栈i次和出栈j次的种类数
  //初始化dp数组
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }
  dp[1][1] = 1;
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[n][n];
}

console.log(fn(3));
