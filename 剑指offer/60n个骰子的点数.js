// 二维dp
function dicesProbability(n) {
  // dp[i][j]表示i枚骰子，点数j可能出现的次数
  let dp = new Array(n + 1).fill(0).map(() => new Array(6 * n + 1).fill(0));
  // 初始化投掷一枚骰子的状态
  for (let i = 1; i <= 6; i++) {
    dp[1][i] = 1;
  }
  // 从投掷两枚骰子开始计算
  for (let i = 2; i <= n; i++) {
    // 点数j最少为骰子的个数，最多是6*骰子的个数
    for (let j = i; j <= 6 * i; j++) {
      // 向上一行转移
      for (let k = 1; k <= 6; k++) {
        // i-1个骰子最少有i-1点数
        if(j - k >= i - 1) {
          dp[i][j] += dp[i - 1][j - k];
        }
      }
    }
  }
  // 所有可能出现的情况种数
  let pow = Math.pow(6, n);
  let res = [];
  for (let i = n; i <= 6 * n; i++) {
    res.push(dp[n][i] / pow);
  }
  return res;
}

// 优化成一维
function dicesProbability(n) {
  // dp[i][j]表示i枚骰子，点数j可能出现的次数
  let dp = new Array(6 * n + 1).fill(0);
  // 初始化投掷一枚骰子的状态
  for (let i = 1; i <= 6; i++) {
    dp[i] = 1;
  }
  // 从投掷两枚骰子开始计算
  for (let i = 2; i <= n; i++) {
    // 核心：倒推
    for (let j = 6 * i; j >= i; j--) {
      // 每次投掷对dp[j]进行更新
      dp[j] = 0;
      for (let k = 1; k <= 6; k++) {
        // i-1个骰子最少有i-1点数
        if(j - k >= i - 1) {
          dp[j] += dp[j - k];
        }
      }
    }
  }
  // 所有可能出现的情况种数
  let pow = Math.pow(6, n);
  let res = [];
  for (let i = n; i <= 6 * n; i++) {
    res.push(dp[i] / pow);
  }
  return res;
}
