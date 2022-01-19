// 1.贪心：只要第二天股价大于第一天，就买入并卖出
function maxProfit(prices) {
  if(prices.length < 2) {
    return 0;
  }
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    let value = prices[i] - prices[i - 1];
    if(value > 0) {
      res += value;
    }
  }
  return res;
}

// 2.dp
// dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润（i 从 0 开始）
// dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润（i 从 0 开始）
function maxProfit(prices) {
  let dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  // 初始化：
  // 第0天结束如果手里没股票，那就是0元
  // 第0天结束如果手里有股票，那就是负债-prices[0]元
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    // 第0天结束如果手里没股票
    // 1.当天没进行任何操作，手里还是昨天的利润
    // 2.当天卖出股票，就是昨天手里的负债加上今天卖出的价格即所获得最大利润（也可能是亏了）
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 第0天结束如果手里有股票
    // 1.当天没进行任何操作，手里还是昨天的股票
    // 2.当天买入股票，就是昨天手里的现金流减去今天买入的价格
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];
}

// 优化一维
function maxProfit(prices) {
  let a = 0, b = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    let temp = a;
    a = Math.max(temp, b + prices[i]);
    b = Math.max(b, temp - prices[i]);
  }
  return a;
}
