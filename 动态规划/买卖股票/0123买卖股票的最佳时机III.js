// 二维解法
function maxProfit(prices) {
  if(prices.length <= 1) {
    return 0;
  }
  let length = prices.length;
  // 一天一共就有五个状态，
  // 0. 没有操作
  // 1. 第一次买入：可能是当天买入，也可能之前买入
  // 2. 第一次卖出：可能是当天卖出，也可能之前卖出
  // 3. 第二次买入：可能当天买入，也可能之前买入
  // 4. 第二次卖出：可能当天卖出，也可能之前卖出
  const dp = new Array(length).fill(0).map(() => new Array(5).fill(0));
  dp[0][1] = -prices[0];
  // 第一天不能做其他操作
  dp[0][2] = -Infinity;
  dp[0][3] = -Infinity;
  dp[0][4] = -Infinity;
  for (let i = 1; i < length; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);
    dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3]);
    dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4]);
  }
  return Math.max(dp[length - 1][2], dp[length - 1][4], 0);
}

// 优化成一维
function maxProfit(prices) {
  if(prices.length <= 1) {
    return 0;
  }
  let length = prices.length;
  // 一天一共就有五个状态，
  // 0. 没有操作
  // 1. 第一次买入：可能是当天买入，也可能之前买入
  // 2. 第一次卖出：可能是当天卖出，也可能之前卖出
  // 3. 第二次买入：可能当天买入，也可能之前买入
  // 4. 第二次卖出：可能当天卖出，也可能之前卖出
  const dp = new Array(5).fill(0);
  dp[1] = -prices[0];
  // 第一天不能做其他操作
  dp[2] = -Infinity;
  dp[3] = -Infinity;
  dp[4] = -Infinity;
  for (let i = 1; i < length; i++) {
    dp[4] = Math.max(dp[3] + prices[i], dp[4]);
    dp[3] = Math.max(dp[2] - prices[i], dp[3]);
    dp[2] = Math.max(dp[1] + prices[i], dp[2]);
    dp[1] = Math.max(dp[0] - prices[i], dp[1]);
  }
  return Math.max(dp[2], dp[4], 0);
}

console.log(maxProfit([1, 2, 3]));
