var nthUglyNumber = function (n) {
  const dp = new Array(n);
  dp[0] = 1;
  let p_2 = p_3 = p_5 = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(2 * dp[p_2], 3 * dp[p_3], 5 * dp[p_5]);
    if(dp[i] === 2 * dp[p_2]) {
      p_2++;
    }
    if(dp[i] === 3 * dp[p_3]) {
      p_3++;
    }
    if(dp[i] === 5 * dp[p_5]) {
      p_5++;
    }
  }
  return dp[n - 1];
};
