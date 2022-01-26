// dp[i]表示整数i的最大乘积
// 1. dp[i]=j*(i-j) 表示i-j不进行拆分
// 2. dp[i]=j*dp[i-j] 如果对i-j进行拆分
// 取上面两个的最大值
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};

console.log(integerBreak(2));
