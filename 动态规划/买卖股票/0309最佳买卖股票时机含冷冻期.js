// 类似于122题,用012表示当天买卖股票的状态
function maxProfit(prices) {
  let dp = new Array(prices.length).fill(0).map(() => new Array(3).fill(0));
  // 0表示当天结束手里无股票，且当天没有卖出股票（第二天不在冷静期）
  // 1表示当天结束手里无股票，且当天卖出股票（第二天在冷静期）
  // 2表示当天结束手里有股票
  dp[0][0] = 0;
  dp[0][1] = 0;
  dp[0][2] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][2] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][0] - prices[i]);
  }
  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][1]);
}

// 优化一维
function maxProfit(prices) {
  let a = 0, b = 0, c = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    let tempA = a;
    a = Math.max(tempA, b);
    b = c + prices[i];
    c = Math.max(c, tempA - prices[i]);
  }
  return Math.max(a, b);
}

console.log(maxProfit([1, 2, 3, 0, 2]));
