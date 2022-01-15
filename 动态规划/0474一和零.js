// dp[i][j][k]表示前i个子字符串，限制j个0和k个1时的最长子集长度，类似于01背包，不过此题有两个容量j和k
// 两种状态转移方程：
// 1.不选择当前考虑的字符串，至少是这个数值 => dp[i−1][j][k]
// 2.考虑当前字符串,但是j和k要在01数量限制内 => dp[i−1][j−当前字符串使用0的个数][k−当前字符串使用1的个数]+1
// 选取以上两者的最大值
function findMaxForm(strs, m, n) {
  let dp = new Array(strs.length + 1).fill(0).map(
    () => new Array(m + 1).fill(0).map(
      () => new Array(n + 1).fill(0)
    )
  );
  for (let i = 1; i <= strs.length; i++) {
    // 获取当前字符串的0 1数量
    let [zero, one] = getZeroAndOne(strs[i - 1]);
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        // 默认不选取当前字符串，先把上一行的值抄下来
        dp[i][j][k] = dp[i - 1][j][k];
        // 如果想选取当前字符串，并且当前字符串的0 1数量小于等于限定值
        // 那么将不选取的情况与dp[i - 1][j - zero][k - one]+1比较选取最大值
        if(zero <= j || one <= k) {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zero][k - one] + 1);
        }
      }
    }
  }
  return dp[strs.length][m][n];
}

function getZeroAndOne(str) {
  let zero = 0, one = 0;
  for (let s of str) {
    if(s === '0') {
      zero++;
    } else {
      one++;
    }
  }
  return [zero, one];
}

// 优化成二维
function findMaxForm(strs, m, n) {
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= strs.length; i++) {
    let [zero, one] = getZeroAndOne(strs[i - 1]);
    // 核心：逆序
    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zero][k - one] + 1);
      }
    }
  }
  return dp[m][n];
}
