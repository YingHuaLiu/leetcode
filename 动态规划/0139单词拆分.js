function wordBreak(s, wordDict) {
  // dp[i]表示前i个字符能否拆分成单词
  let dp = new Array(s.length + 1).fill(false);
  // base case: 前0个字符有1种组合，那就是空
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if(dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
