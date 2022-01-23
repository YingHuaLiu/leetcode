// 1.暴力遍历
var matrixBlockSum = function (mat, k) {
  let m = mat.length, n = mat[0].length;
  let answer = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let r0 = Math.max(0, i - k), r1 = Math.min(m - 1, i + k);
      let c0 = Math.max(0, j - k), c1 = Math.min(n - 1, j + k);
      for (let r = r0; r <= r1; r++) {
        for (let c = c0; c <= c1; c++) {
          answer[i][j] += mat[r][c];
        }
      }
    }
  }
  return answer;
};

// 2.二维前缀和
var matrixBlockSum = function (mat, k) {
  let m = mat.length, n = mat[0].length;
  // pre[i][j]表示以(0,0)为左上角，(i,j)为右下角的矩形的内部和
  let pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // 构造前缀和，以[[1, 2, 3], [4, 5, 6], [7, 8, 9]]为例，构造的pre如下
  // 0 0 0 0
  // 0 1 3 6
  // 0 5 12 21
  // 0 12 27 45
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      pre[i][j] = pre[i - 1][j] + pre[i][j - 1] - pre[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }
  let answer = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let r0 = Math.max(0, i - k), r1 = Math.min(m - 1, i + k);
      let c0 = Math.max(0, j - k), c1 = Math.min(n - 1, j + k);
      answer[i][j] = pre[r1 + 1][c1 + 1] - pre[r0][c1 + 1] - pre[r1 + 1][c0] + pre[r0][c0];
    }
  }
  return answer;
};
console.log(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1));
