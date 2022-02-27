/**
 * dp[i][j] 为考虑区间 [i,j]，在双方都做最好选择的情况下，从当前区间开始先手，最后与后手的最大得分差值为多少。
 * 最后返回dp[0][length-1]，表示如果从[0,length-1]区间开始先手，大于0就是先手胜，小于0就是先手输
 * base case:dp对角线的值就是ps的值，dp[i][i]含义是只有一个石子堆的话，先手比后手多dp[i][i]个石子
 * 状态转移：
 * 对任意区间[i,j]，当前先手只能从左边或者右边取
 * 当前区间取完后，那么现在的后手就成了剩下区间的先手，所以dp只表示当前区间先手的话最后会差多少分，不和任何人绑定
 * 如果从左边取，那么剩下[i+1,j]区间，可以用左边取的值ps[i]减去剩下区间的先手得分（dp[i+1][j]）,方程：dp[i][j]=ps[i]-dp[i+1][j]
 * 如果从右边取，那么剩下[i,j-1]区间，可以用右边取的值ps[j]减去剩下区间的先手得分（dp[i][j-1]）,方程：dp[i][j]=ps[j]-dp[i][j-1]
 */
function stoneGame(ps) {
  // dp用上三角（包括对角线）
  let dp = new Array(ps.length).fill(0).map(() => new Array(ps.length).fill(0));
  // base case: dp[i][i]=ps[i]
  for (let i = 0; i < ps.length; i++) {
    dp[i][i] = ps[i];
  }
  // 因为对角线已经取过值,i不需要取最后一行了
  // dp[i][j]与下方和左方的值有关，所以从下往上，从左到右遍历
  for (let i = ps.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < ps.length; j++) {
      dp[i][j] = Math.max(ps[i] - dp[i + 1][j], ps[j] - dp[i][j - 1]);
    }
  }
  return dp[0][ps.length - 1];
}
