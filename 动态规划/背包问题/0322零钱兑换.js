/**
 * 二维dp
 * dp[i][j]表示前i种硬币凑成j元最少需要多少硬币
 * 两种策略：
 * 1.不取第i种硬币，则转移成dp[i-1][j]（其实就是下面的k=0时）
 * 2.取第i种硬币，则转移成dp[i-1][j-k*coins[i]]+k,因为一种硬币可以取多次，将它转移成了恰好取K次
 */
var coinChange = function (coins, amount) {
  let dp = new Array(coins.length + 1).fill(0).map(() => new Array(amount + 1).fill(Infinity));
  // 前i种硬币凑0元，最少只需0个硬币
  for (let i = 0; i <= coins.length; i++) {
    dp[i][0] = 0;
  }
  for (let i = 1; i <= coins.length; i++) {
    let val = coins[i - 1];
    for (let j = 1; j <= amount; j++) {
      if(j >= coins[i - 1]) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - val] + 1);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[coins.length][amount] === Infinity ? -1 : dp[coins.length][amount];
};
// 优化一维
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  // [0,Infinity,Infinity,...] 初始条件
  dp[0] = 0;
  for (let i = 1; i <= coins.length; i++) {
    let val = coins[i - 1];
    for (let j = 0; j <= amount; j++) {
      if(j - val >= 0) {
        dp[j] = Math.min(dp[j], dp[j - val] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
