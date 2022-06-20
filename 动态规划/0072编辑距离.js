function minDistance(word1, word2) {
  let length1 = word1.length, length2 = word2.length;
  // 初始化
  let dp = new Array(length1 + 1).fill(0).map(() => new Array(length2 + 1).fill(Number.MAX_VALUE));
  // dp[i][j]表示word1[i-1]转移到word2[j-1]所需要的最少步数
  dp[0][0] = 0;
  // 当word2为''，word1只要一直删除就行了
  for (let i = 1; i <= length1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  // 当word1为''，word1只要一直添加就行了
  for (let i = 1; i <= length2; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }
  for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
      // 由于遍历到了i和j,说明word1的0~i-1和word2的0~j-1的匹配结果已经生成,
      if(word1[i - 1] === word2[j - 1]) {
        // 由于当前两个字符相同,因此无需做任何操作
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 两个字符不同，那么转换为三种情况
        // dp[i-1][j] 删除 因为i-1和j已经匹配了，那么i就是多余的，可以删掉
        // dp[i][j-1] 新增 因为i和j-1已经匹配了，那么只要再新增一个j就行了
        // dp[i-1][j-1] 替换 因为i-1和j-1已经匹配了，那么只要替换一下i-1成j-1就行了
        // 后面的+1操作就是表示一个删除、新增、替换操作
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[length1][length2];
}
