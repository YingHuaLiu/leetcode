// 预处理
var luckyNumbers = function (matrix) {
  let n = matrix[0].length, m = matrix.length;
  // minRow是每行最小值集合
  // maxCol是每列最大值集合
  let minRow = new Array(m).fill(Number.MAX_VALUE);
  let maxCol = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      minRow[i] = Math.min(minRow[i], matrix[i][j]);
      maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
    }
  }
  let res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(matrix[i][j] === minRow[i] && matrix[i][j] === maxCol[j]) {
        res.push(matrix[i][j]);
      }
    }
  }
  return res;
};
