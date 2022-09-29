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

// 另一种思路
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length).fill(false);
  // 先判断第一个字符
  dp[0] = wordDict.includes(s[0]);
  for (let i = 1; i < s.length; i++) {
    if(wordDict.includes(s.substring(0, i + 1))) {
      dp[i] = true;
      continue;
    }
    for (let j = 0; j <= i; j++) {
      if(dp[j] && wordDict.includes(s.substring(j + 1, i + 1))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length - 1];
};
