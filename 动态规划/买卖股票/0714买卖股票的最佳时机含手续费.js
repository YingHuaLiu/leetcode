// 0123变种题，只需要加一个fee就可以了
var maxProfit = function (prices, fee) {
  const length = prices.length;
  // dp[i][0]表示第i天结束手里无股票：可能当天卖出了，也可能当天啥都没干
  // dp[i][1]表示第i天结束手里有股票：可能当天买了，也可能当天啥都没干
  let dp = new Array(length).fill(0).map(() => new Array(2).fill(0));
  dp[0][1] = -prices[0];
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][1] + prices[i] - fee, dp[i - 1][0]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }
  return dp[length - 1][0];
};

// 改成一维
var maxProfit = function (prices, fee) {
  const length = prices.length;
  let dp = new Array(2).fill(0);
  dp[1] = -prices[0];
  for (let i = 1; i < length; i++) {
    let temp = dp[0];
    dp[0] = Math.max(dp[1] + prices[i] - fee, dp[0]);
    dp[1] = Math.max(temp - prices[i], dp[1]);
  }
  return dp[0];
};
