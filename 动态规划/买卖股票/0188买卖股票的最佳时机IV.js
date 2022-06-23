// 最多买卖k次
// 从0123抽象出模版
var maxProfit = function (k, prices) {
  if(prices.length <= 1) {
    return 0;
  }
  let length = prices.length;
  // 一天一共就2*k+1个状态，
  // 0. 没有操作
  // 1. 第一次买入：可能是当天买入，也可能之前买入
  // 2. 第一次卖出：可能是当天卖出，也可能之前卖出
  // 3. 第二次买入：可能当天买入，也可能之前买入
  // 4. 第二次卖出：可能当天卖出，也可能之前卖出
  // ....
  const dp = new Array(2 * k + 1).fill(-Infinity);
  dp[0] = 0;
  dp[1] = -prices[0];
  for (let i = 1; i < length; i++) {
    for (let j = k; j >= 1; j--) {
      dp[j * 2] = Math.max(dp[2 * j - 1] + prices[i], dp[j * 2]);
      dp[j * 2 - 1] = Math.max(dp[2 * j - 2] - prices[i], dp[2 * j - 1]);
    }
  }
  let max = 0;
  for (let i = 1; i <= k; i++) {
    max = Math.max(max, dp[i * 2]);
  }
  return max;
};
console.log(maxProfit(2, [2, 4, 1]));
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]));
