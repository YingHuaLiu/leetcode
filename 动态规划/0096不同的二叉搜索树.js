function numTrees(n) {
  // dp[i]表示有i个节点时，有多少种
  // dp[2]=dp[0]*dp[1]+dp[1]*dp[0] 左边0个节点*右边1个节点+左边1个节点*右边0个节点
  // dp[3]=dp[0]*dp[2]+dp[1]*dp[1]+dp[2]*dp[0]
  // dp[4]=dp[0]*dp[3]+dp[1]*dp[2]+dp[2]*dp[1]+dp[3]*dp[0]
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
}

console.log(numTrees(3));
