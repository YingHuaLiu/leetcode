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

// 2.
