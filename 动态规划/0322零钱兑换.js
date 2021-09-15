var coinChange = function (coins, amount) {
  // [amount+1,amount+1,amount+1,...]
  let dp = new Array(amount + 1).fill(amount + 1);
  // [0,amount+1,amount+1,...] 初始条件
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    // dp[i]=Math.min(dp[i-coins[0]],dp[i-coins[1]],dp[i-coins[2]],...)+1
    for (let j = 0; j < coins.length; j++) {
      if(coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
