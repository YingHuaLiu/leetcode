function maximalSquare(matrix) {
  let max = 0;
  let m = matrix.length, n = matrix[0].length;
  // dp[i][j]表示以(i,j)为正方形右下角时的最大边长
  // ps：dp[i][j]也可以表示以(i,j)为正方形右下角的正方形个数
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      // 只有当前是1的时候才能形成
      if(matrix[r][c] === '1') {
        // 边界上的1只能是1
        if(r === 0 || c === 0) {
          dp[r][c] = 1;
        } else {
          // 核心：取左边、左上、上的最小值然后加1
          dp[r][c] = Math.min(dp[r - 1][c - 1], dp[r - 1][c], dp[r][c - 1]) + 1;
        }
        max = Math.max(max, dp[r][c]);
      }
    }
  }
  return max * max;
}
