/**
 * 完全背包问题
 * dp[i][j]表示前i种硬币凑成j元的种类
 * 初始条件dp[0][0]=1表示0种硬币凑成0元正好有一种
 * 状态转移方程：
 * 1.不取第i种硬币，那么转移到dp[i-1][j]（其实就是下面的k=0时）
 * 2.取第i种硬币，那么转移到dp[i-1][j-coins[i]*k] k>=0,因为一种硬币可以取多次，将它转移成了恰好取K次
 */
var change = function (amount, coins) {
  let dp = new Array(coins.length + 1).fill(0).map(() => new Array(amount + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= coins.length; i++) {
    let val = coins[i - 1];
    for (let j = 0; j <= amount; j++) {
      if(j >= val) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - val];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[coins.length][amount];
};
/**
 * 优化成一维
 * 由dp[i][j] += dp[i - 1][j - k * val]画图可知，每次dp[i][j]都是从上方和左上方的节点相加得来
 *  所以j从左到右，
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= coins.length; i++) {
    let val = coins[i - 1];
    for (let j = val; j <= amount; j++) {
      dp[j] += dp[j - val];
    }
  }
  return dp[amount];
};
