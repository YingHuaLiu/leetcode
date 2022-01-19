// 1.二维dp
var numSquares = function (n) {
  let length = Math.floor(Math.sqrt(n));
  // dp[i][j]表示前i个数凑出j所需完全平方数的最小个数
  // 因为要求个数的最小值，所以默认每个格子都是最大值，这样方便使用Math.min
  let dp = new Array(length + 1).fill(0).map(() => new Array(n + 1).fill(Infinity));
  // 初始化：前i个数凑出0的所需个数为0
  for (let i = 0; i <= length; i++) {
    dp[i][0] = 0;
  }
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果不选第i个数
      dp[i][j] = dp[i - 1][j];
      // 如果选第i个数，因为每个平方数可以选多次，所以k*i*i必须小于等于j才有效
      for (let k = 1; k * i * i <= j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - i * i * k] + k);
      }
    }
  }
  return dp[length][n];
};

// 优化一维
var numSquares = function (n) {
  // dp[j]表示凑出j所需完全平方数的最小个数
  // 因为要求个数的最小值，所以默认每个格子都是最大值，这样方便使用Math.min
  let dp = new Array(n + 1).fill(Infinity);
  // 初始化：凑出0的所需平方数个数为0
  dp[0] = 0;
  // i代表平方数，j代表凑出的数
  for (let i = 1; i * i <= n; i++) {
    for (let j = i * i; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
    }
  }
  return dp[n];
};

// 另一种一维
var numSquares = function (n) {
  // dp[j]表示凑出j所需完全平方数的最小个数
  // 因为要求个数的最小值，所以默认每个格子都是最大值，这样方便使用Math.min
  let dp = new Array(n + 1).fill(Infinity);
  // 初始化：凑出0的所需平方数个数为0
  dp[0] = 0;
  // i代表凑出的数，j代表平方数
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
console.log(numSquares(12));
